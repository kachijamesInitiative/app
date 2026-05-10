import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Scale,
  Landmark,
  Globe,
  Lightbulb,
  Users,
  Cpu,
  ArrowRight
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#12f00a]/10 via-transparent to-transparent"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-[#12f00a] mb-4 text-sm">
            About The Initiative
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Building a Future Rooted in
            <span className="text-[#12f00a]"> Culture, Innovation & People</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            The Kachi Aghasili Initiative represents a new generation of leadership —
            one that blends policy, technology, culture, and community-driven action
            to create lasting opportunities for the people of today and generations ahead.
          </p>
        </motion.div>
      </section>

      {/* IMAGE + STORY */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://i.ibb.co/My1YV7Zf/director.jpg"
            alt="Kachi Aghasili"
            className="rounded-3xl shadow-2xl object-cover w-full h-[650px]"
          />

          <div className="absolute -bottom-8 -right-8 bg-[#12f00a] text-black p-8 rounded-3xl shadow-2xl hidden md:block">
            <h2 className="text-4xl font-black">2026</h2>
            <p className="font-semibold">
              A Vision Beyond Politics
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Leadership Designed For A Modern Africa
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              Kachi Aghasili is a lawyer, cultural advocate,
              innovator, and institution builder committed to creating
              systems that empower people beyond political cycles.
            </p>

            <p>
              With academic experience spanning Harvard Law School,
              Purdue University, and Emory University, her work reflects
              a rare intersection of legal excellence, technological
              awareness, and cultural intelligence.
            </p>

            <p>
              Through the Isi Nri Museum, Kachi champions the preservation
              of Ìgbò heritage while expanding access to modern cultural education.
              Through AImovement, she invests in digital literacy,
              AI innovation, and the future workforce of Africa.
            </p>

            <p>
              Her philosophy is simple:
              development must be inclusive, intelligent, and deeply connected
              to identity. Every project, partnership, and initiative is designed
              to create measurable impact for communities.
            </p>
          </div>

          <Link to="/speeches">
            <button className="mt-10 flex items-center gap-3 bg-[#12f00a] text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Explore The Vision
              <ArrowRight />
            </button>

          </Link>


        </motion.div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-28 px-6 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">
              Core Pillars Of Impact
            </h2>

            <p className="max-w-3xl mx-auto text-gray-400 text-lg">
              The initiative focuses on transformative sectors capable of
              redefining economic opportunity, social mobility,
              and cultural sustainability in Nigeria and across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[
              {
                icon: <Scale className="w-10 h-10" />,
                title: "Law & Governance",
                text: "Strengthening institutions through transparent leadership, legal reform, and accountable governance."
              },
              {
                icon: <Cpu className="w-10 h-10" />,
                title: "Technology & AI",
                text: "Creating digital opportunities through innovation, AI education, and emerging technologies."
              },
              {
                icon: <Landmark className="w-10 h-10" />,
                title: "Cultural Preservation",
                text: "Protecting African identity while modernizing access to heritage and creative industries."
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Youth Development",
                text: "Equipping young people with tools, mentorship, and access to future-ready careers."
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Global Partnerships",
                text: "Connecting local communities to international opportunities and collaborations."
              },
              {
                icon: <Lightbulb className="w-10 h-10" />,
                title: "Innovation Economy",
                text: "Supporting entrepreneurs, creators, and innovators driving economic transformation."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/60 border border-gray-800 p-8 rounded-3xl hover:border-[#12f00a] hover:scale-105 transition duration-300"
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

      {/* QUOTE SECTION */}
      <section className="py-32 px-6 text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-[#12f00a]/5 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-10">
            “Leadership is not about power —
            it is about creating systems where people can thrive.”
          </h2>

          <p className="text-[#12f00a] text-xl font-semibold">
            — Kachi Aghasili
          </p>
        </motion.div>
      </section>

      {/* FUTURE SECTION */}
      <section className="py-28 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black mb-8"
          >
            A Movement Beyond Campaigns
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed"
          >
            The Kachi Aghasili Initiative is not limited to elections or public office.
            It is a long-term platform focused on building institutions,
            empowering communities, and preparing Africa for a future driven by
            knowledge, innovation, and cultural confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-14"
          >
            <button className="bg-[#12f00a] text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition">
              Join The Movement
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}