import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex items-center justify-between px-10 py-16 bg-white m-5">
      {/* Left Side: Text Content */}
      <div className="max-w-lg">
        <p className="text-sm font-semibold text-purple-500 uppercase">Best Learning Platform</p>
        <h1 className="text-4xl font-bold mt-2">
          Grokking System Design and <span className="text-purple-600">Coding</span> Interview
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          One-Stop Portal For Tech Interviews.
        </p>
        <Link
          href="/courses"
          className="mt-6 inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Explore Courses →
        </Link>
      </div>

      {/* Right Side: Illustration Image */}
      <div className="w-1/2">
        <Image src="/png/heroimg.png" width={500} height={400} alt="Hero Image" />
      </div>
    </section>
  );
};

export default Hero;
