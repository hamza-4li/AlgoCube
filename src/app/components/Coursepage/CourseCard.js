import React from "react"
import { Star } from "lucide-react"

export default function CourseCard() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-[360px] overflow-hidden bg-white rounded-lg shadow-md">
        {/* Header Section with Gradient */}
        <div className="relative bg-gradient-to-r from-purple-600 via-yellow-400 to-yellow-300 p-5">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 text-white mb-4">
            <div className="w-6 h-6 rounded-full bg-white/90" />
            <span className="text-sm">Learn Smart Future</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-white mb-6">Online Learning</h2>

          {/* Discount Badge */}
          <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center rotate-12">
            <div className="text-white text-center leading-tight">
              <span className="text-xl font-bold">35%</span>
              <br />
              <span className="text-xs">OFF</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-white/20" />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Course Title */}
          <h3 className="text-lg font-bold text-gray-800 mb-3">
            Grokking the Coding Interview: Patterns for Coding Questions
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4">
            Grokking the Coding Interview Patterns in Java, Python, JS, C++, C#, and Go. The most comprehensive course
            with 476 Lessons.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold">4.6</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400"}`} />
              ))}
            </div>
            <span className="text-sm text-gray-500">(2014 ratings)</span>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-purple-600">$37</span>
              <span className="text-sm text-gray-400 line-through">$154</span>
            </div>
            <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

