"use client";

import React from "react";

const LearningGoals = () => {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 animate-fade-in">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest mb-6">
                            The Methodology
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black leading-[1.1] text-foreground">
                            Improve <span className="text-primary italic">3x Faster</span> <br />
                            <span className="text-slate-400">than traditional methods</span>
                        </h2>
                    </div>
                    <div className="pb-2">
                        <p className="text-xl text-text-secondary font-medium max-w-sm leading-relaxed">
                            Science-backed immersion that rewires your brain for effortless communication.
                        </p>
                    </div>
                </div>

                {/* Creative Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[180px]">

                    {/* Card 1: 1-on-1 Mastery (Bento Large) */}
                    <div className="md:col-span-8 md:row-span-2 group relative bg-purple-gradient rounded-[3rem] p-10 md:p-14 overflow-hidden text-white shadow-2xl shadow-primary/20 hover:-translate-y-2 transition-all duration-500 cursor-default">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl mb-8">🎯</div>
                            <div>
                                <h3 className="text-3xl md:text-4xl font-black mb-4">1-on-1 Immersive Mastery</h3>
                                <p className="text-xl text-white/80 font-medium max-w-lg leading-relaxed">
                                    Why waste hours in groups? Your mentor focuses 100% on your gaps, making every minute 3x more effective than a standard classroom.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Active Speaking (Bento Tall) */}
                    <div className="md:col-span-4 md:row-span-3 group relative bg-slate-950 rounded-[3rem] p-10 overflow-hidden text-white hover:-translate-y-2 transition-all duration-500 cursor-default shadow-xl">
                        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-primary/40 to-transparent"></div>
                        <div className="relative z-10 flex flex-col h-full items-center text-center">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-4xl mb-8 animate-pulse shadow-[0_0_30px_rgba(124,58,237,0.5)]">⚡</div>
                            <h3 className="text-3xl font-black mb-6">70% More Talking Time</h3>
                            <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10">
                                In traditional classes, students speak for ~5 mins. Here, you dominate the conversation for 40+ minutes per session.
                            </p>
                            <div className="mt-auto w-full space-y-4">
                                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full w-[90%] bg-primary shadow-[0_0_15px_rgba(124,58,237,0.8)]"></div>
                                </div>
                                <p className="text-xs font-black uppercase tracking-tighter text-primary">Active Speaking Intensity</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Native Rewiring (Bento Wide) */}
                    <div className="md:col-span-4 md:row-span-2 group bg-surface rounded-[3rem] p-10 border border-primary/10 hover:border-primary/30 transition-all duration-500 cursor-default">
                        <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🧠</div>
                        <h3 className="text-2xl font-black text-foreground mb-3">Native Brain Rewiring</h3>
                        <p className="text-text-secondary font-medium leading-relaxed">
                            Stop the mental translation loop. We train your subconscious to think directly in English from day one.
                        </p>
                    </div>

                    {/* Card 4: Instant Feedback (Bento Small) */}
                    <div className="md:col-span-4 md:row-span-2 group bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-primary/10 transition-all duration-500 cursor-default flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center text-xl">✨</div>
                            <h3 className="text-xl font-black text-foreground">Instant Calibration</h3>
                        </div>
                        <p className="text-text-secondary font-medium leading-relaxed">
                            Correct habits in real-time. Avoid the "permanent plateau" that kills 90% of language learners globally.
                        </p>
                    </div>

                    {/* Card 5: Real-World ROI (Bento Wide Bottom) */}
                    <div className="md:col-span-12 md:row-span-2 group relative bg-white border-2 border-slate-100 rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 hover:border-primary/20 transition-all duration-500">
                        <div className="max-w-xl">
                            <h3 className="text-3xl font-black mb-4">Practice with Purpose</h3>
                            <p className="text-xl text-text-secondary font-medium leading-relaxed">
                                We trade generic grammar drills for simulated boardroom meetings, client pitches, and high-stakes interviews.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            {["Meetings", "Pitches", "Interviews", "Travel"].map((tag) => (
                                <div key={tag} className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-sm font-bold text-foreground/60 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LearningGoals;
