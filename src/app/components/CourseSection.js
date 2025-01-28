export default function CourseSection() {
    const courses = [
      {
        image: "/png/onlineLearning1.png?height=200&width=400",
        title: "Grokking the Coding Interview: Patterns for Coding Questions",
        description: "Grokking the Coding Interview Patterns in Java, Python, JS, C++, C#, and Go. The most comprehensive course with 476 Lessons.",
        rating: 4.6,
        totalRatings: 2014
      },
      {
        image: "/png/onlineLearning2.png?height=200&width=400",
        title: "Grokking the Coding Interview: Patterns for Coding Questions",
        description: "Grokking the Coding Interview Patterns in Java, Python, JS, C++, C#, and Go. The most comprehensive course with 476 Lessons.",
        rating: 4.6,
        totalRatings: 2014
      },
      {
        image: "/png/onlineLearning3.png?height=200&width=400",
        title: "Grokking the Coding Interview: Patterns for Coding Questions",
        description: "Grokking the Coding Interview Patterns in Java, Python, JS, C++, C#, and Go. The most comprehensive course with 476 Lessons.",
        rating: 4.6,
        totalRatings: 2014
      }
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Stop Thinking, Start{' '}
          <span className="text-[#B447FF]">Grokking</span>
        </h2>
  
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
              {/* Course Image */}
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="object-cover w-full h-full"
                />
              </div>
  
              {/* Course Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-semibold text-xl text-gray-800">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {course.description}
                </p>
  
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-lg">{course.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">
                    ({course.totalRatings} ratings)
                  </span>
                </div>
  
                {/* Preview Button */}
                <button className="w-full py-3 bg-[#B447FF] hover:bg-[#9339CC] text-white rounded-lg transition-colors">
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {/* See All Courses Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#B447FF] hover:bg-[#9339CC] text-white rounded-lg transition-colors">
            See All Courses
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
    );
  }