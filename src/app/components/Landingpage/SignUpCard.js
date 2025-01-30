export default function SignupCard() {
    return (
      <div className="bg-[#B447FF] min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Join more than{' '}
              <span className="text-5xl md:text-6xl">2.5 million</span>
              <br />
              developers globally 1400+
            </h1>
            
            <div className="flex items-center gap-4 text-xl">
              <span className="font-bold">300+ #1</span>
              <div className="flex gap-4 text-sm md:text-base">
                <span>Interactive Courses</span>
                <span>Real Projects</span>
                <span>In Interview Prep</span>
              </div>
            </div>
          </div>
  
          {/* Right Form Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-md w-full mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Create Your Free Account
              </h2>
            </div>
  
            {/* Social Login Options */}
            <div className="flex justify-center gap-4 mb-6">
              {['google', 'github', 'apple', 'facebook', 'linkedin'].map((provider) => (
                <button
                  key={provider}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={`/png/googleIcon.png?height=24&width=24`}
                    alt={`Sign in with ${provider}`}
                    className="w-6 h-6"
                  />
                </button>
              ))}
            </div>
  
            <div className="text-center text-sm text-gray-500 mb-6">
              or sign in with
            </div>
  
            {/* Form */}
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#B447FF] focus:ring-1 focus:ring-[#B447FF] outline-none transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#B447FF] focus:ring-1 focus:ring-[#B447FF] outline-none transition-colors"
                />
              </div>
              
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#B447FF] focus:ring-1 focus:ring-[#B447FF] outline-none transition-colors"
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
  
              <button
                type="submit"
                className="w-full py-3 bg-[#B447FF] hover:bg-[#9339CC] text-white rounded-lg transition-colors font-medium"
              >
                Get Started for Free
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }