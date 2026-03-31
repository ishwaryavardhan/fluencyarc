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
        <section className="py-8 bg-white overflow-hidden">
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

                       
                    </div>
                </div>



            </div>
        </section>
    );
};

export default RegisterSection;
