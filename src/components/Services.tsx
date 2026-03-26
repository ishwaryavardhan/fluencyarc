"use client";

import React, { useState } from "react";

const Services = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        level: "Beginner",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Success! Your 90-Minute Fluency Breakthrough is booked. We will contact you shortly.");
        setFormData({ name: "", email: "", phone: "", level: "Beginner" });
    };

    return (
        <section id="pricing" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Creative Masterclass Details */}
                    <div className="space-y-8 max-w-xl animate-fade-in pb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary font-bold text-sm">
                            90-Minute Immersive Session
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black leading-tight text-foreground">
                            Your 90-Minute <span className="text-primary italic">Fluency Breakthrough</span>
                        </h2>
                        <p className="text-xl text-text-secondary leading-relaxed font-medium">
                            Turn hesitation into high-impact. Discover how to stop translating in your head and start commanding any conversation for just ₹99.
                        </p>

                        <div className="space-y-6 pt-4">
                            {[
                                {
                                    title: "Speak Naturally, Not Conceptually",
                                    desc: "Kill the 'Ums' and stop overthinking grammar. Express your authentic self with effortless ease."
                                },
                                {
                                    title: "Command the Room",
                                    desc: "Practice techniques that boost your presence in high-stakes meetings, interviews, or daily chats."
                                },
                                {
                                    title: "The 'Native' Mindset",
                                    desc: "Rewire your brain to think in English. Eliminate the mental lag of translating from your mother tongue."
                                },
                                {
                                    title: "Acoustic Precision",
                                    desc: "Master subtle tone and modulation tips to sound clear, professional, and naturally authoritative."
                                },
                                {
                                    title: "Fearless Execution",
                                    desc: "Walk out ready to crush your workplace goals and social interactions from the very next minute."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="w-6 h-6 mt-1 bg-primary/10 text-primary rounded-full flex items-center justify-center text-[10px] font-black group-hover:bg-primary group-hover:text-white transition-colors">✓</div>
                                    <div className="space-y-1">
                                        <p className="font-black text-foreground/90 leading-none">{item.title}</p>
                                        <p className="text-sm text-text-secondary font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Lead Gen Form (Sticky) */}
                    <div className="relative lg:sticky lg:top-28 animate-fade-in delay-200">
                        <div className="absolute inset-0 bg-purple-gradient opacity-10 blur-[80px] -z-10 rotate-12"></div>
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-primary/10 border border-primary/5">
                            <div className="mb-8 text-center sm:text-left">
                                <h3 className="text-3xl font-black text-foreground mb-2">Claim Your Slot</h3>
                                <p className="text-text-secondary font-medium">Experience the breakthrough for just ₹99.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-black text-foreground mb-2 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full px-6 py-4 rounded-2xl bg-surface border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-black text-foreground mb-2 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="email@example.com"
                                            className="w-full px-6 py-4 rounded-2xl bg-surface border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black text-foreground mb-2 ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 00000 00000"
                                            className="w-full px-6 py-4 rounded-2xl bg-surface border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-black text-foreground mb-2 ml-1">Fluency Level</label>
                                    <select
                                        name="level"
                                        value={formData.level}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-2xl bg-surface border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium appearance-none cursor-pointer"
                                    >
                                        <option>Beginner</option>
                                        <option>Intermediate</option>
                                        <option>Advanced</option>
                                    </select>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-purple-gradient text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-[0.98]"
                                    >
                                        Get My Breakthrough — ₹99
                                    </button>
                                </div>

                                <p className="text-center text-xs text-text-secondary font-medium">
                                    Join 10,000+ confident speakers today.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
