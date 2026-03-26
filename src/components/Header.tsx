"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 glass border-b border-primary/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-gradient rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="text-white font-heading font-bold text-xl uppercase tracking-tighter">F</span>
                    </div>
                    <span className="text-2xl font-heading font-extrabold text-foreground tracking-tight">
                        FluencyArc
                    </span>
                </div>

                <nav className="hidden lg:flex items-center gap-10">
                    {["Mentors", "Courses", "Pricing", "Success Rate", "Resources"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-[15px] text-foreground/80 hover:text-primary transition-all font-semibold"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="hidden sm:block text-[15px] font-bold text-foreground hover:text-primary transition-colors px-4"
                    >
                        Login
                    </Link>
                    <Link
                        href="#hero-form"
                        className="bg-purple-gradient hover:shadow-xl hover:shadow-primary/30 text-white px-7 py-3 rounded-full font-bold text-[15px] transition-all active:scale-95 shadow-lg shadow-primary/20"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
