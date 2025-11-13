import React, { useEffect, useState } from "react";
import logo from "../assets/images/collab_logo.png";
import { Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`sticky top-0 z-50 font-sans transition-colors duration-300 ${
        isScrolled
          ? "bg-[#1F2632] text-white shadow-lg"
          : "bg-white text-[#1F2632] shadow-sm"
      }`}
    >
      <div className="mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo - Left */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Collab Logo" className="h-12" /> {/* ⬅️ Slightly larger logo */}
          <h1 className="text-2xl font-semibold">Collab.</h1>
        </div>

        {/* Centered Nav Links */}
        <div className="hidden lg:flex items-center space-x-10 font-medium text-lg">
          <a
            href="#"
            className={`transition ${
              isScrolled ? "hover:text-[#5D9EFF]" : "hover:text-[#6256F1]"
            }`}
          >
           Collaboration
          </a>
          <a
            href="#"
            className={`transition ${
              isScrolled ? "hover:text-[#5D9EFF]" : "hover:text-[#6256F1]"
            }`}
          >
            FTP
          </a>
          <a
            href="#"
            className={`transition ${
              isScrolled ? "hover:text-[#5D9EFF]" : "hover:text-[#6256F1]"
            }`}
          >
            Remote
          </a>
          <a
            href="#"
            className={`transition ${
              isScrolled ? "hover:text-[#5D9EFF]" : "hover:text-[#6256F1]"
            }`}
          >
            Workflow
          </a>
          
        </div>

        {/* Right Section: Search + Button */}
        <div className="hidden lg:flex items-center space-x-6">
          <Search
            size={22}
            className={`cursor-pointer transition ${
              isScrolled
                ? "hover:text-[#5D9EFF]"
                : "text-[#1F2632] hover:text-[#6256F1]"
            }`}
          />
          <button className="bg-[#6256F1] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5147D0] transition">
            CONTACT US
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`lg:hidden flex flex-col space-y-4 px-6 pb-4 font-medium transition-colors duration-300 ${
            isScrolled ? "text-white bg-[#1F2632]" : "text-[#1F2632] bg-white"
          }`}
        >
          <a
            href="#"
            className={`transition ${
              isScrolled ? "hover:text-[#5D9EFF]" : "hover:text-[#6256F1]"
            }`}
          >
            Home
          </a>
          <a
            href="#"
            className={`transition ${
              isScrolled ? "hover:text-[#5D9EFF]" : "hover:text-[#6256F1]"
            }`}
          >
            About
          </a>
          <a
            href="#"
            className={`transition ${
              isScrolled ? "hover:text-[#5D9EFF]" : "hover:text-[#6256F1]"
            }`}
          >
            Services
          </a>
          <a
            href="#"
            className={`transition ${
              isScrolled ? "hover:text-[#5D9EFF]" : "hover:text-[#6256F1]"
            }`}
          >
            Projects
          </a>
          <a
            href="#"
            className={`transition ${
              isScrolled ? "hover:text-[#5D9EFF]" : "hover:text-[#6256F1]"
            }`}
          >
            Contact
          </a>
          <button className="bg-[#6256F1] text-white px-6 py-3 rounded-full font-semibold">
            CONTACT US
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
