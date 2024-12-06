import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-asr.png"; // Adjust the path if needed

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-900 bg-opacity-80 z-10 font-sans font-bold">
      {/* Logo linking to the home/landing page */}
      <Link to="/" className="flex items-center space-x-2">
        {/* Logo image */}
        <img
          src={logo}
          alt="Company Logo"
          className="h-8 w-auto hover:text-gray-400" // Adjust size as needed
        />
        <span className="font-sans font-bold text-white text-2xl hover:text-yellow-500">
          ASR Aviation
        </span>
      </Link>

      <div className="space-x-4 text-white font-sans font-bold">
        <Link to="/" className="hover:text-yellow-500">
          Home
        </Link>
        <Link to="/about" className="hover:text-yellow-500">
          About Us
        </Link>
        <Link to="/fleet" className="hover:text-yellow-500">
          Fleet
        </Link>
        <Link to="/contact" className="hover:text-yellow-500">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
