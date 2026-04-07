"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const goals = [
  { title: "1️⃣ Clarity on Why You Hesitate", desc: "You will clearly understand why you pause before speaking — even when you know English. This removes confusion and helps you stop blaming your vocabulary or grammar unnecessarily." },
  { title: "2️⃣ A Simple Way to Start Speaking Without Waiting", desc: "You will learn how to begin speaking even when your sentence is not fully ready, so you stop waiting for the “perfect moment” that never comes." },
  { title: "3️⃣ Tools to Continue When You Lose Your Words", desc: "You will know exactly what to do when your mind goes blank — how to stay in the conversation instead of stopping or withdrawing." },
  { title: "4️⃣ Reduced Fear of Making Mistakes", desc: "You will experience a shift in how you see mistakes — from something to avoid, to something you can handle without losing flow or confidence." },
  { title: "5️⃣ A Clear Understanding of How Fluency Actually Develops", desc: "You will stop relying on passive learning and understand what truly builds fluency — consistent participation, not just knowledge." },
  { title: "6️⃣ A Practical Starting Point You Can Use Immediately", desc: "You will leave with a simple, repeatable way to practise speaking in real conversations, starting the same day — without needing special tools or preparation." }
];

const LearningGoals = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#042900] tracking-tight">
            What you will achieve
          </h2>
        </div>
        
        <div className="space-y-6">
          {goals.map((goal, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex gap-6 items-start"
            >
              <div className="mt-1 flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-[#013d45]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#042900] mb-3">
                  {goal.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {goal.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningGoals;