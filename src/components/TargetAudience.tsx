"use client";

import { motion } from "framer-motion";
import { Target, Globe } from "lucide-react";

const audiences = [
  {
    title: "Working Professionals",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Business Owners",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Students & Job Seekers",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Parents",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600"
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
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#f9faf9] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#042900] mb-6 tracking-tight">
            Who's this for?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Confidently lead meetings, deliver presentations, and handle interactions with clarity and impact.
          </p>
        </motion.div>

        {/* Top Grid: Audience Segments as Images with Titles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-white"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-black text-white leading-tight group-hover:text-[#ebb207] transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
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
