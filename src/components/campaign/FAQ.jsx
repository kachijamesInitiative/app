import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Search,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    question: "Why is Kachi Aghasili running for the House of Representatives?",
    answer:
      "Kachi Aghasili believes effective leadership begins with listening, serving, and creating opportunities for every citizen. Her campaign is focused on inclusive development, youth empowerment, education, innovation, economic growth, and preserving our cultural heritage.",
  },

  {
    question: "Which constituency is this campaign representing?",
    answer:
      "Kachi Aghasili is contesting to represent Awka North and Awka South Federal Constituency.",
  },

  {
    question: "What are the campaign's major priorities?",
    answer:
      "The campaign prioritizes quality education, youth empowerment, job creation, entrepreneurship, healthcare, infrastructure, digital innovation, women's empowerment, cultural preservation, and transparent leadership.",
  },

  {
    question: "How can I volunteer?",
    answer:
      "You can become a volunteer by completing the volunteer registration form or contacting the campaign team directly through the Contact page.",
  },

  {
    question: "How do I stay updated?",
    answer:
      "Follow our social media channels, subscribe to our newsletter, and regularly visit the campaign website for announcements, events, and community updates.",
  },

  {
    question: "How can my community invite Kachi Aghasili?",
    answer:
      "Communities, organizations, schools, associations, and professional groups can contact the campaign team to request meetings, town hall engagements, or special appearances.",
  },

  {
    question: "Can I contribute ideas to the campaign?",
    answer:
      "Absolutely. Community participation is central to this campaign. We encourage citizens to share ideas, suggestions, and solutions that can strengthen our communities.",
  },

  {
    question: "How can I support the campaign?",
    answer:
      "Support comes in many forms—from volunteering your time, attending campaign events, sharing our message, introducing the campaign within your community, or making approved campaign contributions where applicable.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-black text-white py-32">

      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#12f00a]/30 bg-[#12f00a]/10 text-[#12f00a] mb-8">

            <HelpCircle size={18} />

            Frequently Asked Questions

          </div>

          <h1 className="text-5xl md:text-7xl font-light leading-tight">

            Questions
            <br />
            Answered

          </h1>

          <p className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto mt-8">

            Learn more about the campaign, our vision,
            how to participate, and the opportunities
            available to every member of our community.

          </p>

        </motion.div>

        {/* Search */}

        <div className="relative mb-16">

          <Search
            className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500"
            size={20}
          />

          <input
            type="text"
            placeholder="Search a question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full bg-zinc-900 border border-white/10 py-5 pl-16 pr-6 outline-none focus:border-[#12f00a] transition"
          />

        </div>

        {/* Questions */}

        <div className="space-y-5">

          {filtered.map((faq, index) => (

            <motion.div
              key={index}
              layout
              className="rounded-3xl border border-white/10 bg-zinc-900 overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-8 text-left"
              >

                <h3 className="text-xl font-medium">

                  {faq.question}

                </h3>

                <ChevronDown
                  size={24}
                  className={`transition duration-300 ${
                    open === index ? "rotate-180 text-[#12f00a]" : ""
                  }`}
                />

              </button>

              <AnimatePresence>

                {open === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >

                    <div className="px-8 pb-8 text-gray-400 leading-8">

                      {faq.answer}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-24 rounded-[2.5rem] bg-gradient-to-r from-[#12f00a]/10 to-transparent border border-[#12f00a]/20 p-14 text-center">

          <MessageCircle
            className="mx-auto text-[#12f00a] mb-6"
            size={48}
          />

          <h2 className="text-4xl font-light mb-6">

            Still Have Questions?

          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8 mb-10">

            If you couldn't find the answer you were looking for,
            we'd love to hear from you. Reach out to the campaign
            team and we'll respond as quickly as possible.

          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#12f00a] text-black px-10 py-5 rounded-full font-medium hover:scale-105 transition"
          >
            Start A Conversation
          </a>

        </div>

      </div>

    </section>
  );
}