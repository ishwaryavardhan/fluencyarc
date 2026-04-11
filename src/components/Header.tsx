"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User, MessageSquare, Layout, HelpCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { name: "Mentor", href: "#mentor", icon: User },
        { name: "Testimonials", href: "#testimonials", icon: MessageSquare },
        { name: "Masterclass", href: "#masterclass", icon: Layout },
        { name: "FAQ", href: "#faq", icon: HelpCircle }
    ];
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-sm">
            <div className="bg-[#013d45] text-white font-black py-1.5 overflow-hidden">
                {React.createElement('marquee', { scrollamount: 8, className: "tracking-widest text-xs uppercase flex gap-10" },
                    <>
                        <span className="mx-8"><span className="text-[#ebb207]">MASTERCLASS: 19TH APRIL</span> • LIMITED SPOTS AVAILABLE</span>
                        <span className="mx-8"><span className="text-[#ebb207]">MASTERCLASS: 19TH APRIL</span> • LIMITED SPOTS AVAILABLE</span>
                    </>
                )}
            </div>
            <div className="w-full glass border-b border-[#013d45]/10 bg-white/90 backdrop-blur-md">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative w-36 h-10 md:w-48 md:h-12">
                            <Image
                                src="/Logo-Main-tagline.png"
                                alt="FluencyArc Logo"
                                fill
                                className="object-contain"
                            />
                            <span className="absolute -right-0 top-0 text-[10px] font-bold text-gray-400">TM</span>
                        </div>

                    </div>


                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-[15px] text-foreground/80 hover:text-[#013d45] transition-all font-semibold"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2 md:gap-4">
                        <Link
                            href="#register"
                            className="bg-[#ebb207] hover:shadow-xl hover:shadow-[#ebb207]/30 text-black px-3 py-1.5 text-[10px] md:px-7 md:py-3 rounded-full font-bold md:text-[15px] transition-all active:scale-95 shadow-lg shadow-[#ebb207]/20 whitespace-nowrap"
                        >
                            Join Our Masterclass
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-[#013d45]"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#013d45]/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-bold text-[#013d45] hover:text-[#ebb207] transition-all flex items-center gap-4 p-2 rounded-lg hover:bg-[#013d45]/5"
                                >
                                    <item.icon size={20} className="text-[#ebb207]" />
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="#register"
                                onClick={() => setIsMenuOpen(false)}
                                className="bg-[#ebb207] text-black text-center py-4 rounded-xl font-bold shadow-lg shadow-[#ebb207]/20 flex items-center justify-center gap-2 mt-2"
                            >
                                <Sparkles size={18} />
                                Join Masterclass Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
