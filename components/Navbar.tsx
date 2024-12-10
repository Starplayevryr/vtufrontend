import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
      {/* Logo and Text on the top-left corner */}
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/images/college-logo.png" // Replace with your logo image path
            alt="Logo"
            className="w-20 h-auto"
          />
        </Link>
        {/* Text next to the logo */}
        <span className="ml-4 text-base text-white font-semibold">Global Academy of Technology</span>
      </div>

      {/* Navbar links aligned to the top-right */}
      <nav>
        <ul className="flex justify-end space-x-8 bg-opacity-0">
          <li>
            <Link
              href="/"
              className="text-lg text-white transition-all duration-300 hover:text-yellow-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-lg text-white transition-all duration-300 hover:text-yellow-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className="text-lg text-white transition-all duration-300 hover:text-yellow-500"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/schedule"
              className="text-lg text-white transition-all duration-300 hover:text-yellow-500"
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="text-lg text-white transition-all duration-300 hover:text-yellow-500"
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
