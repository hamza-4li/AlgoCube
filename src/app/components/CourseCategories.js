export default function CourseCategories() {
    return (
      <div className="max-w-6xl mx-auto p-4 space-y-8">
        {/* Software Courses */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12L16 12" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 8L16 8" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 16L16 16" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-sm text-gray-500 mb-4">Software Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  'Back-end Engineering',
                  'Full Stack Engineering',
                  'Front-end Engineering',
                  'Test Engineering',
                  'iOS Engineering',
                  'Android Engineering',
                  'Cyber Security'
                ].map((course) => (
                  <button
                    key={course}
                    className="flex items-center justify-between px-4 py-2 rounded-lg border border-[#B447FF] text-gray-700 hover:bg-[#B447FF] hover:text-white transition-colors group"
                  >
                    <span>{course}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Tech Management Courses */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 21V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M19 12L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 12L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-sm text-gray-500 mb-4">Tech Management Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  'Engineering Manager',
                  'Technical Program Manager',
                  'Product Manager (Tech)'
                ].map((course) => (
                  <button
                    key={course}
                    className="flex items-center justify-between px-4 py-2 rounded-lg border border-[#B447FF] text-gray-700 hover:bg-[#B447FF] hover:text-white transition-colors group"
                  >
                    <span>{course}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Data Courses */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2"/>
                <path d="M20 21H4" stroke="currentColor" strokeWidth="2"/>
                <path d="M4 16L20 16" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-sm text-gray-500 mb-4">Data Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  'Machine Learning',
                  'Data Engineering',
                  'Data Science',
                  'Data Analysis & Business'
                ].map((course) => (
                  <button
                    key={course}
                    className="flex items-center justify-between px-4 py-2 rounded-lg border border-[#B447FF] text-gray-700 hover:bg-[#B447FF] hover:text-white transition-colors group"
                  >
                    <span>{course}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Systems Courses */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 7h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 17h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-sm text-gray-500 mb-4">Systems Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  'Embedded Systems',
                  'Site Reliability Engineering',
                  'Cyber Security'
                ].map((course) => (
                  <button
                    key={course}
                    className="flex items-center justify-between px-4 py-2 rounded-lg border border-[#B447FF] text-gray-700 hover:bg-[#B447FF] hover:text-white transition-colors group"
                  >
                    <span>{course}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }