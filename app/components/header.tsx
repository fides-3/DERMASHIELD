"use client";
import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});


export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg' : 'bg-[#15803d]'}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between p-3 px-4 sm:px-6">
                <div className="flex items-center gap-2">
                  
                    <h1 className={`text-xl font-semibold tracking-tight transition-colors duration-500 ${inter.className} ${scrolled ? "text-[#15803d]" : "text-white"}`}>
                        DermaShield
                    </h1>
                </div>
                <nav>
                    <ul className='flex gap-4 items-center'>
                        <li>
                            <a 
                                href="/"
                                className={`px-4 py-2 rounded-full transition-all duration-500 text-sm font-medium 
                                ${scrolled 
                                    ? "bg-[#4ade80] text-white hover:bg-[#15803d] hover:shadow-md" 
                                    : "bg-[#86efac] text-[#052e16] hover:bg-[#4ade80] hover:text-white hover:shadow-md"}
                                ${inter.className}`}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/about"
                                className={`px-4 py-2 rounded-full transition-all duration-500 text-sm font-medium 
                                ${scrolled 
                                    ? "bg-[#4ade80] text-white hover:bg-[#15803d] hover:shadow-md" 
                                    : "bg-[#86efac] text-[#052e16] hover:bg-[#4ade80] hover:text-white hover:shadow-md"}
                                ${inter.className}`}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/services"
                                className={`px-4 py-2 rounded-full transition-all duration-500 text-sm font-medium 
                                ${scrolled 
                                    ? "bg-[#4ade80] text-white hover:bg-[#15803d] hover:shadow-md" 
                                    : "bg-[#86efac] text-[#052e16] hover:bg-[#4ade80] hover:text-white hover:shadow-md"}
                                ${inter.className}`}
                            >
                                Services
                            </a>
                        </li>
                    </ul>

                </nav>
            </div>
        </header>
    );
}
