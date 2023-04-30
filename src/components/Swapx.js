import React from 'react'
import Back from '../assests/Background.png'
import Swap from '../assests/Swapx.png'
import SwapMob from '../assests/Swapxmob.png'
import Stars from '../assests/Stars.png'
import { BsArrowUpRight } from "react-icons/bs";

function Swapx() {
  return (
    <div className="w-[390px] sm:w-[90%]  relative  mt-10 md:mt-0 h-[983px] md:h-[800px] mx-auto text-[#FFFFFF] leading-8 tracking-wide ">
    <img src={Back} className="w-[656.01px] mx-auto hidden sm:flex"></img>
    <div className="absolute  top-0 ">
      <div className="w-full relative  ">
        <img src={Swap} className="hidden sm:flex"></img>
        <img src={SwapMob} className="sm:hidden"></img>
        <div className="absolute top-6 flex-col px-4 sm:flex-row sm:top-[30%] sm:pl-20 flex justify-start items-start sm:items-center">
          <h1 className="font-black text-4xl sm:text-5xl">SwapX</h1>
          <span className="font-medium  text-sm sm:text-xl w-full sm:w-full mt-5 sm:mt-0 sm:ml-20">
          A smart contract module that enables developers to create limit orders and DCAs between tokens on different EVM-compatible chains in a trustless and automated way. 
          </span>
          <div className=" sm:hidden bg-gradient-to-r from-[#FFFFFF] to-[#285f48] w-full h-[1px] rounded-lg mt-4"></div>

          <div className=" mt-8 sm:hidden ">
            <p className="font-normal text-xl max-w-xs">
            The fact that SwapX is composable with other DeFi protocols makes it a versatile module that can be integrated into more complex trading strategies. Furthermore, the deployment of SwapX on Gnosis and Polygon Chains demonstrates the potential for deploying the module on other chains in the future.
            </p>
          </div>
          
          <p className="font-normal text-xl mt-4  sm:text-[#838383]  sm:hidden ">
          As a developer, you can leverage SwapX to build cross-chain DeFi automation across any EVM chain of your preference. With the ability to create limit orders and DCAs through the frontend, SwapX is accessible to any user who wants to trade across different EVM chains.
      </p>

      <div className="sm:hidden flex">
        <button className="w-44 h-12 mt-14 mb-4 px-4 bg-[#2BFFB1] flex items-center justify-between rounded-xl">
          <span className="text-lg text-[#000000] font-medium">See Docs</span>
          <BsArrowUpRight className="text-[#000000] font-medium text-lg" />
        </button>
      </div>

        </div>
      </div>

      <div className="sm:flex mt-20 hidden ">
        <p className="font-normal text-xl w-2/5 ">
        The fact that SwapX is composable with other DeFi protocols makes it a versatile module that can be integrated into more complex trading strategies. Furthermore, the deployment of SwapX on Gnosis and Polygon Chains demonstrates the potential for deploying the module on other chains in the future.
        </p>
        <img src={Stars} className="ml-28 "></img>
      </div>

      <p className="font-normal text-xl mt-20 w-2/3 text-[#838383] hidden sm:flex">
      As a developer, you can leverage SwapX to build cross-chain DeFi automation across any EVM chain of your preference. With the ability to create limit orders and DCAs through the frontend, SwapX is accessible to any user who wants to trade across different EVM chains.
      </p>

      <div className="hidden sm:flex">
        <button className="w-44 h-12 mt-14 mb-4 px-4 bg-[#2BFFB1] flex items-center justify-between rounded-xl">
          <span className="text-lg text-[#000000] font-medium">See Docs</span>
          <BsArrowUpRight className="text-[#000000] font-medium text-lg" />
        </button>
      </div>
    </div>
  </div>
  )
}

export default Swapx