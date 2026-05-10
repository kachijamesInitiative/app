import React from "react";
import { motion } from "framer-motion";
import {
    Cpu,
    GraduationCap,
    Landmark,
    Globe,
    ShieldCheck,
    Sparkles,
    ArrowRight
} from "lucide-react";

export default function VisionPage() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">

            {/* HERO */}
            <section className="relative py-36 px-6 text-center overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-b from-[#12f00a]/10 via-transparent to-transparent"></div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-6xl mx-auto"
                >
                    <p className="uppercase tracking-[0.4em] text-[#12f00a] mb-5 text-sm">
                        THE VISION
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
                        Reimagining Leadership
                        <br />
                        For A Smarter Africa
                    </h1>

                    <p className="text-gray-300 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
                        A future where innovation, culture, education,
                        and governance work together to unlock
                        opportunity for every community.
                    </p>
                </motion.div>
            </section>

            {/* MAIN STATEMENT */}
            <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-black mb-8 leading-tight">
                        The Next Generation
                        <span className="text-[#12f00a]"> Deserves More</span>
                    </h2>

                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            Africa stands at the edge of a defining era —
                            one shaped by technology, creativity,
                            entrepreneurship, and global transformation.
                        </p>

                        <p>
                            Yet millions of young people remain disconnected
                            from opportunity due to outdated systems,
                            weak institutions, and limited access.
                        </p>

                        <p>
                            The Kachi Aghasili Vision seeks to bridge that gap
                            by building systems that are intelligent,
                            inclusive, and future-focused.
                        </p>

                        <p>
                            This is not simply about governance.
                            It is about redesigning possibility itself.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <img
                        src="https://i.ibb.co/FkHmVzFD/Director.jpg"
                        alt="Vision"
                        className="rounded-3xl shadow-2xl object-cover w-full h-[650px]"
                    />

                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/70 to-transparent"></div>
                </motion.div>
            </section>

            {/* FUTURE GRID */}
            <section className="py-28 px-6 bg-gray-950">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black mb-6">
                            Strategic Areas Of Transformation
                        </h2>

                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            A blueprint for sustainable development,
                            innovation-driven growth, and human empowerment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {[
                            {
                                icon: <Cpu size={42} />,
                                title: "AI & Technology",
                                text: "Expanding access to artificial intelligence, coding, digital infrastructure, and innovation ecosystems."
                            },
                            {
                                icon: <GraduationCap size={42} />,
                                title: "Modern Education",
                                text: "Creating future-ready learning systems connected to real global opportunities."
                            },
                            {
                                icon: <Landmark size={42} />,
                                title: "Institution Building",
                                text: "Strengthening governance structures through transparency, accountability, and modernization."
                            },
                            {
                                icon: <Globe size={42} />,
                                title: "Global Relevance",
                                text: "Positioning local talent, businesses, and culture for international competitiveness."
                            },
                            {
                                icon: <ShieldCheck size={42} />,
                                title: "Economic Security",
                                text: "Supporting entrepreneurship, local industries, and sustainable economic participation."
                            },
                            {
                                icon: <Sparkles size={42} />,
                                title: "Creative & Cultural Power",
                                text: "Investing in African creativity, heritage preservation, and cultural storytelling."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-[#12f00a] hover:-translate-y-2 transition duration-300"
                            >
                                <div className="text-[#12f00a] mb-6">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* QUOTE */}
            <section className="py-32 px-6 text-center relative">

                <div className="absolute inset-0 bg-[#12f00a]/5 blur-3xl"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-5xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-black leading-tight mb-10">
                        “The future belongs to societies
                        that invest in people before politics.”
                    </h2>

                    <p className="text-[#12f00a] text-xl font-semibold">
                        — Kachi Aghasili Vision 2026
                    </p>
                </motion.div>
            </section>

            {/* FINAL CTA */}
            <section className="py-28 px-6">
                <div className="max-w-5xl mx-auto text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-black mb-8"
                    >
                        The Future Is Built Together
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        This vision belongs to students,
                        entrepreneurs, creators, workers,
                        innovators, and communities ready
                        to shape a stronger future.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-12 inline-flex items-center gap-3 bg-[#12f00a] text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition"
                    >
                        Join The Movement
                        <ArrowRight />
                    </motion.button>
                </div>
            </section>

        </div>
    );
}