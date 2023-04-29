import React from 'react'
import Back from '../assests/Background.png'
import Swap from '../assests/Swapx.png'
import Stars from '../assests/Stars.png'
import { BsArrowUpRight } from "react-icons/bs";

function Swapx() {
  return (
    <div className='w-[90%] relative  mx-auto text-[#FFFFFF] leading-8 tracking-wide '>
    <img src={Back} className='w-2/3 mx-auto'></img>
    <div className='absolute  top-0 '>
        <div className="w-full relative  ">
            <img src={Swap}></img>
            <div className='absolute top-[35%] pl-36 flex justify-start items-center'>
                <h1 className='font-black text-5xl'>SwapX</h1>
                <span className='font-medium text-xl w-full ml-24'>A smart contract module that enables developers to create limit orders and DCAs between tokens on different EVM-compatible chains in a trustless and automated way. </span>
            </div>
        </div>
        
        <div className='flex mt-20'>
            <p className='font-normal text-xl w-2/5 '>The fact that SwapX is composable with other DeFi protocols makes it a versatile module that can be integrated into more complex trading strategies. Furthermore, the deployment of SwapX on Gnosis and Polygon Chains demonstrates the potential for deploying the module on other chains in the future.</p>
            <img src={Stars} className='ml-28'></img>
        </div>

        
        
        <p className='font-normal text-xl mt-20 w-2/3 text-[#838383]'>
        As a developer, you can leverage SwapX to build cross-chain DeFi automation across any EVM chain of your preference. With the ability to create limit orders and DCAs through the frontend, SwapX is accessible to any user who wants to trade across different EVM chains.
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

export default Swapx