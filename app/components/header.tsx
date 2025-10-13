"use client";
import { useEffect, useState } from 'react';
import { Inter, Exo_2 } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

const exo2 = Exo_2({
    subsets: ['latin'],
    weight: ['600', '700', '800'],
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
                <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br transition-all duration-500 flex items-center justify-center ${scrolled ? "from-[#15803d] to-[#4ade80]" : "from-white to-[#86efac]"}`}>
                        <svg className={`w-5 h-5 transition-colors duration-500 ${scrolled ? "text-white" : "text-[#15803d]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h1 className={`text-2xl font-bold tracking-wide transition-all duration-500 ${exo2.className} ${scrolled ? "text-[#15803d]" : "text-white"}`}>
                        DERMASHIELD
                    </h1>
                </div>
                <nav>
                    <ul className='flex gap-4 items-center'>
                        <li>
                            <Link 
                                href="/"
                                className={`px-4 py-2 rounded-full transition-all duration-500 text-sm font-medium 
                                ${scrolled 
                                    ? "bg-[#4ade80] text-white hover:bg-[#15803d] hover:shadow-md" 
                                    : "bg-[#86efac] text-[#052e16] hover:bg-[#4ade80] hover:text-white hover:shadow-md"}
                                ${inter.className}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/about"
                                className={`px-4 py-2 rounded-full transition-all duration-500 text-sm font-medium 
                                ${scrolled 
                                    ? "bg-[#4ade80] text-white hover:bg-[#15803d] hover:shadow-md" 
                                    : "bg-[#86efac] text-[#052e16] hover:bg-[#4ade80] hover:text-white hover:shadow-md"}
                                ${inter.className}`}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/services"
                                className={`px-4 py-2 rounded-full transition-all duration-500 text-sm font-medium 
                                ${scrolled 
                                    ? "bg-[#4ade80] text-white hover:bg-[#15803d] hover:shadow-md" 
                                    : "bg-[#86efac] text-[#052e16] hover:bg-[#4ade80] hover:text-white hover:shadow-md"}
                                ${inter.className}`}
                            >
                                Services
                            </Link>
                        </li>
                    </ul>

                </nav>
            </div>
        </header>
    );
}
