"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquareQuote } from "lucide-react";

/**
 * FinalCTA Component
 * High-impact concluding section with the final call to action.
 */

export default function FinalCTA() {
  const words = [
    { text: "You wait.", delay: 0.1 },
    { text: "You avoid.", delay: 0.3 },
    { text: "You replay.", delay: 0.5 }
  ];

  return (
    <section className="py-32 px-6 bg-white overflow-hidden relative">
      {/* Texture/Background */}
      <div className="absolute inset-0 bg-[#013d45]/[0.02] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-[#ebb207]/10 via-[#013d45]/5 to-transparent rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Subtle label */}
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400 font-black tracking-[0.3em] uppercase text-xs mb-10"
        >
          FINAL CTA BLOCK
        </motion.span>

        {/* Impactful Header */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="text-center mb-16 px-4"
        >
          <h2 className="text-4xl md:text-7xl font-black text-[#013d45] leading-tight mb-8">
            You Can Continue As You Are.<br />
            <span className="text-[#ebb207]">Or You Can Correct It.</span>
          </h2>
        </motion.div>

        {/* Persuasive Copy */}
        <div className="space-y-8 text-center max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="text-2xl md:text-3xl text-gray-800 font-bold"
          >
            Right now, you understand English.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, scale: 1.1 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            className="text-3xl md:text-4xl text-[#013d45] font-black underline decoration-[#ebb207] decoration-[6px] underline-offset-[12px]"
          >
            But you hesitate to speak.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 py-12">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ rotate: -5, opacity: 0, y: 10 }}
                whileInView={{ rotate: 0, opacity: 1, y: 0 }}
                transition={{ delay: word.delay }}
                className="bg-gray-100 px-8 py-4 rounded-full text-gray-500 font-black text-xl md:text-2xl shadow-sm border border-gray-200 hover:bg-[#013d45] hover:text-white transition-colors duration-300 cursor-default"
              >
                {word.text}
              </motion.span>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-3xl text-gray-700 font-medium">
              That pattern will not fix itself.
            </p>
            
            <p className="text-3xl md:text-4xl text-gray-900 font-black leading-snug">
              It will either continue — <br />
              or it will be <span className="bg-yellow-100 px-3 box-decoration-clone rounded-lg">interrupted deliberately.</span>
            </p>

            <motion.div 
              initial={{ scale: 0.9, rotate: -2 }}
              whileInView={{ scale: 1, rotate: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 1,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="pt-16 pb-12 relative"
            >
               <div className="absolute top-0 left-0 -ml-16 -mt-8 opacity-10 blur-sm">
                  <MessageSquareQuote className="w-48 h-48 text-[#013d45]" />
               </div>
               
               <p className="text-4xl md:text-6xl font-black text-[#013d45] italic relative z-10 drop-shadow-sm">
                This Masterclass is that interruption.
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="pt-12 flex flex-col items-center gap-8"
            >
              <p className="text-xl md:text-2xl font-bold text-gray-600 max-w-xl">
                Join my 90 minute Masterclass <br className="hidden md:block" />
                to begin your Fluency Journey.
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(235, 178, 7, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#ebb207] text-[#013d45] font-black text-xl md:text-2xl px-16 py-8 rounded-[3rem] shadow-2xl flex items-center gap-4 group transition-all duration-300"
              >
                REGISTER NOW
                <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-300" strokeWidth={3} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
