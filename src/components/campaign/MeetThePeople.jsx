
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Camera, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Camp1 from "../../assets/Image1.jpeg";
import Camp2 from "../../assets/Image2.jpeg";
import Camp3 from "../../assets/Image3.jpeg";
import Camp4 from "../../assets/Image4.jpeg";
import Camp5 from "../../assets/Image5.jpeg";
import Camp6 from "../../assets/Image6.jpeg";
import Camp7 from "../../assets/Image7.jpeg";
import Camp8 from "../../assets/Image8.jpeg";
import Camp9 from "../../assets/Image9.jpeg";
import Camp10 from "../../assets/Image10.jpeg";
import Camp11 from "../../assets/Image11.jpeg";
import Camp12 from "../../assets/Image12.jpeg";

const campaignMoments = [
  {
    id: "01",
    image: Camp1,
    title: "The Campaign Journey",
    category: "Campaign Highlights",
    description:
      "Capturing important moments from the journey towards purposeful representation.",
    size: "large",
  },
  {
    id: "02",
    image: Camp2,
    title: "Leadership in Action",
    category: "Campaign Activities",
    description:
      "Moments that reflect the energy, commitment and vision behind the campaign.",
    size: "small",
  },
  {
    id: "03",
    image: Camp3,
    title: "Building the Movement",
    category: "Campaign Moments",
    description:
      "Documenting the people, experiences and milestones shaping the campaign.",
    size: "small",
  },
  {
    id: "04",
    image: Camp4,
    title: "A Vision for Progress",
    category: "Leadership & Vision",
    description:
      "Sharing ideas and aspirations for a stronger and more prosperous constituency.",
    size: "small",
  },
  {
    id: "05",
    image: Camp5,
    title: "Grassroots Engagement",
    category: "Community Activities",
    description:
      "Documenting campaign activities and engagement across the constituency.",
    size: "small",
  },
  {
    id: "06",
    image: Camp6,
    title: "The Power of Participation",
    category: "Campaign Highlights",
    description:
      "Celebrating participation and the shared desire for meaningful progress.",
    size: "small",
  },
  {
    id: "07",
    image: Camp7,
    title: "A New Generation of Leadership",
    category: "Youth & Leadership",
    description:
      "Highlighting the importance of youth participation in shaping the future.",
    size: "small",
  },
  {
    id: "08",
    image: Camp8,
    title: "Women in the Movement",
    category: "Women Empowerment",
    description:
      "Recognising the important role of women in community development and leadership.",
    size: "small",
  },
  {
    id: "09",
    image: Camp9,
    title: "Conversations That Matter",
    category: "Campaign Engagement",
    description:
      "Capturing conversations around the issues and aspirations of the constituency.",
    size: "small",
  },
  {
    id: "10",
    image: Camp10,
    title: "The Road to Representation",
    category: "Campaign Journey",
    description:
      "Another chapter in the journey towards responsible and purposeful representation.",
    size: "small",
  },
  {
    id: "11",
    image: Camp11,
    title: "Commitment to Service",
    category: "Public Service",
    description:
      "Reflecting a campaign centred on service, responsibility and community progress.",
    size: "small",
  },
  {
    id: "12",
    image: Camp12,
    title: "The Journey Continues",
    category: "Campaign Highlights",
    description:
      "Every milestone adds to the story of a movement looking towards the future.",
    size: "small",
  },
];

export default function CampaignGallery() {
  return (
    <section className="relative bg-[#080808] text-white py-28 md:py-36 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#12f00a]/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Camera size={18} className="text-[#12f00a]" />
              <span className="text-[#12f00a] uppercase tracking-[0.35em] text-xs font-bold">
                Through the Lens
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-light leading-tight">
              Campaign
              <br />
              <span className="font-semibold text-[#12f00a]">
                In Action.
              </span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg max-w-xl mt-7 leading-8">
              Every campaign has a story. Explore moments, milestones
              and activities documenting Kachi Aghasili's journey
              towards representing Awka North and South.
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-2">
              Photo Journal
            </p>
            <p className="text-3xl font-light">
              The Journey <span className="text-[#12f00a]">Continues.</span>
            </p>
          </div>
        </motion.div>

        {/* Gallery */}
        
{/* Campaign Gallery */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

  {campaignMoments.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.1,
      }}
      className={`relative group rounded-[2rem] overflow-hidden ${
        index === 0
          ? "md:col-span-2 xl:col-span-2 h-[480px] md:h-[550px]"
          : "h-[380px] md:h-[420px]"
      }`}
    >

      {/* Campaign Image */}
      <img
        src={item.image}
        alt={item.title}
        loading={index === 0 ? "eager" : "lazy"}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition duration-500" />

      {/* Image Number */}
      <div className="absolute top-6 left-7">
        <span className="text-white/80 text-sm tracking-[0.25em]">
          / {item.id}
        </span>
      </div>

      {/* Featured Label */}
      {index === 0 && (
        <div className="absolute top-6 right-7">
          <span className="bg-[#12f00a] text-black text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full">
            Featured Moment
          </span>
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">

        <p className="text-[#12f00a] text-[10px] uppercase tracking-[0.3em] font-bold mb-3">
          {item.category}
        </p>

        <h3 className={`font-semibold mb-3 ${
          index === 0
            ? "text-3xl md:text-5xl"
            : "text-2xl md:text-3xl"
        }`}>
          {item.title}
        </h3>

        <p className="text-gray-300 text-sm md:text-base leading-7 max-w-xl">
          {item.description}
        </p>

      </div>

      {/* Hover Icon */}
      <div className="absolute bottom-8 right-7 w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white group-hover:bg-[#12f00a] group-hover:border-[#12f00a] group-hover:text-black transition-all duration-300">
        <ArrowUpRight size={20} />
      </div>

    </motion.div>
  ))}

</div>


        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-white text-lg font-medium">
              Every picture tells a story.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Follow the journey. Discover the moments. See the vision.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-4 text-[#12f00a] font-semibold uppercase tracking-widest text-xs group"
          >
            Explore Campaign Gallery
            <span className="w-11 h-11 rounded-full border border-[#12f00a]/40 flex items-center justify-center group-hover:bg-[#12f00a] group-hover:text-black transition-all">
              <ArrowRight size={18} />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
