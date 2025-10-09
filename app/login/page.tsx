"use client"
 import {useState} from 'react';
 import Link from 'next/link'
 import Image from 'next/image';

 export default function Login(){
    const[formData,setFormData]=useState({
        email:'',
        password:''
    })
    const[message,setMessage]=useState('');

    const handleChange=(e:any)=>{
        setFormData({...formData,[e.target.name]:e.target.value,})
    }

    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setMessage('');
        try{
            const res=await fetch("/api/login",{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    email:formData.email,
                    password:formData.password,
                })
            })
            const data=await res.json();
            if(!res.ok){
                setMessage(data.message ||'Something went wrong');
            }
            else{
                setMessage('Login successful');
                setFormData({email:'',password:''})
            }
        }catch(error){
            console.error('Login error:',error)
        setMessage('An error occurred please try again')
    
    } 
}

    return(
         <div className="min-h-screen bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] relative overflow-hidden">
              <div className="max-w-md mx-auto px-4 py-8 relative z-10">
                <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
                  {/* Top Image Section with Wavy Bottom */}
                  <div className="relative">
                    {/* Wrapper for image and wave clip */}
                    <div className="relative" style={{ clipPath: 'url(#wave-clip)' }}>
                      {/* Background Image */}
                      <div className="h-[200px] relative">
                        <Image 
                          src="/landingimage.jpeg"
                          alt="DermaShield Landing"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
        
                    {/* SVG for wave clip path and decorative line */}
                    <svg 
                      className="absolute bottom-0 left-0 w-full"
                      viewBox="0 0 500 50" 
                      preserveAspectRatio="none"
                      style={{ transform: 'translateY(49%)' }}
                    >
                      <defs>
                        <clipPath id="wave-clip">
                          <path 
                            d="M0,0 
                              L500,0 
                              L500,180
                              C400,200 300,160 200,190
                              C100,220 50,180 0,210
                              L0,0 Z" 
                          />
                        </clipPath>
                      </defs>
                      {/* Decorative wave line */}
                      <path 
                        d="M0,0
                          C100,30 200,-10 300,20
                          C400,50 450,10 500,30" 
                        fill="white"
                        stroke="white"
                        strokeWidth="2"
                        className="opacity-50"
                      />
                    </svg>
                    {/* Fill gap with white background */}
                    <div className="absolute bottom-0 left-0 w-full h-8 bg-white transform translate-y-1/2"></div>
                  </div>
        
                  {/* Form Section */}
                  <div className="p-6 pt-4 bg-white">
                    <form onSubmit={handleSubmit} className="space-y-4 bg-white">
                     
        
                      <div>
                        <label className="block text-[#15803d] font-medium mb-1 text-sm">Email</label>
                        <input
                          type="email"
                          className="w-full px-3 py-1.5 rounded-lg border border-[#86efac] focus:outline-none focus:ring-2 focus:ring-[#4ade80] bg-white/50 text-sm text-black"
                          required
                          onChange={handleChange}
                          value={formData.email}
                          name="email"
                        />
                      </div>
        
                      <div>
                        <label className="block text-[#15803d] font-medium mb-1 text-sm">Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-1.5 rounded-lg border border-[#86efac] focus:outline-none focus:ring-2 focus:ring-[#4ade80] bg-white/50 text-sm text-black"
                          required
                          onChange={handleChange}
                          value={formData.password}
                          name="password"
                        />
                      </div>
        
                     
                      <button
                        type="submit"
                        className="w-full bg-[#15803d] text-white py-2 rounded-lg font-medium hover:bg-[#2d5c27] transition-colors duration-300 text-sm mt-2"
                      >
                        Login
                      </button>
                      
                     
                    </form>
        
                    <p className="text-center mt-4 text-[#2d5c27] text-sm">
                      Don&apos;t  have an account?{' '}
                      <Link href="/signup" className="text-[#15803d] hover:text-[#2d5c27] font-medium">
                        Sign up
                      </Link>
                    </p>
                    <p className='text-red-500 font-bold text-center'>{message}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }

    


