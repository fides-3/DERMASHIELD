"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const REMINDER_OPTIONS = [
  {
    id: 'daily',
    label: 'Daily',
    description: 'Get daily reminders for your skincare routine',
    icon: '📅'
  },
  {
    id: 'weekly',
    label: 'Weekly',
    description: 'Get weekly reminders to maintain your routine',
    icon: '📊'
  },
  {
    id: 'never',
    label: 'Never',
    description: 'I prefer not to receive any reminders',
    icon: '🔕'
  }
];

export default function AlertsPreferencesPage() {
  const router = useRouter();
  const [selectedFrequency, setSelectedFrequency] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!selectedFrequency) {
      setMessage('Please select a reminder preference');
      return;
    }

    const alertsPreferences = {
      reminderFrequency: selectedFrequency,
      timestamp: new Date().toISOString()
    };

    try {
      localStorage.setItem('alertsPreferences', JSON.stringify(alertsPreferences));
      setMessage('Preferences saved — completing setup...');
      setTimeout(() => router.push('/'), 700);
    } catch  {
      setMessage('Could not save your preferences locally.');
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
                <div className="w-12 h-12 rounded-md bg-white/10 flex items-center justify-center text-white font-bold">🔔</div>
                <div className="text-sm text-white/90">Stay consistent</div>
              </div>
              <h2 className="text-3xl font-extrabold">Routine Reminders</h2>
              <p className="text-white/90 max-w-sm">Consistency is key to healthy skin. Set up reminders to help you maintain your skincare routine and see better results.</p>
              
              {/* Additional informational content */}
              <div className="space-y-4 mt-6 text-left max-w-sm">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Why Consistency Matters</h3>
                  <ul className="text-sm text-white/90 space-y-1">
                    <li>• Skin needs time to show results</li>
                    <li>• Regular use prevents issues</li>
                    <li>• Builds healthy habits</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Reminder Benefits</h3>
                  <div className="text-sm text-white/90 space-y-1">
                    <p>• <strong>Daily:</strong> Perfect for new routines</p>
                    <p>• <strong>Weekly:</strong> Gentle maintenance nudges</p>
                    <p>• <strong>Never:</strong> Full control, no interruptions</p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Your Choice</h3>
                  <div className="text-sm text-white/90 space-y-1">
                    <p>You can always change these preferences later in your account settings.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-white/80">🔒 Notification preferences stay private</div>
            </aside>

            {/* Right panel - form */}
            <section className="p-5 sm:p-6">
              <header className="mb-6">
                <h1 className="text-2xl font-extrabold text-[#15803d]">How often would you like to receive reminders?</h1>
                <p className="text-[#2d5c27] text-sm mt-1">Choose your preferred frequency for skincare routine reminders.</p>
              </header>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <div className="space-y-4">
                    {REMINDER_OPTIONS.map(option => {
                      const active = selectedFrequency === option.id;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setSelectedFrequency(option.id)}
                          className={`w-full flex items-start gap-4 p-5 rounded-xl text-left transition-all duration-200 border-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80]/30
                            ${active
                              ? 'border-transparent bg-gradient-to-r from-[#4ade80] to-[#2e7f4c] text-[#052e16] scale-105 shadow-lg'
                              : 'border-[#e6f6eb] bg-white hover:border-[#1cdb62] hover:scale-105'}
                          `}
                        >
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-200 flex-shrink-0
                            ${active ? 'bg-white shadow-md' : 'bg-[#f3faf6]'}
                          `}>
                            {option.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-lg text-[#15803d] mb-1">{option.label}</div>
                            <div className={`text-sm ${active ? 'text-[#052e16]' : 'text-[#2d5c27]'}`}>
                              {option.description}
                            </div>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0
                            ${active 
                              ? 'border-white bg-white' 
                              : 'border-[#86efac] bg-transparent'}
                          `}>
                            {active && (
                              <div className="w-3 h-3 rounded-full bg-[#217841]"></div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                

                {/* Additional information based on selection */}
                {selectedFrequency === 'daily' && (
                  <div className="bg-[#f0fdf4] border border-[#255d3a] rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-[#15803d] text-xl">💡</div>
                      <div>
                        <h4 className="font-semibold text-[#15803d] text-sm">Daily Reminders</h4>
                        <p className="text-[#2d5c27] text-xs mt-1">You&apos;ll receive gentle daily notifications to help establish and maintain your skincare routine. Perfect for building new habits!</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedFrequency === 'weekly' && (
                  <div className="bg-[#f0fdf4] border border-[#86efac] rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-[#15803d] text-xl">📈</div>
                      <div>
                        <h4 className="font-semibold text-[#15803d] text-sm">Weekly Check-ins</h4>
                        <p className="text-[#2d5c27] text-xs mt-1">You&apos;ll receive weekly reminders to review and maintain your routine. Great for staying on track without daily interruptions.</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedFrequency === 'never' && (
                  <div className="bg-[#f0fdf4] border border-[#86efac] rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-[#15803d] text-xl">🎯</div>
                      <div>
                        <h4 className="font-semibold text-[#15803d] text-sm">Self-Managed</h4>
                        <p className="text-[#2d5c27] text-xs mt-1">You prefer to manage your routine independently. You can always enable reminders later in your settings.</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#15803d] to-[#2d5c27] text-white py-3 rounded-lg font-semibold text-sm hover:shadow-md transition-all"
                  >
                    Save Preferences & Complete Setup
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
