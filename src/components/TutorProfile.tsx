"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

const TutorProfile = () => {
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
        <section id="mentor" className="py-8 bg-white overflow-hidden relative group">
            <div className="absolute inset-0 z-0">
                
                <div className={`absolute inset-0 transition-opacity duration-700 ${isPlaying ? 'bg-[#013d45]/40' : 'bg-[#013d45]/80'}`}></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-[#013d45]/90 backdrop-blur-md rounded-[3rem] p-10 md:p-16 text-white relative flex flex-col md:flex-row items-center gap-16 overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                    <div className="relative z-10 w-full md:w-1/3">
                        <div 
                            className="aspect-[4/5] bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden shadow-2xl relative cursor-pointer group/image"
                            onClick={togglePlay}
                        >
                            <img
                                src="https://fluencyarc1.vercel.app/assets/img/Naresh-2.jpg"
                                alt="Expert Tutor"
                                className={`w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105 ${isPlaying ? 'opacity-50' : 'opacity-100'}`}
                            />
                            
                            {/* Removed Floating rating card as requested */}
                        </div>
                    </div>

                    <div className="relative z-10 w-full md:w-2/3 space-y-8">
                        <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold tracking-wide uppercase">
                            Mentor
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black leading-tight">
                           
                            <span className="underline decoration-accent underline-offset-8">Meet the Mentor</span>
                        </h2>
                        <div className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl font-medium space-y-4">
                            <p>
                                Naresh Bhandia is a Certified Corporate Trainer, Facilitator, and Fluency Expert with over 35 years of professional experience in the manufacturing sector, corporate consulting, and leadership development. He has successfully guided organizations through business growth, operational transformation, and leadership challenges, working closely with founders, executives, and management teams.
                            </p>
                            <p>
                                Building on his decades of expertise, Naresh has launched FluencyArc, a spoken English training program created for individuals who struggle with confidence in communication. The program moves beyond grammar-based learning to emphasize practical speaking skills, everyday communication, and professional fluency.
                            </p>
                        </div>

                    
                        
                        <div className="pt-4">
                         
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TutorProfile;

