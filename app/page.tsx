import Header from './components/header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    
      <Header />
    
      <section id="home" className="min-h-screen bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] pt-20 relative overflow-hidden">
        {/* Full-page Wave Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <svg 
            className="absolute w-full h-full"
            viewBox="0 0 1440 1000" 
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0,-100 
                C320,0 420,100 720,100 
                C1020,100 1120,0 1440,100 
                V600
                C1120,700 1020,600 720,600
                C420,600 320,700 0,600 
                V-100 Z"
              fill="#86efac"
              fillOpacity="0.1"
              className="animate-wave"
            />
            <path 
              d="M0,0
                C320,100 420,200 720,200
                C1020,200 1120,100 1440,200
                V800
                C1120,900 1020,800 720,800
                C420,800 320,900 0,800
                V0 Z"
              fill="#4ade80"
              fillOpacity="0.1"
              className="animate-wave-slow"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#15803d]">
              Protect Your Skin with AI-Powered Analysis
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#166534]">
              Advanced skincare solutions powered by cutting-edge technology
            </p>
            <button className="bg-[#4ade80] hover:bg-[#166534] text-white hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg">
              Get Started
            </button>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-2 shadow-xl">
              <Image
                src="/landingimage.jpeg"
                alt="Skincare Background"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      </>
  )
}