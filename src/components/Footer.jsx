import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaYahoo, FaArrowRight } from 'react-icons/fa';

function Footer() {
    return (
        <div className='bg-black text-white pb-16'>
            <div className="lg:flex justify-between bg-black text-white px-4 lg:gap-8 pt-16 lg:px-52">
                <div>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://www.twitter.com" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com" aria-label="youtube">
                            <FaYoutube />
                        </a>
                        <a href="https://www.gmail.com" aria-label="gmail">
                            <FaYahoo />
                        </a>
                    </div>
                    <div className=''>
                        <div className='py-8 '>
                            <h1>Join for Monthly Insights</h1>
                        </div>
                        <form action="" className='border-gray-700 border-1 p-4 flex justify-between w-[98%]'>
                            <div className='space-y-2'>
                                <input className='lg:w-[21%] outline-hidden' type="email" placeholder='FIRST NAME' /><br className= 'lg:hidden'/>
                                <input className='lg:w-[21%] outline-hidden' type="text" placeholder='LAST NAME' /><br className= 'lg:hidden'/>
                                <input className='lg:w-[22%] outline-hidden' type="text" placeholder='EMAIL ADDRESS' /><br className= 'lg:hidden'/>
                            </div>
                            <button>
                                <FaArrowRight />
                            </button>
                        </form>
                        <p className='py-6 text-[#525b63]'>We will never share or spam your email address. By clicking "Sign Up" you <br /> agree to the Terms of Use and Privacy Policy</p>
                    </div>

                </div>
                <div className='lg:grid lg:grid-cols-2 lg:gap-4 py-8 text-[14px] lg:text-[15px]'>
                    <div>
                        <div className='p-2'>
                            <Link
                                to="/speeches" className='hover:text-[#525b63]'
                            >
                                SPEECHES
                            </Link>
                        </div>
                        <div className='p-2'>
                            <Link
                                to="/media" className='hover:text-[#525b63]'
                            >
                                MEDIA
                            </Link>
                        </div>
                        <div className='p-2'>
                            <Link
                                to="/impact" className='hover:text-[#525b63]'
                            >
                                PYLANTROPY
                            </Link>
                        </div>

                    </div>
                    <div>
                        <div className='p-2'>
                            <Link
                                to="/impact" className='hover:text-[#525b63]'
                            >
                                THOUGHTS
                            </Link>
                        </div>
                        <div className='p-2'>
                            <Link
                                to="/whatwedo" className='hover:text-[#525b63]'
                            >
                                WHAT WE DO
                            </Link>
                        </div>
                        <a className='ml-2 hover:text-[#525b63]' href="https://www.kachijames.com" aria-label="gmail">
                            A R T
                        </a>
                    </div>
                </div>
            </div>

            <div className='border-gray-700 border-t lg:mx-52'></div>
            <p className='lg:mx-52 pt-8 text-[13px] text-center lg:text-start'>&copy; 2025 KACHI J. AGHASILI</p>
            <div className='flex justify-center lg:justify-start lg:mx-52 text-[13px] gap-3 lg:gap-4 text-[#989da1] '>
                <div className=''>
                    <Link
                        to="/whatwedo" className='hover:text-[#525b63]'
                    >
                    Privacy Policy
                    </Link>
                </div>
                <div className=''>
                    <Link
                        to="/whatwedo" className='hover:text-[#525b63]'
                    >
                        Terms of Use
                    </Link>
                </div>
                <div className=''>
                    <Link
                        to="/whatwedo" className='hover:text-[#525b63]'
                    >
                        Contact
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Footer