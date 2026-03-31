"use client";

import React from "react";

const news = [
    {
        tag: "Case Study",
        title: "How John improved his IELTS band by 2.0 in 4 weeks",
        img: "JS",
        color: "bg-blue-500",
    },
    {
        tag: "Mentorship",
        title: "Meet our new Top-rated Mentors from UK & Canada",
        img: "TM",
        color: "bg-purple-500",
    },
    {
        tag: "Feature",
        title: "New 1-on-1 Adaptive Learning portal is now live!",
        img: "LP",
        color: "bg-indigo-500",
    },
];

const News = () => {
    return (
        <section className="py-8 bg-white overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-black mb-6">Latest on News</h2>
                <p className="text-xl text-text-secondary font-medium mb-20">Discover stories, updates and academic tips from FluencyArc.</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <div key={index} className="group text-left space-y-6">
                            <div className={`aspect-[4/3] ${item.color} rounded-[2.5rem] flex items-center justify-center text-white text-4xl font-black shadow-xl group-hover:scale-[1.02] transition-transform`}>
                                {item.img}
                            </div>
                            <div className="space-y-3 px-2">
                                <span className="text-[#013d45] font-black text-xs uppercase tracking-widest">{item.tag}</span>
                                <h4 className="text-2xl font-black text-foreground group-hover:text-[#013d45] transition-colors cursor-pointer leading-tight">
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
