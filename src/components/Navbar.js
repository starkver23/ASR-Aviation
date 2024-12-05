import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-asr.jpeg"; // Adjust the path if needed

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-transparent z-10 font-sans font-thin">
      {/* Logo linking to the home/landing page */}
      <Link to="/" className="flex items-center space-x-2">
        {/* Logo image */}
        <img
          src={logo}
          alt="Company Logo"
          className="h-8 w-auto hover:text-gray-400" // Adjust size as needed
        />
        <span className="font-sans font-thin text-blue text-2xl font-bold hover:text-gray-400">
          ASR Aviation
        </span>
      </Link>

      <div className="space-x-4 text-black font-sans font-thin">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-400">
          About Us
        </Link>
        <Link to="/fleet" className="hover:text-gray-400">
          Fleet
        </Link>
        <Link to="/contact" className="hover:text-gray-400">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
