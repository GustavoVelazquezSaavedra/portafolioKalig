import React from 'react'
 
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import DATABASE from "../assets/database.png";
import DJANGO from "../assets/django.png";
import LARAVEL from "../assets/laravel.png";
import ELECTRON from "../assets/electron.png";
import FLUTTER from "../assets/flutter.png";
import HACKING from "../assets/hacking.png";
import PHP from "../assets/php.png";
import PYTHON from "../assets/python.png";
import REACT from "../assets/react.png";
import NODE from "../assets/node.png";
import GH from "../assets/github.png";
export const Skills = () => {
  return (
    <div name="skills"  className='w-full  bg-[#0A192F] text-gray-300'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-teal-600 '>
                    Skills
                </p>
                <p className='py-4'>
                    // These are the technologies We've worked with
                </p>
            </div>


            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 shadow-md shadow-teal-600'>


                {/* shadow-[#040c16] */}
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                
                {/* shadow-[#040c16] */}
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CCS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                
                {/* shadow-[#040c16] */}
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt="JS icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                
                {/* shadow-[#040c16] */}
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={REACT} alt="REACT icon" />
                    <p className='my-4'>React</p>
                </div>

                {/* shadow-[#040c16] */}
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ELECTRON} alt="Electron icon" />
                    <p className='my-4'>Electron</p>
                </div>

                {/* shadow-[#040c16] */}
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={FLUTTER} alt="Flutter icon" />
                    <p className='my-4'>Flutter</p>
                </div>

                {/* shadow-[#040c16] */}
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PHP} alt="php icon" />
                    <p className='my-4'>PHP</p>
                </div>

                {/* shadow-[#040c16] */}
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PYTHON} alt="Python icon" />
                    <p className='my-4'>Python</p>
                </div>

                {/* shadow-[#040c16] */}
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={NODE} alt="Node icon" />
                    <p className='my-4'>NODE</p>
                </div>

                {/* shadow-[#040c16] */}
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={LARAVEL} alt="LARAVEL icon" />
                    <p className='my-4'>LARAVEL</p>
                </div>

                {/* shadow-[#040c16] */}
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={DJANGO} alt="DJANGO icon" />
                    <p className='my-4'>DJANGO</p>
                </div>

                {/* shadow-[#040c16] */}
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GH} alt="GITHUB icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                {/* shadow-[#040c16] */}
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={DATABASE} alt="DATABASE icon" />
                    <p className='my-4'>DATABASE</p>
                </div>

                {/* shadow-[#040c16] */}
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HACKING} alt="HACKING icon" />
                    <p className='my-4'>ETHICAL HACKING</p>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Skills