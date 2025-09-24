import React from 'react'
import HomeImage from '../assets/HomeImage.png'
import MobileHomeImage from '../assets/MobileHomeImage.jpeg'
import { motion } from "framer-motion"
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
          className='text-white text-8xl font-bold pt-[20%] pl-[7%] w-[50%]'
          initial={{ opacity: 0, y: 30 }} // Initial state (e.g., hidden, slightly below)
          animate={{ opacity: 5, y: 0 }} // Animate to this state (e.g., visible, original position)
          transition={{ duration: 1 }} // Animation duration
        //whileHover={{ scale: 1.1 }} // Animation on hover
        >
          Empowering <br />People, Building<br />the Future
        </motion.div>

      </div>
      <div className=' lg:hidden'
        style={{
          backgroundImage: `url(${MobileHomeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '40vh', // change this to your desired height
          width: '100%', // change this to your desired width
        }}>
        <motion.div
          className=''
          initial={{ opacity: 0, y: 30 }} // Initial state (e.g., hidden, slightly below)
          animate={{ opacity: 5, y: 0 }} // Animate to this state (e.g., visible, original position)
          transition={{ duration: 1 }} // Animation duration
        //whileHover={{ scale: 1.1 }} // Animation on hover
        >
         <div div className='pt-[35%] text-[#1414d8] text-2xl text-center font-extrabold'>
           <p>Empowering <br />People, Building<br />the Future</p>
         </div>
        </motion.div>

      </div>


    </div>
  )
}

export default HomePage