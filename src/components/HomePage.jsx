import React from 'react'
import HomeImage from '../assets/HomeImage.png'
import MobileHomeImage from '../assets/MobileHomeImage.jpeg'
import CountUp from "react-countup";
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


      {/* counter */}
      <div className="mt-8 md:grid md:grid-cols-2 md:gap-2 mb-[100px] lg:p-[100px] bg-white lg:mx-[180px] text-black lg:mt-[-90px] border-b border-green-200  p-4">
        <div>
          <h1 className="text-1xl md:text-3xl font-extrabold">
            Shaping Narratives of Strength
            <br />
            <span className="text-[#12f00a]">Presenting Hope</span>
          </h1>
          <div className='pt-8'>
            <Link to="/about" className="pt-16 border-b-4 border-[#12f00a] w-[120px]">
              WHO WE ARE
            </Link>
          </div>

        </div>
        <div className="mt-4 md:mt-0">
          <div>
            <p className=''>
           The Kachi Aghasili Initiative is a
            visionary platform dedicated to empowering individuals,
             strengthening communities, and driving sustainable change...
            </p>
          </div>
          <div className="mt-10 md:grid md:grid-cols-3 md:gap-2 md:text-center">
            <div className="mb-6">
              <div className="text-3xl md:text-4xl font-bold text-[#12f00a] flex md:justify-center ">
                <CountUp end={12} enableScrollSpy>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp><p>+</p>
              </div>
              <p>complete project</p>
            </div>
            <div className="mb-6">
              <div className="text-3xl md:text-4xl font-bold text-[#12f00a] flex md:justify-center ">
                <CountUp end={80} enableScrollSpy>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp><p>%</p>
              </div>
              <p>success rate</p>
            </div>
            <div className="mb-6">
              <div className="text-3xl md:text-4xl font-bold text-[#12f00a] flex md:justify-center ">
                <CountUp end={1465} enableScrollSpy>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp><p>+</p>
              </div>
              <p>Total Beneficiaries</p>
            </div>
          </div>
        </div>
      </div>





      {/* About and image */}
      <div className='bg-pink-100 pb-30'>

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
            <p className='text-[#777777]  md:w-[80%]'>The <b> Kachi Aghasili Initiative </b>
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
              <p className='text-2xl font-bold py-3'>
                <CountUp end={1456} enableScrollSpy>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </p>
              <p className='text-[#777777]'>Total Outreach</p>
            </div>
            <div className='border-1 border-black py-6 px-8'>
              <FaPeopleCarry className='text-[#777777] text-3xl' />
              <p className='text-2xl font-bold py-3'>
                <CountUp end={12} enableScrollSpy>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </p>
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