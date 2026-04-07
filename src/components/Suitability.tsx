"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const isForContent = [
  {
    title: "1️⃣ You understand English but hesitate to speak",
    desc: "You can follow conversations, read comfortably, and understand what others are saying — but when it’s your turn to speak, you pause or hold back."
  },
  {
    title: "2️⃣ You often have something to say, but don’t say it",
    desc: "In meetings, discussions, or everyday situations, you have ideas — but you stay silent because you are unsure how to express them."
  },
  {
    title: "3️⃣ You think in your mind, but struggle to say it out loud",
    desc: "Your thoughts are clear internally, but converting them into spoken English feels slow, difficult, or stressful."
  },
  {
    title: "4️⃣ You are tired of depending on “perfect sentences”",
    desc: "You wait to form the right sentence before speaking — and because of that, you miss opportunities to participate."
  },
  {
    title: "5️⃣ You are ready to practice speaking, not just learn more",
    desc: "You are not looking for more grammar or vocabulary. You are ready to work on how you actually speak in real conversations."
  }
];

const isNotForContent = [
  {
    title: "1️⃣ You are looking for shortcuts or quick fixes",
    desc: "If you expect to become fluent in a few days without consistent practice, this will not work for you. This course focuses on real change, not quick results."
  },
  {
    title: "2️⃣ You only want to learn grammar or vocabulary",
    desc: "If your focus is only on rules, exercises, or word lists, this is not the right place. This course is about speaking behaviour, not theory."
  },
  {
    title: "3️⃣ You prefer passive learning",
    desc: "If you like watching videos but do not actively practise speaking, you will not benefit from this. Improvement comes from participation, not consumption."
  },
  {
    title: "4️⃣ You are not willing to feel slightly uncomfortable",
    desc: "Speaking more requires stepping out of your comfort zone. If you want to stay completely comfortable and avoid mistakes, this approach will feel difficult."
  },
  {
    title: "5️⃣ You are not ready to change your speaking habits",
    desc: "If you are not open to trying a different way of speaking — even if it feels unfamiliar at first — this course may not be effective for you."
  }
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
              Who is this course for?
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {isForContent.map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-5 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-[#013d45]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-gray-800 text-lg md:text-xl font-bold leading-snug mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-[15px] font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
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
                WHO THIS IS NOT FOR
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-red-900 leading-tight">
                Not for you
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {isNotForContent.map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-5 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <XCircle className="w-6 h-6 text-red-600" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-gray-800 text-lg md:text-xl font-bold leading-snug mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-[15px] font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
