export default function CodingRoadmapCard() {
    return (
      <div className="rounded-3xl bg-[#E8E8E8] py-4 mx-4  my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/png/codingimg.png"
              alt="Coding Interview Preparation Illustration"
              className="w-full max-w-[450px]"
            />
          </div>
  
          <div className="space-y-6">
            <div>
              <p className="text-[#B447FF] font-medium text-sm tracking-wide mb-2">CODING</p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Coding Interview Roadmap
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our courses are designed to accelerate your preparation for the coding interviews. 
                Say goodbye to conventional methods and dive into our engaging, pattern-based learning experience. 
                Unlock the power of coding patterns with our meticulously curated courses, tailored to transform 
                the way you approach and excel in coding interviews.
              </p>
            </div>
            
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                Accelerated Pattern-Based Learning
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                Interactive Coding Exercises
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                Active Community Forum
              </li>
            </ul>
  
            <button className="bg-[#B447FF] hover:bg-[#9339CC] text-white px-6 py-2 rounded-md transition-colors flex items-center">
              Visit Roadmap
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-2"
              >
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }