import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white pt-32 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-16 mb-20">
                    <div className="md:col-span-5 space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-gradient rounded-xl flex items-center justify-center">
                                <span className="text-white font-heading font-bold text-xl tracking-tighter uppercase">F</span>
                            </div>
                            <span className="text-3xl font-heading font-black tracking-tighter">
                                FluencyArc
                            </span>
                        </div>
                        <p className="text-slate-400 max-w-sm text-lg font-medium leading-relaxed">
                            We provide personalized 1-on-1 English coaching to help you communicate with confidence and reach your full potential in career and life.
                        </p>
                        <button className="bg-primary text-white px-8 py-3 rounded-xl font-black text-sm hover:shadow-lg hover:shadow-primary/20 transition-all">
                            Talk to an Expert
                        </button>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                        <h5 className="font-black text-lg">Product</h5>
                        <nav className="flex flex-col gap-4 text-slate-400 font-bold">
                            <Link href="#" className="hover:text-white transition-colors">Find Mentors</Link>
                            <Link href="#" className="hover:text-white transition-colors">Courses</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Learning Portal</Link>
                            <Link href="#" className="hover:text-white transition-colors">Enterprise</Link>
                        </nav>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                        <h5 className="font-black text-lg">Company</h5>
                        <nav className="flex flex-col gap-4 text-slate-400 font-bold text-sm">
                            <Link href="#" className="hover:text-white transition-colors">About Us</Link>
                            <Link href="#" className="hover:text-white transition-colors">Careers</Link>
                            <Link href="#" className="hover:text-white transition-colors">Partners</Link>
                            <Link href="#" className="hover:text-white transition-colors">Newsroom</Link>
                        </nav>
                    </div>

                    <div className="md:col-span-3 space-y-8">
                        <h5 className="font-black text-lg">Get the App</h5>
                        <p className="text-slate-400 font-medium">Download for free and start learning on the go.</p>
                        <div className="flex flex-col gap-4">
                            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-slate-800 transition-colors">
                                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-xl">🍏</div>
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase font-black">Download on the</p>
                                    <p className="font-black text-sm">App Store</p>
                                </div>
                            </div>
                            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-slate-800 transition-colors">
                                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-xl">🤖</div>
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase font-black">Get it on</p>
                                    <p className="font-black text-sm">Google Play</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-6 items-center">
                        <div className="flex gap-4">
                            {["IG", "X", "LI", "YT"].map((s) => (
                                <div key={s} className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-black hover:bg-primary transition-colors cursor-pointer border border-slate-800">{s}</div>
                            ))}
                        </div>
                        <p className="text-slate-600 text-sm font-bold">© 2024 FluencyArc Inc.</p>
                    </div>
                    <div className="flex gap-10 text-slate-600 font-bold text-sm">
                        <Link href="#" className="hover:text-slate-400">Terms</Link>
                        <Link href="#" className="hover:text-slate-400">Privacy</Link>
                        <Link href="#" className="hover:text-slate-400">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
