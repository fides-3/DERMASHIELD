import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; // ⬅️ 1. Import JWT

// --- 1. Define a TypeScript Interface for the user object ---
interface UserDoc {
    _id: string;
    email: string;
    // We explicitly select 'password' and 'fullname' in the query
    password: string; 
    fullname: string; 
}

// 🌟 JWT Utility Function 🌟
// In a real app, this would be in a separate lib/auth.ts file.
const createToken = (userId: string) => {
    // Ensure you have JWT_SECRET in your .env file
    return jwt.sign({ userId }, process.env.JWT_SECRET || 'a_strong_fallback_secret', {
        expiresIn: '7d', // Token expires in 7 days
    });
};

export async function POST(req: Request) {
    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json({ message: 'Email and Password are required' }, { status: 400 });
    }
    
    await connectDB();
    
    try {
        // 2. Query the user and explicitly select necessary fields
        const user = await User.findOne({ email: email.toLowerCase() }) // Case-insensitive lookup best practice
                               .select('+password fullname') 
                               .lean<UserDoc>(); 

        // 3. Invalid Credential Check (Combined Security)
        // If user is null OR password doesn't match
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return NextResponse.json(
                { message: 'Invalid email or password' }, 
                { status: 401 } // ⬅️ Use 401 Unauthorized
            );
        }
        
        // 4. Successful Authentication: Create and return JWT
        const token = createToken(user._id.toString());
        
        return NextResponse.json({
            message: 'Login successful',
            token: token, // ⬅️ Essential for client to prove identity
            user: {
                id: user._id.toString(), 
                email: user.email,
                fullname: user.fullname,
            }
        }, { status: 200 })

    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json(
            { message: 'An internal server error occurred, please try again' }, 
            { status: 500 }
        )
    }
}