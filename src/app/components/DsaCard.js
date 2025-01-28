export default function DSACard() {
    return (
      <div className="bg-[#FDF7FF] rounded-xl p-8 max-w-4xl mx-auto">
        <h2 className="text-[#4A3880] text-3xl font-semibold mb-12">
          What do these companies have in common?
        </h2>
  
        {/* Data Structure Visual */}
        <div className="flex items-center justify-start gap-4 mb-8 overflow-x-auto pb-4">
          {/* Numbers with arrows */}
          <div className="flex items-center">
            <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center text-xl">
              8
            </div>
            <div className="w-8 h-[2px] bg-[#40E6D2]"></div>
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#40E6D2]"></div>
          </div>
  
          <div className="flex items-center">
            <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center text-xl">
              3
            </div>
            <div className="w-8 h-[2px] bg-[#40E6D2]"></div>
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#40E6D2]"></div>
          </div>
  
          <div className="flex items-center">
            <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center text-xl">
              9
            </div>
            <div className="w-8 h-[2px] bg-[#40E6D2]"></div>
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#40E6D2]"></div>
          </div>
  
          <div className="flex items-center">
            <div className="w-12 h-12 border-2 border-[#B447FF] rounded flex items-center justify-center text-xl">
              7
            </div>
            <div className="relative">
              <div className="w-8 h-[2px] bg-[#B447FF]"></div>
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#B447FF]"></div>
              <div className="absolute top-[-24px] left-4 w-[2px] h-6 bg-[#B447FF]"></div>
              <div className="absolute top-[-24px] left-4 w-16 h-[2px] bg-[#B447FF]"></div>
              <div className="absolute top-[-24px] right-0 w-12 h-12 border-2 border-[#40E6D2] rounded flex items-center justify-center text-xl">
                1
              </div>
            </div>
          </div>
  
          <div className="flex items-center">
            <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center text-xl">
              6
            </div>
          </div>
        </div>
  
        {/* Text Content */}
        <div className="space-y-6">
          <p className="text-gray-700 text-lg">
            They all test their candidates on{' '}
            <span className="text-[#B447FF] font-medium">
              Data Structures{' '}
              <br className="hidden sm:inline" />
              & Algorithms(DSA)
            </span>
          </p>
          
          <p className="text-gray-600">
            In our DSA course, you'll learn how to master data structures like 
            stacks, queues, linked lists, trees and graphs and the algorithms 
            that you need to control them.
          </p>
          
          <p className="text-gray-600">
            Aspire to work for the best.
          </p>
  
          <button className="text-[#B447FF] hover:text-[#9339CC] transition-colors flex items-center gap-2">
            Check out the course
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    )
  }