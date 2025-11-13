"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LifestyleEnvironmentPage() {
  const router = useRouter();
  const [sunscreen, setSunscreen] = useState('');
  const [highSunArea, setHighSunArea] = useState('');
  const [sunExposure, setSunExposure] = useState('');
  const [smoking, setSmoking] = useState('');
  const [drinking, setDrinking] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!sunscreen || !highSunArea || !sunExposure || !smoking || !drinking) {
      setMessage('Please answer all questions');
      return;
    }

    const lifestyleData = {
      sunscreen,
      highSunArea,
      sunExposure,
      smoking,
      drinking
    };

    try {
      localStorage.setItem('lifestyleEnvironment', JSON.stringify(lifestyleData));
      setMessage('Lifestyle information saved — continuing...');
      setTimeout(() => router.push('/current-products'), 700);
    } catch {
      setMessage('Could not save your lifestyle information locally.');
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0fdf4] via-white to-[#dcfce7] pt-16 pb-12 relative">
      {/* Decorative background blob */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#86efac] rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 animate-fadein">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-[#e6f6eb] transition-shadow duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left panel - decorative on large screens */}
            <aside className="hidden lg:flex flex-col justify-start items-center text-center gap-4 p-8 pt-16 bg-gradient-to-b from-[#15803d] to-[#2d5c27] text-white rounded-l-3xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-white/10 flex items-center justify-center text-white font-bold">🌞</div>
                <div className="text-sm text-white/90">Environmental factors</div>
              </div>
              <h2 className="text-3xl font-extrabold">Lifestyle & Environment</h2>
              <p className="text-white/90 max-w-sm">Your daily habits and environment significantly impact your skin health. This helps us recommend the right protection and care.</p>
              
              {/* Additional informational content */}
              <div className="space-y-4 mt-6 text-left max-w-sm">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Sun Protection</h3>
                  <ul className="text-sm text-white/90 space-y-1">
                    <li>• UV rays cause premature aging</li>
                    <li>• Daily sunscreen prevents damage</li>
                    <li>• Climate affects skin needs</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Lifestyle Impact</h3>
                  <div className="text-sm text-white/90 space-y-1">
                    <p>• Smoking reduces collagen</p>
                    <p>• Alcohol causes dehydration</p>
                    <p>• Both affect skin healing</p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Regional Factors</h3>
                  <div className="text-sm text-white/90 space-y-1">
                    <p>• Humidity levels</p>
                    <p>• Pollution exposure</p>
                    <p>• Seasonal changes</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-white/80">🔒 Personal information stays private</div>
            </aside>

            {/* Right panel - form */}
            <section className="p-5 sm:p-6">
              <header className="mb-6">
                <h1 className="text-2xl font-extrabold text-[#15803d]">Lifestyle & Environmental Factors</h1>
                <p className="text-[#2d5c27] text-sm mt-1">Help us understand your daily environment and habits for better recommendations.</p>
              </header>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Question 1: Sunscreen Use */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#15803d]">1. Do you regularly use sunscreen?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Yes', 'No'].map(option => {
                      const active = sunscreen === option.toLowerCase();
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setSunscreen(option.toLowerCase())}
                          className={`px-4 py-2.5 rounded-lg text-center transition-all duration-200 border-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80]/30
                            ${active
                              ? 'border-transparent bg-gradient-to-r from-[#4ade80] to-[#86efac] text-[#052e16] scale-105 shadow-lg'
                              : 'border-[#e6f6eb] bg-white text-[#15803d] hover:border-[#4ade80]/50 hover:scale-102'}
                          `}
                        >
                          <div className="font-medium text-sm text-[#2d5c27]">{option}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Question 2: High Sun Area */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#15803d]">2. Do you live in an area with high sun exposure?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Yes', 'No'].map(option => {
                      const active = highSunArea === option.toLowerCase();
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setHighSunArea(option.toLowerCase())}
                          className={`px-4 py-2.5 rounded-lg text-center transition-all duration-200 border-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80]/30
                            ${active
                              ? 'border-transparent bg-gradient-to-r from-[#4ade80] to-[#86efac] text-[#052e16] scale-105 shadow-lg'
                              : 'border-[#e6f6eb] bg-white text-[#15803d] hover:border-[#4ade80]/50 hover:scale-102'}
                          `}
                        >
                          <div className="font-medium text-sm text-[#2d5c27]">{option}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Question 3: Sun Exposure Level */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#15803d]">3. On average, how much sun exposure do you get in your region?</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { value: 'high', label: 'High' },
                      { value: 'moderate', label: 'Moderate' },
                      { value: 'low', label: 'Low' },
                      { value: 'varies', label: 'Varies by Season' }
                    ].map(option => {
                      const active = sunExposure === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setSunExposure(option.value)}
                          className={`px-3 py-2 rounded-lg text-center transition-all duration-200 border-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#86efac]/30
                            ${active
                              ? 'border-[#22c55e] bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white scale-105 shadow-lg'
                              : 'border-[#e6f6eb] bg-white text-[#15803d] hover:border-[#4ade80]/50 hover:scale-102'}
                          `}
                        >
                          <div className="font-medium text-xs text-[#2d5c27]">{option.label}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Question 4: Smoking and Drinking */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#15803d]">4. Do you smoke or consume alcohol frequently?</h3>
                  
                  {/* Smoking */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#15803d]">Smoking:</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Yes', 'No'].map(option => {
                        const active = smoking === option.toLowerCase();
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setSmoking(option.toLowerCase())}
                            className={`px-4 py-2.5 rounded-lg text-center transition-all duration-200 border-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80]/30
                              ${active
                                ? 'border-transparent bg-gradient-to-r from-[#4ade80] to-[#86efac] text-[#052e16] scale-105 shadow-lg'
                                : 'border-[#e6f6eb] bg-white  text-[#15803d] hover:border-[#4ade80]/50 hover:scale-102'}
                            `}
                          >
                            <div className="font-medium text-sm text-[#2d5c27]">{option}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Drinking */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#15803d]">Drinking:</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Yes', 'No'].map(option => {
                        const active = drinking === option.toLowerCase();
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setDrinking(option.toLowerCase())}
                            className={`px-4 py-2.5 rounded-lg text-center transition-all duration-200 border-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80]/30
                              ${active
                                ? 'border-transparent bg-gradient-to-r from-[#4ade80] to-[#86efac] text-[#052e16] scale-105 shadow-lg'
                                : 'border-[#e6f6eb] bg-white  text-[#15803d] hover:border-[#4ade80]/50 hover:scale-102'}
                            `}
                          >
                            <div className="font-medium text-sm text-[#2d5c27]">{option}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#15803d] to-[#2d5c27] text-white py-3 rounded-lg font-semibold text-sm hover:shadow-md transition-all"
                  >
                    Save & Continue
                  </button>
                  {message && <p className="mt-3 text-center text-sm text-[#15803d]">{message}</p>}
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>

      {/* Add fade-in animation */}
      <style jsx global>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadein {
          animation: fadein 0.7s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </main>
  );
}
