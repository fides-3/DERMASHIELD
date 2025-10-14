"use client"
import{useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {Lock} from 'lucide-react';


export default function ResetPassword() {
    const searchParams=useSearchParams()
    
    const [message,setMessage]=useState('')
  const[password,setPassword]=useState('')
    const token=searchParams.get("token")
   

    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setMessage('')
        try{
            const res=await fetch("/api/auth/resetPassword",{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({password,token})
            })
            const data=await res.json()
            if(res.ok){
                setMessage('Password reset has been successful. You can now log in with your new password.')
                
            }
            else{
                setMessage(data.message ||'Failed to update password.Please try again')
            }


        }catch(error){
            console.error('Error setting password:',error)
            setMessage('An error occurred. Please try again.')
        }


    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] p-4 sm:p-6">
    <div className="max-w-md mx-auto w-full">
        {/* Card Container */}
        <div className="bg-white/95 rounded-3xl backdrop-blur-sm overflow-hidden shadow-2xl shadow-[#15803d]/20 p-8 sm:p-10 transition-all duration-300 transform hover:shadow-3xl">
            
            {/* Header with improved spacing */}
            <div className="mb-8">
                <h2 className="font-extrabold text-3xl text-[#15803d] tracking-tight">
                    Reset Password
                </h2>
                <p className="text-sm text-[#2d5c27] mt-1">
                    Enter your new password below.

                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Input with Label and Icon */}
                  <div className="relative">
                            <Lock size={18} className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-[#15803d]/80`} />
                            <input
                                type="password"
                                className={`w-full pl-10 pr-3 py-2.5 rounded-lg border border-[#86efac] focus:outline-none focus:ring-2 focus:ring-[#4ade80] bg-white text-sm text-[#2d5c27] transition-all duration-200 placeholder-[#2d5c27]/60`}
                                required
                                onChange={(e)=>setPassword(e.target.value)}
                                value={password}
                                name="password"
                                placeholder="Password"
                                title="Password"
                            />
                        </div>
                
                {/* Submit Button */}
                <div>
                    <button 
                        type="submit"
                        className="w-full bg-[#15803d] hover:bg-[#15803d]/90 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#4aed80]/50 active:scale-[0.99]"
                    >
                        Set New Password
                    </button>
                    <div className="mt-6 text-center">
                <a href="/login" className="text-sm text-[#15803d] hover:text-[#2d5c27] font-medium transition-colors duration-200">
                    &larr; Back to Sign In
                </a>
            </div>
            {message&&<p className='text-red-500 mt-2 text-center'>{message}</p>}

                </div>
            </form>

            {/* Back to Login Link */}
            

        </div>
    </div>
    </div>

    )
}