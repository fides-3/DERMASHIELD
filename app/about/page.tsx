"use client"
import Header from '../components/header'
import Image from 'next/image'
import { useState } from 'react'

export default function About() {
  const [activeTab, setActiveTab] = useState('mission')

  const stats = [
    { number: '98%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Skin Monitoring' },
    { number: '50K+', label: 'Happy Users' },
    { number: '15+', label: 'Skin Conditions Detected' }
  ]

  return (
    <>
      <Header />
      <section className="py-20 bg-gradient-to-b from-white to-[#f0fdf4] min-h-screen pt-28 relative overflow-hidden">
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
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#15803d] mb-6">About DermaShield</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Revolutionizing skincare through the power of artificial intelligence and expert dermatological knowledge
            </p>
          </div>

          {/* Main Content Tabs */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['mission', 'technology', 'impact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                    ${activeTab === tab 
                      ? 'bg-[#15803d] text-white shadow-lg' 
                      : 'bg-[#86efac] text-[#052e16] hover:bg-[#4ade80]'}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                {activeTab === 'mission' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-[#052e16]">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      DermaShield&apos;s mission is to democratize access to advanced skincare technology.
                      We believe everyone deserves access to professional-grade skin analysis and care,
                      regardless of their location or circumstances.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#15803d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Accessible skincare technology for all
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#15803d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Continuous innovation in AI-driven analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#15803d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Empowering users with knowledge and tools
                      </li>
                    </ul>
                  </div>
                )}
                {activeTab === 'technology' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-[#052e16]">Our Technology</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our cutting-edge AI technology combines computer vision with deep learning algorithms
                      to provide accurate, real-time skin analysis. We utilize advanced sensors and
                      proprietary algorithms to detect and track various skin conditions.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#15803d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Advanced AI-powered analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#15803d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Real-time monitoring and alerts
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#15803d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Personalized care recommendations
                      </li>
                    </ul>
                  </div>
                )}
                {activeTab === 'impact' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-[#052e16]">Our Impact</h3>
                    <p className="text-gray-600 leading-relaxed">
                      DermaShield has transformed how people approach skincare, making professional-grade
                      analysis accessible to everyone. Our technology has helped thousands of users
                      better understand and care for their skin.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#15803d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Global reach and accessibility
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#15803d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Improved skin health outcomes
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#15803d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Enhanced user awareness
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative h-[400px] order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/landingimage.jpeg"
                  alt="Skincare Technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-[#15803d] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}