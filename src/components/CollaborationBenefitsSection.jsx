import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Cloud,
  ShieldCheck,
  FileSpreadsheet,
  Clock,
} from "lucide-react";

const benefits = [
  {
    icon: <Users className="w-10 h-10 text-indigo-600" />,
    title: "Real-time Collaboration",
    description:
      "Work together instantly — co-edit, share updates, and stay aligned across teams.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-indigo-600" />,
    title: "Cloud-Based Workspace",
    description:
      "Access your workspace anywhere, anytime with cloud-hosted reliability.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
    title: "Secure Data & Access Control",
    description:
      "Keep your data protected with enterprise-grade encryption and permissions.",
  },
  {
    icon: <FileSpreadsheet className="w-10 h-10 text-indigo-600" />,
    title: "Custom Workflow Templates",
    description:
      "Set up reusable templates to match your unique project processes.",
  },
  {
    icon: <Clock className="w-10 h-10 text-indigo-600" />,
    title: "24/7 Availability",
    description:
      "Stay productive anytime with always-on cloud servers and uptime monitoring.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const CollaborationBenefitsSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Why Choose CollabNext?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover how CollabNext transforms teamwork into a seamless, secure,
          and powerful experience.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(99,102,241,0.2)",
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
            }}
            className="p-8 bg-white rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="mb-4"
            >
              {benefit.icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CollaborationBenefitsSection;
