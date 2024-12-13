import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger icon
import { IoClose } from "react-icons/io5"; // Close icon
import logo from "../images/logo-asr-1.png"; // Adjust the path if needed

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="relative top-0 left-0 w-full flex justify-between items-center p-4 bg-white z-10 font-sans font-bold">
      {/* Logo linking to the home/landing page */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Company Logo"
          className="h-14 w-auto hover:text-gray-400"
        />
        <span className="font-sans font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">
          ASR Aviation
        </span>
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <GiHamburgerMenu size={30} />
        </button>
      </div>

      {/* Mobile Menu (Full-screen menu) */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full h-full bg-white z-20 flex flex-col items-center justify-center`}
        style={{
          height: isMobileMenuOpen ? "100vh" : "0",
        }}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-black"
        >
          <IoClose size={30} />
        </button>

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-6">
          <Link
            to="/"
            className="text-black text-xl hover:text-yellow-500"
            onClick={closeMenu} // Close the menu on link click
          >
            Home
          </Link>
          <hr className="w-1/2 border-t-2 border-black" />
          <Link
            to="/about"
            className="text-black text-xl hover:text-yellow-500"
            onClick={closeMenu} // Close the menu on link click
          >
            About Us
          </Link>
          <hr className="w-1/2 border-t-2 border-black" />
          <Link
            to="/fleet"
            className="text-black text-xl hover:text-yellow-500"
            onClick={closeMenu} // Close the menu on link click
          >
            Fleet
          </Link>
          <hr className="w-1/2 border-t-2 border-black" />
          <Link
            to="/contact"
            className="text-black text-xl hover:text-yellow-500"
            onClick={closeMenu} // Close the menu on link click
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Navigation Links for Desktop/Laptop Screens */}
      <div className="hidden lg:flex space-x-6 text-black font-sans font-bold">
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
