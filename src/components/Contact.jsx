export default function StartConversationPage() {
    return (
        <main className="bg-black text-white overflow-hidden min-h-screen">
            {/* HERO SECTION */}
            <section className="relative px-6 py-28 border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-95" />

                <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-500/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full" />

                <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <p className="uppercase tracking-[0.4em] text-sm text-yellow-400 mb-6">
                            Start A Conversation
                        </p>

                        <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
                            Let’s build
                            <br />
                            something meaningful
                            <br />
                            together.
                        </h1>

                        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-10">
                            Whether it’s cultural collaboration, speaking engagements,
                            partnerships, media opportunities, advocacy initiatives, or
                            strategic projects — this space is open for purposeful
                            conversations that create lasting impact.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact-form"
                                className="px-8 py-4 bg-yellow-500 text-black rounded-full font-medium hover:scale-105 transition duration-300"
                            >
                                Send a Message
                            </a>

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=kachiaghasilicampaign@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300"
                            >
                                Email Directly
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="border border-white/10 rounded-[2rem] p-8 bg-white/5 backdrop-blur-xl">
                            <div className="space-y-6">
                                <div className="p-6 rounded-3xl bg-yellow-500 text-black">
                                    <p className="uppercase text-xs tracking-[0.3em] mb-3">
                                        Collaboration
                                    </p>

                                    <h3 className="text-3xl font-light leading-tight">
                                        Partnerships rooted in purpose and cultural impact.
                                    </h3>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                        <h3 className="text-4xl font-light mb-3">Global</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Open to meaningful conversations and opportunities worldwide.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                        <h3 className="text-4xl font-light mb-3">2026</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            A future-focused vision for leadership and cultural innovation.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                    <p className="text-gray-400 uppercase tracking-[0.2em] text-xs mb-4">
                                        Focus Areas
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {[
                                            "Speaking Engagements",
                                            "Museum Innovation",
                                            "Cultural Advocacy",
                                            "Media & Press",
                                            "Partnerships",
                                            "Leadership Initiatives",
                                        ].map((item) => (
                                            <span
                                                key={item}
                                                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT OPTIONS */}
            <section className="py-28 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-20">
                        <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm mb-5">
                            Connect
                        </p>

                        <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                            Conversations that
                            <br />
                            create impact.
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Every message is an opportunity to collaborate, inspire, and build
                            meaningful cultural and social transformation.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Partnerships",
                                description:
                                    "Collaborate on initiatives, campaigns, events, and cultural projects.",
                            },
                            {
                                title: "Speaking & Media",
                                description:
                                    "Book interviews, keynote appearances, conferences, and media features.",
                            },
                            {
                                title: "Leadership Initiatives",
                                description:
                                    "Discuss strategic programs focused on advocacy, education, and innovation.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-[2rem] border border-white/10 bg-white/5 p-10 hover:bg-white/10 transition duration-500"
                            >
                                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mb-8 text-xl">
                                    ↗
                                </div>

                                <h3 className="text-3xl font-light mb-5">{item.title}</h3>

                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section
                id="contact-form"
                className="py-28 px-6 border-y border-white/10 bg-zinc-950"
            >
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
                    <div>
                        <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm mb-5">
                            Send A Message
                        </p>

                        <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                            Start the
                            <br />
                            conversation.
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed mb-10">
                            Share details about your project, collaboration, speaking request,
                            or initiative. The team will review your message and respond as
                            soon as possible.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <p className="text-gray-500 uppercase text-xs tracking-[0.3em] mb-2">
                                    Email
                                </p>
                                <h3 className=" font-light">
                                    kachiaghasilicampaign@gmail.com
                                </h3>
                            </div>

                            <div>
                                <p className="text-gray-500 uppercase text-xs tracking-[0.3em] mb-2">
                                    Location
                                </p>
                                <h3 className=" font-light">
                                    Olive Gate Hotel Junction, 1 Snapp Drive, Independence Layout, Enugu 410001, Enugu State, Nigeria



                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="border border-white/10 rounded-[2rem] p-8 md:p-10 bg-white/5 backdrop-blur-xl">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-3">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-3">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 mb-3">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="What would you like to discuss?"
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 mb-3">
                                    Message
                                </label>
                                <textarea
                                    rows="6"
                                    placeholder="Tell us more about your inquiry..."
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-yellow-500 text-black rounded-2xl font-medium hover:scale-[1.01] transition duration-300"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto text-center border border-white/10 rounded-[3rem] p-10 md:p-20 bg-gradient-to-b from-white/5 to-transparent">
                    <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm mb-6">
                        Purpose. Culture. Impact.
                    </p>

                    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                        Meaningful ideas
                        <br />
                        begin with conversation.
                    </h2>

                    <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-10">
                        Let’s connect to create thoughtful partnerships, innovative
                        initiatives, and future-focused cultural experiences.
                    </p>

                    <a
                        href="#contact-form"
                        className="inline-flex px-10 py-5 bg-white text-black rounded-full font-medium hover:scale-105 transition duration-300"
                    >
                        Reach Out Today
                    </a>
                </div>
            </section>
        </main>
    );
}


