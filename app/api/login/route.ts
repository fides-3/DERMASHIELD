import {NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/user';
import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken'
export async function POST(req:Request){
    const{email,password}=await req.json();

    if(!email ||!password){
        return NextResponse.json({message:'Email and Password are required'},{status:400});
    }
    await connectDB(); 
    try{
        const user=await User.find({email}).lean()
        if(!user){
            return NextResponse.json({message:'Invalid email or password'},{status:400})
        }
        const isMatch=await bcrypt.compare(password,user[0].password);
        if(!isMatch){
            return NextResponse.json({message:'Invalid email or password'},{status:400})
        }

        // const token=jwt.sign(
        //     {id:user[0]._id,
        //         email:user[0].email,
        //     },
        //     process.env.JWT_SECRET||'secret',
        //     {expiresIn:'1d'
        //     }
        // )
        return NextResponse.json({message:'Login successful',user:{id:user[0],email:user[0].email}},{status:200})

    } catch(error){
        console.error('login error:',error)
        return NextResponse.json({message:'An error occurred, please try again'},{status:500})
    }   
          
}    