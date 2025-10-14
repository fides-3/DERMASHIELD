
import{NextResponse} from 'next/server';
import User from '@/models/user';
import {connectDB} from '@/lib/mongodb'

export async function POST(req:Request){
    const {password,token}=await req.json();
    if(!token ||!password){
        return NextResponse.json({message:'Password is required'},{status:400})
    }
    try{
        await connectDB();
        const user=await User.findOne({
            resetPasswordToken:token,
            resetPasswordExpires:{$gt:new Date()}
        })
        if(!user){
            return NextResponse.json({message:'Invalid ore expired token'},{status:400})
        }
        user.password=password;
        user.resetPasswordToken=null;
        user.resetPasswordExpires=null;
        await user.save();
        return NextResponse.json({message:'Password has been reset successfully'},{status:200})
    }catch(error){
        console.error('Error in reset password:',error);
        return NextResponse.json({message:'Internal Server Error'},{status:500})
    }

}