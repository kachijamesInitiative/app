import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyIRun() {
  return (
    <section className="bg-zinc-950 text-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-[#12f00a] text-sm mb-5">
            Why I'm Running
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            Leadership Begins
            <br />
            With Listening.
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg leading-9">
            Every meaningful change starts by understanding the people,
            respecting their voices, and working together toward a shared
            future.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2.5rem] border border-white/10">
              <img
                src="https://i.ibb.co/GQMCG3kM/IMG-20260724-WA0149.jpg"
                alt="Kachi Aghasili"
                className="w-full h-[650px] object-cover"
              />
            </div>

            {/* Floating Quote */}
            <div className="absolute -bottom-8 left-8 bg-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 max-w-sm">
              <Quote className="text-[#12f00a] mb-4" size={30} />

              <p className="text-gray-300 leading-8 italic">
                Leadership is not about holding power;
                it is about creating opportunities for
                people to thrive.
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-light mb-8">
              Serving With Purpose,
              <br />
              Building With Vision.
            </h3>

            <p className="text-gray-400 leading-9 mb-6">
              My decision to serve is rooted in a lifelong commitment to
              creating opportunities for people and strengthening our
              communities. Through my work in law, cultural preservation,
              education, technology, and youth development, I have witnessed
              the incredible potential that exists when people are given the
              right support.
            </p>

            <p className="text-gray-400 leading-9 mb-6">
              I believe leadership should be practical, transparent, and
              people-centered. It should focus on solving problems,
              empowering young people, supporting entrepreneurs,
              preserving our cultural heritage, and ensuring that every
              community has access to meaningful opportunities.
            </p>

            <p className="text-gray-400 leading-9">
              This campaign is about partnership. It is about listening,
              learning, and working together to build a future where
              innovation, education, and inclusive development become the
              foundation for lasting progress.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-10 bg-[#12f00a] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Join The Movement
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-24">

          <div className="bg-zinc-900 rounded-3xl border border-white/10 p-8">
            <h4 className="text-2xl mb-4">People First</h4>

            <p className="text-gray-400 leading-8">
              Listening to communities and ensuring that every voice
              contributes to meaningful development.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-white/10 p-8">
            <h4 className="text-2xl mb-4">Opportunity</h4>

            <p className="text-gray-400 leading-8">
              Supporting education, entrepreneurship, innovation,
              and job creation that empower individuals and families.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-white/10 p-8">
            <h4 className="text-2xl mb-4">Legacy</h4>

            <p className="text-gray-400 leading-8">
              Protecting our cultural identity while building institutions
              that will serve future generations with integrity.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}