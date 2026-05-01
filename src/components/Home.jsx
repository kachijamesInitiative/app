import React from "react";
import { motion } from "framer-motion";
import data from '../data/data.json'
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-900 md:bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
            {/* HERO SECTION */}
            <section className="flex flex-col items-center justify-center text-center py-24 px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    Kachi Agahsili Initiative
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-2xl text-lg text-gray-300"
                >
                    Presenting hope, inspiring innovation, and creating impact through technology, leadership, and social development.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 flex gap-4"
                >
                    <button className="rounded-2xl px-6 py-3 bg-white text-black font-semibold hover:opacity-90">
                        Get Involved
                    </button>
                    <button className="rounded-2xl px-6 py-3 border border-white hover:bg-white hover:text-black transition">
                        Learn More
                    </button>
                </motion.div>
            </section>

            {/* ABOUT FOUNDER */}
            <section className="py-20 px-6 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                <motion.img
                    src="https://i.ibb.co/My1YV7Zf/director.jpg"
                    alt="Founder"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-xl"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                />

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <h2 className="text-3xl font-semibold mb-4">About the Founder</h2>
                    <p className="text-gray-300 mb-4">
                        Kachi Aghasili is a lawyer, cultural advocate, and public-minded leader working at the intersection of law, heritage, and economic development. She currently serves as Director of the Isi Nri Museum, where she leads efforts to preserve Ìgbò history while expanding access to cultural education and engagement.

                        A graduate of Harvard Law School, with additional academic experience at Purdue University and Emory University, Kachi brings a multidisciplinary perspective to governance, combining legal expertise with a deep understanding of culture, innovation, and opportunity. Her work in intellectual property law reflects a broader commitment to protecting African creativity and ensuring that local industries can grow sustainably and competitively.

                        Kachi is the founder of Kachi James Art Gallery in Enugu, Nigeria, a platform dedicated to supporting emerging artists and reshaping narratives around contemporary African life. She is also the founder of AImovement, a tech hub focused on expanding access to digital skills, fostering innovation, and equipping young people with tools to participate in a rapidly evolving global economy.

                        Across her work in law, culture, and technology, Kachi has consistently focused on building institutions, creating opportunities, and connecting communities. These experiences shape her belief that sustainable development must be rooted in identity, innovation, and inclusive growth. She is committed to public service that prioritizes people, strengthening institutions, expanding access to opportunity, and advancing policies that reflect the realities and aspirations of her community.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div>
                            <h3 className="text-xl font-bold">8+ Years</h3>
                            <p className="text-gray-400">Experience</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">22+</h3>
                            <p className="text-gray-400">Projects</p>
                        </div>
                    </div>
                </motion.div>
            </section>



            {/* INITIATIVES */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-10">Our Focus Areas</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {["Technology", "Education", "Community Development"].map((item, i) => (
                        <div key={i} className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
                            <h3 className="text-xl font-bold mb-2">{item}</h3>
                            <p className="text-gray-400">
                                Driving impactful change through {item.toLowerCase()} initiatives and programs.
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            {/* cards */}
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



            <section className="max-w-6xl mx-auto px-6 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-14 mt-16">
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
                                <p className="opacity-70"> aimovement.ng@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="text-[#12f00a] w-6 h-6" />
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="opacity-70">+234 805 493 3457</p>
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

                    <button
                        type="submit"
                        className="mt-8 flex items-center gap-2 bg-[#12f00a] text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-orange-800 transition"
                    >
                        <Send className="w-5 h-5" /> Send Message
                    </button>
                </motion.form>
            </section>

        </div>
    );
}
