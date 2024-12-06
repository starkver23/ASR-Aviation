import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger icon
import { IoClose } from "react-icons/io5"; // Close icon
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
        <img
          src={logo}
          alt="Company Logo"
          className="h-8 w-auto hover:text-gray-400"
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

      {/* Mobile Menu (Full-screen menu) */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-20 flex flex-col items-center justify-center`}
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
        <div className="flex flex-col items-center space-y-6">
          <Link
            to="/"
            className="text-white text-xl hover:text-yellow-500"
            style={{ animationDelay: "0s" }}
          >
            Home
          </Link>
          <hr className="w-1/2 border-t-2 border-white" />
          <Link
            to="/about"
            className="text-white text-xl hover:text-yellow-500"
            style={{ animationDelay: "0.2s" }}
          >
            About Us
          </Link>
          <hr className="w-1/2 border-t-2 border-white" />
          <Link
            to="/fleet"
            className="text-white text-xl hover:text-yellow-500"
            style={{ animationDelay: "0.4s" }}
          >
            Fleet
          </Link>
          <hr className="w-1/2 border-t-2 border-white" />
          <Link
            to="/contact"
            className="text-white text-xl hover:text-yellow-500"
            style={{ animationDelay: "0.6s" }}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Navigation Links for Desktop/Laptop Screens */}
      <div className="hidden lg:flex space-x-6 text-white font-sans font-bold">
        <Link to="/" className="py-2 px-4 hover:text-yellow-500">
          Home
        </Link>
        <Link to="/about" className="py-2 px-4 hover:text-yellow-500">
          About Us
        </Link>
        <Link to="/fleet" className="py-2 px-4 hover:text-yellow-500">
          Fleet
        </Link>
        <Link to="/contact" className="py-2 px-4 hover:text-yellow-500">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
