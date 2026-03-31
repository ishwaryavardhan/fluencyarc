"use client";

import React, { useState, useEffect } from "react";

const RegisterSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        level: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Registration successful! We'll contact you soon.");
        setFormData({ name: "", email: "", phone: "", level: "" });
    };

    const testimonials = [
        {
            text: "I spoke in English confidently for the first time in an actual interview!",
            description: "I had tried learning English on my own, but it did not feel this real. Naresh Sir's way of teaching isn't about memorising, it's about understanding how to think and feel comfortable talking in English. That shift changed everything for me.",
            name: "Rina K.",
            role: "Homemaker turned Job Seeker",
            initial: "R"
        },
        {
            text: "Every minute of the masterclass felt practical and personal.",
            description: "Naresh Sir doesn't just teach, he makes you believe you can speak. His examples, humour, and real-world drills helped me speak up confidently in client meetings the very next day.",
            name: "Arun P.",
            role: "IT Professional",
            initial: "A"
        },
        {
            text: "It felt like someone finally understood why I was scared to speak in English.",
            description: "The session helped me overcome years of hesitation. Naresh Sir's calm, motivating approach made me realise that communication is not about grammar, but about fluency & confidence.",
            name: "Meera S.",
            role: "College Student",
            initial: "M"
        },
        {
            text: "I went from being quiet in meetings to leading them!",
            description: "The confidence-building techniques were simple but powerful. Naresh Sir teaches in a way that makes you forget you're 'learning English', you just start speaking.",
            name: "Rahul D.",
            role: "Marketing Executive",
            initial: "R"
        },
        {
            text: "It's not a class, it's a mindset shift.",
            description: "FluencyArc helped me see English as a tool for expressing myself, not a test to pass. Naresh Sir's sessions stay with you long after they end.",
            name: "Anjali M.",
            role: "Marketing Executive",
            initial: "A"
        }
    ];

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

    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Auto-change carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const goToTestimonial = (index: number) => {
        setCurrentTestimonial(index);
    };

    const goToPrevious = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className="py-2 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
               

                {/* Testimonials Carousel */}
                <div className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">Testimonial</h2>
                        <p className="text-xl text-text-secondary font-medium">Join over 5,000+ students who have transformed their communication skills.</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Navigation Buttons - Outside Card */}
                            <button
                                onClick={goToPrevious}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full mr-4 w-12 h-12 bg-[#013d45] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#013d45]/80 transition-colors z-10"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            
                            <button
                                onClick={goToNext}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full ml-4 w-12 h-12 bg-[#013d45] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#013d45]/80 transition-colors z-10"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {/* Main Testimonial Display */}
                            <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-[#013d45]/10 shadow-xl relative">
                                {/* Quote Icon */}
                                <div className="absolute top-8 right-8 text-6xl font-black text-[#013d45]/10">
                                    "
                                </div>
                                
                                {/* Star Rating */}
                                <div className="flex items-center mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-6 h-6 text-[#ebb207]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                
                                <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-relaxed text-center md:text-left ps-5">
                                    "{testimonials[currentTestimonial].text}"
                                </blockquote>
                                
                                <p className="text-lg text-text-secondary leading-relaxed text-center md:text-left mb-8">
                                    {testimonials[currentTestimonial].description}
                                </p>

                                {/* Author Section */}
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-[#013d45] rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                                        {testimonials[currentTestimonial].initial}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-foreground text-lg">{testimonials[currentTestimonial].name}</h4>
                                        <p className="text-sm text-text-secondary font-medium">{testimonials[currentTestimonial].role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Carousel Indicators */}
                        <div className="flex justify-center gap-3 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${currentTestimonial === index ? 'bg-[#013d45] w-8' : 'bg-slate-300 hover:bg-slate-400'}`}
                                />
                            ))}
                        </div>

                        {/* Thumbnail Preview */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
                            {testimonials.map((testimonial, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToTestimonial(index)}
                                    className={`p-4 rounded-xl border-2 transition-all ${currentTestimonial === index ? 'border-[#013d45] bg-[#013d45]/5' : 'border-slate-200 hover:border-slate-300'}`}
                                >
                                    <div className="w-12 h-12 bg-[#013d45] rounded-full flex items-center justify-center text-white font-black text-sm mx-auto mb-2">
                                        {testimonial.initial}
                                    </div>
                                    <p className="text-xs font-black text-foreground text-center">{testimonial.name}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-text-secondary font-medium">Find answers to common questions about FluencyArc.</p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-[#013d45]/10 shadow-lg">
                                <button
                                    className="flex justify-between items-center w-full text-left font-bold text-xl text-foreground focus:outline-none"
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                >
                                    {faq.question}
                                    <svg
                                        className={`w-6 h-6 transform transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                {openFaqIndex === index && (
                                    <p className="mt-4 text-lg text-text-secondary leading-relaxed animate-fade-in">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                 {/* Registration Form */}
                <div className="max-w-md mx-auto mb-20">
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-[#013d45]/10">
                        <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-foreground">Register Now</h2>
                        <p className="text-center text-text-secondary mb-8">Please fill in your details to register.</p>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-foreground mb-2">Name :</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 rounded-xl bg-surface border border-[#013d45]/20 text-foreground placeholder-text-secondary focus:border-[#013d45] focus:ring-2 focus:ring-[#013d45]/20 transition-all outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-foreground mb-2">Email id :</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email id"
                                    className="w-full px-4 py-3 rounded-xl bg-surface border border-[#013d45]/20 text-foreground placeholder-text-secondary focus:border-[#013d45] focus:ring-2 focus:ring-[#013d45]/20 transition-all outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-foreground mb-2">Phone number :</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-3 rounded-xl bg-surface border border-[#013d45]/20 text-foreground placeholder-text-secondary focus:border-[#013d45] focus:ring-2 focus:ring-[#013d45]/20 transition-all outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-foreground mb-2">Which best describes your current English speaking level?</label>
                                <select
                                    name="level"
                                    value={formData.level}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-surface border border-[#013d45]/20 text-foreground focus:border-[#013d45] focus:ring-2 focus:ring-[#013d45]/20 transition-all outline-none appearance-none cursor-pointer"
                                >
                                    <option value="" className="text-gray-800">Select your level</option>
                                    <option value="beginner" className="text-gray-800">Beginner</option>
                                    <option value="intermediate" className="text-gray-800">Intermediate</option>
                                    <option value="advanced" className="text-gray-800">Advanced</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#013d45] text-white py-4 rounded-xl font-black text-lg shadow-xl hover:shadow-[#013d45]/30 transition-all active:scale-[0.98]"
                            >
                                Register Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterSection;
