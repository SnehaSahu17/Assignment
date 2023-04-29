import React from 'react'
import SecOne from '../assests/SecOne.png'
import LogoMob from "../assests/LogoMob.png"

function SectionOne() {
  return (
    <div className=''>
    <div className='max-w-7xl mt-10 mx-auto relative ' >
        <img src={SecOne} className='w-full h-full'></img>
        <div className='absolute w-full h-fit top-20 flex flex-col font-medium  '>
            <span className='mx-auto'><img src={LogoMob} className='w-28'></img></span>
            <span className='text-[#FFFFFF] text-xl max-w-lg text-center mt-12 mx-auto'>Cross-chain interoperability made easy with our automation middleware.</span>
            <button className='w-44 h-12 bg-[#2BFFB1] text-centre rounded-xl mt-8 mx-auto'>
                   <span className='text-lg text-[#000000] font-medium'>Let's Chat</span>
             </button>
        </div>
    </div>
    <div className='mt-24 w-full'>
    <p className='font-black text-[#FFFFFF] text-5xl max-w-2xl mx-auto text-center '>
        Designed to seamlessly connect and automate cross-chain interactions for a truly interconnected blockchain ecosystem
        </p>
    </div>
    <div className='mt-24 w-full'>
    <p className='font-medium text-[#838383] text-xl max-w-7xl mx-auto text-center '>
    Cross-chain automation middleware refers to a software layer that enables seamless communication, integration, and automation of processes between different blockchain networks. Since blockchains are typically isolated ecosystems with unique consensus mechanisms, data structures, and smart contract languages, cross-chain interoperability has become crucial for the growth and development of the overall blockchain ecosystem.
        </p>
    </div>
    </div>
  )
}

export default SectionOne