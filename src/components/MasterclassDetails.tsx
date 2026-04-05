"use client";

import { motion } from "framer-motion";
import { Clock, Video, Zap } from "lucide-react";

/**
 * MasterclassDetails Component
 * Summarizes key information about the masterclass using clean, stylized cards.
 */

const details = [
  {
    label: "DURATION",
    value: "90 Minutes",
    icon: <Clock className="w-8 h-8 text-[#ebb207]" strokeWidth={2} />,
    bg: "bg-yellow-50/10",
    border: "border-yellow-200/20"
  },
  {
    label: "FORMAT",
    value: "Live / Online",
    icon: <Video className="w-8 h-8 text-blue-400" strokeWidth={2} />,
    bg: "bg-blue-50/10",
    border: "border-blue-200/20"
  },
  {
    label: "FOCUS",
    value: "Speaking Confidence & Real Conversations",
    icon: <Zap className="w-8 h-8 text-purple-400" strokeWidth={2} />,
    bg: "bg-purple-50/10",
    border: "border-purple-200/20"
  }
];

export default function MasterclassDetails() {
  return (
    <section className="py-10 px-6 bg-[#013d45] relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full -ml-32 -mb-32 blur-3xl opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#ebb207] font-black tracking-[0.2em] uppercase text-sm mb-4 block">
            MASTERCLASS DETAILS
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Masterclass Details
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? 1 : -1,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
              }}
              className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 flex flex-col items-center text-center border border-white/20 group overflow-hidden shadow-2xl"
            >
              <div className={`${detail.bg} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform`}>
                {detail.icon}
              </div>
              <h3 className="text-white/40 font-black tracking-widest text-xs uppercase mb-3">
                {detail.label}
              </h3>
              <p className="text-white text-2xl font-black leading-tight max-w-[200px]">
                {detail.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
