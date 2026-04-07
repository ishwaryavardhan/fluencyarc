"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

function PillAccordion({ title, desc, isRed = false }: { title: string, desc: string, isRed?: boolean }) {
  return (
    <div className={`group relative rounded-[2.5rem] p-[1.5px] bg-gradient-to-r ${isRed ? 'from-red-500/50 to-orange-500/50' : 'from-[#01a47e] to-[#ebb207]'} shadow-sm hover:shadow-xl transition-all cursor-pointer`}>
      <div className={`rounded-[2.5rem] px-5 py-3 md:px-6 md:py-4 relative overflow-hidden flex flex-col justify-center ${isRed ? 'bg-[#1a0505]' : 'bg-[#021f1a]'}`}>
        {/* Glow effect */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${isRed ? 'from-red-500 to-orange-400' : 'from-[#01a47e] to-[#ebb207]'} blur-2xl`} />

        <div className="flex justify-between items-center z-10 relative gap-4">
           <span className="text-white font-bold text-[14px] md:text-[15px] leading-snug">
              {title}
           </span>
           <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border ${isRed ? 'border-red-500/30 bg-red-500/10 group-hover:bg-red-500/30' : 'border-[#01a47e]/30 bg-[#01a47e]/10 group-hover:bg-[#01a47e]/30'} transition-all duration-300`}>
             <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-45 ${isRed ? 'text-red-400' : 'text-[#ebb207]'}`} />
           </div>
        </div>
        
        {/* Description expanding on hover */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out z-10 relative">
           <div className="overflow-hidden">
               <p className={`text-sm md:text-[15px] mt-3 pt-3 border-t ${isRed ? 'border-red-900/50 text-red-100/80' : 'border-white/10 text-white/80'} leading-relaxed font-medium`}>
                 {desc}
               </p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default function Suitability() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 }
    }
  };

  return (
    <section className="py-4 px-6 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">

          {/* This Is For You If */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#f4fbfb] p-8 md:p-14 rounded-[3rem] border border-[#e1efef] relative overflow-hidden group shadow-xl shadow-[#013d45]/5"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#013d45]/5 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000 blur-3xl text-red-500" />

            <div className="mb-12 relative z-10">
              <span className="text-sm font-black text-[#01a47e] uppercase tracking-[0.2em] mb-4 block">
                YOUR PROFILE
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#013d45] leading-tight">
                Who is this for?
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 relative z-10"
            >
              {isForContent.map((item, i) => (
                <motion.div key={i} variants={itemVariants}>
                   <PillAccordion title={item.title} desc={item.desc} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* This Is Not For You If */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#fffdfd] p-8 md:p-14 rounded-[3rem] border border-[#fbebeb] relative overflow-hidden group shadow-xl shadow-red-500/5"
          >
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/5 rounded-full -mr-32 -mb-32 group-hover:scale-150 transition-transform duration-1000 blur-3xl" />

            <div className="mb-12 relative z-10">
              <span className="text-sm font-black text-red-500 uppercase tracking-[0.2em] mb-4 block px-4 py-1.5 bg-red-50 w-fit rounded-full shadow-sm border border-red-100">
                WHO THIS IS NOT FOR
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#3b0a0a] leading-tight">
                Not for you
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 relative z-10"
            >
              {isNotForContent.map((item, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <PillAccordion title={item.title} desc={item.desc} isRed={true} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
