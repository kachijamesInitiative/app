import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  ArrowRight
} from "lucide-react";

const people = [
  {
    name: "Ifeanyi Okafor",
    role: "Campaign Coordinator",
    image: "https://i.ibb.co/G3sJDGry/image-placeholder.webp",
    quote:
      "Every community deserves leadership that listens before it leads.",
  },
    {
    name: "Kelly Onyia",
    role: "media manager",
    image: "https://i.ibb.co/G3sJDGry/image-placeholder.webp",
    quote:
    "Young people are not just the future—we are partners in building today.",
  },

  {
    name: "Adaeze Okafor",
    role: "Youth Representative",
    image: "https://i.ibb.co/G3sJDGry/image-placeholder.webp",
    quote:
      "Young people are not just the future—we are partners in building today.",
  },

  {
    name: "Emeka Nwosu",
    role: "Community Leader",
    image: "https://i.ibb.co/G3sJDGry/image-placeholder.webp",
    quote:
      "Development begins when leaders remain connected to the people.",
  },

  {
    name: "Ngozi Eze",
    role: "Volunteer",
    image: "https://i.ibb.co/G3sJDGry/image-placeholder.webp",
    quote:
      "Serving our communities is the greatest investment we can make.",
  },

  {
    name: "Chisom Okeke",
    role: "Women Leader",
    image: "https://i.ibb.co/G3sJDGry/image-placeholder.webp",
    quote:
      "Empowered women create stronger families and stronger communities.",
  },


];

export default function MeetThePeople() {
  return (
    <section className="py-32 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.35em] text-[#12f00a] text-sm mb-5">

            Meet The People

          </p>

          <h2 className="text-5xl md:text-7xl font-light">

            Together
            <br />
            We Build Tomorrow

          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg leading-9">

            Behind every movement are passionate people
            committed to service, progress and lasting
            community development.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {people.map((person,index)=>(

            <motion.div

              key={index}

              initial={{opacity:0,y:40}}

              whileInView={{opacity:1,y:0}}

              viewport={{once:true}}

              transition={{delay:index*.1}}

              className="group rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900 hover:border-[#12f00a]/40 transition"

            >

              <div className="overflow-hidden">

                <img

                  src={person.image}

                  alt={person.name}

                  className="w-full h-96 object-cover group-hover:scale-110 transition duration-700"

                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl">

                  {person.name}

                </h3>

                <p className="text-[#12f00a] mt-2">

                  {person.role}

                </p>

                <p className="text-gray-400 leading-8 mt-6">

                  "{person.quote}"

                </p>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-24 rounded-[3rem] bg-gradient-to-r from-[#12f00a]/10 to-transparent border border-[#12f00a]/20 p-12">

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div>

              <Users
                className="mx-auto text-[#12f00a] mb-4"
                size={40}
              />

              <h3 className="text-4xl font-bold">

                500+

              </h3>

              <p className="text-gray-400 mt-2">

                Volunteers

              </p>

            </div>

            <div>

              <HeartHandshake
                className="mx-auto text-[#12f00a] mb-4"
                size={40}
              />

              <h3 className="text-4xl font-bold">

                30+

              </h3>

              <p className="text-gray-400 mt-2">

                Communities Reached

              </p>

            </div>

            <div>

              <ArrowRight
                className="mx-auto text-[#12f00a] mb-4"
                size={40}
              />

              <h3 className="text-4xl font-bold">

                Growing

              </h3>

              <p className="text-gray-400 mt-2">

                Every Day

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}