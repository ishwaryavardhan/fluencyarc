"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Users, Sparkles, Rocket, Clock, GraduationCap, Quote } from "lucide-react";

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.muted = false;
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!isPlaying) return;

        const handleScroll = () => {
            if (videoRef.current) {
                videoRef.current.pause();
            }
            setIsPlaying(false);
        };

        window.addEventListener('scroll', handleScroll, { passive: true, once: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isPlaying]);

    return (
        <section ref={sectionRef} className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-[#fdfaff]">
            {/* Background Orbs & Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#013d45]/5 to-transparent rounded-full blur-[120px] -z-10"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/* 1. Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e6f4f1] rounded-full border border-[#013d45]/10 text-[#013d45] font-bold text-xs md:text-sm shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-[#013d45]"></span>
                        Break the Silence
                    </div>
                </motion.div>

                {/* 2. Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-4xl md:text-7xl font-black text-[#042900] leading-[1.1] tracking-tight max-w-5xl mx-auto">
                        You Don't Lack <br />
                        <span className="relative inline-block mt-2">
                           English Speaking Skills
                        </span>
                    </h1>
                </motion.div>
                   {/* 5. Main Glow Button */}
                

                {/* 3. Quote Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl mx-auto mb-12 relative"
                >
                    <Quote className="absolute -top-6 -left-6 md:-left-12 w-12 h-12 md:w-20 md:h-20 text-[#013d45]/10 rotate-180" />
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] border border-gray-50 text-center">
                        <p className="text-xl md:text-3xl font-bold text-[#013d45] leading-relaxed">
                            You Lack <span className="text-[#01a47e] italic">Confidence</span>.<br />
                            You understand <span className="text-[#01a47e]">conversations</span>.<br className="hidden md:block" />
                            But when it's your turn to speak, you hesitate.
                        </p>
                    </div>
                </motion.div>

             <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mb-10"
                >
                    <a href="#register" className="relative group">
                        <div className="absolute inset-0 bg-[#01a47e] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                        <div className="relative bg-[#021f1a] text-white px-10 py-5 md:px-14 md:py-6 rounded-full font-black text-xl md:text-2xl flex items-center gap-3 shadow-2xl border border-white/10 transition-transform active:scale-95">
                            <Sparkles className="w-6 h-6 text-yellow-400" />
                            Join my 90 min masterclass
                            <Rocket className="w-6 h-6 text-pink-400" />
                        </div>
                    </a>
                </motion.div>

                {/* 6. Pill Subtext */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-center gap-2 mb-16"
                >
                    <p className="text-center text-lg md:text-xl font-bold text-gray-700">
                        Begin your fluency journey
                    </p>
                    <div className="inline-flex px-8 py-4 bg-white/50 backdrop-blur-sm border border-white rounded-full shadow-sm text-sm md:text-base font-medium text-gray-500 text-center max-w-lg">
                        <p>
                            A practical, Confidence-First session that will make you speak naturally and confidently.
                        </p>
                    </div>
                </motion.div>

                {/* 8. Stats Row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex justify-center items-center gap-8 md:gap-12 pb-16"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center border border-yellow-100">
                           <Star className="w-5 h-5 text-[#ebb207] fill-current" />
                        </div>
                        <div className="text-left">
                            <p className="font-black text-lg leading-none">4.9/5</p>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Student Reviews</p>
                        </div>
                    </div>
                    <div className="h-8 w-px bg-gray-200"></div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center border border-indigo-100">
                           <Users className="w-5 h-5 text-indigo-500" />
                        </div>
                        <div className="text-left">
                            <p className="font-black text-lg leading-none">10k+</p>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Active Students</p>
                        </div>
                    </div>
                </motion.div>

                {/* 9. Video Section (Preserved and Styled) */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="relative rounded-[2rem] md:rounded-[4rem] overflow-hidden bg-slate-900 aspect-[4/5] md:aspect-video shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-x-[8px] md:border-x-[16px] border-y-[8px] md:border-y-[16px] border-slate-800 cursor-pointer group group"
                    onClick={togglePlay}
                >
                    <video
                        ref={videoRef}
                        className="w-full h-full object-contain"
                        muted
                        loop
                        playsInline
                    >
                        <source src="https://res.cloudinary.com/dabyqx1mz/video/upload/v1774723033/WhatsApp_Video_2026-03-28_at_10.47.24_zonqgq.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Play Button Overlay */}
                    <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-500 ${isPlaying ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-white/40 shadow-2xl">
                            {isPlaying ? (
                                <div className="flex gap-2">
                                    <div className="w-3 h-10 bg-white rounded-full"></div>
                                    <div className="w-3 h-10 bg-white rounded-full"></div>
                                </div>
                            ) : (
                                <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[35px] border-l-white border-b-[20px] border-b-transparent ml-3"></div>
                            )}
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-10 hidden md:flex items-center gap-4 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-[#01a47e] rounded-full flex items-center justify-center">
                           <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-white font-bold">Watch My Method In Action</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

