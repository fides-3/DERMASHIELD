"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const CONDITIONS = [
  {
    name: 'Diabetes',
    description: 'Darker or thicker patches of skin',
    
  },
  {
    name: 'Thyroid Disorder - Hypothyroidism',
    description: 'Dry, rough, flaky skin',

  },
  {
    name: 'Thyroid Disorder - Hyperthyroidism',
    description: 'Sweaty, oily skin',
  },
  {
    name: 'Kidney Disease',
    description: 'Dry, itchy skin',

  },
  {
    name: 'Liver Disease',
    description: 'Itchy, dry skin',
    
  }
];

export default function MedicalBackgroundPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);
  const [other, setOther] = useState('');
  const [message, setMessage] = useState('');

  function toggleCondition(condition: string) {
    setSelected(prev => prev.includes(condition) ? prev.filter(x => x !== condition) : [...prev, condition]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const conditions = selected.slice();
    if (other.trim()) conditions.push(other.trim());
    try {
      localStorage.setItem('medicalBackground', JSON.stringify(conditions));
      setMessage('Medical background saved — continuing...');
      setTimeout(() => router.push('/medication'), 700);
    } catch (err) {
      setMessage('Could not save your medical background locally.');
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0fdf4] via-white to-[#dcfce7] pt-16 pb-12 relative">
      {/* Decorative background blob */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#86efac] rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 animate-fadein">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-[#e6f6eb] transition-shadow duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left panel - decorative on large screens */}
            <aside className="hidden lg:flex flex-col justify-start items-center text-center gap-4 p-8 pt-16 bg-gradient-to-b from-[#15803d] to-[#2d5c27] text-white rounded-l-3xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-white/10 flex items-center justify-center text-white font-bold">🩺</div>
                <div className="text-sm text-white/90">Medical history matters</div>
              </div>
              <h2 className="text-3xl font-extrabold">Medical Background</h2>
              <p className="text-white/90 max-w-sm">Chronic conditions can affect your skin. Knowing your medical background helps us recommend safer, more effective products.</p>
              
              {/* Additional informational content */}
              <div className="space-y-4 mt-6 text-left max-w-sm">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Why This Helps</h3>
                  <ul className="text-sm text-white/90 space-y-1">
                    <li>• Avoid ingredients that may worsen symptoms</li>
                    <li>• Select products compatible with medications</li>
                    <li>• Personalize recommendations for your needs</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Common Skin Effects</h3>
                  <div className="text-sm text-white/90 space-y-1">
                    <p><strong>Diabetes:</strong> Slower healing, infections</p>
                    <p><strong>Thyroid:</strong> Texture & moisture changes</p>
                    <p><strong>Kidney/Liver:</strong> Dryness, sensitivity</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-white/80">🔒 Your privacy is protected — this information stays secure.</div>
            </aside>

            {/* Right panel - form */}
            <section className="p-5 sm:p-6">
              <header className="mb-4">
                <h1 className="text-2xl font-extrabold text-[#15803d]">Do you have any chronic conditions?</h1>
                <p className="text-[#2d5c27] text-sm mt-1">Select any conditions that apply to you. This helps us provide safer recommendations.</p>
              </header>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <div className="space-y-3">
                    {CONDITIONS.map(condition => {
                      const active = selected.includes(condition.name);
                      return (
                        <button
                          key={condition.name}
                          type="button"
                          aria-pressed={active}
                          onClick={() => toggleCondition(condition.name)}
                          className={`w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-200 border-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80]/30
                            ${active
                              ? 'border-transparent bg-gradient-to-r from-[#4ade80] to-[#86efac] text-[#052e16] scale-105 shadow-lg'
                              : 'border-[#e6f6eb] bg-white hover:border-[#4ade80]/50 hover:scale-105'}
                          `}
                        >
                          <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-200 flex-shrink-0
                            ${active ? 'bg-white text-[#15803d] shadow' : 'bg-[#f3faf6] text-[#075e33]'}
                          `}>
                            {active ? '✓' : '+'}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-base text-[#15803d]">{condition.name}</div>
                            <div className={`text-sm mt-1 ${active ? 'text-[#052e16]' : 'text-[#2d5c27]'}`}>
                              {condition.description}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#15803d]">Other conditions (optional)</label>
                  <input
                    value={other}
                    onChange={e => setOther(e.target.value)}
                    placeholder="Describe any other chronic conditions"
                    className="w-full px-3 py-2 rounded-lg border-2 border-[#e6f6eb] focus:border-[#4ade80] focus:ring-2 focus:ring-[#4ade80]/20 bg-white text-[#2d5c27] text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-gradient-to-r from-[#15803d] to-[#2d5c27] text-white py-3 rounded-lg font-semibold text-sm hover:shadow-md transition-all">Save & Continue</button>
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
