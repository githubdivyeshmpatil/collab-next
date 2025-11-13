import React from "react";
import "../index.css";
import mapImg from "../assets/images/map.png";

const ContactCenterLayout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-stretch justify-center p-6 gap-6">
      
      {/* LEFT CARD - full height */}
      <div className="flex-1 bg-[#1f2632] rounded-2xl text-white p-10 flex flex-col justify-end shadow-lg relative overflow-hidden">
        {/* 🔵 Animated Rings */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="absolute w-40 h-40 border border-cyan-400 rounded-full animate-ring"></div>
          <div className="absolute w-60 h-60 border border-purple-500 rounded-full animate-ring delay-1000"></div>
          <div className="absolute w-80 h-80 border border-pink-500 rounded-full animate-ring delay-2000"></div>
        </div>

        {/* 🧠 Content */}
        <div className="relative z-10">
          <div className="mb-6">
            <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold">◎</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Smarter contact center software.
            <br />Designed for people, powered by AI.
          </h1>

          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            Unify voice, chat, WhatsApp, and social in one platform. Deploy in the
            cloud, on-prem, or hybrid.
          </p>

          {/* Button with ping animation */}
          <div className="relative inline-flex">
            <div className="absolute inline-flex w-full h-full rounded-full bg-white opacity-30 animate-ping"></div>
            <button className="relative bg-transparent border border-white text-white px-4 py-1.5 rounded-full text-sm hover:bg-white hover:text-black transition">
              SCHEDULE A CALL
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT CARD - smaller height */}
      <div
        className="flex-1 md:flex-none md:w-[45%] h-[70vh] rounded-2xl text-gray-900 p-10 flex flex-col justify-between shadow-lg relative overflow-hidden bg-cover bg-center animate-slow-zoom"
        style={{
          backgroundImage: `url(${mapImg})`,
        }}
      >

      
      </div>
      
    </div>
  );
};

export default ContactCenterLayout;
