import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

export const Home = () => {
  return (
    <div name="home" className='w-full  h-screen bg-[#0a192f]'>
        
        {/* Container */}

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-blue-600'>
                Hi, We're
            </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>KaliG</h1>
            <h2>We're Developers.</h2>
            <p>We're specializing in building  exceptional digital experiences. Currently, We're Focused on building responsive full-stack web applications.</p>
            <div>
                <button> View Work <HiArrowNarrowRight /> </button>
            </div>
        </div>


    </div>
  )
}