import React, { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaFacebook, FaMailchimp, FaTwitch, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

export const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt="Logo Kali" style={{ width: '201px' }} />
            </div>

            {/* Menu */}

            <ul className='hidden md:flex'>
                <li>
                    <Link  to="home"  smooth={true}  duration={500} >
                        Home
                    </Link>
                </li>
                <li><Link  to="about"  smooth={true}  duration={500} >
                        About
                    </Link></li>
                <li><Link  to="skill"  smooth={true}  duration={500} >
                        Skills
                    </Link></li>
                <li><Link  to="work"  smooth={true}  duration={500} >
                        Works
                    </Link></li>
                <li><Link  to="product"  smooth={true}  duration={500} >
                        Products
                    </Link></li>
                <li><Link  to="blog"  smooth={true}  duration={500} >
                        Blog
                    </Link></li>
                <li><Link  to="staff"  smooth={true}  duration={500} >
                        Staff
                    </Link></li>
                <li><Link  to="contact"  smooth={true}  duration={500} >
                        Contacts
                    </Link></li>
            </ul>

            {/* Hamburguer */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home"  smooth={true}  duration={500} >
                        Home
                    </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about"  smooth={true}  duration={500} >
                        About
                    </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skill"  smooth={true}  duration={500} >
                        Skills
                    </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="work"  smooth={true}  duration={500} >
                        Works
                    </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="product"  smooth={true}  duration={500} >
                        Products
                    </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="blog"  smooth={true}  duration={500} >
                        Blog
                    </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="blog"  smooth={true}  duration={500} >
                        Blog
                    </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact"  smooth={true}  duration={500} >
                        Contacts
                    </Link></li>
            </ul>


            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-400'><a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.linkedin.com/in/gustavo-velazquez-4b965b179" target="_blank">Linkedin <FaLinkedin size={30} /> </a></li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#333333]'><a className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/GustavoVelazquezSaavedra" target="_blank"> GitHub <FaGithub size={30} /> </a></li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-600'><a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.facebook.com/KaliG-100788299089364" target="_blank"> Facebook <FaFacebook size={30} /> </a></li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#6fc2b0]'><a className='flex justify-between items-center w-full text-gray-300'
                        href="mailto:kalig@kaligonline.com" target="_blank">Email <HiOutlineMail size={30} /> </a></li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-500'><a className='flex justify-between items-center w-full text-gray-300'
                        href="https://twitter.com/Gustavo1997_12" target="_blank">Twitter <FaTwitter size={30} /> </a></li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#565f69]'><a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.facebook.com/gustavogabriel.velazquez1/" target="_blank">Resume <BsFillPersonLinesFill size={30} /> </a></li>
                </ul>
            </div>
        </div>
    )
}
