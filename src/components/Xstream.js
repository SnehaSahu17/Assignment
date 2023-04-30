import React from 'react'
import Back from '../assests/Background.png'
import stream from '../assests/Xstream.png'
import Stars from '../assests/Stars.png'
import { BsArrowUpRight } from "react-icons/bs";

function Xstream() {
  return (
    <div className='w-[90%] relative mx-auto text-[#FFFFFF] h-[800px] leading-8 tracking-wide '>
        {/* <img src={Back} className='w-[656.01px]  mx-[60%]'></img> */}
        <div className='absolute  top-0 '>
            <div className="w-full relative  ">
                <img src={stream}></img>
                <div className='absolute top-[35%] pl-36 flex justify-start items-center'>
                    <h1 className='font-black text-5xl'>XStream</h1>
                    <span className='font-medium text-xl w-1/2 ml-24'>payment streaming across EVM chains and enhance your dApp with the versatility and convenience of XStream.</span>
                </div>
            </div>
            
            <div className='flex mt-20'>
                <p className='font-normal text-xl w-2/5 '>Meet XStream, the ultimate cross-chain streaming solution that combines the power of Connext, Superfluid, and Gelato to make your life as a developer easier. With XStream, you can effortlessly set up scheduled payment streams across EVM-compatible chains for single or multiple recipients in just one transaction. </p>
                <img src={Stars} className='ml-[28rem]'></img>
            </div>

           
            
            <p className='font-normal text-xl mt-20 w-2/3 text-[#838383]'>
            XStream simplifies the process of managing cross-chain payment streams, allowing you to focus on building innovative and user-friendly decentralized applications.
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

export default Xstream