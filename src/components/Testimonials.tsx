"use client";

import React from "react";

const testimonials = [
    {
        text: "FluencyArc completely changed my life. I went from struggling with basic sentences to clearing my US tech interview in 3 months!",
        name: "Alex Rivera",
        role: "Senior Developer",
        avatar: "AR",
    },
    {
        text: "The 1-on-1 sessions are incredibly intense but effective. My tutor found exactly where my grammar was failing and we fixed it together.",
        name: "Sowmya K.",
        role: "Product Manager",
        avatar: "SK",
    },
    {
        text: "Value for money is insane. The learning portal and the feedback I get after every session is what makes this different from any other app.",
        name: "Hiroshi Sato",
        role: "Marketing Director",
        avatar: "HS",
    },
    {
        text: "Adaptive learning path is real. It adjusted to my speed and helped me master business English specifically for my role.",
        name: "Elisa Grant",
        role: "Startup Founder",
        avatar: "EG",
    },
];

const Testimonials = () => {
    return (
        <section className="py-8 bg-surface overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
                    <div className="max-w-2xl space-y-6">
                        <div className="inline-block px-4 py-1.5 bg-[#013d45]/10 text-[#013d45] rounded-full text-sm font-bold tracking-wide uppercase">
                            Success Stories
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black leading-tight">
                            Get inspired by our learners
                        </h2>
                    </div>
                    <button className="bg-[#ebb207] text-black px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#ebb207]/20 hover:bg-[#f59e0b] transition-all">
                        View All Stories
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-[#013d45]/5 shadow-sm hover:shadow-2xl transition-all group">
                            <div className="flex gap-1 mb-6 text-yellow-400">
                                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                            </div>
                            <p className="text-lg font-bold text-foreground mb-8 leading-relaxed">
                                &ldquo;{t.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                                <div className="w-12 h-12 bg-[#013d45] rounded-full flex items-center justify-center text-white font-black">
                                    {t.avatar}
                                </div>
                                <div>
                                    <h5 className="font-extrabold text-foreground">{t.name}</h5>
                                    <p className="text-xs text-text-secondary font-bold uppercase tracking-wider">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner callout */}
                <div className="mt-16 bg-[#013d45] rounded-[3rem] p-10 md:p-14 text-white flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl shadow-[#013d45]/30">
                    <div className="space-y-2">
                        <h3 className="text-3xl md:text-5xl font-black">10,000+ Learners</h3>
                        <p className="text-xl text-white/70 font-medium">Are currently learning on FluencyArc</p>
                    </div>
                    <button className="bg-[#ebb207] text-black px-10 py-5 rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-[#ebb207]/20 transition-all active:scale-95">
                        Start Learning Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
