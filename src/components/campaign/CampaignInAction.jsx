import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  CalendarDays,
  Users,
  MapPin,
  ArrowRight,
} from "lucide-react";

const timeline = [
  {
    title: "Town Hall Meeting",
    location: "Awka South",
    description:
      "Engaging directly with citizens on education, healthcare and economic opportunities.",
  },
  {
    title: "Market Outreach",
    location: "Eke Awka Market",
    description:
      "Listening to traders and discussing solutions for small businesses.",
  },
  {
    title: "Youth Leadership Forum",
    location: "Community Hall",
    description:
      "Empowering young people through innovation and entrepreneurship.",
  },
  {
    title: "Women's Empowerment Forum",
    location: "Awka North",
    description:
      "Promoting financial inclusion and support for women-led businesses.",
  },
];

const gallery = [
  "https://i.ibb.co/wZs1q3Sj/campaign-image.jpg",
  "https://i.ibb.co/HfMPfFBG/IZIZI-Exhibition-1.jpg",
  "https://i.ibb.co/4Zdc2JC0/IZIZI-Exhibition.jpg",
  "https://i.ibb.co/q3kTjnKv/Kachi-James-Arts-Gallery-opening-in-Enugu.webp",
];

export default function CampaignInAction() {
  return (
    <section className="bg-black text-white py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-[#12f00a] text-sm mb-5">
            Campaign In Action
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            Every Conversation
            <br />
            Creates Change
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 mt-8 text-lg leading-9">
            Every visit, every meeting and every conversation strengthens our
            commitment to building stronger communities through service,
            leadership and opportunity.
          </p>
        </motion.div>

        {/* Featured Video */}

        <div className="rounded-[3rem] overflow-hidden border border-white/10 mb-24">

          <div className="aspect-video">

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dMZLdQYRj-w"
              title="Campaign Video"
              allowFullScreen
            />

          </div>

        </div>

        {/* Timeline */}

        <div className="mb-24">

          <h3 className="text-4xl font-light mb-14">
            Campaign Timeline
          </h3>

          <div className="space-y-10">

            {timeline.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-8"
              >

                <div className="flex flex-col items-center">

                  <div className="w-5 h-5 rounded-full bg-[#12f00a]" />

                  {index !== timeline.length - 1 && (
                    <div className="w-[2px] flex-1 bg-white/10 mt-2" />
                  )}

                </div>

                <div className="pb-8">

                  <div className="flex items-center gap-3 text-[#12f00a]">

                    <CalendarDays size={18} />

                    <span>2026</span>

                  </div>

                  <h4 className="text-2xl mt-3">
                    {item.title}
                  </h4>

                  <div className="flex items-center gap-2 text-gray-400 mt-2">

                    <MapPin size={16} />

                    {item.location}

                  </div>

                  <p className="text-gray-400 leading-8 mt-4">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* Gallery */}

        <div className="mb-24">

          <h3 className="text-4xl font-light mb-14">
            Moments From The Campaign
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {gallery.map((img, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-[2rem]"
              >

                <img
                  src={img}
                  alt=""
                  className="w-full h-80 object-cover hover:scale-110 transition duration-700"
                />

              </motion.div>

            ))}

          </div>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-8 mb-24">

          {[
            ["500+", "Volunteers"],
            ["30+", "Communities Reached"],
            ["120+", "Campaign Events"],
          ].map(([value, label]) => (

            <div
              key={label}
              className="rounded-[2rem] border border-white/10 p-10 text-center bg-zinc-900"
            >

              <Users
                className="mx-auto text-[#12f00a] mb-6"
                size={34}
              />

              <h3 className="text-5xl font-bold">
                {value}
              </h3>

              <p className="text-gray-400 mt-3">
                {label}
              </p>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="rounded-[3rem] bg-gradient-to-r from-[#12f00a]/10 to-transparent border border-[#12f00a]/20 p-16 text-center">

          <h3 className="text-5xl font-light mb-6">
            Be Part of the Movement
          </h3>

          <p className="text-gray-400 max-w-3xl mx-auto leading-9 mb-10">
            Every volunteer, supporter and community partner helps create
            lasting change. Together, we can build a brighter future for Awka
            North and South.
          </p>

          <button className="bg-[#12f00a] text-black px-10 py-5 rounded-full flex items-center gap-3 mx-auto hover:scale-105 transition">

            Become a Volunteer

            <ArrowRight size={20} />

          </button>

        </div>

      </div>

    </section>
  );
}