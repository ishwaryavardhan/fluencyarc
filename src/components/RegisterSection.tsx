"use client";

import React, { useState } from 'react';

const RegisterSection = () => {
    return (
        <section id="register" className="bg-[#385b58] py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto ">

                {/* Right Side: Form */}
                <div className="w-full flex justify-center">
                    <div className="w-full">
                        
                        {/* Header Titles */}
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold mb-3 text-white">Register Now</h2>
                            <p className="text-white/90 text-[17px]">Please fill in your details to register.</p>
                        </div>
                        
                        {/* Form Card */}
                        <div className="bg-white rounded-xl p-7 md:p-9 shadow-2xl">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                {/* Name */}
                                <div>
                                    <label className="block text-[#013d45] font-bold mb-2.5 text-[14px]">Name :</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter your name" 
                                        className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-[#013d45] focus:ring-1 focus:ring-[#013d45] transition-colors placeholder:text-gray-400 text-[15px]"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-[#013d45] font-bold mb-2.5 text-[14px]">Email id :</label>
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email id" 
                                        className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-[#013d45] focus:ring-1 focus:ring-[#013d45] transition-colors placeholder:text-gray-400 text-[15px]"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-[#013d45] font-bold mb-2.5 text-[14px]">Phone number :</label>
                                    <input 
                                        type="tel" 
                                        placeholder="Enter your phone number" 
                                        className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-[#013d45] focus:ring-1 focus:ring-[#013d45] transition-colors placeholder:text-gray-400 text-[15px]"
                                    />
                                </div>

                                {/* Select */}
                                <div>
                                    <label className="block text-[#013d45] font-bold mb-2.5 text-[14px] leading-snug">Which best describes your current English speaking level?</label>
                                    <div className="relative">
                                        <select 
                                            defaultValue=""
                                            className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-[#013d45] focus:ring-1 focus:ring-[#013d45] transition-colors text-gray-600 bg-white appearance-none text-[15px]"
                                        >
                                            <option value="" disabled>Select your level</option>
                                            <option value="understand_nervous">I understand English, but I feel nervous speaking.</option>
                                            <option value="speak_not_confident">I can speak, but I don't sound confident.</option>
                                            <option value="fluent_want_natural">I speak fluently, but I want to sound more natural and professional.</option>
                                            <option value="difficult_speak">I find it difficult to speak in English.</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#013d45]">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit */}
                                <div className="pt-2">
                                    <button 
                                        type="submit" 
                                        className="w-full bg-[#013d45] hover:bg-[#022c31] text-white font-bold py-3.5 px-4 rounded transition-colors shadow-lg active:scale-[0.98]"
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

export default RegisterSection;
