// Component/Nav2.js
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import img from "/SEED Logojpg.jpg";

const Nav2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-green-700 text-white px-4 py-3 shadow-md z-50 fixed top-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={img}
            alt="Seed Salone Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-bold">Seed Salone</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-green-700 md:bg-transparent p-4 md:p-0 z-40 transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              onClick={handleLinkClick}
              className="hover:underline block py-1"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/entrepreneurship"
              onClick={handleLinkClick}
              className="hover:underline block py-1"
            >
              Entrepreneurship
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              onClick={handleLinkClick}
              className="hover:underline block py-1"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="/environment"
              onClick={handleLinkClick}
              className="hover:underline block py-1"
            >
              Environment & Climate Change
            </Link>
          </li>
          <li>
            <Link
              to="/peace"
              onClick={handleLinkClick}
              className="hover:underline block py-1"
            >
              Peace & Human Security
            </Link>
          </li>
          <li>
            <Link
              to="/founderMessage"
              onClick={handleLinkClick}
              className="hover:underline block py-1"
            >
               Founder's Message
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav2;
