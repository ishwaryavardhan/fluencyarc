"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
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
                        {["Mentor", "Testimonials", "Masterclass", "FAQ"].map((item) => (
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
                            href="#register"
                            className="bg-[#ebb207] hover:shadow-xl hover:shadow-[#ebb207]/30 text-black px-4 py-2 text-[12px] md:px-7 md:py-3 rounded-full font-bold md:text-[15px] transition-all active:scale-95 shadow-lg shadow-[#ebb207]/20 whitespace-nowrap"
                        >
                            Join Our Masterclass
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
