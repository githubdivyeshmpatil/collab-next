import React from "react";
import {
  UploadCloud,
  Lock,
  UserCheck,
  FileSearch,
  Smartphone,
  CloudLightning,
} from "lucide-react";

const features = [
  {
    icon: <UploadCloud className="w-10 h-10" />,
    title: "One-Click Upload / Download",
    desc: "Transfer any file instantly with a clean, one-tap action.",
  },
  {
    icon: <Lock className="w-10 h-10" />,
    title: "Encrypted Transfers",
    desc: "AES-256 & TLS encryption protect files during transit.",
  },
  {
    icon: <UserCheck className="w-10 h-10" />,
    title: "Role-Based Access",
    desc: "Control who can upload, download or edit files.",
  },
  {
    icon: <FileSearch className="w-10 h-10" />,
    title: "Activity Logging",
    desc: "Track every file movement with detailed logs.",
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Multi-Device Support",
    desc: "Access your FTP workspace from phone, laptop or desktop.",
  },
  {
    icon: <CloudLightning className="w-10 h-10" />,
    title: "Cloud + On-Premise Supported",
    desc: "Runs smoothly on cloud or your local secured servers.",
  },
];

const FtpHowCollabNext = () => {
  return (
    <section className="relative py-24 px-6 lg:px-20 overflow-hidden">

      {/* 🌈 BACKGROUND DESIGN */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Blobs */}
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-indigo-300 blur-[140px] opacity-40 rounded-full" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[450px] h-[450px] bg-purple-300 blur-[160px] opacity-40 rounded-full" />

        {/* Floating Shapes */}
        <div className="absolute top-20 right-24 w-32 h-32 bg-linear-to-br from-indigo-100 to-purple-100 opacity-30 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-linear-to-br from-purple-100 to-pink-100 opacity-20 blur-2xl rounded-full animate-pulse" />
      </div>

      {/* Content */}
      <h2 className="text-4xl font-extrabold text-center text-[#1F2632] mb-14">
        How <span className="text-indigo-600">CollabNext</span> Makes FTP Easier
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((item, i) => (
          <div
            key={i}
            className="group backdrop-blur-xl bg-white/30 border border-white/40 
            shadow-[0_8px_40px_rgba(0,0,0,0.1)]
            rounded-3xl p-8 flex flex-col items-center text-center
            hover:bg-white/50 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <div className="p-4 rounded-2xl bg-white/60 shadow-inner mb-5 text-indigo-600 group-hover:scale-110 transition">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold text-[#1F2632] mb-3">
              {item.title}
            </h3>

            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FtpHowCollabNext;
