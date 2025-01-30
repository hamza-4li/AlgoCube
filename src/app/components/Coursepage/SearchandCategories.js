"use client"; // For Next.js App Router (if using)

import { Search, BookOpen, Code, Database, Boxes, Users, Wand, GraduationCap,ChevronLeft, ChevronRight } from "lucide-react";

const courses = [
    { name: "New Arrivals", icon: Wand },
    { name: "Learning Roadmaps", icon: BookOpen },
    { name: "System Design", icon: Boxes },
    { name: "Coding Interview", icon: Code },
    { name: "Behavioral", icon: Users },
    { name: "Databases", icon: Database },
    { name: "Learn To Code", icon: GraduationCap },
];

export default function SearchandCategories() {
    return (
        <div className="flex flex-col items-center space-y-6 p-6 bg-gradient-to-r from-white to-purple-100">
            {/* Search Bar */}
            <div className="relative w-full max-w-lg">
                <Search className="absolute left-4 top-3 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none shadow-sm"
                />
            </div>

            {/* Course Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
                {courses.map((course, index) => (
                    <button
                        key={index}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-b from-purple-500 to-purple-700 text-white rounded-full shadow-md hover:scale-105 transition-transform"
                    >
                        <course.icon size={18} />
                        <span className="text-sm font-medium">{course.name}</span>
                    </button>
                ))}
            </div>
            <div className="flex items-center justify- p-4 bg-gradient-to-r from-white to-purple-100">
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900">New Arrivals</h2>

                {/* Navigation Buttons */}
                <div className="flex gap-2">
                    <button className="p-2 border border-purple-400 rounded-full text-purple-400 hover:bg-purple-100 transition">
                        <ChevronLeft size={18} />
                    </button>
                    <button className="p-2 border border-purple-400 rounded-full text-purple-600 hover:bg-purple-500 hover:text-white transition">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
