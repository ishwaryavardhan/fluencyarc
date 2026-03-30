import React from "react";

const About = () => {
    return (
        <section id="about" className="py-8 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#013d45]/5 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            {/* Replace with actual image later */}
                            <div className="w-full aspect-square bg-slate-100 flex items-center justify-center text-slate-400 font-medium">
                                Tutor & Student Interaction Image
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-black text-foreground">
                            Empowering Minds Through <br />
                            <span className="text-[#013d45]">Masterful Communication</span>
                        </h2>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            At FluencyArc, we believe that language is more than just words—it&apos;s a bridge to opportunities. Our mission is to provide personalized, high-impact English coaching that helps you break through barriers and achieve true fluency.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#013d45]/10 rounded-xl flex items-center justify-center shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#013d45]">
                                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">Personalized Growth</h4>
                                    <p className="text-text-secondary">Tailored curriculum focusing on your specific goals and weaknesses.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#ebb207]/10 rounded-xl flex items-center justify-center shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#ebb207]">
                                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">Expert Mentorship</h4>
                                    <p className="text-text-secondary">Learn from certified tutors with years of international experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
