import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const Home = () => {
  return (
    <div name="home" className='w-full  h-screen bg-[#0a192f]'>

      {/* Container */}

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-emerald-200'>
          Hi, We're
        </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>KaliG</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>We're Developers.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>We're specializing in building  exceptional digital experiences. Currently, We're Focused on building responsive full-stack web applications.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-3 flex items-center hover:bg-teal-600 hover:border-teal-600'> View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>


    </div>
  )
}