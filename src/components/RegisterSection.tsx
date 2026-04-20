"use client";

import React, { useState } from 'react';

const RegisterSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        level: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.phone || !formData.level) {
            setSubmitMessage('Please fill in all fields');
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'registration',
                    data: {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        level: formData.level
                    }
                }),
            });

            if (response.ok) {
                setSubmitMessage('Registration successful! We will contact you soon.');
                setFormData({ name: '', email: '', phone: '', level: '' });
            } else {
                setSubmitMessage('Failed to submit. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="register" className="bg-[#385b58] py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="w-full flex justify-center">
                    <div className="w-full">
                        {/* Header Titles */}
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold mb-3 text-white">Register Now</h2>
                            <p className="text-white/90 text-[17px]">Please fill in your details to register.</p>
                        </div>
                        
                        {/* Form Card */}
                        <div className="bg-white rounded-xl p-7 md:p-9 shadow-2xl">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {/* Name */}
                                <div>
                                    <label className="block text-[#013d45] font-bold mb-2.5 text-[14px]">Name :</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name" 
                                        className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-[#013d45] focus:ring-1 focus:ring-[#013d45] transition-colors placeholder:text-gray-400 text-[15px]"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-[#013d45] font-bold mb-2.5 text-[14px]">Email id :</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email id" 
                                        className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-[#013d45] focus:ring-1 focus:ring-[#013d45] transition-colors placeholder:text-gray-400 text-[15px]"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-[#013d45] font-bold mb-2.5 text-[14px]">Phone number :</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number" 
                                        className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-[#013d45] focus:ring-1 focus:ring-[#013d45] transition-colors placeholder:text-gray-400 text-[15px]"
                                    />
                                </div>

                                {/* Select */}
                                <div>
                                    <label className="block text-[#013d45] font-bold mb-2.5 text-[14px] leading-snug">Which best describes your current English speaking level?</label>
                                    <div className="relative">
                                        <select 
                                            name="level"
                                            value={formData.level}
                                            onChange={handleChange}
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
                                                <path d="M9.293 12.957l.707-1.707A1 1 0 011.414 0l-6.586 6.586a1 1 0 001.414 1.414L9.293 12.957a1 1 0 001.414-1.414L10.586 6.586A1 1 0 001.414-1.414z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit */}
                                <div className="pt-2">
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full bg-[#013d45] hover:bg-[#022c31] text-white font-bold py-3.5 px-4 rounded transition-colors shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Register Now'}
                                    </button>
                                </div>

                                {/* Success/Error Message */}
                                {submitMessage && (
                                    <div className={`mt-4 p-3 rounded-lg text-sm font-medium ${
                                        submitMessage.includes('successful') 
                                            ? 'bg-green-100 text-green-800 border border-green-200' 
                                            : 'bg-red-100 text-red-800 border border-red-200'
                                    }`}>
                                        {submitMessage}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterSection;
