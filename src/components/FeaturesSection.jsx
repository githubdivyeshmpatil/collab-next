import React from "react";
import { 
  Workflow, 
  Clock, 
  Users, 
  Layout, 
  FileText 
} from "lucide-react";

const features = [
  {
    icon: <Workflow className="w-10 h-10 text-indigo-300" />,
    title: "Remote Workflow Management",
    description: "Plan, track, and optimize team workflows from anywhere.",
    bg: "bg-gradient-to-br from-[#1F2632] to-[#2B3142]",
  },
  {
    icon: <Clock className="w-10 h-10 text-amber-300" />,
    title: "Attendance & Activity Tracking",
    description: "Smart attendance with automated daily reports and logs.",
    bg: "bg-gradient-to-br from-[#2C2A4A] to-[#3A3D64]",
  },
  {
    icon: <Users className="w-10 h-10 text-emerald-300" />,
    title: "Live Collaboration Space",
    description: "Chat, video meet, and co-editing workspace for seamless teamwork.",
    bg: "bg-gradient-to-br from-[#1B2E28] to-[#244C3E]",
  },
  {
    icon: <Layout className="w-10 h-10 text-sky-300" />,
    title: "Task & Project Board (PTF)",
    description: "Organize projects with a Kanban-style timeline and task flow.",
    bg: "bg-gradient-to-br from-[#1F2632] to-[#2D3C54]",
  },
  {
    icon: <FileText className="w-10 h-10 text-pink-300" />,
    title: "File Sharing & Storage",
    description: "Secure and organized document exchange for your team.",
    bg: "bg-gradient-to-br from-[#3B243B] to-[#523F5E]",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Features & Solutions
        </h2>
        <p className="text-gray-600">
          Empower your remote teams with all-in-one tools for collaboration, tracking, and performance.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center ${feature.bg}`}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
