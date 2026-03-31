"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-white text-[#042900]  pb-10 border-t border-slate-100 py-12">
            <div className="container mx-auto px-6">
                
                {/* TOP SECTION: 3 Columns on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 mb-16">
                    
                    {/* 1. Brand Section */}
                    <div className="space-y-6">
                        <div className="relative w-48 h-12">
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
                    </div>

                    {/* 2. Services Section */}
                    <div className="space-y-6">
                        <h5 className="font-black text-[11px] uppercase tracking-[0.15em] text-slate-400">Services</h5>
                        <nav className="flex flex-col gap-3 text-[#042900] font-bold text-sm">
                            <Link href="#" className="hover:text-[#013d45] transition-colors">Mentors</Link>
                            <Link href="#" className="hover:text-[#013d45] transition-colors">Courses</Link>
                            <Link href="#" className="hover:text-[#013d45] transition-colors">Pricing</Link>
                            <Link href="#" className="hover:text-[#013d45] transition-colors">Success Rate</Link>
                            <Link href="#" className="hover:text-[#013d45] transition-colors">Resources</Link>
                        </nav>
                    </div>

                    {/* 3. Contact Us Section */}
                    <div className="space-y-6">
                        <h5 className="font-black text-[11px] uppercase tracking-[0.15em] text-slate-400">Get in Touch</h5>
                        <div className="space-y-4">
                            <p className="text-[#042900]/70 text-sm font-medium">Ready to start your journey?</p>
                            <Link 
                                href="#pricing"
                                className="inline-block bg-[#013d45] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#002a30] transition-all shadow-lg active:scale-95"
                            >
                                Contact Us
                            </Link>
                            <div className="flex gap-3 pt-2">
                                {["IG", "X", "LI", "YT"].map((s) => (
                                    <div key={s} className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-[11px] font-black hover:bg-[#013d45] hover:text-white transition-colors cursor-pointer border border-slate-200 shadow-sm">
                                        {s}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-[11px] font-bold">© 2024 FluencyArc Inc. All rights reserved.</p>
                    
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