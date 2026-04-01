"use client";

import React, { useState } from "react";

const faqs = [
    {
        question: "Is this course suitable if I already know English but struggle to speak?",
        answer: "Yes, this course is designed exactly for that situation. Many learners already understand English but hesitate while speaking. This course focuses on bridging that gap by helping you feel comfortable, calm, and confident when you speak. It does not assume you are a beginner, and it does not test you on grammar."
    },
    {
        question: "Will this course teach grammar rules?",
        answer: "No. This is not a grammar-based course. You don't need to memorise rules or study textbooks. Instead, the course focuses on how English is actually used in real life — through simple language, natural responses, and everyday conversations. Grammar improves naturally as your comfort increases."
    },
    {
        question: "I feel nervous speaking English. Will this course put me on the spot?",
        answer: "No. This is a recorded, self-paced course. There are no live sessions, no forced speaking, and no public interaction. All activities are designed for you to do privately by pausing the video, thinking quietly, or practising a sentence on your own."
    },
    {
        question: "How is this course different from other spoken English courses?",
        answer: "Most courses focus on what you should say. This course focuses on how you feel while speaking. Instead of adding more rules, it helps you reduce overthinking, fear, and self-judgement. The goal is not to sound perfect, but to speak freely and naturally in real situations."
    },
    {
        question: "How much time do I need to spend each day?",
        answer: "Each video is short and focused. You can watch one video a day or take more time if you prefer. There is no fixed schedule. Many learners spend 30–45 minutes per session, depending on how they choose to practise. You move at your own pace."
    },
    {
        question: "What if I don't practise every day?",
        answer: "That's okay. This course is designed to support real life, not add pressure. Even listening to the videos regularly will create awareness and change. Practice is encouraged, but perfection is not required. Progress here is gentle and cumulative."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-8 md:py-12 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#013d45]/10 text-[#013d45] rounded-full text-xs font-black uppercase tracking-widest">
                            Support
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black leading-tight text-foreground">Frequently Asked Questions</h2>
                        <p className="text-xl text-text-secondary font-medium leading-relaxed">
                            Everything you need to know about starting your journey with FluencyArc.
                        </p>
                        <div className="pt-8">
                            <div className="bg-surface p-10 rounded-[2.5rem] border border-[#013d45]/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#013d45]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform"></div>
                                <h4 className="text-2xl font-black mb-3">Still have questions?</h4>
                                <p className="text-text-secondary mb-8 font-medium">Our team is here to help you find the right path and answer any technical queries.</p>
                                <a href="mailto:support@fluencyarc.com" className="inline-flex items-center gap-2 font-black text-[#013d45] group-hover:gap-3 transition-all underline underline-offset-4 decoration-2">
                                    Contact Support →
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-[2rem] overflow-hidden transition-all duration-300 border ${openIndex === index ? "bg-surface border-[#013d45]/20 shadow-xl shadow-[#013d45]/5" : "bg-white border-slate-100 hover:border-[#013d45]/10"}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-8 text-left transition-colors"
                                >
                                    <span className="font-extrabold text-xl md:text-2xl text-foreground/90">{faq.question}</span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? "bg-[#013d45] text-white rotate-180" : "bg-slate-100 text-slate-400"}`}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="p-8 pt-0 text-lg text-text-secondary font-medium leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
