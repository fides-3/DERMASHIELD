import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/user';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
    try {
        const { fullname, email, password } = await req.json();

        // Input validation
        if (!fullname || !email || !password) {
            return NextResponse.json(
                { message: 'All fields are required' },
                { status: 400 }
            );
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Password validation
        if (password.length < 6) {
            return NextResponse.json(
                { message: 'Password must be at least 6 characters long' },
                { status: 400 }
            );
        }

        // Connect to database
        await connectDB();

        try {
            // Check for existing user with better error handling
            const existingUser = await User.findOne({ email }).lean();
            if (existingUser) {
                return NextResponse.json(
                    { message: 'Email already registered' },
                    { status: 409 } // Using 409 Conflict for duplicate resource
                );
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create new user with error handling for duplicate key
            const newUser = await User.create({
                fullname,
                email: email.toLowerCase(), // Normalize email
                password: hashedPassword,
            });

            // Remove password from response
            const userResponse = {
                id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
            };

            return NextResponse.json(
                { message: 'User created successfully', user: userResponse },
                { status: 201 }
            );

        } catch (error: unknown) {
            // Handle MongoDB duplicate key error
            if (error && typeof error === 'object' && 'code' in error && (error as { code: number }).code === 11000) {
                return NextResponse.json(
                    { message: 'Email already registered' },
                    { status: 409 }
                );
            }
            throw error; // Re-throw other errors to be caught by outer catch
        }

    } catch (error) {
        console.error('Signup error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
