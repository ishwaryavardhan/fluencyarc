"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 glass border-b border-[#013d45]/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative w-32 h-10">
                        <Image
                            src="/Logo-Main-tagline.png"
                            alt="FluencyArc Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <nav className="hidden lg:flex items-center gap-10">
                    {["Mentors", "Courses", "Pricing", "Success Rate", "Resources"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-[15px] text-foreground/80 hover:text-[#013d45] transition-all font-semibold"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="hidden sm:block text-[15px] font-bold text-foreground hover:text-[#013d45] transition-colors px-4"
                    >
                        Login
                    </Link>
                    <Link
                        href="#hero-form"
                        className="bg-[#ebb207] hover:shadow-xl hover:shadow-[#ebb207]/30 text-black px-7 py-3 rounded-full font-bold text-[15px] transition-all active:scale-95 shadow-lg shadow-[#ebb207]/20"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
