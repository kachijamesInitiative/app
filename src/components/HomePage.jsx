import React from 'react'
import HomeImage from '../assets/HomeImage.png'
import MobileHomeImage from '../assets/MobileHomeImage.jpeg'
import Director from '../assets/Director.jpeg'
import Education from '../assets/Education.png'
import Leadership from '../assets/leadership.png'
import Women from '../assets/women-empowerment.png'
import Youth from '../assets/youth.png'
import ForestBg from '../assets/forest bg.jpg'
import Hope from '../assets/hope.png'
import { FaCoins } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleCarry } from "react-icons/fa";

import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
function HomePage() {
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
            <h1> Kachi Aghasili Initiative </h1>

            <p className='text-[14px] text-[#12f00a]'>Presenting Hope</p>

          </div>
        </div>
      </div>

      {/* About and image */}
      <div className='bg-pink-100 pb-30'>
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


        <div className='lg:mt-20 py-16'

          style={{
            backgroundImage: `url(${ForestBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',


          }}
        >
          <div className=' text-center lg:mx-[38%] mx-22 p-2'>
            <h1 className='lg:text-2xl lg:font-semi-bold from-neutral-400 font-bold text-[#12f00a] py-4 px-1'
              style={{
                background: 'rgba(0, 0, 0, 0.5)',

              }}

            >Our Key Features</h1>
          </div>
          <div className='space-y-4 lg:space-y-0 lg:flex gap-4 justify-center mx-10 lg:mx-6 my-10'>
            <div className='bg-white p-4 lg:w-[15%] shadow-sm hover:bg-pink-100'>
              <div className='flex justify-center'>
                <img className='lg:w-[40%] h-[90%] w-[30%]' src={Education} alt="Education" />
              </div>
              <div className='text-center'>
                <h1 className='text-[#12f00a] font-bold'>Education</h1>
              </div>
            </div>

            <div className='bg-white p-4 lg:w-[15%] shadow-sm hover:bg-pink-100'>
              <div className='flex justify-center'>
                <img className='lg:w-[40%] h-[90%] w-[30%]' src={Leadership} alt="leadership icon" />
              </div>
              <div className='text-center mt-'>
                <h1 className='text-[#12f00a] font-bold'>Leadership</h1>
              </div>
            </div>

            <div className='bg-white p-4 lg:w-[15%] shadow-sm hover:bg-pink-100'>
              <div className='flex justify-center'>
                <img className='lg:w-[40%] h-[90%] w-[30%]' src={Women} alt="women empowerment" />
              </div>
              <div className='text-center'>
                <h1 className='text-[#12f00a] font-bold'>Women Empowerment</h1>
              </div>
            </div>


            <div className='bg-white p-4 lg:w-[15%] shadow-sm hover:bg-pink-100'>
              <div className='flex justify-center'>
                <img className='lg:w-[40%] h-[90%] w-[30%]' src={Youth} alt="youth empowerment" />
              </div>
              <div className='text-center p-2'>
                <h1 className='text-[#12f00a] font-bold'>Youth Engagement</h1>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='lg:grid grid-cols-2 py-8 lg:py-48 md:gap-20 md:mx-8  mx-4 xl:px-64'>
        <div className='flex-1'>
          <div>
            <h1 className='text-2xl font-bold mb-8'>Welcome to Kachi Aghasili Initiative</h1>
            <p className='text-[#777777]  md:w-[80%]'>The <b> Kachi Aghasili Initiative</b>
               is a humanitarian and empowerment platform committed to restoring dignity,
                inspiring resilience, and creating opportunities for a better future.
                 Guided by the belief that hope is the foundation for change, 
                 the Initiative works to uplift individuals and communities
                  through advocacy, education, and support programs that promote equality,
                   integrity, and compassion. <br /><br />At its heart,<b> Kachi Aghasili Initiative</b> stands as a beacon of hope — empowering people to rise above challenges, believe in their potential, and build a society where kindness and fairness prevail. </p>
          </div>
          {/* text-[#12f00a] */}
          <div className='md:flex gap-4 my-10 space-y-4 md:space-y-0'>
            <div className='border-1 border-black py-6 px-8'>
              <FaCoins className='text-[#777777] text-3xl' />
              <p className='text-2xl font-bold py-3'>$0.00</p>
              <p className='text-[#777777]'>Total Donation</p>
            </div>
            <div className='border-1 border-black py-6 px-8'>
              <IoIosPeople className='text-[#777777] text-3xl' />
              <p className='text-2xl font-bold py-3'>1465</p>
              <p className='text-[#777777]'>Total Outreach</p>
            </div>
            <div className='border-1 border-black py-6 px-8'>
              <FaPeopleCarry className='text-[#777777] text-3xl' />
              <p className='text-2xl font-bold py-3'>0</p>
              <p className='text-[#777777]'>Total Volunteers</p>
            </div>
          </div>
        </div>
        <div className='flex-1 '>
          <div className='lg:bg-[#f3e9e9] lg:flex justify-center pb-9'>
            <img className='md:w-[70%]  h-[80%]' src={Hope} alt="welcome image" />
          </div>
        </div>
      </div>




    </div>
  )
}

export default HomePage