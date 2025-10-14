"use client"
import{useState} from 'react'


export default function ForgotPassword() {
    const [message,setMessage]=useState('')
    const[formData,setFormData]=useState({
        email:''
    })
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value,})
    }

    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setMessage('')
        try{
            const res=await fetch("/api/auth/forgotpassword",{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    email:formData.email
                })
            })
            const data=await res.json()
            if(res.ok){
                setMessage('A password reset link has been sent to your email address')
            }
            else{
                setMessage(data.message ||'Failed to send reset link.Please try again')
            }


        }catch(error){
            console.error('Error sending reset link:',error)
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
                    Forgot Password
                </h2>
                <p className="text-sm text-[#2d5c27] mt-1">
                    Enter your email to receive a password reset link.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Input with Label and Icon */}
                <div className="relative">
                    <label htmlFor="email-input" className="sr-only">Email Address</label>
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#86efac]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>

                    <input 
                        id="email-input"
                        type="email" 
                        name="email" 
                        placeholder="you@example.com"
                        value={formData.email}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#86efac] focus:outline-none focus:ring-4 focus:ring-[#4aed80]/50 bg-white text-base text-[#2d5c27] transition-all duration-300 placeholder-[#2d5c27]/70 font-medium"
                        onChange={handleChange}
                        required
                    />
                </div>
                
                {/* Submit Button */}
                <div>
                    <button 
                        type="submit"
                        className="w-full bg-[#15803d] hover:bg-[#15803d]/90 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#4aed80]/50 active:scale-[0.99]"
                    >
                        Send Reset Link
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