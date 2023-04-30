import React from 'react'
import SecOne from '../assests/SecOne.png'
import LogoMob from "../assests/LogoMob.png"
import SecOneMob from "../assests/SecOneMob.png"

function SectionOne() {
  return (
    <div className='max-w-7xl px-4 sm:px-8 '>
    <div className='mt-4 mx-auto relative ' >
        <img src={SecOne} className='w-full h-full hidden sm:flex'></img>
        <img  src={SecOneMob} className='max-w-lg mx-auto h-full sm:hidden'></img>
        <div className='absolute w-full h-fit top-16  flex flex-col justify-center items-center font-medium  '>
            <span className='mx-auto hidden sm:flex'><img src={LogoMob} className='w-[117.39px] h-[88px]'></img></span>
            <span className='text-[#FFFFFF] text-xl max-w-xs sm:max-w-lg text-center mt-14 px-2 mx-auto'>Cross-chain interoperability made easy with our automation middleware.</span>
            <button className='w-44 h-12 bg-[#2BFFB1] text-centre rounded-xl mt-8  mx-auto'>
                   <span className='text-md text-[#000000] font-normal'>Let's Chat</span>
             </button>
        </div>
       

    </div>
    <div className='sm:mt-24 mt-10  '>
    <p className='font-black text-[#FFFFFF] sm:text-5xl text-xl leading-8 tracking-wide max-w-xs sm:max-w-2xl mx-auto text-left sm:text-center'>
        Designed to seamlessly connect and automate cross-chain interactions for a truly interconnected blockchain ecosystem
        </p>
    </div>
    <div className='sm:mt-24 mt-10 w-full'>
    <p className='font-medium text-[#838383] sm:text-xl text-base leading-8 max-w-xs sm:max-w-full mx-auto text-left sm:text-center '>
    Cross-chain automation middleware refers to a software layer that enables seamless communication, integration, and automation of processes between different blockchain networks. Since blockchains are typically isolated ecosystems with unique consensus mechanisms, data structures, and smart contract languages, cross-chain interoperability has become crucial for the growth and development of the overall blockchain ecosystem.
        </p>
    </div>
    </div>
  )
}

export default SectionOne