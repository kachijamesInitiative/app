import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  BriefcaseBusiness,
  Cpu,
  Sprout,
  Landmark,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const manifesto = [
  {
    number: "01",
    title: "Education",
    icon: GraduationCap,
    description:
      "Improve schools, expand scholarships, strengthen teacher development and digital learning.",
    details: [
      "Increase scholarship opportunities for deserving students.",
      "Renovate public primary and secondary schools.",
      "Support teacher training and professional development.",
      "Promote digital classrooms and ICT education.",
      "Strengthen vocational and technical education.",
    ],
  },

  {
    number: "02",
    title: "Healthcare",
    icon: HeartPulse,
    description:
      "Accessible and affordable healthcare for every family.",
    details: [
      "Upgrade primary healthcare centres.",
      "Improve maternal and child healthcare.",
      "Expand health insurance awareness.",
      "Increase access to essential medicines.",
      "Support community health outreach programmes.",
    ],
  },

  {
    number: "03",
    title: "Economic Growth",
    icon: BriefcaseBusiness,
    description:
      "Creating jobs through entrepreneurship and investment.",
    details: [
      "Support SMEs with grants and mentorship.",
      "Create youth employment programmes.",
      "Improve access to business financing.",
      "Encourage local manufacturing.",
      "Promote tourism and creative industries.",
    ],
  },

  {
    number: "04",
    title: "Innovation & Technology",
    icon: Cpu,
    description:
      "Preparing our communities for the digital economy.",
    details: [
      "Expand digital skills training.",
      "Support AI and innovation hubs.",
      "Improve digital government services.",
      "Provide ICT centres for students.",
      "Partner with technology companies.",
    ],
  },

  {
    number: "05",
    title: "Agriculture",
    icon: Sprout,
    description:
      "Empowering farmers and improving food security.",
    details: [
      "Provide improved seedlings.",
      "Support mechanised farming.",
      "Improve rural farm roads.",
      "Expand access to agricultural loans.",
      "Develop modern produce markets.",
    ],
  },

  {
    number: "06",
    title: "Culture & Heritage",
    icon: Landmark,
    description:
      "Protecting our heritage while creating new opportunities.",
    details: [
      "Preserve historical sites.",
      "Promote cultural festivals.",
      "Support local artists and craftsmen.",
      "Develop tourism infrastructure.",
      "Protect our traditions for future generations.",
    ],
  },
];
export default function Manifesto() {
    const [open, setOpen] = useState(null);
  return (
    <section
      id="manifesto"
      className="py-32 bg-gradient-to-b from-black via-zinc-950 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-[#12f00a] text-sm mb-5">
            Our Manifesto
          </p>

          <h2 className="text-5xl md:text-7xl font-light mb-8">
            A Vision
            <br />
            Rooted In Action.
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-9">
            Every commitment is guided by practical solutions that improve
            lives, strengthen institutions, and create opportunities for
            every resident of Awka North & South.
          </p>
        </motion.div>

        {/* Cards */}
<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

  {manifesto.map((item, index) => {

    const Icon = item.icon;

    return (

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * .1 }}
        className="rounded-[2.5rem] border border-white/10 bg-zinc-900 overflow-hidden"
      >

        <div className="p-10">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-xs tracking-[0.35em] text-[#12f00a] mb-4">

                {item.number}

              </p>

              <h3 className="text-3xl font-light">

                {item.title}

              </h3>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-[#12f00a]/10 flex items-center justify-center">

              <Icon className="text-[#12f00a]" size={30} />

            </div>

          </div>

          <p className="text-gray-400 leading-8 mt-8">

            {item.description}

          </p>

          <button

            onClick={() =>
              setOpen(open === index ? null : index)
            }

            className="mt-8 flex items-center gap-3 text-[#12f00a]"
          >

            Learn More

            <ChevronDown
              size={18}
              className={`transition duration-300 ${
                open === index ? "rotate-180" : ""
              }`}
            />

          </button>

        </div>

        <AnimatePresence>

          {open === index && (

            <motion.div

              initial={{ height: 0, opacity: 0 }}

              animate={{ height: "auto", opacity: 1 }}

              exit={{ height: 0, opacity: 0 }}

              transition={{ duration: .35 }}

              className="overflow-hidden border-t border-white/10"
            >

              <div className="p-10 bg-black/30">

                <ul className="space-y-5">

                  {item.details.map((point, i) => (

                    <li
                      key={i}
                      className="flex gap-4 items-start"
                    >

                      <div className="w-2 h-2 rounded-full bg-[#12f00a] mt-3"></div>

                      <p className="text-gray-300 leading-8">

                        {point}

                      </p>

                    </li>

                  ))}

                </ul>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </motion.div>

    );

  })}

</div>

        {/* Bottom Quote */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-24"
        >
          <div className="rounded-[3rem] border border-[#12f00a]/20 bg-[#12f00a]/5 p-12 text-center">

            <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Leadership is measured
              <br />
              by the lives we improve.
            </h3>

            <p className="max-w-3xl mx-auto text-gray-300 leading-9">
              Every commitment in this manifesto is driven by integrity,
              accountability and measurable action. Together we can build
              stronger institutions, empower communities and create lasting
              opportunities for future generations.
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}