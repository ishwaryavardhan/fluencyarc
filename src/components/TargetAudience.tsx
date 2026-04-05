"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp, GraduationCap, Users, Target, Globe } from "lucide-react";

/**
 * TargetAudience Component
 * Shows who the course is designed for with premium animations and styling.
 */

const audiences = [
  {
    title: "Working Professionals",
    description: "Ace meetings, presentations, and client interactions with confidence.",
    icon: <Briefcase className="w-6 h-6 text-[#f3b23c]" />,
    highlight: false
  },
  {
    title: "Business Owners",
    description: "Grow your business globally by communicating effectively with clients, partners, and stakeholders worldwide.",
    icon: <TrendingUp className="w-6 h-6 text-[#f3b23c]" />,
    highlight: false
  },
  {
    title: "Students & Job Seekers",
    description: "Excel in interviews, group discussions, and presentations to secure your dream opportunities.",
    icon: <GraduationCap className="w-6 h-6 text-[#f3b23c]" />,
    highlight: true
  },
  {
    title: "Parents",
    description: "Communicate confidently at PTA meetings and become a strong role model for your children.",
    icon: <Users className="w-6 h-6 text-[#f3b23c]" />,
    highlight: false
  }
];

const features = [
  {
    title: "100% Practical Speaking",
    description: "No unnecessary grammar overload, just focused, real conversation practice that builds confidence.",
    icon: <Target className="w-6 h-6 text-[#f3b23c]" />
  },
  {
    title: "Real-World Scenarios",
    description: "Practice everyday situations like interviews, travel, networking, and professional conversations.",
    icon: <Globe className="w-6 h-6 text-[#f3b23c]" />
  }
];

export default function TargetAudience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-[#f9faf9] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#042900] mb-6 tracking-tight">
            Who is this course for?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Confidently lead meetings, deliver presentations, and handle client
            interactions with clarity and impact.
          </p>
        </motion.div>

        {/* Top Grid: Audience Segments */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 0.5 : -0.5 }}
              className={`group p-8 rounded-2xl transition-all duration-300 relative flex flex-col items-start ${
                item.highlight
                  ? "bg-white border-2 border-[#ebb207] shadow-[0_20px_50px_-20px_rgba(235,178,7,0.3)]"
                  : "bg-white border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
              }`}
            >
              <div className="bg-[#fff9e6] w-12 h-12 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-[19px] font-bold text-[#042900] mb-4 leading-tight group-hover:text-[#ebb207] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Grid: Key Features */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex gap-8 items-start"
            >
              <div className="bg-[#fff9e6] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#042900] mb-3 leading-tight group-hover:text-[#ebb207] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
