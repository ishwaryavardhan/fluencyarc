"use client";

import React from "react";

const LearningGoals = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* 1-on-1 Immersive Mastery (Wide Green Card) */}
            <div className="bg-[#013d45] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-8">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Awareness</h3>
                <p className="text-white/70 text-lg leading-relaxed max-w-xl">
               You understand what is actually causing hesitation.
                </p>
              </div>
            </div>

            {/* Bottom Row of Left Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Native Brain Rewiring */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col">
                <div className="w-12 h-12 bg-[#013d45]/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl text-[#013d45]">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-[#013d45] mb-4">Controlled Speaking</h3>
                <p className="text-gray-500 font-medium leading-relaxed">
You learn how to speak even when you don’t feel fully ready.                </p>
              </div>

              {/* Instant Calibration */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-[#013d45] mb-4">Pattern Building</h3>
                <p className="text-gray-500 font-medium leading-relaxed">
You start using simple, repeatable speaking structures                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Tall Green Card) */}
          <div className="bg-[#013d45] rounded-[2.5rem] p-10 text-white flex flex-col items-center text-center relative overflow-hidden h-full">
             <div className="mt-10 mb-12">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl text-yellow-400">⚡</span>
                </div>
             </div>
             
             <h3 className="text-2xl md:text-3xl font-bold mb-6">Real Conversation Application</h3>
             <p className="text-white/70 text-lg leading-relaxed mb-auto px-4">
You begin applying this in real situations             </p>

             {/* Progress Bar Section */}
             <div className="w-full mt-12 mb-4">
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-3">
                    <div className="h-full w-[85%] bg-yellow-400"></div>
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400">
                    Active Speaking Intensity
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearningGoals;