"use client";
import { useState, useEffect } from 'react';
import Header from '../components/header'

export default function UVProtectionPage() {
    const [uvIndex, setUvIndex] = useState<number>(0);
    const [exposureTime, setExposureTime] = useState<number>(0);
    const [skinType, setSkinType] = useState<string>('medium');

    useEffect(() => {
        // Simulate real-time UV monitoring
        const interval = setInterval(() => {
            setUvIndex(Math.floor(Math.random() * 11) + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const getUVRiskLevel = (index: number) => {
        if (index <= 2) return { level: 'Low', color: 'text-green-600', bg: 'bg-green-100' };
        if (index <= 5) return { level: 'Moderate', color: 'text-yellow-600', bg: 'bg-yellow-100' };
        if (index <= 7) return { level: 'High', color: 'text-orange-600', bg: 'bg-orange-100' };
        if (index <= 10) return { level: 'Very High', color: 'text-red-600', bg: 'bg-red-100' };
        return { level: 'Extreme', color: 'text-purple-600', bg: 'bg-purple-100' };
    };

    const getProtectionAdvice = () => {
        const risk = getUVRiskLevel(uvIndex);
        switch (risk.level) {
            case 'Low':
                return 'Minimal protection required. Wear sunglasses on bright days.';
            case 'Moderate':
                return 'Take precautions. Wear protective clothing, sunglasses, and SPF 15+ sunscreen.';
            case 'High':
                return 'Protection essential. Wear protective clothing, wide-brimmed hat, sunglasses, and SPF 30+ sunscreen.';
            case 'Very High':
                return 'Extra protection required. Avoid sun exposure during midday hours. Use SPF 50+ sunscreen.';
            default:
                return 'Extreme protection necessary. Avoid all sun exposure. Stay indoors during peak hours.';
        }
    };

    const getSafeExposureTime = () => {
        const baseTime = skinType === 'fair' ? 10 : skinType === 'medium' ? 20 : 30;
        return Math.max(5, Math.floor(baseTime / uvIndex));
    };

    const risk = getUVRiskLevel(uvIndex);
    const widthClasses = [
        'w-[0%]','w-[9%]','w-[18%]','w-[27%]','w-[36%]','w-[45%]','w-[55%]','w-[64%]','w-[73%]','w-[82%]','w-[91%]','w-[100%]'
    ];

    return (
        <>
            <Header />
            <section className="min-h-screen bg-[#f0fdf4] px-4 py-8 pt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        UV Protection Monitor
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Real-time UV monitoring and personalized protection advice
                    </p>
                </div>

                {/* Real-time UV Index */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500 animate-pulse" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <circle cx="12" cy="12" r="4" fill="currentColor" />
                            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Live UV Index
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-2">
                                {uvIndex}
                            </div>
                            <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${risk.bg} ${risk.color}`}>
                                {risk.level} Risk
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="bg-gray-200 rounded-full h-4 mb-2">
                                <div className={`h-4 rounded-full transition-all duration-500 bg-gradient-to-r from-[#86efac] to-[#15803d] ${widthClasses[uvIndex]}`}></div>
                            </div>
                            <div className="text-sm text-gray-600 text-center">
                                UV Scale: 0-11+
                            </div>
                        </div>
                    </div>
                </div>

                {/* Protection Advice */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Custom Protection Advice
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="skin-type" className="block text-sm font-medium text-gray-700 mb-2">
                                Skin Type
                            </label>
                            <select
                                id="skin-type"
                                value={skinType}
                                onChange={(e) => setSkinType(e.target.value)}
                                className="w-full p-3 border border-gray-300 text-green-500 rounded-lg focus:ring-2 focus:ring-[#4ade80] focus:border-transparent"
                            >
                                <option value="fair">Fair (Burns easily)</option>
                                <option value="medium">Medium (Tans gradually)</option>
                                <option value="dark">Dark (Rarely burns)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Safe Exposure Time
                            </label>
                            <div className="p-3 bg-green-50 rounded-lg">
                                <span className="text-2xl font-bold text-[#15803d]">
                                    {getSafeExposureTime()} min
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded">
                        <p className="text-green-800 font-medium">{getProtectionAdvice()}</p>
                    </div>
                </div>

                {/* Exposure Tracker */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Exposure Tracker
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-[#15803d]">{exposureTime}</div>
                            <div className="text-sm text-gray-600">Minutes Today</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">
                                {Math.max(0, getSafeExposureTime() - exposureTime)}
                            </div>
                            <div className="text-sm text-gray-600">Safe Time Left</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">SPF 30+</div>
                            <div className="text-sm text-gray-600">Recommended SPF</div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setExposureTime(prev => prev + 15)}
                            className="flex-1 bg-[#15803d] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#14532d] transition-colors"
                        >
                            +15 min
                        </button>
                        <button
                            onClick={() => setExposureTime(0)}
                            className="flex-1 border-2 border-[#15803d] text-[#15803d] py-3 px-4 rounded-lg font-medium hover:bg-[#15803d] hover:text-white transition-colors"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Protection Tips */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Essential Protection Tips
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                            <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                                <svg className="w-6 h-6 mr-2 text-[#15803d]" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M3 13c1.5-4.5 6-9 9-9s7.5 4.5 9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    <rect x="7" y="10" width="10" height="6" rx="1.2" fill="currentColor" opacity="0.08"/>
                                    <path d="M9 10v-2a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="12" cy="12" r="0.8" fill="currentColor"/>
                                </svg>
                                Sunscreen
                            </h3>
                            <p className="text-sm text-gray-600">
                                Apply SPF 30+ sunscreen 15-30 minutes before exposure. Reapply every 2 hours.
                            </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                                <svg className="w-6 h-6 mr-2 text-[#15803d]" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M4 7c2-2 4-3 4-3h8s2 1 4 3v6a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 11v4M16 11v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Protective Clothing
                            </h3>
                            <p className="text-sm text-gray-600">
                                Wear wide-brimmed hats, long sleeves, and UV-blocking sunglasses.
                            </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                                <svg className="w-6 h-6 mr-2 text-[#15803d]" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M12 2C7 2 3.5 6.5 3.5 11.5a8.5 8.5 0 0017 0C20.5 6.5 17 2 12 2z" fill="currentColor" opacity="0.08"/>
                                    <path d="M3.5 11.5A8.5 8.5 0 0112 3c4.97 0 8.5 4.5 8.5 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 3v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Seek Shade
                            </h3>
                            <p className="text-sm text-gray-600">
                                Stay in shade during peak hours (10 AM - 4 PM) when UV rays are strongest.
                            </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                                <svg className="w-6 h-6 mr-2 text-[#15803d]" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M12 2.5s-6 5.5-6 9.5a6 6 0 0012 0c0-4-6-9.5-6-9.5z" fill="currentColor" opacity="0.08"/>
                                    <path d="M12 2.5s-6 5.5-6 9.5a6 6 0 0012 0c0-4-6-9.5-6-9.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 14v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Stay Hydrated
                            </h3>
                            <p className="text-sm text-gray-600">
                                Drink plenty of water to prevent dehydration and heat-related illness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}
