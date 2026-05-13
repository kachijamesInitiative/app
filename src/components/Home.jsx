import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import {
    ArrowRight,
    Play,
    Mail,
    Phone,
    MapPin,
    Globe,
} from "lucide-react";

export default function LuxuryHomepagePreview() {
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
                                src="https://i.ibb.co/My1YV7Zf/director.jpg"
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

            {/* MEDIA PREVIEW */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">

                {/* VIDEO */}
                <div className="lg:col-span-7 rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                    <iframe
                        className="w-full h-[300px] md:h-[500px] rounded-[2.5rem]"
                        src="https://www.youtube.com/embed/dMZLdQYRj-w"
                        title="Campaign Video"
                        allowFullScreen
                    ></iframe>
                    
                </div>

                {/* POSTERS */}
                <div className="lg:col-span-5 grid gap-8">

                    {/* POSTER 1 */}
                    <div className="group rounded-[3rem] border border-white/10 bg-zinc-900 overflow-hidden p-6 hover:bg-zinc-800 transition duration-500">

                        <div className="rounded-[2rem] overflow-hidden bg-black flex items-center justify-center">
                            <img
                                src="https://i.ibb.co/prnK9jKp/Whats-App-Image-2026-05-05-at-5-10-09-AM.jpg"
                                alt="Campaign Poster"
                                className="w-full h-[500px] object-contain group-hover:scale-[1.02] transition duration-700"
                            />
                        </div>

                        <div className="pt-6">
                            <p className="uppercase tracking-[0.3em] text-xs text-[#12f00a] mb-3">
                                Campaign Message
                            </p>

                            <h3 className="text-2xl font-light leading-relaxed">
                                A vision centered on leadership, innovation, and cultural advancement.
                            </h3>
                        </div>
                    </div>

                    {/* POSTER 2 */}
                    <div className="group rounded-[3rem] border border-white/10 bg-zinc-900 overflow-hidden p-6 hover:bg-zinc-800 transition duration-500">

                        <div className="rounded-[2rem] overflow-hidden bg-black flex items-center justify-center">
                            <img
                                src="https://i.ibb.co/r2hG3yB1/Whats-App-Image-2026-05-01-at-4-51-33-AM.jpg"
                                alt="Campaign Poster"
                                className="w-full h-[600px] object-contain group-hover:scale-[1.02] transition duration-700"
                            />
                        </div>

                        <div className="pt-6">
                            <p className="uppercase tracking-[0.3em] text-xs text-[#12f00a] mb-3">
                                Public Engagement
                            </p>

                            <h3 className="text-2xl font-light leading-relaxed">
                                Building stronger connections through purposeful community leadership.
                            </h3>
                        </div>
                    </div>

                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-20 md:mx-8  mx-4 md:px-8 xl:px-8 2xl:px-52 mt-20'>
                <div className='text-center md:text-left pb-8'>
                    <h1 className='md:text-3xl lg:text-4xl xl:text-8xl font-bold mb-8 text-4xl'>Our Journeys <br /> That Matter</h1>
                    <p className='text-[18px]'>Every movement begins with courage and hope. Discover stories showing how unity create last impact.</p>

                </div>


                <div className="">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className=" rounded-2xl  cursor-pointer transition"
                            onClick={() => handleView(item.id)}
                        >
                            <div className='md:grid grid-cols-2  md:space-y-8'>
                                <div >
                                    <img
                                        src={item.image}
                                        alt={item.header}
                                        className="w-full h-48 object-cover rounded-t-2xl"
                                    />
                                </div>
                                <div className="p-4 pb-20 md:pb-0">
                                    <h2 className="text-xl font-semibold mb-2">{item.header}</h2>
                                    <p className="text-gray-600 text-sm">{item.paragraph.slice(0, 50)}...</p>
                                    <div className="mt-4 py-2 border-b w-20">
                                        Read More
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



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
            {/* <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14"
                    >
                        <p className="uppercase tracking-[0.3em] text-sm text-[#12f00a] mb-6">
                            Contact Information
                        </p>

                        <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                            Let’s start a
                            <br />
                            meaningful conversation.
                        </h2>

                        <p className="text-gray-400 text-lg leading-[1.9] mb-12">
                            Reach out for collaborations, partnerships, media inquiries,
                            speaking engagements, or community initiatives.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <Mail className="text-[#12f00a] w-6 h-6 mt-1" />
                                <div>
                                    <h3 className="text-xl mb-2">Email</h3>
                                    <p className="text-gray-400">
                                        kachiaghasilicampaign@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <Phone className="text-[#12f00a] w-6 h-6 mt-1" />
                                <div>
                                    <h3 className="text-xl mb-2">Phone</h3>
                                    <p className="text-gray-400">+234 812 985 5352</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <MapPin className="text-[#12f00a] w-6 h-6 mt-1" />
                                <div>
                                    <h3 className="text-xl mb-2">Location</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Olive Gate Hotel Junction, 1 Snapp Drive, Independence
                                        Layout, Enugu.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <Globe className="text-[#12f00a] w-6 h-6 mt-1" />
                                <div>
                                    <h3 className="text-xl mb-2">Global Reach</h3>
                                    <p className="text-gray-400">
                                        Open to collaborations and partnerships worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14"
                    >
                        <p className="uppercase tracking-[0.3em] text-sm text-[#12f00a] mb-6">
                            Send A Message
                        </p>

                        <h2 className="text-4xl md:text-5xl font-light leading-tight mb-10">
                            Connect with
                            <br />
                            the initiative.
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#12f00a] transition"
                            />

                            <input
                                type="text"
                                placeholder="Last Name"
                                className="bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#12f00a] transition"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#12f00a] transition mb-6"
                        />

                        <textarea
                            rows="6"
                            placeholder="Tell us about your inquiry..."
                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#12f00a] transition resize-none"
                        />

                        <button className="mt-8 w-full bg-white text-black py-5 rounded-2xl font-medium hover:scale-[1.02] transition duration-300 flex items-center justify-center gap-3">
                            Send Message
                            <ArrowRight size={18} />
                        </button>
                    </motion.form>
                </div>
            </section> */}
        </main>
    );
}
