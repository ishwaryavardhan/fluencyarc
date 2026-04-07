"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, ArrowRight, ArrowLeft, Play } from "lucide-react";
import Link from "next/link";

const shorts = [
    {
        id: 1,
        tag: "HW / Working Women",
        title: "Journey to Fluency: Real Feedback",
        client: "Fluency Arc",
        views: "1.2M views",
        accent: "#ebb207",
        videoSrc: "/Video%20assets/rose%20and%20leaf/JF%20Feedback.mp4",
    },
    {
        id: 2,
        tag: "Leadership",
        title: "Lead with Unshakable Confidence",
        client: "Fluency Arc",
        views: "890K views",
        accent: "#ebb207",
        videoSrc: "/Video%20assets/rose%20and%20leaf/Life%20Skills%20-%202.mp4",
    },
    {
        id: 3,
        tag: "Communication",
        title: "Master the Art of Conversation",
        client: "Fluency Arc",
        views: "2.1M views",
        accent: "#ebb207",
        videoSrc: "/Video%20assets/rose%20and%20leaf/Life%20Skills%20-%203.mp4",
    },
    {
        id: 4,
        tag: "Emotional Intelligence",
        title: "Understanding Human Dynamics",
        client: "Fluency Arc",
        views: "1.5M views",
        accent: "#ebb207",
        featured: true,
        videoSrc: "/Video%20assets/rose%20and%20leaf/Life%20Skills%20-%204.mp4",
    },
    {
        id: 5,
        tag: "Public Speaking",
        title: "Captivate Your Audience Every Time",
        client: "Fluency Arc",
        views: "3.1M views",
        accent: "#ebb207",
        videoSrc: "/Video%20assets/rose%20and%20leaf/Life%20Skills%20-%205.mp4",
    },
    {
        id: 6,
        tag: "Body Language",
        title: "Mastering Non-Verbal Cues",
        client: "Fluency Arc",
        views: "940K views",
        accent: "#ebb207",
        videoSrc: "/Video%20assets/rose%20and%20leaf/Life%20Skills%20-%206.mp4",
    },
    {
        id: 7,
        tag: "Critical Thinking",
        title: "Sharpen Your Decision Making",
        client: "Fluency Arc",
        views: "1.7M views",
        accent: "#ebb207",
        videoSrc: "/Video%20assets/rose%20and%20leaf/Life%20Skills%20-%207.mp4",
    },
    {
        id: 8,
        tag: "Time Management",
        title: "Elite Efficiency & Focus Secrets",
        client: "Fluency Arc",
        views: "2.4M views",
        accent: "#ebb207",
        videoSrc: "/Video%20assets/rose%20and%20leaf/Life%20Skills%20-%208.mp4",
    },
    {
        id: 9,
        tag: "Conflict Resolution",
        title: "Navigating High-Stakes Talks",
        client: "Fluency Arc",
        views: "1.1M views",
        accent: "#ebb207",
        videoSrc: "/Video%20assets/rose%20and%20leaf/Life%20Skills%20-%209.mp4",
    },
    {
        id: 10,
        tag: "Personal Brand",
        title: "Defining Your Professional Self",
        client: "Fluency Arc",
        views: "4.2M views",
        accent: "#ebb207",
        videoSrc: "/Video%20assets/rose%20and%20leaf/Life%20Skills%20-%2010.mp4",
    },
];

