import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import ForDev from '../assests/ForDev.png'
import ForDevMob from '../assests/ForDevMob.png'

function ForDeveloper() {
  return (
    <div className=" sm:w-[90%] mt-1 relative mx-auto leading-8 tracking-wide ">
        <img src={ForDev} className='hidden sm:flex'></img>
        <img src={ForDevMob} className='sm:hidden'></img>
       
        <div className='absolute top-[15%] flex flex-col text-[#FFFFFF] w-full'>
                    <h1 className='font-black w-72 sm:w-full text-[#DFFFF3] text-center text-4xl sm:text-5xl mx-auto'>For Developers by Developers</h1>
                    <p className='font-medium text-xl max-w-xs sm:max-w-xl mt-8 leading-8 tracking-wide text-center mx-auto'>Discover our comprehensive API documentation, designed specifically with developers in mind. Gain insights, learn best practices, and explore the full potential of our platform to elevate your projects with ease and efficiency.</p>
                    <button className='w-44 h-12 mt-10 mb-4 px-4 mx-auto bg-[#2BFFB1] flex items-center justify-between rounded-xl'>
               <span className='text-lg text-[#000000] font-medium'>API Docs</span>
               <BsArrowUpRight className='text-[#000000] font-medium text-lg'/>
         </button>
                </div>
           </div>
   
  )
}

export default ForDeveloper