"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link'

export default function BasicProfile() {
  const router = useRouter();
  const [age, setAge] = useState<number | ''>('');
  const [gender, setGender] = useState<string>('');
  const [skintone, setSkintone] = useState<string>('');
  const [isAlbino, setIsAlbino] = useState<'yes'|'no'|''>('');
  const [message, setMessage] = useState('');

  const skintones = [
    'Very fair', 'Fair', 'Light', 'Medium', 'Olive', 'Brown', 'Dark Brown', 'Deep'
  ];

  const genders = ['Female', 'Male', 'Non-binary', 'Prefer not to say'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const profile = { age, gender, skintone, isAlbino };
    try {
      localStorage.setItem('basicProfile', JSON.stringify(profile));
      setMessage('Profile saved');
      setTimeout(()=> router.push('/'), 900);
    } catch {
      setMessage('Could not save profile locally');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0fdf4] via-white to-[#dcfce7] pt-16 pb-8">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 right-8 w-56 h-56 bg-[#86efac] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-16 left-8 w-80 h-80 bg-[#4ade80] rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-[#e6f6eb]">
          
          {/* Header Section - reduced height and polished */}
          <div className="bg-gradient-to-r from-[#15803d] to-[#2d5c27] px-5 sm:px-6 py-4 sm:py-6 rounded-t-3xl relative overflow-hidden">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-2xl font-extrabold text-white leading-tight mb-0">Let's get started</h1>
                <p className="text-[#c8f6d1] text-sm max-w-lg">Answer a few quick questions and we'll tailor product suggestions just for you.</p>
              </div>
            </div>

            {/* Decorative bottom arc to visually connect header to form */}
            <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M0 40 C360 0 1080 80 1440 40 L1440 80 L0 80 Z" fill="#ffffff" />
            </svg>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="px-5 sm:px-6 py-8 space-y-6">

            {/* Age */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-[#15803d] text-white flex items-center justify-center text-xs font-bold">1</div>
                <label className="text-base font-semibold text-[#15803d]">What is your age?</label>
              </div>
              <input
                type="number"
                min={1}
                max={120}
                value={age}
                onChange={e => setAge(e.target.value === '' ? '' : Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg border-2 border-[#e6f6eb] focus:outline-none focus:border-[#4ade80] focus:ring-2 focus:ring-[#4ade80]/20 bg-white text-[#2d5c27] placeholder-[#2d5c27]/50 transition-all"
                placeholder="Enter your age"
                required
              />
            </div>

            {/* Skin tone */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-[#15803d] text-white flex items-center justify-center text-xs font-bold">2</div>
                <label className="text-base font-semibold text-[#15803d]">Which skin tone matches you best?</label>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {skintones.map(s => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setSkintone(s)}
                    className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-all duration-200 border-2 text-sm
                      ${skintone === s 
                        ? 'border-[#4ade80] bg-[#f0fdf4] shadow-sm' 
                        : 'border-[#e6f6eb] bg-white hover:border-[#4ade80]/50'}`}
                    aria-pressed={skintone === s}
                  >
                    <span className="w-10 h-6 rounded-md shadow-sm" aria-hidden
                      style={{
                        background: (() => {
                          switch (s) {
                            case 'Very fair': return '#fff7ed';
                            case 'Fair': return '#fff1cc';
                            case 'Light': return '#ffe4b5';
                            case 'Medium': return '#ffd29a';
                            case 'Olive': return '#e7c89a';
                            case 'Brown': return '#caa37a';
                            case 'Dark Brown': return '#8c6037';
                            case 'Deep': return '#5a371f';
                            default: return '#eee';
                          }
                        })()
                      }}
                    />
                    <span className="text-xs font-medium text-[#2d5c27] text-center">{s}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Albino */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-[#15803d] text-white flex items-center justify-center text-xs font-bold">3</div>
                <label className="text-base font-semibold text-[#15803d]">Are you albino?</label>
              </div>
              <div className="flex gap-2">
                {['Yes', 'No'].map(option => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setIsAlbino(option.toLowerCase() as 'yes'|'no')}
                    className={`flex-1 px-3 py-2 rounded-lg font-semibold transition-all duration-200 border-2 text-sm
                      ${isAlbino === option.toLowerCase() 
                        ? 'bg-[#15803d] text-white border-[#15803d] shadow-sm' 
                        : 'bg-white text-[#2d5c27] border-[#e6f6eb] hover:border-[#4ade80]'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-[#15803d] text-white flex items-center justify-center text-xs font-bold">4</div>
                <label className="text-base font-semibold text-[#15803d]">What is your Gender?</label>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                {genders.map(g => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGender(g)}
                    className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-200 border-2
                      ${gender === g 
                        ? 'bg-[#15803d] text-white border-[#15803d] shadow-sm' 
                        : 'bg-white text-[#2d5c27] border-[#e6f6eb] hover:border-[#4ade80]'}`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
                <Link href="/skinconcerns">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#15803d] to-[#2d5c27] text-white py-3 rounded-lg font-bold text-base hover:shadow-md hover:shadow-[#15803d]/20 transition-all duration-250 transform hover:scale-102"
              >
                Save & Continue
              </button>
              </Link>

              {message && (
                <p className={`text-center mt-3 text-sm font-semibold ${message.includes('saved') ? 'text-[#15803d]' : 'text-red-500'}`}>
                  {message}
                </p>
              )}
            </div>
          </form>

          {/* Footer */}
          <div className="px-5 sm:px-6 py-4 bg-[#f0fdf4] border-t border-[#e6f6eb] text-center">
            <p className="text-sm text-[#2d5c27]">You can always update your profile later in settings</p>
          </div>
        </div>
      </div>
    </main>
  );
}