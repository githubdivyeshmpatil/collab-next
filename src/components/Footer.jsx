import React from "react";
import { Mail, Linkedin, Youtube } from "lucide-react";
import logo from "../assets/images/collab_logo.png"; // replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-[#1E2330] text-gray-300 py-16 px-8 md:px-24">
      <div className="flex flex-col md:flex-row justify-between gap-16">
        {/* Left Section - Company Info */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Collab Logo" className="w-16 h-16" />
            <h2 className="text-4xl font-semibold text-gray-200">Collab.</h2>
          </div>

          <div className="leading-relaxed">
            <h3 className="font-semibold text-white mb-3 text-lg">Headquarters</h3>
            <p>Avenida D João II, n 51 – Bloco B,</p>
            <p>2nd floor C</p>
            <p>1990–085, Lisbon, Portugal</p>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-400 transition">
              <Linkedin size={22} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Youtube size={22} />
            </a>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <div className="md:w-1/2">
          <h3 className="text-white font-semibold mb-5 text-lg tracking-wide">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
          <div className="flex rounded-full overflow-hidden bg-gray-600 w-full max-w-xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-600 text-white px-6 py-4 w-full outline-none placeholder-gray-300 text-base"
            />
            <button className="bg-indigo-500 text-white px-8 text-sm font-semibold hover:bg-indigo-600 transition">
              SUBMIT
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4 max-w-md leading-relaxed">
            By subscribing, you agree that Collab may store your information for
            newsletter purposes. Read our Privacy Policy.
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-16 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© Copyright 2025 Collab, All Rights Reserved.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-blue-400">Nubitalk Legal Notice</a>
          <span>|</span>
          <a href="#" className="hover:text-blue-400">Nubitalk Data Privacy Notices</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
