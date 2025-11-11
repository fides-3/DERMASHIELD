"use client"
import { useState } from 'react';
import Link from 'next/link'
import { Mail, Lock } from 'lucide-react'; // Importing necessary icons

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [message, setMessage] = useState('');
    const [loggedInUsername,setLoggedInUsername]=useState(
      typeof window !== 'undefined'?localStorage.getItem('userFullname'):null
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage('');
        try {
            const res = await fetch("/api/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                })
            })
            const data = await res.json();
            if (!res.ok) {
                setMessage(data.message || 'Login failed. Please check your credentials.');
            }
            else {
              const userFullname=data.user?.fullname;
              if(userFullname){
                // save ffullname to local storage
                localStorage.setItem('userFullname',userFullname);
                // update the component state
                setLoggedInUsername(userFullname);
              
                setMessage(`Login successful! Welcome back', ${userFullname.split('')[0]}`);
                // You might want to redirect the user here instead of clearing the form
                // setFormData({ email: '', password: '' }) 
            }else{
              setMessage('Login successful, but no user data returned.');
            }
            }
        } catch (error) {
            console.error('Login error:', error)
            setMessage('An error occurred. Please try again.')

        }
    }

    // // Define the main color variables for consistency
    // const primaryColor = '#15803d'; // Emerald 700
    // const secondaryColor = '#86efac'; // Emerald 300
    // const accentColor = '#4ade80'; // Emerald 400
    // const lightBgFrom = '#f0fdf4'; // Emerald 50
    // const lightBgTo = '#dcfce7'; // Emerald 100
    // const textColor = '#2d5c27'; // Darker text for readability

    return (
        // Main container for full screen background and centering
        <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] p-4`}>

            {/* Form Card (Small, Centered Container) */}
            <div className="max-w-sm w-full mx-auto"> 
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden p-8 md:p-10">

                     <h2 className={`text-3xl font-bold mb-8 text-[#15803d] text-center`}>
                    {/* Display personalized welcome if loggedInUsername is set */}
                    {loggedInUsername ? (
                        // Displaying only the first word of the name for brevity
                        <>Welcome, <span className={`text-[#4ade80']`}>{loggedInUsername.split(' ')[0]}</span>!</>
                    ) : (
                        "Welcome Back"
                    )}
                </h2>

                    <form onSubmit={handleSubmit} className="space-y-5"> 
                        
                        {/* Input: Email */}
                        <div className="relative">
                            <Mail size={18} className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-[#15803d]/80`} />
                            <input
                                type="email"
                                className={`w-full pl-10 pr-3 py-2.5 rounded-lg border border-[#86efac] focus:outline-none focus:ring-2 focus:ring-[#4ade80] bg-white text-sm text-[#2d5c27] transition-all duration-200 placeholder-[#2d5c27]/60`}
                                required
                                onChange={handleChange}
                                value={formData.email}
                                name="email"
                                placeholder="Email Address"
                                title="Email"
                            />
                        </div>

                        {/* Input: Password */}
                        <div className="relative">
                            <Lock size={18} className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-[#15803d]/80`} />
                            <input
                                type="password"
                                className={`w-full pl-10 pr-3 py-2.5 rounded-lg border border-[#86efac] focus:outline-none focus:ring-2 focus:ring-[#4ade80] bg-white text-sm text-[#2d5c27] transition-all duration-200 placeholder-[#2d5c27]/60`}
                                required
                                onChange={handleChange}
                                value={formData.password}
                                name="password"
                                placeholder="Password"
                                title="Password"
                            />
                        </div>
                        <div className="flex justify-end text-sm">
                            <Link href="/forgot-password"
                            className={`font-medium text-[#15803d] hover:text-[#2d5c27] transition-colors duration-200`}>Forgot password?</Link>
                        </div>


                        {/* Submit Button */}
                        <Link href="/basicprofile">
                        <button
                            type="submit"
                            className={`w-full bg-[#15803d] text-white py-3 rounded-lg font-semibold shadow-md shadow-[#15803d]/30 hover:bg-opacity-90 transition-all duration-300 text-base mt-4`}
                        >
                            Login
                        </button>
                        </Link>
                    </form>

                    {/* Submission Message */}
                    {message && (
                        <p className={`font-semibold text-center text-sm mt-4 ${message.includes('successful') ? 'text-green-600' : 'text-red-500'}`}>
                            {message}
                        </p>
                    )}

                    {/* Sign Up Link */}
                    <p className={`text-center mt-6 text-[#2d5c27] text-sm`}>
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className={`text-[#15803d] hover:text-[#2d5c27] font-bold transition-colors duration-200`}>
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}