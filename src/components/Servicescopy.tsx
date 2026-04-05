"use client";

import React, { useState } from "react";

const Services2 = () => {
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
        alert("Success! Your 90-Minute Fluency Breakthrough is booked. We will contact you shortly.");
        setFormData({ name: "", email: "", phone: "", level: "" });
    };

    return (
        <section id="pricing" className="py-10 bg-[#013d45] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center">
                    {/* Heading Outside the Card */}
                    <div className="mb-10 text-center text-white">
                        <h2 className="text-4xl font-black mb-3">Register Now</h2>
                        <p className="text-white/80 font-medium text-lg">Please fill in your details to register.</p>
                    </div>

                    {/* Centered Registration Card */}
                    <div className="relative max-w-xl w-full animate-fade-in">
                        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="inline-block text-sm font-bold text-foreground mb-2 px-2 py-0.5 bg-slate-200 rounded">Name :</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#013d45] focus:ring-2 focus:ring-[#013d45]/10 transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="inline-block text-sm font-bold text-foreground mb-2 px-2 py-0.5 bg-slate-200 rounded">Email id :</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email id"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#013d45] focus:ring-2 focus:ring-[#013d45]/10 transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="inline-block text-sm font-bold text-foreground mb-2 px-2 py-0.5 bg-slate-200 rounded">Phone number :</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#013d45] focus:ring-2 focus:ring-[#013d45]/10 transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="inline-block text-sm font-bold text-foreground mb-2 px-2 py-0.5 bg-slate-200 rounded">Which best describes your current English speaking level?</label>
                                    <select
                                        name="level"
                                        value={formData.level}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#013d45] focus:ring-2 focus:ring-[#013d45]/10 transition-all outline-none appearance-none cursor-pointer bg-white"
                                    >
                                        <option value="" disabled>Select your level</option>
                                        <option value="nervous">I understand English, but I feel nervous speaking.</option>
                                        <option value="not_confident">I can speak, but I don't sound confident.</option>
                                        <option value="polished">I speak fluently, but I want to sound more natural and polished.</option>
                                        <option value="difficult">I find it difficult to speak in English.</option>
                                    </select>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#013d45] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#002a30] transition-all shadow-lg active:scale-[0.98]"
                                    >
                                        Register Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services2;
