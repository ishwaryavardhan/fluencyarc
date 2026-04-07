"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Globe } from "lucide-react";

// Inline SVGs for social brands
const Instagram = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const Facebook = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

const Youtube = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
);

const Linkedin = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-white text-[#042900] pb-10 border-t border-slate-100 pt-16">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col items-center mb-12">
                    <div className="relative w-56 h-16 flex items-center justify-center">
                        <Image
                            src="/Logo-Main-tagline.png"
                            alt="FluencyArc Logo"
                            fill
                            className="object-contain"
                        />
                        <span className="absolute -right-2 top-0 text-[10px] font-bold text-gray-400">TM</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left border-y border-gray-100 py-10">
                    {/* Navigation */}
                    <div className="space-y-4">
                        <h5 className="font-black text-[13px] uppercase tracking-widest text-[#013d45]">Links</h5>
                        <nav className="flex flex-col gap-3 font-bold text-[15px] text-gray-600">
                            <Link href="#mentor" className="hover:text-[#ebb207]">Mentor</Link>
                            <Link href="#testimonials" className="hover:text-[#ebb207]">Testimonials</Link>
                            <Link href="#register" className="hover:text-[#ebb207]">Masterclass</Link>
                            <Link href="#faq" className="hover:text-[#ebb207]">FAQ</Link>
                        </nav>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-4">
                        <h5 className="font-black text-[13px] uppercase tracking-widest text-[#013d45]">Contact</h5>
                        <div className="flex flex-col gap-3 text-[15px] font-bold text-gray-600 items-center md:items-start">
                            <a href="https://wa.me/918123383399" className="flex items-center gap-3 hover:text-[#ebb207] transition-colors">
                                <span className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center"><Phone size={16} /></span>
                                8123383399 (WhatsApp)
                            </a>
                            <a href="mailto:naresh@fluencyarc.com" className="flex items-center gap-3 hover:text-[#ebb207] transition-colors">
                                <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><Mail size={16} /></span>
                                naresh@fluencyarc.com
                            </a>
                            <a href="https://fluencyarc.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#ebb207] transition-colors">
                                <span className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center"><Globe size={16} /></span>
                                fluencyarc.com
                            </a>
                            <Link href="#register" className="mt-4 inline-block bg-[#013d45] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#002a30] transition-all shadow-lg shadow-[#013d45]/20 active:scale-95">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h5 className="font-black text-[13px] uppercase tracking-widest text-[#013d45]">Follow Us</h5>
                        <div className="flex gap-4 justify-center md:justify-start pt-2">
                            <a href="https://www.instagram.com/fluencyarc_edu?igsh=MW1zMnF3dXhsbTZ1dQ==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#042900] hover:bg-[#013d45] hover:text-white transition-colors border border-slate-200 shadow-sm">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/share/1CXXxioKyW/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#042900] hover:bg-[#013d45] hover:text-white transition-colors border border-slate-200 shadow-sm">
                                <Facebook size={20} />
                            </a>
                            <a href="https://youtube.com/@fluencyarc?si=hgUDe9Yex-lzAacX" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#042900] hover:bg-[#013d45] hover:text-white transition-colors border border-slate-200 shadow-sm">
                                <Youtube size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#042900] hover:bg-[#013d45] hover:text-white transition-colors border border-slate-200 shadow-sm">
                                <Linkedin size={20} />
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 font-medium pt-2">Connect with us for regular updates and fluency tips.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                    <p className="text-gray-400 text-[13px] font-bold">© 2024 FluencyArc Inc. All rights reserved.</p>
                    <div className="flex gap-6 text-gray-400 font-bold text-[13px]">
                        <Link href="#" className="hover:text-[#ebb207] transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-[#ebb207] transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;