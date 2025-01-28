export default function DesignCard() {
    return (
      <div className="rounded-lg shadow-lg overflow-hidden bg-[#FDF7FF]">
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-[#B447FF] font-medium text-sm tracking-wide mb-2">DESIGN</p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                System Design Interview Roadmap
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Revolutionize your understanding of system design with our diverse course offerings. 
                Designed for everyone, from beginners to seasoned professionals, our courses empower 
                you to level up your system design skills and impress in your next interview.
              </p>
            </div>
            
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                Comprehensive Course Offerings
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                Real-World System Design Case Studies
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                Regular Content Updates
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                Engaging Peer Community
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
  
          <div className="flex justify-center">
            <img
              src="/png/sysDesignimg.png"
              alt="System Design Roadmap Illustration"
              className="w-full max-w-[400px]"
            />
          </div>
        </div>
      </div>
    )
  }