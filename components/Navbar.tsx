import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-[#f6f6f6] w-full">
      {/* Logo and text container */}
      <div className="flex flex-col items-center justify-center text-center py-6">
        <h1 className="text-5xl font-bold mb-5">GAT VTU Youth Fest 2025</h1>
        <p className="text-2xl mb-10 py-6 text-[#3f3f3f]">
          Celebrating 25 Years of Excellence
        </p>
      </div>

      {/* Navbar links */}
      <nav>
        <ul className="flex justify-center text-2xl space-x-8 bg-gray-200 py-3 w-full">
          <li>
            <Link
              href="/"
              className="bg-gray-200 px-4 py-2 rounded-md transition-all duration-300 hover:bg-yellow-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="bg-gray-200 px-4 py-2 rounded-md transition-all duration-300 hover:bg-yellow-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className="bg-gray-200 px-4 py-2 rounded-md transition-all duration-300 hover:bg-yellow-500"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/schedule"
              className="bg-gray-200 px-4 py-2 rounded-md transition-all duration-300 hover:bg-yellow-500"
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="bg-gray-200 px-4 py-2 rounded-md transition-all duration-300 hover:bg-yellow-500"
            >
              Login/Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
