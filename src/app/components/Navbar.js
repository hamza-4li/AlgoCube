import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white text-black px-6 py-3 flex items-center justify-between">
      {/* Left: Logo + Company Name */}
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="AlgoCube Logo" className="h-10 w-10" />
        <Link href={"/"} className="hover:text-gray-400">ALGOCUBE</Link>
      </div>

      {/* Center: Navigation Links */}
      <ul className="flex space-x-6 text-gray-950">
        <li><Link href="/courses" className="hover:text-gray-400">Courses</Link></li>
        <li><Link href="/pricing" className="hover:text-gray-400">Pricing</Link></li>
        <li className="relative group">
          <span className="hover:text-black cursor-pointer">Career Tools ▾</span>
          {/* Dropdown (Optional) */}
          <div className="absolute hidden group-hover:block bg-gray-500 text-black p-2 mt-1 rounded">
            <Link href="/resume" className="block px-4 py-1 hover:bg-gray-400">Resume Builder</Link>
            <Link href="/interviews" className="block px-4 py-1 hover:bg-gray-400">Interview Prep</Link>
          </div>
        </li>
        <li className="relative group">
          <span className="hover:text-black cursor-pointer">Resources ▾</span>
          {/* Dropdown (Optional) */}
          <div className="absolute hidden group-hover:block bg-gray-800 text-white p-2 mt-1 rounded">
            <Link href="/blogs" className="block px-4 py-1 hover:bg-gray-700">Blogs</Link>
            <Link href="/community" className="block px-4 py-1 hover:bg-gray-700">Community</Link>
          </div>
        </li>
      </ul>

      {/* Right: Contact Us + Loading Spinner + Buttons */}
      <div className="flex items-center space-x-6">
        <Link href="/contact" className="text-black hover:text-gray-400">Contact Us</Link>
        
        {/* Loading Spinner
        <div className="w-4 h-4 border-2 border-gray-300 border-t-white rounded-full animate-spin"></div> */}

        {/* Login Button */}
        <Link href="/login" className="border border-purple-400 text-purple-400 px-4 py-1 rounded-md hover:bg-purple-500 hover:text-white">
          Log in
        </Link>

        {/* Join for Free Button */}
        <Link href="/signup" className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 flex items-center">
          Join For Free →
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
