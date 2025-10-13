"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, User, CheckCircle } from 'lucide-react'; 
import{useRouter} from 'next/navigation'

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const router=useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('')
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match. Please try again.");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullname: formData.fullname,
          email: formData.email,
          password: formData.password,
        }),
      })
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message || 'Something went wrong.');
      } else {
        setMessage('Account created successfully! 🎉');
        setFormData({ fullname: '', email: '', password: '', confirmPassword: '' })
        // REDIRECT LOGIC
        setTimeout(()=>{
          router.push('/login')

        },1500)
      }

    } catch {
      setMessage('An error occurred. Please try again.');
    }
  };

  // // Define the main color variables
  // const primaryColor = '#15803d'; // Emerald 700
  // const secondaryColor = '#86efac'; // Emerald 300
  // const accentColor = '#4ade80'; // Emerald 400
  // const lightBgFrom = '#f0fdf4'; // Emerald 50
  // const lightBgTo = '#dcfce7'; // Emerald 100
  // const textColor = '#2d5c27'; // Darker text for readability

  return (
    // Main container for full screen background and centering
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] p-4`}>
      
      {/* Form Card (Max width reduced to be small and centered) */}
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden p-8">
          
          <h2 className={`text-3xl font-bold mb-8 text-[#15803d] text-center`}>
            Create Account
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Input: Full Name */}
            <div className="relative">
              <User size={18} className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-[#15803d]/80`} />
              <input
                type="text"
                className={`w-full pl-10 pr-3 py-2.5 rounded-lg border border-[#86efac] focus:outline-none focus:ring-2 focus:ring-[#4ade80] bg-white text-sm text-[#2d5c27] transition-all duration-200 placeholder-[#2d5c27]/60`}
                required
                onChange={handleChange}
                value={formData.fullname}
                name="fullname"
                placeholder="Full Name"
                title="Full Name"
              />
            </div>

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
                minLength={8}
              />
            </div>

            {/* Input: Confirm Password */}
            <div className="relative">
              <CheckCircle size={18} className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-[#15803d]/80`} />
              <input
                type="password"
                className={`w-full pl-10 pr-3 py-2.5 rounded-lg border border-[#86efac] focus:outline-none focus:ring-2 focus:ring-[#4ade80] bg-white text-sm text-[#2d5c27] transition-all duration-200 placeholder-[#2d5c27]/60`}
                required
                onChange={handleChange}
                value={formData.confirmPassword}
                name="confirmPassword"
                placeholder="Confirm Password"
                title="Confirm Password"
                minLength={8}
              />
            </div>
            
            {/* Submission Message */}
            {message && (
              <p className={`font-semibold text-center text-sm ${message.includes('success') ? 'text-green-600' : 'text-red-500'}`}>
                {message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full bg-[#15803d] text-white py-3 rounded-lg font-semibold shadow-md shadow-[#15803d]/30 hover:bg-opacity-90 transition-all duration-300 text-base mt-4`}
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className={`text-center mt-6 text-[#2d5c27] text-sm`}>
            Already have an account?{' '}
            <Link href="/login" className={`text-[#15803d] hover:text-[#2d5c27] font-bold transition-colors duration-200`}>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}