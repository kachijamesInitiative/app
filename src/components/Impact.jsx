import React from 'react'

function Impact()  {
  const metrics = [
    { label: "People Reached", value: "1,480+" },
    { label: "Programs Run", value: "48" },
    { label: "Volunteers", value: "12" },
    { label: "Communities", value: "15" },
  ];

  const programs = [
    {
      title: "Women Leadership",
      desc: "Mentorship, skills training, and micro-grants to support women entrepreneurs.",
    },
    {
      title: "Youth Empowerment",
      desc: "Career workshops, digital skills, and leadership camps for young people.",
    },
    {
      title: "Child Education",
      desc: "After-school clubs, scholarship awards, and learning materials for children.",
    },
  ];

  const stories = [
    {
      name: "Kenechukwu",
      role: "Beneficiary",
      quote:
        "The mentorship I received changed how I run my business — I now employ two people and feel confident to grow.",
    },
    {
      name: "Murphy",
      role: "Volunteer",
      quote:
        "Helping run the youth bootcamp was one of the most rewarding weeks of my life. The impact is clear.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <header className="relative bg-gradient-to-r from-emerald-600 to-amber-400 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Kachi Aghasili Initiative
              </h1>
              <p className="mt-4 text-lg lg:text-xl opacity-95">
                Presenting Hope — empowering women, youth and children to build resilient
                communities through skills, opportunity and advocacy.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#programs"
                  className="inline-block px-6 py-3 bg-white/90 text-emerald-700 font-semibold rounded shadow hover:scale-[-1] transition-transform">
                  Our Programs
                </a>
                <a
                  href="#donate"
                  className="inline-block px-6 py-3 border border-white/30 text-white rounded hover:bg-white/10">
                  Support Our Work
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {metrics.map((m) => (
                  <div key={m.label} className="py-3">
                    <div className="text-2xl font-bold">{m.value}</div>
                    <div className="text-sm opacity-90">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="hidden lg:block">
              <div className="rounded-xl overflow-hidden shadow-xl bg-white/10">
                {/* Replace with real image */}
                <div className="h-72 w-full bg-[url('https://i.ibb.co/pBfNJ04y/test1.jpg')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Programs */}
        <section id="programs" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Programs & Focus Areas</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            We focus on practical, measurable interventions that create lasting opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <article key={p.title} className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-600">{p.desc}</p>
                <a href="#" className="inline-block mt-4 text-emerald-600 font-medium">
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Impact Stories */}
        <section id="stories" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Impact Stories</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Real lives changed — short stories from our beneficiaries and volunteers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((s) => (
              <blockquote key={s.name} className="p-6 bg-amber-50 rounded-lg">
                <p className="text-gray-800">“{s.quote}”</p>
                <footer className="mt-4 text-sm text-gray-600">— {s.name}, {s.role}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Impact Metrics + Timeline */}
        <section id="impact" className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Measured Impact</h2>
              <p className="text-gray-600 mb-6">We collect data and report on outcomes every quarter.</p>

              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-semibold">Women’s Microgrants</div>
                    <div className="text-gray-600 text-sm">Over 200 small businesses supported in the last year.</div>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-semibold">Youth Skills Training</div>
                    <div className="text-gray-600 text-sm">Digital and vocational training for 1,500 young people.</div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Latest Report</h3>
              <div className="bg-white rounded shadow p-4">
                <p className="text-sm text-gray-600 mb-3">Download our latest impact report (PDF).</p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 bg-[#12f00a] text-white rounded font-medium">
                  Download Report
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Get Involved */}
        <section id="get-involved" className="mb-12 bg-amber-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Get Involved</h2>
              <p className="text-gray-700">Volunteer, partner, or donate — help us scale our impact.</p>
            </div>

            <div className="flex gap-4">
              <a href="#donate" className="px-5 py-3 bg-[#12f00a] text-white rounded font-semibold">
                Donate
              </a>
              <a href="#volunteer" className="px-5 py-3 border border-emerald-600 text-emerald-600 rounded font-semibold">
                Volunteer
              </a>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section id="donate" className="mb-20">
          <div className="rounded-lg bg-gradient-to-r from-emerald-600 to-amber-400 text-white p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold">Support the Kachi Aghasili Initiative</h3>
              <p className="mt-3">Your donation helps fund education, mentorship and community programs.</p>
              <div className="mt-6 flex justify-center gap-4">
                <a href="#" className="px-6 py-3 bg-white text-emerald-700 rounded font-semibold">
                  Donate Now
                </a>
                <a href="#" className="px-6 py-3 border border-white/60 rounded">
                  Learn How to Partner
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
}

export default Impact