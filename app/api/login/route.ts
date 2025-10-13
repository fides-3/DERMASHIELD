import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/user';
import bcrypt from 'bcryptjs';

// --- 1. Define a TypeScript Interface for the user object ---
// This tells TypeScript what properties to expect when using .lean()
interface UserDoc {
    _id: string;
    email: string;
    password: string; // Must be included because we select it explicitly
    fullname: string; // Must be included because we select it explicitly
}
// -----------------------------------------------------------

export async function POST(req: Request) {
    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json({ message: 'Email and Password are required' }, { status: 400 });
    }
    
    await connectDB();
    
    try {
        // Use findOne() and cast the result to the defined interface
        const user = await User.findOne({ email })
                               // Select '+password' and 'fullname' to ensure they are fetched
                               .select('+password fullname') 
                               .lean<UserDoc>(); 

        // 1. Check if user exists (user will be null if not found)
        if (!user) {
            return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 })
        }
        
        // 2. Compare the password hash
        // The error TS2339 on 'user.password' is fixed because 'user' is now typed as UserDoc
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 })
        }
        
        // 3. Construct the response payload
        return NextResponse.json({
            message: 'Login successful',
            user: {
                // All errors for _id, email, fullname are fixed here
                id: user._id.toString(), 
                email: user.email,
                fullname: user.fullname,
            }
        }, { status: 200 })

    } catch (error) {
        console.error('login error:', error)
        return NextResponse.json({ message: 'An error occurred, please try again' }, { status: 500 })
    }
}