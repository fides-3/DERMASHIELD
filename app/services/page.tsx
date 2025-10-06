import Header from '../components/header'

export default function Services() {
  return (
    <>
      <Header />
      <section className="py-20 bg-[#f0fdf4] min-h-screen pt-28 relative overflow-hidden">
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
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-[#15803d] mb-16">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Skin Analysis Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="h-14 w-14 bg-[#86efac] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#15803d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#052e16] mb-4">Skin Analysis</h3>
              <p className="text-gray-600">
                AI-powered analysis of your skin condition, identifying concerns and tracking improvements over time.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Detailed skin condition reports</li>
                <li>• Progress tracking</li>
                <li>• AI-based recommendations</li>
              </ul>
            </div>

            {/* UV Protection Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="h-14 w-14 bg-[#86efac] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#15803d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#052e16] mb-4">UV Protection</h3>
              <p className="text-gray-600">
                Real-time UV index monitoring and personalized protection recommendations for your skin type.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Real-time UV monitoring</li>
                <li>• Custom protection advice</li>
                <li>• Exposure alerts</li>
              </ul>
            </div>

            {/* Skincare Routine Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="h-14 w-14 bg-[#86efac] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#15803d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#052e16] mb-4">Personalized Care</h3>
              <p className="text-gray-600">
                Customized skincare routines and product recommendations based on your skin's unique needs.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Custom skincare routines</li>
                <li>• Product recommendations</li>
                <li>• Routine tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}