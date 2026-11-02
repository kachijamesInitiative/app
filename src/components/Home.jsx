import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import Camp1 from "../assets/Image1.jpeg";
import Camp2 from "../assets/Image2.jpeg";
import Camp3 from "../assets/Image3.jpeg";

import Campaign01 from "../assets/campaign-01.jpeg";
import Campaign02 from "../assets/campaign-02.jpeg";
import Campaign03 from "../assets/campaign-03.jpeg";
import Campaign04 from "../assets/campaign-04.jpeg";
import Campaign05 from "../assets/campaign-05.jpeg";
import Campaign06 from "../assets/campaign-06.jpeg";


import {
    ArrowRight,
    ArrowLeft,
    ArrowUpRight,
    Play,
    Camera,
    Mail,
    Phone,
    MapPin,
    Globe,
    CheckCircle2,
    GraduationCap,
    HeartPulse,
    BriefcaseBusiness,
    Cpu,
    Sprout,
    Landmark,
    Users,
    Handshake,
    Mic2,
    Award,
} from "lucide-react";

export default function LuxuryHomepagePreview() {
    const campaignImages = {
        Camp1,
        Camp2,
        Camp3,
    };

    const focusAreas = [
        {
            title: "Digital Innovation",
            text: "Expanding access to technology, digital literacy, and future-focused innovation across communities.",
        },
        {
            title: "Youth Empowerment",
            text: "Creating pathways for leadership, education, creativity, and sustainable opportunity for young people.",
        },
        {
            title: "Cultural Leadership",
            text: "Preserving heritage while modernizing access to cultural identity, storytelling, and creative industries.",
        },
    ];
    const manifesto = [
        {
            number: "01",
            icon: GraduationCap,
            title: "Education",
            description:
                "Modern classrooms, scholarships, teacher development and digital learning opportunities for every child."
        },
        {
            number: "02",
            icon: HeartPulse,
            title: "Healthcare",
            description:
                "Affordable healthcare, stronger primary health centres and maternal care for every family."
        },
        {
            number: "03",
            icon: BriefcaseBusiness,
            title: "Economic Growth",
            description:
                "Support local businesses, attract investments and empower entrepreneurs to create jobs."
        },
        {
            number: "04",
            icon: Cpu,
            title: "Innovation",
            description:
                "Digital skills, AI education, technology hubs and innovation-driven opportunities."
        },
        {
            number: "05",
            icon: Sprout,
            title: "Agriculture",
            description:
                "Support farmers with training, modern equipment, financing and improved market access."
        },
        {
            number: "06",
            icon: Landmark,
            title: "Culture & Heritage",
            description:
                "Preserve our cultural identity while promoting tourism and the creative economy."
        }
    ];
    const campaignGallery = [
        {
            id: 1,
            title: "Community Outreach",
            category: "Grassroots Engagement",
            image: campaignImages.Camp1,
            description:
                "Meeting residents, listening to concerns and building solutions together.",
            icon: Users,
        },
        {
            id: 2,
            title: "Women's Empowerment",
            category: "Inclusive Leadership",
            image: campaignImages.Camp2,
            description:
                "Supporting women through opportunity, education and community leadership.",
            icon: Handshake,
        },
        {
            id: 3,
            title: "Public Address",
            category: "Leadership",
            image: campaignImages.Camp3,
            description:
                "Sharing ideas that inspire progress and unite communities.",
            icon: Mic2,
        },
    ];

    const campaignSlides = [
  {
    image: Campaign01,
    title: "A Journey of Connection",
    category: "COMMUNITY ENGAGEMENT",
    location: "Awka North & South",
    date: "Campaign Highlights",
    description:
      "Every meaningful journey begins with people. Moments of engagement, connection and a shared vision for a better future.",
  },
  {
    image: Campaign02,
    title: "Listening to Our Communities",
    category: "GRASSROOTS ENGAGEMENT",
    location: "Awka North & South",
    date: "Campaign Highlights",
    description:
      "Building a stronger understanding of the issues, aspirations and opportunities that matter to our communities.",
  },
  {
    image: Campaign04,
    title: "The Power of Coming Together",
    category: "COMMUNITY PARTICIPATION",
    location: "Awka North & South",
    date: "Campaign Highlights",
    description:
      "A movement shaped by conversations, shared aspirations and the belief that progress is something we build together.",
  },
  {
    image: Campaign03,
    title: "Conversations That Matter",
    category: "PEOPLE & IDEAS",
    location: "Awka North & South",
    date: "Campaign Highlights",
    description:
      "Creating room for ideas, perspectives and conversations that can shape the future of our constituency.",
  },
  {
    image: Campaign05,
    title: "A Shared Vision for Tomorrow",
    category: "THE CAMPAIGN JOURNEY",
    location: "Awka North & South",
    date: "Campaign Highlights",
    description:
      "A future built on opportunity, inclusive leadership and a stronger voice for every community.",
  },
  {
    image: Campaign06,
    title: "Presenting Hope",
    category: "THE MOVEMENT",
    location: "Awka North & South",
    date: "Campaign Highlights",
    description:
      "Every moment adds to a bigger story. A story of hope, participation and the possibilities ahead.",
  },
];

  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = campaignSlides[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % campaignSlides.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + campaignSlides.length) % campaignSlides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);
    return (
        <main className="bg-black text-white overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center overflow-hidden border-b border-white/10 px-6 py-32">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />

                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#12f00a]/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full" />

                <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="uppercase tracking-[0.4em] text-sm text-[#12f00a] mb-6"
                        >
                            Leadership • Innovation • Heritage
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl xl:text-8xl font-light leading-[0.95] mb-8"
                        >
                            Building the
                            <br />
                            future through
                            <br />
                            culture, people,
                            <br />
                            and innovation.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="max-w-2xl text-lg md:text-xl text-gray-300 leading-[1.9] mb-12"
                        >
                            The Kachi Aghasili Initiative is focused on creating lasting
                            social impact through leadership, technology, youth empowerment,
                            and cultural preservation — shaping a future rooted in identity,
                            innovation, and inclusive growth.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-5"
                        >
                            <Link to="/about">
                                <button className="px-8 py-5 rounded-full bg-white text-black font-medium flex items-center gap-3 hover:scale-105 transition duration-300">
                                    Explore Vision
                                    <ArrowRight size={18} />
                                </button>
                            </Link>


                            <button className="px-8 py-5 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white hover:text-black transition duration-300 flex items-center gap-3">
                                <Play size={18} />
                                Watch Message
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                    >
                        <div className="rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl">
                            <img
                                src="https://i.ibb.co/My1YV7Zf/director.jpg"
                                alt="Kachi Aghasili"
                                className="w-full h-[700px] object-cover rounded-[2.5rem]"
                            />
                        </div>

                        <div className="absolute -bottom-10 -left-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 w-64">
                            <h3 className="text-4xl font-light mb-2">10+</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Years of leadership across law, culture, innovation, and
                                community development.
                            </p>
                        </div>

                        <div className="absolute top-10 -right-10 bg-[#12f00a] text-black rounded-[2rem] p-8 w-56">
                            <h3 className="text-4xl font-light mb-2">40+</h3>
                            <p className="leading-relaxed text-sm">
                                Initiatives and projects creating meaningful social impact.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CAMPAIGN STRIP */}
            <section className="border-y border-white/10 bg-zinc-950 py-5 overflow-hidden relative">
                <div className="flex whitespace-nowrap animate-marquee min-w-full">

                    {/* FIRST SET */}
                    <div className="flex items-center shrink-0">
                        <span className="mx-8 text-sm md:text-lg tracking-wide font-medium text-[#12f00a]">
                            Kachi Aghasili for House of Representatives — Awka North & South Federal Constituency
                        </span>

                        <span className="mx-8 text-sm md:text-lg tracking-wide font-medium text-white/70">
                            •
                        </span>

                        <span className="mx-8 text-sm md:text-lg tracking-wide font-medium text-[#12f00a]">
                            A New Era of Inclusive Growth, Innovation & Cultural Strength
                        </span>

                        <span className="mx-8 text-sm md:text-lg tracking-wide font-medium text-white/70">
                            •
                        </span>

                        <span className="mx-8 text-sm md:text-lg tracking-wide font-medium text-[#12f00a]">
                            Leadership Rooted in Identity, Opportunity & Sustainable Development
                        </span>
                    </div>

                    {/* DUPLICATE FOR SMOOTH LOOP */}
                    <div className="flex items-center shrink-0">
                        <span className="mx-8 text-sm md:text-lg tracking-wide font-medium text-[#12f00a]">
                            Kachi Aghasili for House of Representatives — Awka North & South Federal Constituency
                        </span>

                        <span className="mx-8 text-sm md:text-lg tracking-wide font-medium text-white/70">
                            •
                        </span>

                        <span className="mx-8 text-sm md:text-lg tracking-wide font-medium text-[#12f00a]">
                            A New Era of Inclusive Growth, Innovation & Cultural Strength
                        </span>

                        <span className="mx-8 text-sm md:text-lg tracking-wide font-medium text-white/70">
                            •
                        </span>

                        <span className="mx-8 text-sm md:text-lg tracking-wide font-medium text-[#12f00a]">
                            Leadership Rooted in Identity, Opportunity & Sustainable Development
                        </span>
                    </div>
                </div>
            </section>

            {/* ABOUT FOUNDER */}
            <section className="py-32 px-6 border-b border-white/10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="sticky top-24"
                    >
                        <div className="rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 p-5">
                            <img
                                src="https://i.ibb.co/GQMCG3kM/IMG-20260724-WA0149.jpg"
                                alt="Founder"
                                className="rounded-[2.5rem] w-full h-[700px] object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="uppercase tracking-[0.35em] text-sm text-[#12f00a] mb-6">
                            Founder • Lawyer • Cultural Advocate
                        </p>

                        <h2 className="text-4xl md:text-6xl font-light leading-tight mb-10">
                            About the Founder
                        </h2>

                        <div className="space-y-8 text-gray-300 leading-[2] md:text-lg">
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Kachi Aghasili (Ọdịụkọ Na Mba) is a lawyer, cultural advocate, and public-minded leader working at the intersection of law, heritage, and economic development. She is from Nise in Anambra State and currently serves as Director of the Isi Nri Museum, Enugwu-Ukwu, where she leads efforts to preserve Ìgbò history while expanding access to cultural education and engagement.

                                <br /><br />

                                A graduate of Harvard Law School, with additional academic experience at Purdue University and Emory University, Kachi brings a multidisciplinary perspective to governance, combining legal expertise with a deep understanding of culture, innovation, and opportunity. Her work in intellectual property law reflects a broader commitment to protecting African creativity and ensuring that local industries can grow sustainably and competitively.

                                <br /><br />

                                Kachi is the founder of Kachi James Art Gallery in Enugu, Nigeria, a platform dedicated to supporting emerging artists and reshaping narratives around contemporary African life. She is also the founder of AImovement, a tech hub focused on expanding access to digital skills, fostering innovation, and equipping young people with tools to participate in a rapidly evolving global economy.

                                <br /><br />

                                Across her work in law, culture, and technology, Kachi has consistently focused on building institutions, creating opportunities, and connecting communities. These experiences shape her belief that sustainable development must be rooted in identity, innovation, and inclusive growth. She is committed to public service that prioritizes people, strengthens institutions, expands access to opportunity, and advances policies that reflect the realities and aspirations of her community.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Campaign slide PREVIEW */}


