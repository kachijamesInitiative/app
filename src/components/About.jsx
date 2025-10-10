import React from 'react'
import Director from '../assets/Director.jpeg'
import HomeImage from '../assets/HomeImage.png'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import MobileHomeImage from '../assets/MobileHomeImage.jpeg'
function About() {
  return (
    <div>
      <div className='hidden lg:block'
        style={{

          backgroundImage: `url(${HomeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // change this to your desired height
          width: '100%', // change this to your desired width
        }}>
        <motion.div

          initial={{ opacity: 0, x: 30 }} // Initial state (e.g., hidden, slightly below)
          animate={{ opacity: 5, x: 1 }} // Animate to this state (e.g., visible, original position)
          transition={{ duration: 3 }} // Animation duration

        //whileHover={{ scale: 1.1 }} // Animation on hover
        >
          <div className='text-white text-[100px] font-bold pt-[14%] pl-[7%] w-[80%]'>
            <p className='leading-28'>KACHI <br />AGHASILI<br />INITIATIVE</p>
          </div>
          <div className='my-12'>
            <Link to={'/whatwedo'} className='ml-[7%] bg-[#12f00a] text-[#171b12] font-bold py-3 px-20 text-3xl rounded-md hover:bg-[#171b12] hover:text-[#12f00a]'>
              Presenting Hope
            </Link>
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



      <div className='lg:flex gap-8  justify-cente p-2 lg:p-10'>
        <div className='flex-1 shadow-2xl p-2 lg:p-10'>
          <h1 className='text-2xl md:text-4xl font-bold pb-2 lg:pb-11 text-[#2d80aa]'>About</h1>
          <div className='text-[#2d80aa]'>
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
      </div>

    </div>
  )
}

export default About