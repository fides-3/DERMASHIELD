'use client'
import Header from '../components/header'
import Image from 'next/image'

export default function SkinAnalysis() {
  const analysisResults = [
    { label: 'Oily T-Zone', percentage: '75%', position: 'top-6 left-4', labelPosition: 'left-16', color: 'bg-yellow-500', severity: 'moderate' },
    { label: 'Dark Circles', percentage: '20%', position: 'top-12 right-8', labelPosition: 'right-20', color: 'bg-purple-500', severity: 'mild' },
    { label: 'Sun Damage', percentage: '60%', position: 'top-20 left-12', labelPosition: 'left-24', color: 'bg-red-500', severity: 'high' },
    { label: 'Fine Lines', percentage: '35%', position: 'top-32 right-6', labelPosition: 'right-18', color: 'bg-orange-500', severity: 'moderate' },
    { label: 'Dry Patches', percentage: '25%', position: 'bottom-20 left-6', labelPosition: 'left-18', color: 'bg-blue-500', severity: 'mild' },
    { label: 'Pore Size', percentage: '55%', position: 'bottom-12 right-10', labelPosition: 'right-24', color: 'bg-pink-500', severity: 'moderate' }
  ]

  return (
    <>
      <Header />
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-[#f0fdf4] min-h-screen pt-20 sm:pt-24 md:pt-28 relative overflow-hidden">
        
        {/* Background Wave Animation */}
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            {/* Back to Services Button */}
            <div className="mb-6">
              <button 
              onClick={() => window.location.href = '/services'}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#15803d] bg-white border border-[#15803d] rounded-lg hover:bg-[#15803d] hover:text-white transition-colors duration-200 shadow-md"
              >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
              </button>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#15803d] mb-4 sm:mb-6">
              AI Skin Analysis
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Experience our advanced AI-powered skin analysis technology. See how we identify and analyze various skin conditions in real-time.
            </p>
          </div>

          {/* Main Analysis Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            
            {/* Skin Analysis Visualization */}
            <div className="relative mx-auto w-full flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                
                {/* Real Face Photo Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white">
                  
                  {/* Face Photo */}
                  <Image 
                    src="/analysis.jpg" 
                    alt="Face Analysis Demo" 
                    fill
                    className="object-cover"
                  />
                  
                  {/* Analysis Points - Always Visible */}
                  {analysisResults.map((result, index) => (
                    <div
                      key={index}
                      className={`absolute ${result.position}`}
                    >
                      {/* Analysis Point */}
                      <div className={`w-2 h-2 sm:w-3 sm:h-3 ${result.color} rounded-full animate-pulse shadow-lg border border-white`}></div>
                      
                      {/* Label Line */}
                      <div className={`absolute top-1 ${result.position.includes('left') ? 'left-2' : 'right-2'} w-4 sm:w-6 h-0.5 ${result.color}`}></div>
                      
                      {/* Label */}
                      <div className={`absolute top-0 ${result.labelPosition} bg-white rounded-lg shadow-xl px-2 py-1 text-xs min-w-max border-l-2 border-[#15803d] z-10 transform ${result.position.includes('right') ? '-translate-x-full' : ''}`}>
                        <div className="font-semibold text-[#15803d] text-xs">{result.label}</div>
                        <div className="text-gray-600 text-xs">{result.percentage}</div>
                      </div>
                    </div>
                  ))}

                  {/* Professional Overlay Grid */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <pattern id="analysis-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#15803d" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#analysis-grid)" />
                    </svg>
                  </div>
                </div>

                {/* Professional Scanner Frame */}
                <div className="absolute inset-0 border-2 border-[#15803d] rounded-2xl"></div>
                <div className="absolute -inset-1 border border-[#4ade80] rounded-2xl opacity-50"></div>
                
                {/* Corner Markers */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#15803d]"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#15803d]"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#15803d]"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#15803d]"></div>
              </div>
            </div>

            {/* Information Panel */}
            <div className="space-y-6 sm:space-y-8">
              
              {/* Analysis Results Summary */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#15803d] mb-6">Analysis Results</h3>
                <div className="grid grid-cols-1 gap-4">
                  {analysisResults.map((result, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className={`w-4 h-4 ${result.color} rounded-full shadow-md`}></div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-800">{result.label}</div>
                        <div className="text-xs text-gray-600">Detected level: {result.percentage}</div>
                      </div>
                      <div className={`text-xs px-3 py-1 rounded-full font-medium ${
                        result.severity === 'high' ? 'bg-red-100 text-red-800' :
                        result.severity === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {result.severity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h3 className="text-xl font-bold text-[#15803d] mb-6">AI Analysis Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#4ade80] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Real-time skin condition detection</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#4ade80] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Personalized skincare recommendations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#4ade80] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Progress tracking over time</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#4ade80] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Professional-grade accuracy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
