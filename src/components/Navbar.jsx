import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logof.png'

export const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt="Logo Kali" style={{ width: '201px' }} />
            </div>

            {/* Menu */}
            <div>
                <ul className='flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Hamburguer */}
            <div className='hidden'>
                <FaBars />
            </div>


            {/* Mobile Menu */}
            <ul className='hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>


            {/* Social icons */}
            <div></div>
        </div>
    )
}
