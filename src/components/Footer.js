import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"; // Import social icons

const Footer = () => {
  return (
    <footer className="bg-transparent text-blue py-4 mt-8 font-sans font-thin">
      {/* Social Media Icons */}
      <div className="flex justify-center text-center mb-4">
        <a
          href="https://www.linkedin.com/company/asr-aviation/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-6 text-black hover:text-gray-700" // Black color with hover effect
        >
          <FaLinkedin size={24} /> {/* Reduced size */}
        </a>
        <a
          href="https://www.instagram.com/asr.aviation/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-6 text-black hover:text-gray-700" // Black color with hover effect
        >
          <FaInstagram size={24} /> {/* Reduced size */}
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-6 text-black hover:text-gray-700" // Black color with hover effect
        >
          <FaTwitter size={24} /> {/* Reduced size */}
        </a>
      </div>

      {/* Rights Reserved Text */}
      <div className="text-center mt-3">
        © 2024 Aviation Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
