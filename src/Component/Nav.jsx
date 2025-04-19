import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import img from "/SEED Logojpg.jpg";

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-green-700 text-white px-4 py-3 shadow-md z-50 fixed top-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={img} alt="Seed Salone Logo" className="h-10 w-auto object-contain" />
          <span className="text-xl font-bold">Seed Salone</span>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:items-center md:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-green-700 md:bg-transparent p-4 md:p-0 z-40 transition-all duration-300 ease-in-out ${mobileMenuOpen ? "block" : "hidden"
            }`}
        >
          <li>
            <a
              href="#home"
              onClick={handleLinkClick}
              className="hover:underline block py-1"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={handleLinkClick}
              className="hover:underline block py-1"
            >
              About
            </a>
          </li>

         
          {/* Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:underline py-1"
            >
              Areas of Intervention <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <ul className="absolute md:top-8 top-full left-0 bg-white text-black w-64 shadow-lg rounded p-2 z-50">
                <li className="py-1 px-2 hover:bg-gray-100">
                  <Link to="/entrepreneurship" onClick={handleLinkClick}>
                    Entrepreneurship
                  </Link>
                </li>
                <li className="py-1 px-2 hover:bg-gray-100">
                  <Link to="/education" onClick={handleLinkClick}>
                    Education
                  </Link>
                </li>
                <li className="py-1 px-2 hover:bg-gray-100">
                  <Link to="/environment" onClick={handleLinkClick}>
                    Environment & Climate Change
                  </Link>
                </li>
                <li className="py-1 px-2 hover:bg-gray-100">
                  <Link to="/peace" onClick={handleLinkClick}>
                    Peace & Human Security
                  </Link>
                </li>
                <li className="py-1 px-2 hover:bg-gray-100">
                  <Link to="/founderMessage" onClick={handleLinkClick}>
                   Founder's Message
                  </Link>
                </li>
              </ul>
            )}
          </li>


          <li>
            <a
              href="#bold-visionary"
              onClick={handleLinkClick}
              className="hover:underline block py-1"
            >
              Bold & Visionary
            </a>
          </li>
          <li>
            <a
              href="#meet-team"
              onClick={handleLinkClick}
              className="hover:underline block py-1"
            >
              Meet Our Team
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              onClick={handleLinkClick}
              className="hover:underline block py-1"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
