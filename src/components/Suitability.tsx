"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

/**
 * Suitability Component
 * Highlights who the course is designed for and who should avoid it.
 */

const isForContent = [
  "You understand English but hesitate to speak",
  "You often stay silent even when you have something to say",
  "You replay conversations and feel you should have spoken",
  "You are ready to correct this pattern"
];

const isNotForContent = [
  "You are looking for shortcuts",
  "You only want grammar or vocabulary",
  "You prefer passive learning over practice"
];

export default function Suitability() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 }
    }
  };

  return (
    <section className="py-10 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* This Is For You If */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#f0fafa] p-10 md:p-14 rounded-[3rem] border border-[#d1e9e9] relative overflow-hidden group shadow-lg shadow-[#013d45]/5"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#013d45]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />

            <h2 className="text-3xl md:text-5xl font-black text-[#013d45] mb-10 leading-tight">
              This Is For You If
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {isForContent.map((text, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-5 items-start">
                  <div className="bg-[#013d45] w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-[#013d45]/20">
                    <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-gray-700 text-lg md:text-xl font-bold leading-snug">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* This Is Not For You If */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#fffafa] p-10 md:p-14 rounded-[3rem] border border-[#f5e1e1] relative overflow-hidden group shadow-lg shadow-red-500/5"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -mr-16 -mb-16 group-hover:scale-150 transition-transform duration-700" />

            <div className="mb-10">
              <span className="text-sm font-black text-red-500 uppercase tracking-[0.2em] mb-4 block px-3 py-1 bg-red-50 w-fit rounded-lg shadow-sm border border-red-100">
                9️⃣ WHO THIS IS NOT FOR
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-red-900 leading-tight">
                This Is Not For You If
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {isNotForContent.map((text, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-5 items-start">
                  <div className="bg-red-100 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <XCircle className="w-4 h-4 text-red-600" strokeWidth={3} />
                  </div>
                  <p className="text-gray-700 text-lg md:text-xl font-bold leading-snug">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
