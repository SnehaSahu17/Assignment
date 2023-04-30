import React from 'react'
import Back from '../assests/Background.png'
import Auto from '../assests/Autopay.png'
import Stars from '../assests/Stars.png'
import { BsArrowUpRight } from "react-icons/bs";

function Autopay() {
  return (
    <div className='w-[90%] relative mt-44 h-[800px] mx-auto text-[#FFFFFF] leading-8 tracking-wide '>
        <img src={Back} className='w-[656.01px] mx-auto'></img>
        <div className='absolute  top-0 '>
            <div className="w-full relative  ">
                <img src={Auto}></img>
                <div className='absolute top-[35%] pl-36 flex justify-start items-center'>
                    <h1 className='font-black text-5xl'>Autopay</h1>
                    <span className='font-medium text-xl w-1/2 ml-24'>the go-to solution for developers seeking a streamlined and accessible crypto integration.</span>
                </div>
            </div>
            
            <div className='flex mt-20'>
                <p className='font-normal text-xl w-2/5 '>Autopay makes it easy for businesses of all sizes to incorporate crypto-based solutions into their operations. With our user-friendly products and APIs, developers can effortlessly integrate features like crypto subscriptions, dollar-cost averaging (DCA) strategies, and automated payouts into their dApps, enhancing the overall user experience.</p>
                <img src={Stars} className='ml-28'></img>
            </div>

           
            <p className='font-normal text-xl mt-20 w-2/3 text-[#838383]'>
            Unlock the potential of recurring crypto transactions with Autopay, and simplify the process of managing subscriptions, implementing DCA strategies, and automating payouts for your dApp ecosystem. Embrace the future of decentralized applications with Autopay.
            </p>
            
            <div className=''>
            <button className='w-44 h-12 mt-14 mb-4 px-4 bg-[#2BFFB1] flex items-center justify-between rounded-xl'>
                   <span className='text-lg text-[#000000] font-medium'>See Docs</span>
                   <BsArrowUpRight className='text-[#000000] font-medium text-lg'/>
             </button>
            </div>

        </div>
    </div>
  )
}

export default Autopay