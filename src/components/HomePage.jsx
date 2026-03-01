import React, { useEffect, useState } from 'react'
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
import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import data from '../data/data.json'

function HomePage() {
  const navigate = useNavigate();
  const handleView = (id) => navigate(`/details/${id}`);

  // const [christmasCountdown, setChristmasCountdown] = useState('');
  // const [newYearCountdown, setNewYearCountdown] = useState('');

  // useEffect(() => {
  //   const updateOnce = () => {
  //     const now = new Date().getTime();
  //     const christmas = new Date('December 25, 2025 00:00:00').getTime();
  //     const newYear = new Date('January 1, 2026 00:00:00').getTime();

  //     const updateCountdown = (target, setState) => {
  //       const distance = target - now;
  //       if (distance <= 0) {
  //         setState("🎉 It's Time! 🎉");
  //         return;
  //       }
  //       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //       const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //       setState(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
  //     };

  //     updateCountdown(christmas, setChristmasCountdown);
  //     updateCountdown(newYear, setNewYearCountdown);
  //   };

  //   // run once immediately
  //   updateOnce();
  //   const timer = setInterval(updateOnce, 1000);

  //   // proper cleanup function
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div>
      {/* FIXED LEFT-SIDE CHRISTMAS DECORATION (visible on large screens) */}


      {/* FESTIVE COUNTDOWN DECORATION */}
      {/* <div className="bg-red-600 text-white text-center py-5 font-bold text-xl shadow-lg border-b-4 border-green-400">
        <div className="animate-pulse">🎄 Christmas Countdown: {christmasCountdown}</div>
        <div className="mt-2 animate-bounce">🎆 New Year Countdown 2026: {newYearCountdown}</div>
      </div> */}

      {/* DESKTOP HERO */}
      <div className='hidden lg:block'
        style={{
          backgroundImage: `url(${HomeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}>
        <motion.div
          initial={{ opacity: 0, x: 30 }} // Initial state (e.g., hidden, slightly below)
          animate={{ opacity: 5, x: 1 }} // Animate to this state (e.g., visible, original position)
          transition={{ duration: 3 }} // Animation duration
        >
          <div className='text-white  xl:text-[100px] text-[60px] font-bold pt-[5%] xl:pt-[14%] pl-[7%] w-[80%]'>
            <p className='xl:leading-28 leading-20'>KACHI <br />AGHASILI<br />INITIATIVE</p>
          </div>
          <div className='my-12'>

            <Link to={'/whatwedo'} className='ml-[7%] bg-[#12f00a] text-[#171b12] font-bold py-3 px-16 xl:px-20 text-3xl rounded-md hover:bg-[#171b12] hover:text-[#12f00a]'>
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
      <div className="mt-8 md:grid md:grid-cols-2 md:gap-2 mb-[100px] lg:p-[50px] xl:p-[100px] bg-white lg:mx-[100px] xl:mx-[180px] text-black lg:mt-[-90px] border-b border-green-200  p-4">
        <div>
          <h1 className="text-[19px] md:text-3xl font-extrabold">
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
              <div className="text-3xl md:text-3xl xl:text-4xl font-bold text-[#12f00a] flex md:justify-center ">
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
              <div className="text-3xl md:text-3xl xl:text-4xl font-bold text-[#12f00a] flex md:justify-center ">
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
              <div className="text-3xl md:text-3xl xl:text-4xl font-bold text-[#12f00a] flex md:justify-center ">
                <CountUp end={1465} enableScrollSpy>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp><p>+</p>
              </div>
              <p>Beneficiaries</p>
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

      <div className='lg:grid grid-cols-2 py-8 lg:py-48 md:gap-20 md:mx-8  mx-4 md:px-8 xl:px-8 2xl:px-59'>
        <div className='flex-1'>
          <div>
            <h1 className='text-2xl font-bold mb-8'>Welcome to Kachi Aghasili Initiative</h1>
            <p className='  md:w-[80%]'>The <b> Kachi Aghasili Initiative </b>
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
              <div className='text-2xl font-bold py-3'>
                <CountUp end={1456} enableScrollSpy>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </div>
              <p className='text-[#777777]'>Total Outreach</p>
            </div>
            <div className='border-1 border-black py-6 px-8'>
              <FaPeopleCarry className='text-[#777777] text-3xl' />
              <div className='text-2xl font-bold py-3'>
                <CountUp end={12} enableScrollSpy>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </div>
              <p className='text-[#777777]'>Total Volunteers</p>
            </div>
          </div>
        </div>
        <div className='flex-1 '>
          <div className='lg:bg-[#f3e9e9] lg:flex justify-center p-4 xl:p-4 pb-9'>
            <img className='md:w-[100%] w-[100%] xl:w-[90%] h-[100%]' src={Hope} alt="welcome image" />
          </div>
        </div>
      </div>


      {/* cards */}
      <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-20 md:mx-8  mx-4 md:px-8 xl:px-8 2xl:px-52'>
        <div className='text-center md:text-left pb-8'>
          <h1 className='md:text-3xl lg:text-4xl xl:text-8xl font-bold mb-8 text-4xl'>Our Journeys <br /> That Matter</h1>
          <p className='text-[18px]'>Every movement begins with courage and hope. Discover stories showing how unity create last impact.</p>

        </div>


        <div className="">
          {data.map((item) => (
            <div
              key={item.id}
              className=" rounded-2xl  cursor-pointer transition"
              onClick={() => handleView(item.id)}
            >
              <div className='md:grid grid-cols-2  md:space-y-8'>
                <div >
                  <img
                    src={item.image}
                    alt={item.header}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-4 pb-20 md:pb-0">
                  <h2 className="text-xl font-semibold mb-2">{item.header}</h2>
                  <p className="text-gray-600 text-sm">{item.paragraph.slice(0, 50)}...</p>
                  <div className="mt-4 py-2 border-b w-20">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT US */}
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-800">
        {/* HERO */}
        <section className="relative py-28 text-center overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-[#12f00a] drop-shadow-sm"
          >
            Get in Touch
          </motion.h1>
          <p className="mt-4 text-lg max-w-xl mx-auto opacity-70">
            Whether you have questions, want to partner with us, or simply want to say hello —
            we’re here to connect.
          </p>

          {/* Decorative Blur */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300 blur-[120px] opacity-30" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-400 blur-[120px] opacity-30" />
        </section>

        {/* CONTACT GRID */}
        <section className="max-w-6xl mx-auto px-6 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* CONTACT INFO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-xl rounded-3xl p-10 border border-orange-100"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#12f00a]">Contact Information</h2>
            <p className="opacity-70 mb-8">
              Reach out through any of the methods below. Our team responds within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-[#12f00a] w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="opacity-70">contact@kachiaghasili.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-[#12f00a] w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="opacity-70">+234 803 687 3106</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-[#12f00a] w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Office Address</h3>
                  <p className="opacity-70">Anambra State, Nigeria</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM CARD */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-xl rounded-3xl p-10 border border-orange-100"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#12f00a]">Send Us a Message</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="p-4 rounded-2xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-4 rounded-2xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full mt-6 p-4 rounded-2xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
            />

            <textarea
              placeholder="Message"
              rows="5"
              className="w-full mt-6 p-4 rounded-2xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
            ></textarea>

            <button
              type="submit"
              className="mt-8 flex items-center gap-2 bg-[#12f00a] text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-orange-800 transition"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </motion.form>
        </section>


      </div>


    </div>
  )
}

export default HomePage;