<section className="relative bg-[#080a08] text-white py-24 md:py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-[#12f00a]" />
              <p className="text-[#12f00a] text-xs tracking-[0.35em] uppercase">
                The Campaign Journal
              </p>
            </div>

            <h2 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.05]">
              Moments that
              <br />
              <span className="text-white/40">move us forward.</span>
            </h2>
          </div>

          <p className="text-gray-500 max-w-md leading-8">
            A visual record of the conversations, connections and experiences
            that continue to shape the journey towards a better future for
            Awka North and South.
          </p>
        </div>

        {/* FEATURED SLIDER */}
        <div className="relative">

          <div className="relative h-[480px] md:h-[650px] lg:h-[700px] rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10">

            <AnimatePresence mode="wait">

              <motion.div
                key={activeSlide.image}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >

                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

              </motion.div>

            </AnimatePresence>

            {/* IMAGE COUNTER */}
            <div className="absolute top-7 left-7 md:top-10 md:left-10 flex items-center gap-3">
              <Camera size={17} className="text-[#12f00a]" />
              <span className="text-xs uppercase tracking-[0.25em] text-white/80">
                Campaign Stories
              </span>
            </div>

            {/* SLIDE CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-12 lg:p-16">

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-3xl"
                >

                  <p className="text-[#12f00a] text-xs tracking-[0.3em] uppercase mb-5">
                    {activeSlide.category}
                  </p>

                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight">
                    {activeSlide.title}
                  </h3>

                  <p className="text-gray-300 max-w-2xl leading-8 mt-6 text-sm md:text-base">
                    {activeSlide.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 mt-8 text-white/60 text-xs uppercase tracking-widest">

                    <span className="flex items-center gap-2">
                      <MapPin size={15} className="text-[#12f00a]" />
                      {activeSlide.location}
                    </span>

                    <span>{activeSlide.date}</span>

                  </div>

                </motion.div>

              </AnimatePresence>

              {/* SLIDER CONTROLS */}
              <div className="flex items-center justify-between mt-10 pt-7 border-t border-white/20">

                <div className="flex items-center gap-2">
                  <span className="text-[#12f00a] text-lg font-medium">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/40">/</span>
                  <span className="text-white/40 text-sm">
                    {String(campaignSlides.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex items-center gap-3">

                  <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#12f00a] hover:text-black hover:border-[#12f00a] transition-all"
                  >
                    <ArrowLeft size={19} />
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="w-12 h-12 rounded-full bg-[#12f00a] text-black flex items-center justify-center hover:bg-white transition-all"
                  >
                    <ArrowRight size={19} />
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* THUMBNAIL NAVIGATION */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-6">

          {campaignSlides.map((slide, index) => (

            <button
              key={slide.image}
              onClick={() => setActiveIndex(index)}
              className={`relative h-24 md:h-32 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                activeIndex === index
                  ? "border-[#12f00a] opacity-100"
                  : "border-transparent opacity-40 hover:opacity-100"
              }`}
            >

              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <span className="absolute bottom-2 left-3 text-white text-xs">
                {String(index + 1).padStart(2, "0")}
              </span>

            </button>

          ))}

        </div>

        {/* FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-16">

          <div>
            <p className="text-white text-xl font-light">
              Every picture tells a story.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              The journey continues.
            </p>
          </div>

          <a
            href="/gallery"
            className="inline-flex items-center gap-3 text-[#12f00a] uppercase tracking-widest text-xs hover:gap-5 transition-all"
          >
            Explore More Moments
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>

            {/* FOCUS AREAS */}
            <section className="py-32 px-6 border-b border-white/10 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-20">
                        <p className="uppercase tracking-[0.3em] text-sm text-[#12f00a] mb-6">
                            Focus Areas
                        </p>

                        <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                            Driving meaningful
                            <br />
                            transformation.
                        </h2>

                        <p className="text-gray-400 text-lg leading-[1.9]">
                            The initiative is built around strategic areas that create lasting
                            impact across communities, institutions, and future generations.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {focusAreas.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="group rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition duration-500"
                            >
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-10 text-[#12f00a] text-xl group-hover:rotate-45 transition duration-500">
                                    ↗
                                </div>

                                <h3 className="text-3xl font-light mb-6">{item.title}</h3>

                                <p className="text-gray-400 leading-[1.9] text-lg">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY I'M RUNNING */}






            <section className="py-32 bg-gradient-to-b from-zinc-950 to-black overflow-hidden">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* LEFT */}

                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >

                            <div className="absolute -left-10 -top-10 w-64 h-64 rounded-full bg-[#12f00a]/10 blur-[120px]" />

                            <div className="rounded-[3rem] overflow-hidden border border-white/10">

                                <img
                                    src="https://i.ibb.co/R5TKxDx/JULY.jpg"
                                    alt="Kachi Aghasili"
                                    className="w-full h-[700px] object-cover hover:scale-105 duration-700"
                                />

                            </div>

                        </motion.div>

                        {/* RIGHT */}

                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: true }}
                        >

                            <p className="uppercase tracking-[0.35em] text-[#12f00a] text-sm mb-6">
                                Why I'm Running
                            </p>

                            <h2 className="text-5xl md:text-7xl font-light leading-tight mb-10">

                                Leadership
                                <br />
                                Begins With
                                <br />
                                Listening.

                            </h2>

                            <p className="text-gray-400 text-lg leading-9 mb-8">

                                Public office should never be about personal ambition—it
                                should be about creating opportunities that improve lives.

                                <br /><br />

                                Throughout my journey in law, culture, innovation and
                                community development, I have seen the extraordinary
                                resilience and creativity of our people.

                                <br /><br />

                                I believe our constituency deserves leadership that
                                listens, empowers young people, supports women,
                                strengthens local businesses and preserves our rich
                                cultural heritage while embracing innovation.

                            </p>

                            <div className="grid md:grid-cols-2 gap-5 mb-12">

                                {[
                                    "Justice & Accountability",
                                    "Youth Empowerment",
                                    "Innovation & Technology",
                                    "Inclusive Development"
                                ].map((item, index) => (

                                    <div
                                        key={index}
                                        className="flex items-center gap-3"
                                    >

                                        <CheckCircle2
                                            size={22}
                                            className="text-[#12f00a]"
                                        />

                                        <span className="text-gray-200">
                                            {item}
                                        </span>

                                    </div>

                                ))}

                            </div>

                            <button className="group px-8 py-5 rounded-full bg-white text-black flex items-center gap-3 hover:gap-5 duration-300">

                                Read My Manifesto

                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 duration-300"
                                />

                            </button>

                        </motion.div>

                    </div>

                </div>

            </section>



            <section className="py-32 bg-black">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-24">

                        <p className="uppercase tracking-[0.35em] text-[#12f00a] text-sm mb-5">
                            Our Manifesto
                        </p>

                        <h2 className="text-5xl md:text-7xl font-light mb-8">
                            A Vision
                            <br />
                            Rooted In Action.
                        </h2>

                        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-9">
                            Every commitment is designed to improve lives, strengthen
                            communities and create opportunities that benefit every
                            resident of Awka North & South Federal Constituency.
                        </p>

                    </div>
                    <div className="max-w-5xl mx-auto text-center mb-20">

                        <blockquote className="text-2xl md:text-3xl italic text-white font-light leading-relaxed">

                            "Leadership is measured not by promises made,
                            but by opportunities created and lives transformed."

                        </blockquote>

                        <p className="mt-6 text-[#12f00a] tracking-[0.3em] uppercase text-sm">
                            Kachi Aghasili
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {manifesto.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={index}
                                    className="group rounded-[2.5rem] border border-white/10 bg-zinc-900 p-10 hover:border-[#12f00a]/50 hover:-translate-y-3 transition duration-500"
                                >

                                    <p className="text-[#12f00a] text-sm tracking-[0.3em] mb-8">
                                        {item.number}
                                    </p>

                                    <div className="w-16 h-16 rounded-2xl bg-[#12f00a]/10 flex items-center justify-center mb-8">

                                        <Icon
                                            size={34}
                                            className="text-[#12f00a]"
                                        />

                                    </div>

                                    <h3 className="text-3xl font-light mb-5">

                                        {item.title}

                                    </h3>

                                    <p className="text-gray-400 leading-8">

                                        {item.description}

                                    </p>

                                    <button
                                        className="mt-10 flex items-center gap-3 text-white group-hover:text-[#12f00a] transition"
                                    >

                                        Learn More

                                        <ArrowRight
                                            size={18}
                                            className="group-hover:translate-x-2 transition"
                                        />

                                    </button>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </section>






            {/* THE CAMPAIGN JOURNEY */}
            <section className="py-28 bg-black text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    {/* SECTION INTRO */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20 items-end">

                        <div>
                            <p className="uppercase tracking-[0.35em] text-sm text-[#12f00a] mb-6">
                                The Campaign • Awka North & South
                            </p>

                            <h2 className="text-5xl md:text-7xl xl:text-8xl font-light leading-[1.05]">
                                A Journey
                                <br />
                                <span className="text-[#12f00a]">For The People.</span>
                            </h2>
                        </div>

                        <div className="max-w-xl">
                            <p className="text-gray-300 text-lg md:text-xl leading-9">
                                My journey into public service is driven by a simple belief:
                                leadership must begin with the people. I am running to represent
                                Awka North and South with purpose, listen to our communities,
                                amplify their voices and champion opportunities for a better future.
                            </p>

                            <p className="text-gray-500 mt-6 leading-8">
                                This campaign is about more than an election. It is about
                                building a movement grounded in unity, accountability,
                                innovation and inclusive development.
                            </p>

                            <Link
                                to="/campaign"
                                className="inline-flex items-center gap-4 mt-8 text-[#12f00a] font-semibold group"
                            >
                                Discover My Campaign
                                <ArrowRight
                                    size={20}
                                    className="group-hover:translate-x-2 transition-transform"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* THREE CAMPAIGN IMAGES */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                        {campaignGallery.map((item, index) => (
                            <motion.article
                                key={item.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950"
                            >
                                <div className="relative h-[420px] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs tracking-wider text-[#12f00a]">
                                            {item.category}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-7">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="w-10 h-[1px] bg-[#12f00a]" />
                                            <span className="text-xs uppercase tracking-[0.25em] text-gray-300">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl font-light mb-3">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-300 leading-7 text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}

                    </div>

                    {/* CAMPAIGN CLOSING STATEMENT */}
                    <div className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-8 items-start md:items-center">
                        <h3 className="text-2xl md:text-4xl font-light max-w-3xl leading-snug">
                            Together, we can build a constituency where every voice matters
                            and every community has a place in our future.
                        </h3>

                        <Link
                            to="/campaign/manifesto"
                            className="shrink-0 px-8 py-5 rounded-full bg-[#12f00a] text-black font-semibold flex items-center gap-3 hover:bg-white transition-colors"
                        >
                            Explore Manifesto
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                </div>
            </section>




            <section className="max-w-6xl mx-auto px-6 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-14 mt-16" >
                {/* CONTACT INFO CARD */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className=" shadow-xl rounded-3xl p-10 border border-orange-100"
                >
                    <h2 className="text-2xl font-bold mb-6 text-[#12f00a]">Contact Information</h2>
                    <p className="opacity-70 mb-8">
                        Reach out through any of the methods below. Our team responds within 24 hours.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Mail className="text-[#12f00a] w-6 h-6" />
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="opacity-70">kachiaghasilicampaign@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="text-[#12f00a] w-6 h-6" />
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="opacity-70">+234 812 985 5352</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="text-[#12f00a] w-6 h-6" />
                            <div>
                                <h3 className="font-semibold">Office Address</h3>
                                <p className="opacity-70">Olive Gate Hotel Junction, 1 Snapp Drive, Independence Layout, Enugu 410001, Enugu</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* FORM CARD */}
                <motion.form
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className=" shadow-xl rounded-3xl p-10 border border-orange-100"
                >
                    <h2 className="text-2xl font-bold mb-6 text-[#12f00a]">Send Us a Message</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="p-4 rounded-2xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="p-4 rounded-2xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full mt-6 p-4 rounded-2xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                    />

                    <textarea
                        placeholder="Message"
                        rows="5"
                        className="w-full mt-6 p-4 rounded-2xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                    ></textarea>

                    <button className="mt-8 w-full bg-white text-black py-5 rounded-2xl font-medium hover:scale-[1.02] transition duration-300 flex items-center justify-center gap-3">
                        Send Message
                        <ArrowRight size={18} />
                    </button>
                </motion.form>
            </section>
            {/* CONTACT SECTION */}

        </main>
    );
}
