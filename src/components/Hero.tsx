"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

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
                    <h1 className="text-4xl md:text-7xl lg:text-7xl font-black text-foreground leading-[1.1] md:leading-[1] tracking-tight">
                    You Don’t Lack English Speaking Skills <br />
                        <span className="text-[#013d45] italic text-5xl">You Lack Confidence.You understand conversations.
But when it’s your turn to speak, you hesitate.</span>
                    </h1>
                    <div className="space-y-4">
                        <p className="text-xl md:text-3xl font-extrabold text-foreground/90">
                            Join my 90-minute Masterclass 
and begin your <span className="bg-[#013d45]/10 px-3 py-1 rounded-lg block max-w-sm mx-auto"> Fluency Journey </span>
                        </p>
                        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-medium leading-relaxed px-4 md:px-0">
                            A practical, Confidence-First session that will make you speak naturally and confidently.
                        </p>
                    </div>

                   

                    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-10 pt-8">
                        <button 
                            onClick={togglePlay}
                            className="w-full md:w-auto flex items-center justify-center gap-4 px-8 py-4 bg-[#013d45] text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl active:scale-95 group"
                        >
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                {isPlaying ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M5 3l14 9-14 9V3z"></path></svg>
                                )}
                            </div>
                            
                        </button>

                        <div className="flex items-center gap-6 md:gap-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ebb207] rounded-full flex items-center justify-center shadow-md text-lg md:text-xl">
                                    ⭐
                                </div>
                                <div className="text-left">
                                    <p className="font-black text-base md:text-lg leading-none">4.9/5</p>
                                    <p className="text-[10px] md:text-xs text-text-secondary font-bold">Student Reviews</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#013d45] rounded-full flex items-center justify-center text-white shadow-md text-lg md:text-xl">
                                    👥
                                </div>
                                <div className="text-left">
                                    <p className="font-black text-base md:text-lg leading-none">10k+</p>
                                    <p className="text-[10px] md:text-xs text-text-secondary font-bold">Active Students</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Hero Main Content */}
                <div className="relative mt-12 md:mt-20 animate-fade-in delay-200">
                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                        {/* Left: Product Visual */}
                        <div 
                            className="lg:col-span-12 relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden bg-slate-900 aspect-[4/5] md:aspect-video shadow-2xl border-x-[4px] md:border-x-[12px] border-y-[4px] md:border-y-[12px] border-slate-800 cursor-pointer group"
                            onClick={togglePlay}
                        >
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                muted
                                loop
                                playsInline
                            >
                                <source src="https://res.cloudinary.com/dabyqx1mz/video/upload/v1774723033/WhatsApp_Video_2026-03-28_at_10.47.24_zonqgq.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            
                            {/* Play Button Overlay */}
                            <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-500 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 shadow-2xl">
                                    {isPlaying ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:w-10 md:h-10"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="ml-1 md:w-10 md:h-10"><path d="M5 3l14 9-14 9V3z"></path></svg>
                                    )}
                                </div>
                            </div>

                            {/* Floating UI Elements */}
                            <div className="absolute top-6 left-6 md:top-10 md:left-10 glass p-4 md:p-5 rounded-xl md:rounded-2xl animate-slide-right pointer-events-none">
                                <p className="text-[#013d45] font-black text-xl md:text-2xl tracking-tighter">Speak <br />Naturally <br /><span className="text-foreground">FAST</span></p>
                            </div>
                            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 glass p-3 md:p-4 rounded-xl md:rounded-2xl flex items-center gap-3 md:gap-3 animate-fade-in delay-300 pointer-events-none">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#ebb207] rounded-full flex items-center justify-center text-black text-xs md:text-base">✓</div>
                                <p className="font-bold text-foreground text-xs md:text-base">Interactive Session</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

