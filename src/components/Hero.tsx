"use client";

import React, { useState } from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-surface">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#013d45]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16 space-y-8 max-w-4xl mx-auto animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#013d45]/10 text-[#013d45] font-bold text-sm">
                        <span className="flex h-2 w-2 rounded-full bg-[#013d45] animate-pulse"></span>
                        Speak with Confidence Today!
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1] tracking-tight">
                        Is Fluency in English <br />
                        <span className="text-[#013d45] italic">holding you back?</span>
                    </h1>
                    <div className="space-y-4">
                        <p className="text-2xl md:text-3xl font-extrabold text-foreground/90">
                            Join our exclusive <span className="bg-[#013d45]/10 px-3 py-1 rounded-lg"> Masterclass</span>
                        </p>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium leading-relaxed">
                            A practical, Confidence-First session that will make you speak naturally and confidently.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 pt-4">
                        <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                            <span className="text-2xl">⏰</span>
                            <span className="font-bold text-foreground">1.5 Hours Masterclass</span>
                        </div>
                        <div className="bg-[#ebb207] px-6 py-3 rounded-2xl shadow-sm border border-[#ebb207]/20 flex items-center gap-3">
                            <span className="text-2xl">🎓</span>
                            <span className="font-bold text-black">Interactive Learning</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10 pt-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#ebb207] rounded-full flex items-center justify-center shadow-md">
                                ⭐
                            </div>
                            <div className="text-left">
                                <p className="font-black text-lg leading-none">4.9/5</p>
                                <p className="text-xs text-text-secondary font-bold">Student Reviews</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#013d45] rounded-full flex items-center justify-center text-white shadow-md">
                                👥
                            </div>
                            <div className="text-left">
                                <p className="font-black text-lg leading-none">10k+</p>
                                <p className="text-xs text-text-secondary font-bold">Active Students</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Main Content */}
                <div className="relative mt-20 animate-fade-in delay-200">
                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                        {/* Left: Product Visual */}
                        <div className="lg:col-span-12 relative rounded-[3rem] overflow-hidden bg-slate-900 aspect-video shadow-2xl border-x-[12px] border-y-[12px] border-slate-800">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src="https://res.cloudinary.com/dabyqx1mz/video/upload/v1774723033/WhatsApp_Video_2026-03-28_at_10.47.24_zonqgq.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* Floating UI Elements */}
                            <div className="absolute top-10 left-10 glass p-5 rounded-2xl animate-slide-right">
                                <p className="text-[#013d45] font-black text-2xl tracking-tighter">Speak <br />Naturally <br /><span className="text-foreground">FAST</span></p>
                            </div>
                            <div className="absolute bottom-10 right-10 glass p-4 rounded-2xl flex items-center gap-3 animate-fade-in delay-300">
                                <div className="w-10 h-10 bg-[#ebb207] rounded-full flex items-center justify-center text-black">✓</div>
                                <p className="font-bold text-foreground">Interactive Session</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
