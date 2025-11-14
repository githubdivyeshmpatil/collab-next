import React from "react";
import mapImage from "../assets/images/map.png";
import { Mail, Phone, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative bg-linear-to-br from-indigo-50 via-white to-indigo-100 py-20 px-6 md:px-12 overflow-hidden">
      {/* Background Accent Circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-40 -z-10"></div>

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Let’s Build Your Remote Future
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ready to transform your team’s workflow? Reach out for a personalized demo or collaboration plan.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl w-full md:w-1/2 p-8 border border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-gray-900">
            Get in Touch
          </h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="How can we help?"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-medium py-3 rounded-xl hover:bg-indigo-700 transition-all"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-6 text-gray-600 text-sm space-y-2">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-600" /> support@collabnext.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-indigo-600" /> +1 (800) 555-0102
            </p>
          </div>
        </div>

        {/* Map Image / Office Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src={mapImage}
              alt="Office Locations Map"
              className="w-full rounded-3xl shadow-lg border border-gray-200"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-xl shadow text-sm font-medium text-gray-800">
              🌍 Offices in New York | London | Mumbai
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
