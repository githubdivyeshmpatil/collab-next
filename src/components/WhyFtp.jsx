import React from "react";
import { ShieldCheck, UploadCloud, Users, KeyRound } from "lucide-react";

const points = [
  {
    icon: <UploadCloud className="w-12 h-12 text-indigo-600" />,
    title: "Large File Transfer",
    desc: "FTP allows remote teams to transfer heavy files easily without slowdowns.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-indigo-600" />,
    title: "Secure File Sharing",
    desc: "Encrypted connections ensure that every file stays protected.",
  },
  {
    icon: <KeyRound className="w-12 h-12 text-indigo-600" />,
    title: "Permission-Based Access",
    desc: "Admins can control who can upload, download, or edit files.",
  },
  {
    icon: <Users className="w-12 h-12 text-indigo-600" />,
    title: "Remote Collaboration",
    desc: "Teams working from anywhere can share, sync, and manage files efficiently.",
  },
];

const WhyFtp = () => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-linear-to-b from-white to-indigo-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#1F2632]">
        Why FTP is Important for Remote Teams
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {points.map((item, index) => (
          <div
            key={index}
            className="group bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center 
            transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
          >
            <div className="p-4 bg-indigo-100 rounded-full mb-5">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold text-[#1F2632] mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyFtp;
