import { Link } from "react-router-dom";


export default function WhatWeDoPage() {
  const pillars = [
    {
      title: "Cultural Preservation",
      description:
        "Protecting and promoting Ìgbò heritage through storytelling, museum leadership, research, and accessible cultural education for future generations.",
      number: "01",
    },
    {
      title: "Legal & Public Advocacy",
      description:
        "Using law, policy awareness, and strategic leadership to support justice, institutional growth, and sustainable community development.",
      number: "02",
    },
    {
      title: "Creative & Museum Innovation",
      description:
        "Reimagining how museums and cultural spaces engage modern audiences through technology, immersive experiences, and digital storytelling.",
      number: "03",
    },
    {
      title: "Youth Empowerment",
      description:
        "Creating pathways for young people to connect with identity, leadership, creativity, and economic opportunity through impactful initiatives.",
      number: "04",
    },
  ];

  const highlights = [
    "Museum & heritage leadership",
    "Cultural education programs",
    "Community engagement initiatives",
    "Legal consulting & advocacy",
    "Creative collaborations",
    "Public speaking & thought leadership",
  ];

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 py-28 border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-95" />

        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-yellow-400 mb-6">
              What We Do
            </p>

            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
              Preserving Culture.
              <br />
              Empowering People.
              <br />
              Shaping the Future.
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-10">
              Through leadership, cultural advocacy, law, and innovation,
              Kachi Aghasili’s work bridges heritage and modern impact —
              building systems, conversations, and experiences that inspire
              communities, empower young people, and preserve identity for
              generations to come.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-yellow-500 text-black rounded-full font-medium hover:scale-105 transition duration-300">
                Explore Initiatives
              </button>

              <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300">
                Contact Team
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="border border-white/10 rounded-[2rem] p-8 bg-white/5 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <h3 className="text-4xl font-light mb-3">10+</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Years of leadership across culture, advocacy, and community impact.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-yellow-500 text-black">
                  <h3 className="text-4xl font-light mb-3">2026</h3>
                  <p className="text-sm leading-relaxed">
                    A modern vision for African heritage, storytelling, and innovation.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 col-span-2">
                  <p className="text-gray-400 uppercase text-xs tracking-[0.3em] mb-4">
                    Mission
                  </p>

                  <h3 className="text-2xl leading-relaxed font-light">
                    Creating meaningful impact where culture, leadership,
                    education, and innovation intersect.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm mb-5">
              Core Areas
            </p>

            <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              Work rooted in identity,
              <br />
              leadership, and transformation.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Every initiative is designed to preserve cultural relevance,
              strengthen institutions, and inspire future-focused thinking
              across communities and generations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group border border-white/10 bg-white/5 hover:bg-white/10 transition duration-500 rounded-[2rem] p-10"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="text-yellow-400 text-sm tracking-[0.3em]">
                    {pillar.number}
                  </span>

                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:rotate-45 transition duration-500">
                    ↗
                  </div>
                </div>

                <h3 className="text-3xl font-light mb-6">{pillar.title}</h3>

                <p className="text-gray-400 leading-relaxed text-lg">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-28 px-6 border-y border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm mb-5">
              Impact & Vision
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
              Building influence that
              <br />
              extends beyond today.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              The work goes beyond projects and public appearances. It is about
              shaping conversations, preserving identity, empowering
              communities, and positioning African cultural institutions for a
              stronger global future.
            </p>

            <div className="space-y-5">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/10 pb-5"
                >
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <p className="text-lg text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-[2rem] bg-white/5 border border-white/10 p-10 h-72 flex flex-col justify-between">
              <p className="text-gray-400 uppercase tracking-[0.2em] text-xs">
                Leadership
              </p>

              <h3 className="text-2xl md:text-4xl font-light leading-tight">
                Purpose-driven influence.
              </h3>
            </div>

            <div className="rounded-[2rem] bg-yellow-500 text-black p-10 h-96 flex flex-col justify-between mt-16">
              <p className="uppercase tracking-[0.2em] text-xs">
                Heritage
              </p>

              <h3 className="text-2xl md:text-4xl font-light leading-tight">
                Preserving stories that matter.
              </h3>
            </div>

            <div className="rounded-[2rem] bg-zinc-900 border border-white/10 p-10 h-96 flex flex-col justify-between -mt-16">
              <p className="text-gray-400 uppercase tracking-[0.2em] text-xs">
                Innovation
              </p>

              <h3 className="text-1xl md:text-4xl  font-light leading-tight">
                Modern experiences for modern audiences.
              </h3>
            </div>

            <div className="rounded-[2rem] bg-white/5 border border-white/10 p-10 h-72 flex flex-col justify-between">
              <p className="text-gray-400 uppercase tracking-[0.2em] text-xs">
                Community
              </p>

              <h3 className="text-1xl md:text-4xl  font-light leading-tight">
                Creating meaningful connections.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center border border-white/10 rounded-[3rem] p-10 md:p-20 bg-gradient-to-b from-white/5 to-transparent">
          <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm mb-6">
            Future Forward
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            Preserving legacy.
            <br />
            Inspiring the next generation.
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-10">
            The vision is simple yet powerful: to create lasting cultural,
            educational, and social impact through leadership, storytelling,
            advocacy, and innovation.
          </p>
          <Link to="/contact" >
            <button className="px-10 py-5 bg-white text-black rounded-full font-medium hover:scale-105 transition duration-300">
              Start a Conversation
            </button>
          </Link>

        </div>
      </section>
    </main>
  );
}
