import React from 'react'
import NavBar from './NavBar'
function WhatWeDo() {
    const programs = [
    {
      id: "women",
      title: "Women Empowerment & Advocacy",
      img: "https://i.ibb.co/pBfNJ04y/test1.jpg",
      bullets: [
        "Leadership & personal development training",
        "Awareness campaigns against harassment",
        "Women support groups & mentoring",
        "Skills acquisition for independence",
      ],
      summary:
        "We create safe spaces for women to learn, grow, and lead — building confidence and empowerment.",
    },
    {
      id: "children",
      title: "Child Support & Protection",
      img: "https://i.ibb.co/pBfNJ04y/test1.jpg",
      bullets: [
        "Educational and learning support",
        "Health and welfare programs",
        "Psychological and emotional guidance",
        "Outreach for vulnerable children",
      ],
      summary:
        "We nurture children with compassion and care, helping them grow into confident, resilient adults.",
    },
    {
      id: "community",
      title: "Community Outreach & Social Intervention",
      img: "https://i.ibb.co/pBfNJ04y/test1.jpg",
      bullets: [
        "Community sensitization programs",
        "Distribution of essential items",
        "Support for underserved households",
        "Partnership with NGOs and volunteers",
      ],
      summary:
        "We respond to urgent community needs and build long-term programs that uplift families.",
    },
    {
      id: "training",
      title: "Training & Capacity Building",
      img: "https://i.ibb.co/pBfNJ04y/test1.jpg",
      bullets: [
        "Entrepreneurship coaching",
        "Vocational & digital skills training",
        "Financial literacy programs",
        "Growth & development seminars",
      ],
      summary:
        "We equip individuals with practical skills to build sustainable livelihoods.",
    },
    {
      id: "advocacy",
      title: "Advocacy Against Inappropriate Behavior",
      img: "https://i.ibb.co/pBfNJ04y/test1.jpg",
      bullets: [
        "Challenging harmful norms",
        "Promoting workplace respect",
        "Support services for victims",
        "Public accountability campaigns",
      ],
      summary:
        "We promote dignity and accountability, ensuring safe spaces for everyone.",
    },
  ];

  return (
    <section className="bg-white min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-600">
            What We Do
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Presenting Hope. Inspiring Change. We empower individuals, strengthen
            communities, and advocate for dignity and equal opportunity.
          </p>
        </header>

        {/* Image + content cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programs.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-amber-700">{p.title}</h2>
                <p className="mt-2 text-gray-700">{p.summary}</p>

                {/* bullet points */}
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 text-sm">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mt-1"></span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="mt-6">
                  <a
                    href={`#${p.id}`}
                    className="inline-block px-4 py-2 bg-amber-600 text-white rounded-lg text-sm hover:bg-amber-700 shadow"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing message */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            At Kachi Aghasili Initiative, we don’t just envision a better tomorrow —
            we create it through compassion, empowerment, and action.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo