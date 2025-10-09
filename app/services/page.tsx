import Header from '../components/header'
import Link from 'next/link'

export default function Services() {
  return (
    <>
      <Header />
      <section className="py-20 bg-[#f0fdf4] min-h-screen pt-28 relative overflow-hidden">
      
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
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-[#15803d] mb-16">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 items-start">
            
            {/* Skin Analysis Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-square flex flex-col">
              <div className="flex flex-col items-center flex-1">
                <div className="h-12 w-12 mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#15803d] drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#052e16] mb-3 text-center">Skin Analysis</h3>
                <p className="text-gray-600 text-xs text-center mb-4 flex-1">
                  AI-powered analysis of your skin condition and tracking improvements.
                </p>
              </div>
              <div className="mt-auto">
                <ul className="text-xs text-gray-600 space-y-1 mb-4">
                  <li>• Detailed reports</li>
                  <li>• Progress tracking</li>
                  <li>• AI recommendations</li>
                </ul>
                <button
                  className="w-full px-2 py-2 bg-[#15803d] text-white rounded-md text-xs shadow transition-all duration-300 hover:bg-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#86efac] focus:ring-offset-2 animate-glow"
                  type="button"
                 
                >
                  <Link href="/skin-analysis">
                    Learn More
                  </Link>
                </button>
              </div>
            </div>
  
            {/* UV Protection Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-square flex flex-col">
              <div className="flex flex-col items-center flex-1">
                <div className="h-12 w-12 mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#15803d] drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#052e16] mb-3 text-center">UV Protection</h3>
                <p className="text-gray-600 text-xs text-center mb-4 flex-1">
                  Real-time UV monitoring and personalized protection recommendations.
                </p>
              </div>
              <div className="mt-auto">
                <ul className="text-xs text-gray-600 space-y-1 mb-4">
                  <li>• Real-time UV monitoring</li>
                  <li>• Custom protection advice</li>
                  <li>• Exposure alerts</li>
                </ul>
                <button
                  className="w-full px-2 py-2 bg-[#15803d] text-white rounded-md text-xs shadow transition-all duration-300 hover:bg-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#86efac] focus:ring-offset-2 animate-glow"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Personalized Care Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-square flex flex-col">
              <div className="flex flex-col items-center flex-1">
                <div className="h-12 w-12 mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#15803d] drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#052e16] mb-3 text-center">Customized Care</h3>
                <p className="text-gray-600 text-xs text-center mb-6 flex-1">
                  Skincare routines tailored to your unique skin needs.
                </p>
              </div>
              <div className="mt-auto">
                <ul className="text-xs text-gray-600 space-y-1 mb-5">
                  <li>• Custom skincare routines</li>
                  <li>• Product recommendations</li>
                  <li>• Routine tracking</li>
                </ul>
                <button
                  className="w-full px-2 py-2 bg-[#15803d] text-white rounded-md text-xs shadow transition-all duration-300 hover:bg-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#86efac] focus:ring-offset-2 animate-glow"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            </div>

          
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-square flex flex-col">
              <div className="flex flex-col items-center flex-1">
                <div className="h-12 w-12 mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#15803d] drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#052e16] mb-3 text-center">My Journal</h3>
                <p className="text-gray-600 text-xs text-center mb-4 flex-1">
                  Track your skincare journey with daily observations and photos.
                </p>
              </div>
              <div className="mt-auto">
                <ul className="text-xs text-gray-600 space-y-1 mb-4">
                  <li>• Daily skin observations</li>
                  <li>• Photo progress tracking</li>
                  <li>• Personal skincare notes</li>
                </ul>
                <button
                  className="w-full px-2 py-2 bg-[#15803d] text-white rounded-md text-xs shadow transition-all duration-300 hover:bg-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#86efac] focus:ring-offset-2 animate-glow"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Ingredient Safety Checker Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-square flex flex-col">
              <div className="flex flex-col items-center flex-1">
                <div className="h-12 w-12 mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#15803d] drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#052e16] mb-3 text-center">Ingredient Safety</h3>
                <p className="text-gray-600 text-xs text-center mb-4 flex-1">
                  Verify product ingredients for allergens and skin compatibility.
                </p>
              </div>
              <div className="mt-auto">
                <ul className="text-xs text-gray-600 space-y-1 mb-4">
                  <li>• Ingredient analysis</li>
                  <li>• Allergen detection</li>
                  <li>• Safety recommendations</li>
                </ul>
                <button
                  className="w-full px-2 py-2 bg-[#15803d] text-white rounded-md text-xs shadow transition-all duration-300 hover:bg-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#86efac] focus:ring-offset-2 animate-glow"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}