import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroCampaign() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#12f00a15,transparent_40%)]"></div>
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-[#12f00a]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-green-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-20">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-block bg-[#12f00a]/10 border border-[#12f00a]/20 text-[#12f00a] px-5 py-2 rounded-full uppercase tracking-[0.25em] text-xs">

              Campaign 2027

            </span>

            <h1 className="text-5xl md:text-7xl xl:text-8xl font-light leading-tight mt-8">

              Building
              <br />

              A Better Future
              <br />

              Together.

            </h1>

            <p className="text-gray-300 text-lg leading-9 max-w-xl mt-8">

              This campaign is built on service,
              innovation, youth empowerment,
              cultural preservation and economic opportunity.
              Together we can build stronger communities,
              create opportunities and inspire lasting change.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="bg-[#12f00a] text-black px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:scale-105 transition"
              >

                Join The Movement

                <ArrowRight size={18} />

              </Link>

              <a
                href="#manifesto"
                className="border border-white/20 px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white hover:text-black transition"
              >

                <PlayCircle size={20} />

                Read Manifesto

              </a>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-6 mt-20">

              <div>

                <h2 className="text-4xl font-bold text-[#12f00a]">
                  10+
                </h2>

                <p className="text-gray-400 mt-2">
                  Years of Leadership
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-[#12f00a]">
                  40+
                </h2>

                <p className="text-gray-400 mt-2">
                  Community Projects
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-[#12f00a]">
                  100%
                </h2>

                <p className="text-gray-400 mt-2">
                  Commitment
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-800">

              <img
                src="https://i.ibb.co/FkHmVzFD/Director.jpg"
                alt="Kachi Aghasili"
                className="w-full h-[700px] object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute bottom-10 -left-8 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 w-72">

              <p className="uppercase tracking-[0.25em] text-xs text-[#12f00a]">

                Vision

              </p>

              <h3 className="text-2xl mt-3 mb-4">

                Leadership That Listens

              </h3>

              <p className="text-gray-400 leading-7">

                A commitment to inclusive growth,
                innovation, transparency and opportunities
                for every citizen.

              </p>

            </div>

            {/* Floating Badge */}

            <div className="absolute top-10 right-10 bg-[#12f00a] text-black px-6 py-3 rounded-full font-semibold shadow-xl">

              Future Starts Here

            </div>

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

        <div className="w-7 h-12 rounded-full border border-white/30 flex justify-center">

          <div className="w-2 h-2 bg-[#12f00a] rounded-full mt-3"></div>

        </div>

      </div>

    </section>
  );
}