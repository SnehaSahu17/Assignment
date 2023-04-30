import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import ForDev from '../assests/ForDev.png'
import ForDevMob from '../assests/ForDevMob.png'

function ForDeveloper() {
  return (
    <div className=" sm:w-[90%] mt-44 relative mx-auto leading-8 tracking-wide ">
        <img src={ForDev} className='hidden sm:flex'></img>
        <img src={ForDevMob}></img>
       
        <div className='absolute top-[15%] flex flex-col text-[#FFFFFF] '>
                    <h1 className='font-black max-w-xs text-center text-4xl sm:text-5xl mx-auto'>For Developers by Developers</h1>
                    <p className='font-medium text-xl max-w-xs mt-8 sm:w-1/2 text-center mx-auto'>Discover our comprehensive API documentation, designed specifically with developers in mind. Gain insights, learn best practices, and explore the full potential of our platform to elevate your projects with ease and efficiency.</p>
                    <button className='w-44 h-12 mt-10 mb-4 px-4 mx-auto bg-[#2BFFB1] flex items-center justify-between rounded-xl'>
               <span className='text-lg text-[#000000] font-medium'>See Docs</span>
               <BsArrowUpRight className='text-[#000000] font-medium text-lg'/>
         </button>
                </div>
           </div>
   
  )
}

export default ForDeveloper