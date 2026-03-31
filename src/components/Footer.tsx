"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-white text-[#042900]  pb-10 border-t border-slate-100">
            <div className="container mx-auto px-6">
                
                {/* TOP SECTION: 2 Columns on Mobile, Straight Row on Desktop */}
                <div className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-x-8 gap-y-12 mb-16">
                    
                    {/* 1. Brand Section - Spans 2 cols on mobile for better readability */}
                    <div className="col-span-2 lg:col-span-1 lg:max-w-xs space-y-6">
                        <div className="relative w-40 h-10">
                            <Image
                                src="/Logo-Main-tagline.png"
                                alt="FluencyArc Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-[#042900]/70 text-sm font-medium leading-relaxed max-w-sm">
                            We provide personalized 1-on-1 English coaching to help you communicate with confidence and reach your full potential.
                        </p>
                        <button className="bg-[#013d45] text-white px-6 py-2.5 rounded-xl font-bold text-xs hover:bg-[#013d45]/90 transition-all shadow-sm">
                            Talk to an Expert
                        </button>
                    </div>

                    {/* 2. Product Links - 1 col on mobile */}
                    <div className="col-span-1 space-y-6">
                        <h5 className="font-black text-[11px] uppercase tracking-[0.15em] text-slate-400">Product</h5>
                        <nav className="flex flex-col gap-3 text-[#042900] font-bold text-sm">
                            <Link href="#" className="hover:text-[#013d45] transition-colors">Find Mentors</Link>
                            <Link href="#" className="hover:text-[#013d45] transition-colors">Courses</Link>
                            <Link href="#" className="hover:text-[#013d45] transition-colors">Learning Portal</Link>
                            <Link href="#" className="hover:text-[#013d45] transition-colors">Enterprise</Link>
                        </nav>
                    </div>

                    {/* 3. Company Links - 1 col on mobile */}
                    <div className="col-span-1 space-y-6">
                        <h5 className="font-black text-[11px] uppercase tracking-[0.15em] text-slate-400">Company</h5>
                        <nav className="flex flex-col gap-3 text-[#042900] font-bold text-sm">
                            <Link href="#" className="hover:text-[#013d45] transition-colors">About Us</Link>
                            <Link href="#" className="hover:text-[#013d45] transition-colors">Careers</Link>
                            <Link href="#" className="hover:text-[#013d45] transition-colors">Partners</Link>
                            <Link href="#" className="hover:text-[#013d45] transition-colors">Newsroom</Link>
                        </nav>
                    </div>

                    {/* 4. App Section - Spans 2 cols on mobile for alignment, 1 on desktop */}
                    <div className="col-span-2 lg:col-span-1 space-y-6 min-w-[180px]">
                        <h5 className="font-black text-[11px] uppercase tracking-[0.15em] text-slate-400">Get the App</h5>
                        <div className="flex flex-row lg:flex-col gap-3">
                            <div className="flex-1 bg-slate-50 border border-slate-200 p-2.5 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-[#013d45] hover:text-white group transition-all">
                                <div className="text-xl">🍏</div>
                                <div>
                                    <p className="text-[8px] text-slate-500 group-hover:text-white/70 uppercase font-black">Download on the</p>
                                    <p className="font-black text-xs">App Store</p>
                                </div>
                            </div>
                            <div className="flex-1 bg-slate-50 border border-slate-200 p-2.5 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-[#013d45] hover:text-white group transition-all">
                                <div className="text-xl">🤖</div>
                                <div>
                                    <p className="text-[8px] text-slate-500 group-hover:text-white/70 uppercase font-black">Get it on</p>
                                    <p className="font-black text-xs">Google Play</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex gap-3">
                            {["IG", "X", "LI", "YT"].map((s) => (
                                <div key={s} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[10px] font-black hover:bg-[#013d45] hover:text-white transition-colors cursor-pointer border border-slate-200">
                                    {s}
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-400 text-[11px] font-bold">© 2024 FluencyArc Inc. All rights reserved.</p>
                    </div>
                    
                    <div className="flex gap-6 text-slate-400 font-bold text-[11px]">
                        <Link href="#" className="hover:text-[#013d45]">Terms</Link>
                        <Link href="#" className="hover:text-[#013d45]">Privacy</Link>
                        <Link href="#" className="hover:text-[#013d45]">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;