export default function WebShorties() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [mutedStates, setMutedStates] = useState<boolean[]>(shorts.map(() => true));
    const [activeIdx, setActiveIdx] = useState<number>(0);
    const [isVisible, setIsVisible] = useState(true);

    const scroll = (dir: "left" | "right") => {
        containerRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    };

    const toggleMute = (e: React.MouseEvent, idx: number) => {
        e.stopPropagation();
        const video = videoRefs.current[idx];
        if (!video) return;
        const newMuted = !mutedStates[idx];
        video.muted = newMuted;
        setMutedStates(prev => prev.map((m, i) => (i === idx ? newMuted : m)));
    };

    const handleCardClick = (idx: number) => {
        setActiveIdx(idx);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.7 }
        );
        if (scrollRef.current) {
            observer.observe(scrollRef.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        videoRefs.current.forEach((video, i) => {
            if (!video) return;
            if (i === activeIdx && isVisible) {
                video.play().catch(() => { });
            } else {
                video.pause();
                if (i !== activeIdx) {
                    video.currentTime = 0;
                }
            }
        });
    }, [activeIdx, isVisible]);

    return (
        <section id="testimonials" ref={scrollRef} className="relative bg-gradient-to-br from-[#013d45] via-[#012a2f] to-[#013d45] py-10 overflow-hidden">
            {/* Soft Ambient Light */}
            <div
                className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none blur-[100px]"
                style={{ background: "radial-gradient(circle, #ebb207 0%, transparent 80%)" }}
            />

            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="animate-fade-in">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-1 bg-[#ebb207] rounded-full" />
                            <span className="text-[#ebb207] text-sm font-black uppercase tracking-[0.4em]">
                                Video Insights
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-none mb-6">
                            Students <span className="text-[#ebb207] italic underline decoration-white/10 underline-offset-8">Testimonials</span>
                        </h2>
                        <p className="text-white/70 text-lg max-w-xl font-medium leading-relaxed">
                            Watch how our students transform. Short, impactful feedback and lessons engineered for real-world fluency.
                        </p>
                    </div>

                    {/* Nav Navigation */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => scroll("left")}
                            className="w-14 h-14 rounded-full border-2 border-white/10 flex items-center justify-center text-white/50 hover:border-[#ebb207] hover:text-[#ebb207] hover:bg-[#ebb207]/5 transition-all outline-none"
                        >
                            <ArrowLeft size={20} strokeWidth={3} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-14 h-14 rounded-full border-2 border-white/10 flex items-center justify-center text-white/50 hover:border-[#ebb207] hover:text-[#ebb207] hover:bg-[#ebb207]/5 transition-all outline-none"
                        >
                            <ArrowRight size={20} strokeWidth={3} />
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div
                    ref={containerRef}
                    className="flex gap-4 overflow-x-auto pb-8 pt-2 items-center px-4"
                    style={{
                        scrollSnapType: "x mandatory",
                        overflowY: 'hidden',
                        scrollbarWidth: 'none', // for Firefox
                        msOverflowStyle: 'none' // for IE/Edge
                    }}
                >
                    {/* Hiding scrollbar for Chrome/Safari */}
                    <style jsx>{`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>

                    {shorts.map((s, i) => {
                        const isActive = activeIdx === i;
                        const isMuted = mutedStates[i];

                        return (
                            <motion.div
                                key={s.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                animate={{
                                    scale: isActive ? 1.05 : 1,
                                    zIndex: isActive ? 20 : 1,
                                }}
                                onClick={() => handleCardClick(i)}
                                className={`relative flex-shrink-0 rounded-[1.5rem] overflow-hidden cursor-pointer group transition-all duration-500 shadow-xl ${isActive ? 'shadow-yellow-400/10' : 'shadow-black/20'}`}
                                style={{
                                    width: isActive ? "240px" : "180px",
                                    height: isActive ? "420px" : "320px",
                                    scrollSnapAlign: "center",
                                }}
                            >
                                {/* Video Layer */}
                                <video
                                    ref={el => { videoRefs.current[i] = el; }}
                                    src={s.videoSrc}
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Green Gradient Overlay */}
                                <div
                                    className="absolute inset-0 transition-opacity duration-300"
                                    style={{
                                        background: isActive
                                            ? "linear-gradient(to top, rgba(1,61,69,0.95) 10%, rgba(1,61,69,0.4) 50%, rgba(1,61,69,0.1) 100%)"
                                            : "linear-gradient(to top, rgba(1,61,69,0.85) 20%, rgba(1,61,69,0.6) 100%)",
                                    }}
                                />

                                {/* Interactive Glow Ring */}
                                {isActive && (
                                    <motion.div
                                        layoutId="glow-ring"
                                        className="absolute inset-0 rounded-[1.5rem] border-[2px] border-[#ebb207] pointer-events-none z-30"
                                    />
                                )}

                                {/* Status Badge */}
                                {isActive && (
                                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#ebb207] text-[#013d45] px-3 py-1 rounded-full z-40 shadow-lg">
                                        <Play size={10} fill="currentColor" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Watching</span>
                                    </div>
                                )}

                                {/* Volume Control */}
                                <button
                                    onClick={e => toggleMute(e, i)}
                                    className="absolute top-4 right-4 z-40 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#ebb207] hover:text-[#013d45] transition-all text-white shadow-xl"
                                >
                                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                                </button>

                                {/* Info Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                                    <div className="space-y-2">
                                        <span className="inline-block px-2.5 py-0.5 bg-[#ebb207]/20 border border-[#ebb207]/30 rounded-lg text-[#ebb207] text-[10px] font-black uppercase tracking-widest">
                                            {s.tag}
                                        </span>
                                        <h3 className="text-white font-bold text-base leading-tight group-hover:text-[#ebb207] transition-colors">
                                            {s.title}
                                        </h3>
                                        <div className="flex items-center justify-between pt-2">
                                            <p className="text-[#ebb207] text-[10px] font-black uppercase tracking-wider">{s.views}</p>
                                            <ArrowRight size={12} className="text-white/40 group-hover:text-[#ebb207] transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
