import {NextResponse} from 'next/server';
import {connectDB} from '@/lib/mongodb';
import User from '@/models/user';
import crypto from 'crypto';
import nodemailer from 'nodemailer';



export async function POST(req:Request){
    const {email}=await req.json();
    if(!email){
        return NextResponse.json({message:'Email is required'},{status:400})
    }
    try{
        await connectDB();
        const user=await User.findOne({
            email:email.toLowerCase()
        })
        if(!user){
            return NextResponse.json({message:'User not found'},{status:404})
        }
        const token=crypto.randomBytes(20).toString('hex');
        const expiry=new Date(Date.now()+3600000);
        user.resetPasswordToken=token;
        user.resetPasswordExpires=expiry;
        await user.save();
        const transporter=nodemailer.createTransport({
            service:'Gmail',
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }           
        });
        const mailOptions={
            to:user.email,
            from:`DERMASHIELD<${process.env.EMAIL_USER}>`,    
            subject:'Password Reset',
            text:`You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
            Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n
            ${process.env.NEXT_PUBLIC_BASE_URL}/resetPassword?token=${token}\n\n
            If you did not request this, please ignore this email and your password will remain unchanged.\n`
        };
        await transporter.sendMail(mailOptions);
        return NextResponse.json({message:'Password reset email sent'},{status:200})
    }catch(error){
        console.error('Error in forgot password:',error);
        return NextResponse.json({message:'Internal Server Error'},{status:500})


    }
}