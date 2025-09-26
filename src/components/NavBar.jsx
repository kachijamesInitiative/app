import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from '../assets/logo.jpeg'

function NavBar() {
    const [activeTab, setActiveTab] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setIsOpen(false);
    };

    return (
        <>
            <div className='hidden lg:flex justify-between md:mx-28 mt-6  mb-6'>
                <div className="hidden md:block">
                    <ul className='font-stretch-expanded'>
                        <Link
                            to="/"
                            className={activeTab === 'home' ? ' border-black ' : ''}
                            onClick={() => handleTabClick('home')}
                        >
                            <img className='w-22' src={Logo} alt="Logo" />
                        </Link>
                    </ul>

                </div>
                <nav className='md:flex gap-8 text-gray-600 hidden mt-4 '>
                    <Link
                        to="/about"
                        className={activeTab === 'about' ? 'border-b-1 border-black' : 'hover:border-b-1 hover:border-black'}
                        onClick={() => handleTabClick('about')}
                    >
                        ABOUT
                    </Link>
                    <Link
                        to="/impact"
                        className={activeTab === 'impact' ? 'border-b-1 border-black' : 'hover:border-b-1 hover:border-black '}
                        onClick={() => handleTabClick('impact')}
                    >
                        IMPACT
                    </Link>

                    <Link
                        to="/whatwedo"
                        className={activeTab === 'whatwedo' ? 'border-b-1 border-black' : 'hover:border-b-1 hover:border-black '}
                        onClick={() => handleTabClick('whatwedo')}
                    >
                        WHAT WE DO
                    </Link>

                    <Link
                        to="/speeches"
                        className={activeTab === 'speeches' ? 'border-b-1 border-black' : 'hover:border-b-1 hover:border-black'}
                        onClick={() => handleTabClick('speeches')}
                    >
                        SPEECHES
                    </Link>

                    <Link
                        to="/impact"
                        className={activeTab === 'media' ? 'border-b-1 border-black ' : 'hover:border-b-1 hover:border-black '}
                        onClick={() => handleTabClick('media')}
                    >
                        MEDIA
                    </Link>
                    {/* Add similar logic for other tabs */}
                </nav>

            </div>



            <div className='lg:hidden flex justify-between  p-4'>
                <Link
                    to="/"
                    className={`font-stretch-expanded ${activeTab === 'home' ? ' ' : 'font-normal'}`}
                    onClick={() => handleTabClick('home')}
                >
                    <img className='w-12' src={Logo} alt="Logo" />
                </Link>
                <button
                    className="lg:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                </button>
            </div>
            <nav className={` ${isOpen ? 'lg:hidden bg-black p-4 text-white' : 'hidden'} `}>
                <div className='p-2'>
                    <Link
                        to="/about"
                        className={`${activeTab === 'impact' ? 'font-bold' : 'font-normal'} md:hover:border-b md:hover:border-white md:hover:pb-1`}
                        onClick={() => handleTabClick('about')}
                    >
                        ABOUT KACHI
                    </Link>
                </div>
                <div className='p-2'>
                    <Link
                        to="/impact"
                        className={`${activeTab === 'impact' ? 'font-bold' : 'font-normal'} md:hover:border-b md:hover:border-white md:hover:pb-1`}
                        onClick={() => handleTabClick('impact')}
                    >
                        IMPACT
                    </Link>
                </div>
                <div className='p-2'>
                    <Link
                        to="/impact"
                        className={`${activeTab === 'impact' ? 'font-bold' : 'font-normal'} md:hover:border-b md:hover:border-white md:hover:pb-1`}
                        onClick={() => handleTabClick('impact')}
                    >
                        PHYLANTROPY
                    </Link>
                </div>
                <div className='p-2'>
                    <Link
                        to="/whatwedo"
                        className={`${activeTab === 'whatwedo' ? 'font-bold' : 'font-normal'} md:hover:border-b md:hover:border-white md:hover:pb-1`}
                        onClick={() => handleTabClick('whatwedo')}
                    >
                        WHAT WE DO
                    </Link>
                </div>
                <div className='p-2'>
                    <Link
                        to="/speeches"
                        className={`${activeTab === 'speeches' ? 'font-bold' : 'font-normal'} md:hover:border-b md:hover:border-white md:hover:pb-1`}
                        onClick={() => handleTabClick('speeches')}
                    >
                        SPEECHES
                    </Link>
                </div>
                <div className='p-2'>
                    <Link
                        to="/media"
                        className={`${activeTab === 'media' ? 'font-bold' : 'font-normal'} md:hover:border-b md:hover:border-white md:hover:pb-1`}
                        onClick={() => handleTabClick('media')}
                    >
                        MEDIA
                    </Link>
                </div>
                <div className='p-2'>
                    <Link
                        to="/impact"
                        className={`${activeTab === 'impact' ? 'font-bold' : 'font-normal'} md:hover:border-b md:hover:border-white md:hover:pb-1`}
                        onClick={() => handleTabClick('impact')}
                    >
                        THOUGHTS
                    </Link>
                </div>
            </nav>

        </>
    );
}

export default NavBar;