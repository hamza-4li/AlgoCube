export default function Heading() {
    return (
      <div className="bg-gradient-to-r from-white to-purple-100 py-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Discover the{" "}
          <span className="text-purple-600 font-bold">Roadmap</span>
          <span className="inline-block"><img className="h-8 w-8" src="/png/routeIcon.png"/></span> and
        </h2>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Professional Courses
        </h2>
      </div>
    );
  }