"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CONCERNS = [
  "Acne", "Dryness", "Uneven tone", "Dark spots", "Eczema",
  "Hyperpigmentation", "Psoriasis", "Aging", "Vitiligo", "Hives", "Rosacea",
];

export default function SkinConcernsPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);
  const [other, setOther] = useState("");
  const [message, setMessage] = useState("");

  function toggleConcern(c: string) {
    setSelected((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );

  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const concerns = [...selected];
    if (other.trim()) concerns.push(other.trim());
    try {
      localStorage.setItem("skinConcerns", JSON.stringify(concerns));
      setMessage("✅ Saved! Redirecting...");
      setTimeout(() => router.push("/medicalbackground"), 800);
    } catch {
      setMessage("⚠️ Could not save your choices.");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e9fce8] via-white to-[#ccfbf1] flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border border-green-100 animate-fadein">
        <div className="grid lg:grid-cols-2">
          {/* LEFT PANEL */}
          <aside className="hidden lg:flex flex-col justify-center items-start p-10 bg-gradient-to-b from-[#16a34a] to-[#166534] text-white">
            <h2 className="text-4xl font-extrabold mb-3">Your Skin, Your Story</h2>
            <p className="text-white/90 text-sm leading-relaxed max-w-sm">
              Select your concerns to help us personalize your skincare journey.
              We tailor safe and effective options that respect your skin’s needs.
            </p>
            <div className="mt-6 text-xs bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              🌿 Crafted for your unique glow
            </div>
          </aside>

          {/* RIGHT PANEL */}
          <section className="p-8 lg:p-10 space-y-6 bg-gradient-to-b from-white to-green-50/30">
            <header className="text-center lg:text-left">
              <h1 className="text-3xl font-extrabold text-[#166534]">
                What are your skin concerns?
              </h1>
              <p className="text-[#166534]/70 text-sm mt-1">
                Choose one or more that apply to you.
              </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* CONCERNS GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CONCERNS.map((c) => {
                  const active = selected.includes(c);
                  return (
                    <button
                      key={c}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleConcern(c)}
                      className={`p-4 rounded-xl border text-sm font-medium transition-all duration-200 shadow-sm hover:scale-105 focus:ring-2 focus:ring-green-300 ${
                        active
                          ? "bg-gradient-to-r from-green-400 to-green-300 text-green-900 border-transparent shadow-lg"
                          : "bg-white border-green-100 hover:border-green-300 text-gray-700"
                      }`}
                    >
                      {active ? "✅ " : "➕ "}
                      {c}
                    </button>
                  );
                })}
              </div>

              {/* OTHER CONCERN */}
              <div>
                <label className="block text-sm font-semibold text-[#166534] mb-1">
                  Other concern (optional)
                </label>
                <input
                  value={other}
                  onChange={(e) => setOther(e.target.value)}
                  placeholder="e.g., redness, sensitivity..."
                  className="w-full px-4 py-2 rounded-lg border border-green-100 focus:border-green-400 focus:ring-2 focus:ring-green-200 text-sm text-gray-800 shadow-sm"
                />
              </div>

              
              <div>
                {/* SUBMIT BUTTON */}
              
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#16a34a] to-[#166534] text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  Save & Continue
                </button>
              
                {message && (
                  <p className="mt-3 text-center text-sm text-green-700">
                    {message}
                  </p>
                )}
              </div>
            </form>
          </section>
        </div>
      </div>

      {/* FADE-IN ANIMATION */}
      <style jsx global>{`
        @keyframes fadein {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-fadein {
          animation: fadein 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </main>
  );
}
