import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  BrainCircuit,
  Globe,
  Rocket,
  GraduationCap,
  Network,
  ArrowRight,
  PlayCircle,
  Sparkles
} from "lucide-react";

export default function TechPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-32 px-6 text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#12f00a]/10 via-transparent to-black"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <p className="uppercase tracking-[0.4em] text-[#12f00a] text-sm mb-6">
            TECHNOLOGY & INNOVATION
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Building Africa’s
            <span className="text-[#12f00a]"> Digital Future</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto">
            Technology is no longer optional —
            it is the foundation of economic growth,
            global relevance, youth empowerment,
            and future leadership.
          </p>
        </motion.div>
      </section>

      {/* FEATURE VIDEO */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800"
>
  <div className="max-w-5xl mx-auto">
    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/Xydqv2lXXvU?rel=0&modestbranding=1"
        title="Campaign Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>

  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-8 pointer-events-none">
    <div className="flex items-center gap-3 text-[#12f00a] mb-3">
      <PlayCircle />
      <span className="uppercase tracking-widest text-sm">
        Vision Interview
      </span>
    </div>

    <h3 className="text-2xl md:text-4xl font-bold">
      Technology, AI & The Future Of Opportunity
    </h3>
  </div>
</motion.div>

      {/* TECHNOLOGY STATEMENT */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-8 leading-tight">
            Preparing Young People
            <span className="text-[#12f00a]"> For The AI Era</span>
          </h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Africa’s greatest resource is not oil,
              minerals, or land —
              it is the creativity and intelligence
              of its young population.
            </p>

            <p>
              The challenge is access.
              Millions of talented young people remain disconnected
              from modern digital opportunities.
            </p>

            <p>
              Through AImovement and future-focused initiatives,
              Kachi Agahsili advocates for digital literacy,
              artificial intelligence education,
              innovation hubs, and tech-driven entrepreneurship.
            </p>

            <p>
              The goal is clear:
              empower African youth not only to use technology,
              but to build it.
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
            src="https://i.ibb.co/prnK9jKp/Whats-App-Image-2026-05-05-at-5-10-09-AM.jpg"
            alt="Technology Vision"
            className="rounded-3xl shadow-2xl object-cover w-full h-[650px]"
          />

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </motion.div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-28 px-6 bg-gray-950">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">
              Technology Priorities
            </h2>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Strategic areas designed to unlock innovation,
              expand access, and position African youth
              for the global digital economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[
              {
                icon: <BrainCircuit size={42} />,
                title: "Artificial Intelligence",
                text: "Promoting AI education, awareness, and practical applications across industries and communities."
              },
              {
                icon: <GraduationCap size={42} />,
                title: "Digital Education",
                text: "Expanding access to coding, tech skills, online learning, and digital infrastructure."
              },
              {
                icon: <Rocket size={42} />,
                title: "Startup Ecosystems",
                text: "Supporting young innovators, founders, and entrepreneurs building scalable solutions."
              },
              {
                icon: <Network size={42} />,
                title: "Tech Communities",
                text: "Building collaborative innovation networks connecting creators, developers, and institutions."
              },
              {
                icon: <Globe size={42} />,
                title: "Global Competitiveness",
                text: "Preparing African talent for opportunities within the global technology economy."
              },
              {
                icon: <Cpu size={42} />,
                title: "Future Infrastructure",
                text: "Advocating for modern digital systems capable of supporting long-term innovation."
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
      <section className="py-32 px-6 text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-[#12f00a]/5 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <Sparkles className="mx-auto text-[#12f00a] w-16 h-16 mb-8" />

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-10">
            “The future will reward societies
            that invest early in knowledge,
            technology, and human potential.”
          </h2>

          <p className="text-[#12f00a] text-xl font-semibold">
            — Kachi Agahsili
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black mb-8"
          >
            Innovation Begins With Access
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Join a movement focused on preparing the next generation
            for leadership in technology, innovation, and global opportunity.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 inline-flex items-center gap-3 bg-[#12f00a] text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition"
          >
            Explore AImovement
            <ArrowRight />
          </motion.button>
        </div>
      </section>

    </div>
  );
}