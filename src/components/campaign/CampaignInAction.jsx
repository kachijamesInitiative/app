
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Landmark,
  GraduationCap,
  BriefcaseBusiness,
  HeartHandshake,
  Building2,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";

const priorities = [
  {
    number: "01",
    title: "Education & Human Capital",
    description:
      "A future where young people have access to quality education, practical skills and opportunities to compete in a changing world.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Economic Opportunity",
    description:
      "Supporting the conditions that help traders, entrepreneurs, farmers and small businesses grow and create sustainable livelihoods.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Community Development",
    description:
      "Championing better infrastructure, essential services and development that reaches communities across Awka North and South.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Inclusive Representation",
    description:
      "Making room for the voices of women, young people, professionals, traditional institutions and every part of the constituency.",
    icon: HeartHandshake,
  },
];

const principles = [
  {
    icon: Landmark,
    title: "Representation with Purpose",
    text: "A representative should be a strong voice for the people, their needs and their aspirations.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability in Leadership",
    text: "Public trust deserves transparency, responsibility and a commitment to listening.",
  },
  {
    icon: Lightbulb,
    title: "Ideas into Opportunities",
    text: "Progress begins with practical ideas that create opportunities and improve everyday life.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

export default function CampaignInAction() {
  return (
    <main className="bg-[#080a08] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[680px] flex items-center border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(18,240,10,0.12),transparent_45%)]" />
        <div className="absolute right-[-10%] top-[-20%] w-[600px] h-[600px] rounded-full border border-white/[0.04]" />
        <div className="absolute right-[-4%] top-[-10%] w-[450px] h-[450px] rounded-full border border-white/[0.05]" />

        <div className="relative max-w-7xl mx-auto px-6 w-full py-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-[2px] bg-[#12f00a]" />
              <p className="uppercase tracking-[0.35em] text-[#12f00a] text-xs md:text-sm">
                The Vision · The Commitment · The Future
              </p>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-light leading-[0.98] tracking-[-0.06em]">
              The work
              <br />
              <span className="text-[#12f00a] italic">ahead.</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-10 mt-12 items-end">
              <p className="text-gray-400 text-lg md:text-xl leading-9 max-w-xl">
                Awka North and South deserve representation that listens,
                understands the people and puts the future of the constituency
                at the centre of every conversation.
              </p>

              <div className="md:justify-self-end">
                <p className="text-white/40 uppercase tracking-[0.25em] text-xs mb-3">
                  A campaign built around
                </p>
                <p className="text-2xl md:text-3xl font-light">
                  People. Purpose.
                  <span className="text-[#12f00a]"> Progress.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-8 hidden md:block">
          <p className="text-white/30 text-[10px] tracking-[0.35em] uppercase [writing-mode:vertical-rl]">
            Presenting Hope
          </p>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-14">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4"
            >
              <p className="text-[#12f00a] uppercase tracking-[0.3em] text-xs mb-6">
                A Different Approach
              </p>
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Leadership
                <br />
                must mean
                <br />
                <span className="text-[#12f00a]">something.</span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 lg:col-start-6"
            >
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/90">
                Representation should be more than occupying a seat. It should
                mean carrying the hopes, concerns and ambitions of the people
                into the places where decisions are made.
              </p>

              <p className="text-gray-500 leading-8 mt-8 max-w-2xl">
                This campaign is an opportunity to rethink what effective
                representation can look like: accessible leadership, meaningful
                engagement and a clear focus on the issues that shape everyday
                life in our communities.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <span className="w-10 h-[1px] bg-[#12f00a]" />
                <span className="text-sm tracking-widest uppercase text-gray-400">
                  Kachi Aghasili · Presenting Hope
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRIORITIES */}
      <section className="py-28 bg-[#101310] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <div>
              <p className="text-[#12f00a] uppercase tracking-[0.3em] text-xs mb-5">
                The Priorities
              </p>
              <h2 className="text-5xl md:text-7xl font-light tracking-tight">
                What matters
                <br />
                <span className="text-white/40">most.</span>
              </h2>
            </div>

            <p className="text-gray-400 leading-8 max-w-md">
              A vision for a constituency where people have greater
              opportunities, stronger communities and a voice that matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {priorities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group bg-[#101310] p-8 md:p-12 hover:bg-[#151a14] transition-colors duration-500"
                >
                  <div className="flex justify-between items-start mb-14">
                    <span className="text-[#12f00a] text-sm tracking-widest">
                      {item.number}
                    </span>
                    <Icon
                      size={30}
                      strokeWidth={1.2}
                      className="text-white/40 group-hover:text-[#12f00a] transition-colors"
                    />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-light mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 leading-8 max-w-lg">
                    {item.description}
                  </p>

                  <div className="mt-10 w-12 h-[2px] bg-white/20 group-hover:w-24 group-hover:bg-[#12f00a] transition-all duration-500" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* REPRESENTATION */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-5 border border-[#12f00a]/20 rounded-[2rem] translate-x-3 translate-y-3" />

              <div className="relative min-h-[420px] md:min-h-[540px] rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-[#182118] via-[#101510] to-black p-10 md:p-14 flex flex-col justify-between">
                <div className="absolute right-[-80px] top-[-80px] w-80 h-80 rounded-full border border-[#12f00a]/10" />
                <div className="absolute right-[-30px] top-[-30px] w-60 h-60 rounded-full border border-[#12f00a]/10" />

                <div className="relative">
                  <p className="text-[#12f00a] uppercase tracking-[0.3em] text-xs">
                    Awka North & South
                  </p>
                </div>

                <div className="relative">
                  <p className="text-5xl md:text-7xl font-light leading-tight tracking-tight">
                    One
                    <br />
                    constituency.
                    <br />
                    <span className="text-[#12f00a]">Shared future.</span>
                  </p>
                  <div className="w-16 h-[2px] bg-[#12f00a] mt-10" />
                </div>

                <p className="relative text-white/40 text-xs uppercase tracking-[0.3em]">
                  Presenting Hope
                </p>
              </div>
            </motion.div>

            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-[#12f00a] uppercase tracking-[0.3em] text-xs mb-6">
                  The Standard We Believe In
                </p>

                <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                  Representation
                  <br />
                  that works
                  <br />
                  <span className="text-white/40">for everyone.</span>
                </h2>

                <p className="text-gray-500 leading-8 mb-12">
                  A stronger constituency begins with leadership that values
                  every community and recognises that development must create
                  opportunities for people across different backgrounds and
                  generations.
                </p>
              </motion.div>

              <div className="space-y-9">
                {principles.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-5 border-b border-white/10 pb-8"
                    >
                      <div className="w-12 h-12 shrink-0 rounded-full border border-[#12f00a]/30 flex items-center justify-center">
                        <Icon size={21} className="text-[#12f00a]" />
                      </div>

                      <div>
                        <h3 className="text-xl font-medium mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 leading-7">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="relative py-32 md:py-40 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(18,240,10,0.12),transparent_60%)]" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto px-6 text-center"
        >
          <p className="text-[#12f00a] uppercase tracking-[0.35em] text-xs mb-8">
            The Future Is Worth Working For
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight">
            Hope is not
            <br />
            just a promise.
            <br />
            <span className="text-[#12f00a] italic">It is a responsibility.</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8 mt-9 mb-12">
            Let us build a future where every community is heard, every voice
            matters and every opportunity brings us closer to the Awka North
            and South we believe in.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-4 bg-[#12f00a] text-black px-9 py-5 rounded-full font-semibold hover:bg-white transition-all duration-300 group"
          >
            Connect With The Campaign
            <ArrowUpRight
              size={20}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </Link>

          <div className="mt-20 flex items-center justify-center gap-4">
            <span className="w-10 h-px bg-white/20" />
            <span className="text-white/40 uppercase tracking-[0.35em] text-[10px]">
              Kachi Aghasili · Presenting Hope
            </span>
            <span className="w-10 h-px bg-white/20" />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
