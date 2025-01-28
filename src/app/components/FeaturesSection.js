'use client'

import { useState } from 'react'

export default function FeaturesSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const features = [
    {
      title: "Lifetime access",
      description: "Purchase once and enjoy unlimited access, including all future updates."
    },
    {
      title: "A one-stop portal for tech interviews",
      description: "Comprehensive preparation materials covering all aspects of technical interviews."
    },
    {
      title: "#1 online system design and coding course",
      description: "Industry-leading curriculum designed by experts to help you excel in your interviews."
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-[#B447FF] text-sm font-medium tracking-wide">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl font-semibold text-gray-800">
              What AlgoCube Gives You?
            </h2>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800">{feature.title}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-600 animate-fadeIn">
                    {feature.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image - Placeholder for your image */}
        <div className="flex justify-center">
          <div className="w-72 h-72 bg-[#B447FF]">
            {/* Replace this div with your image */}
          </div>
        </div>
      </div>
    </div>
  )
}