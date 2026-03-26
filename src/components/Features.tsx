import React from "react";

const features = [
    {
        title: "1-on-1 Focus",
        description: "Undivided attention from your tutor to ensure every minute is spent on your progress.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 21V19C18 17.9391 17.5786 16.9217 16.8284 16.1716C16.0783 15.4214 15.0609 15 14 15H10C8.93913 15 7.92172 15.4214 7.17157 16.1716C6.42143 16.9217 6 17.9391 6 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Expert Tutors",
        description: "Highly qualified coaches with expertise in business and academic English.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 10V15C22 16.1046 21.1046 17 20 17H4C2.89543 17 2 16.1046 2 15V10M22 10L12 5L2 10M22 10L12 15L2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 12V20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Flexible Timing",
        description: "Schedule your sessions at your convenience, fitting perfectly into your busy lifestyle.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Real-world Practice",
        description: "Focus on practical conversation and scenarios you'll actually encounter.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7112 18.3098 17.8992 16.9674 18.7303C15.6251 19.5614 14.0705 20.0041 12.47 20.01C11.1501 20.0135 9.84814 19.7051 8.67 19.11L3 21L4.89 15.33C4.29486 14.1519 3.9865 12.8499 3.99 11.53C3.99587 9.92951 4.43857 8.3749 5.26966 7.03258C6.10074 5.69025 7.28873 4.6056 8.7 3.9C9.87812 3.30486 11.1801 2.9965 12.5 3H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const Features = () => {
    return (
        <section id="why-us" className="py-24 md:py-32 bg-surface">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black">Why Choose FluencyArc?</h2>
                    <p className="text-xl text-text-secondary">
                        We provide the tools and support you need to transform your communication skills and reach your full potential.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                            <p className="text-text-secondary leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
