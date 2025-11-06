import React from 'react'
import Director from '../assets/Director.jpeg'
import HomeImage from '../assets/HomeImage.png'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import MobileHomeImage from '../assets/MobileHomeImage.jpeg'
function About() {
  return (
    <div>
      <div className='hidden lg:block text-center'
        style={{

          backgroundImage: `url(${HomeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh', // change this to your desired height
          width: '100%', // change this to your desired width
        }}>
        <motion.div

          initial={{ opacity: 0, x: 30 }} // Initial state (e.g., hidden, slightly below)
          animate={{ opacity: 5, x: 1 }} // Animate to this state (e.g., visible, original position)
          transition={{ duration: 3 }} // Animation duration

        //whileHover={{ scale: 1.1 }} // Animation on hover
        >

          <div className='pt-[10%] text-[#dadaf0] text-2xl text-center font-extrabold'
          >
            <div style={{
              //position: 'absolute',
              top: '0%',
              //left: '50%',
              //transform: 'translate(-50%, -50%)',
              background: 'rgba(0, 0, 0, 0.4)',
              padding: '20px',
              //borderRadius: '10px',
              color: 'white',
              width: '100%'
            }}
              className=''>
              <h1 className='text-[40px]'> About </h1>

              <p className='text-[24px] text-[#12f00a]'>Kachi Aghasili Initiative</p>

            </div>
          </div>

        </motion.div>

      </div>

      {/* mobile div */}
      <div className=' lg:hidden'
        style={{
          backgroundImage: `url(${MobileHomeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '40vh', // change this to your desired height
          width: '100%', // change this to your desired width
        }}>

        <div className='pt-[25%] text-[#dadaf0] text-2xl text-center font-extrabold'
        >
          <div style={{
            //position: 'absolute',
            top: '0%',
            //left: '50%',
            //transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 0, 0, 0.4)',
            padding: '20px',
            //borderRadius: '10px',
            color: 'white',
            width: '100%'
          }}
            className=''>
            <h1> About </h1>

            <p className='text-[14px] text-[#12f00a]'>Kachi Aghasili Initiative</p>

          </div>
        </div>
      </div>



      {/* <div className='lg:flex gap-8  justify-cente p-2 lg:p-10'>
        <div className='flex-1 shadow-2xl p-2 lg:p-10'>
          <h1 className='text-2xl md:text-4xl font-bold pb-2 lg:pb-11 text-[#2d80aa]'>About</h1>
          <div className=''>
            <h1>🌍 <b>Kachi James Initiative</b></h1>
            The Kachi Aghasili Initiative is a visionary platform dedicated to empowering individuals, strengthening communities, and driving sustainable change. Built on the belief that every person deserves the opportunity to thrive, the initiative focuses on <b>youth empowerment, women’s inclusion, education, and community development.</b>

            <br /><br />Through innovative programs, mentorship, and capacity-building projects, Kachi Aghasili Initiative works to unlock potential, nurture leadership, and inspire positive action. By leveraging collaboration, technology, and grassroots engagement, the initiative bridges gaps and creates pathways for growth, dignity, and shared prosperity. <br /><br />

            At its heart, Kachi Aghasili Initiative is more than a movement—it’s a commitment to building a future where <b>hope, equity, and opportunity</b> are accessible to all. <br /><br />

            <b>Our Core Values:</b>
            <ul>
              <li>✨ Empowerment</li>
              <li>✨ Integrity</li>
              <li>✨ Innovation</li>
              <li>✨ Inclusiveness</li>
              <li>✨ Community Impact</li>
            </ul>
            <br />

            Together, we rise. 💡
          </div>
        </div>
        <div className='flex justify-center py-10 lg:py-0 flex-1 '>
          <img className='lg:w-[90%] h-[100%]' src={Director} alt="" />
        </div>
      </div> */}


      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Kachi Aghasili Initiative is a non-profit organization committed to
            empowering women, youth, and children across communities. Guided by the
            message of **Presenting Hope**, we work to address inequality,
            promote education, foster economic independence, and strengthen the
            voices of underserved groups.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our approach combines mentorship, skill-building, advocacy, and social
            development programs, all designed to create long-lasting impact.
          </p>
        </div>

        <div className="rounded-2xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
            alt="Community empowerment"
            className="w-full h-full object-cover"
          />
        </div>
      </section>


            {/* OUR MISSION */}
      <section className="bg-[#12f00a] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            To inspire hope by equipping women, youths, and children with the
            tools, opportunities, and support required to thrive in education,
            leadership, career development, and community impact.
          </p>
        </div>
      </section>

      {/* OUR VISION & VALUES */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="bg-white p-8 rounded-2xl shadow text-center">
          <h3 className="text-xl font-bold mb-3">Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            A society where every woman and young person has equal access to
            opportunities, dignity, and a future full of hope.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow text-center">
          <h3 className="text-xl font-bold mb-3">Core Values</h3>
          <ul className="text-gray-700 leading-relaxed space-y-2">
            <li>• Integrity</li>
            <li>• Inclusion</li>
            <li>• Empowerment</li>
            <li>• Community Growth</li>
            <li>• Accountability</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow text-center">
          <h3 className="text-xl font-bold mb-3">Our Promise</h3>
          <p className="text-gray-700 leading-relaxed">
            To continue building platforms, programs, and partnerships that
            uplift lives and provide real, measurable impact.
          </p>
        </div>
      </section>


      {/* IMPACT HIGHLIGHTS */}
      <section className="py-20 px-6 bg-emerald-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Impact Highlights</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Over the years, our programs have touched lives and strengthened
            communities. Here’s a snapshot of what we’ve accomplished.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <h3 className="text-4xl font-bold text-[#12f00a] mb-2">1,465+</h3>
            <p className="text-gray-700">Women & Youth Empowered</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <h3 className="text-4xl font-bold text-[#12f00a] mb-2">120+</h3>
            <p className="text-gray-700">Communities Reached</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <h3 className="text-4xl font-bold text-[#12f00a] mb-2">12+</h3>
            <p className="text-gray-700">Volunteers & Partners</p>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Us in Presenting Hope</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Become part of a movement transforming lives through education,
          empowerment, and opportunity.
        </p>
        <button className="px-8 py-4 bg-[#12f00a] text-white rounded-xl shadow hover:bg-emerald-700 transition">Get Involved</button>
      </section>

    </div>
  )
}

export default About