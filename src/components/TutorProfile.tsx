import React from "react";
import Image from "next/image";

const TutorProfile = () => {
    return (
        <section className="py-8 bg-white overflow-hidden relative">
            <div className="absolute inset-0 z-0">
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
                <div className="absolute inset-0 bg-[#013d45]/80"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-[#013d45]/90 backdrop-blur-md rounded-[3rem] p-10 md:p-16 text-white relative flex flex-col md:flex-row items-center gap-16 overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                    <div className="relative z-10 w-full md:w-1/3">
                        <div className="aspect-[4/5] bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden shadow-2xl relative">
                            <img
                                src="https://fluencyarc1.vercel.app/assets/img/Naresh-2.jpg"
                                alt="Expert Tutor"
                                className="w-full h-full object-cover"
                            />
                            {/* Floating rating card */}
                            <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">✓</div>
                                    <span className="text-foreground text-sm font-bold">Expert Tutor</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-500">★</span>
                                    <span className="text-foreground text-sm font-bold">4.9</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 w-full md:w-2/3 space-y-8">
                        <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold tracking-wide uppercase">
                            Meet Your Guide
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black leading-tight">
                            Unlock Your <br />
                            <span className="underline decoration-accent underline-offset-8">Language Potential</span>
                        </h2>
                        <p className="text-xl text-white/80 leading-relaxed max-w-xl font-medium">
                            &quot;I believe everyone has a unique voice. My mission is to help you find yours in English, with confidence and clarity.&quot;
                        </p>

                        <div className="grid grid-cols-3 gap-6 pt-4">
                            <div>
                                <p className="text-3xl font-black">1200+</p>
                                <p className="text-sm text-white/60 font-bold uppercase tracking-wide">Students</p>
                            </div>
                            <div>
                                <p className="text-3xl font-black">500+</p>
                                <p className="text-sm text-white/60 font-bold uppercase tracking-wide">Sessions</p>
                            </div>
                            <div>
                                <p className="text-3xl font-black">15+</p>
                                <p className="text-sm text-white/60 font-bold uppercase tracking-wide">Years Exp.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TutorProfile;
