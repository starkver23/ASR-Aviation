import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"; // Using react-icons for the hamburger icon
import { IoClose } from "react-icons/io5"; // Using react-icons for the close icon
import logo from "../images/logo-asr.png"; // Adjust the path if needed

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-900 bg-opacity-80 z-10 font-sans font-bold">
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

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <GiHamburgerMenu size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-20 transition-all duration-500 ease-in-out flex flex-col items-center justify-center`}
        style={{
          height: isMobileMenuOpen ? "100vh" : "0",
        }}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white"
        >
          <IoClose size={30} />
        </button>

        {/* Navigation Links */}
        <div
          className="flex flex-col items-center space-y-6"
          style={{
            animation: isMobileMenuOpen
              ? "slideDown 0.5s ease-out forwards"
              : "none",
          }}
        >
          <Link
            to="/"
            className="text-white text-xl hover:text-yellow-500 transform transition-all duration-500 ease-in-out"
            style={{ animationDelay: "0s" }}
          >
            Home
          </Link>
          <hr className="w-1/2 border-t-2 border-white" />
          <Link
            to="/about"
            className="text-white text-xl hover:text-yellow-500 transform transition-all duration-500 ease-in-out"
            style={{ animationDelay: "0.2s" }}
          >
            About Us
          </Link>
          <hr className="w-1/2 border-t-2 border-white" />
          <Link
            to="/fleet"
            className="text-white text-xl hover:text-yellow-500 transform transition-all duration-500 ease-in-out"
            style={{ animationDelay: "0.4s" }}
          >
            Fleet
          </Link>
          <hr className="w-1/2 border-t-2 border-white" />
          <Link
            to="/contact"
            className="text-white text-xl hover:text-yellow-500 transform transition-all duration-500 ease-in-out"
            style={{ animationDelay: "0.6s" }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
