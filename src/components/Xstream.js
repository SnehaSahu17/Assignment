import React from 'react'
import Back from '../assests/Background.png'
import stream from '../assests/Xstream.png'
import StreaMob from '../assests/XtreamMob.png'
import Stars from '../assests/Stars.png'
import { BsArrowUpRight } from "react-icons/bs";

function Xstream() {
  return (
    <div className="w-[390px] sm:w-[90%] relative  mt-10 backdrop-blur md:mt-0 h-[983px] md:h-[800px] mx-auto text-[#FFFFFF] leading-8 tracking-wide ">
      {/* <img src={Back} className="w-[656.01px] ml-[60%] hidden sm:flex "></img> */}
      <div className="absolute  top-0 ">
        <div className="w-full relative  ">
          <img src={stream} className="hidden sm:flex m"></img>
          <img src={StreaMob} className="sm:hidden"></img>
          <div className="absolute top-6 flex-col px-4 sm:flex-row sm:top-[30%] sm:px-20 flex justify-start items-start sm:items-center">
            <h1 className="font-black text-4xl sm:text-5xl">XStream</h1>
            <span className="font-medium  text-sm sm:text-xl w-full sm:w-2/3 mt-5 sm:mt-0 sm:ml-20">
              payment streaming across EVM chains and enhance your dApp with the versatility and convenience of XStream.
            </span>
            <div className=" sm:hidden bg-gradient-to-r from-[#FFFFFF] to-[#285f48] w-full h-[1px] rounded-lg mt-4"></div>

            <div className=" mt-8 sm:hidden ">
              <p className="font-normal text-xl max-w-xs">
                Meet XStream, the ultimate cross-chain streaming solution that combines the power of Connext, Superfluid, and Gelato to make your life as a developer easier. With XStream, you can effortlessly set up scheduled payment streams across EVM-compatible chains for single or multiple recipients in just one transaction.
              </p>
            </div>

            <p className="font-normal text-xl mt-4  sm:text-[#838383]  sm:hidden ">
              XStream simplifies the process of managing cross-chain payment streams, allowing you to focus on building innovative and user-friendly decentralized applications.
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
            Meet XStream, the ultimate cross-chain streaming solution that combines the power of Connext, Superfluid, and Gelato to make your life as a developer easier. With XStream, you can effortlessly set up scheduled payment streams across EVM-compatible chains for single or multiple recipients in just one transaction.
          </p>
          <img src={Stars} className="ml-[30rem] "></img>
        </div>

        <p className="font-normal text-xl mt-20 w-2/3 text-[#838383] hidden sm:flex">
          XStream simplifies the process of managing cross-chain payment streams, allowing you to focus on building innovative and user-friendly decentralized applications.
        </p>

        <div className="hidden sm:flex">
          <button className="w-44 h-12 mt-14 mb-4 px-4 bg-[#2BFFB1] flex items-center justify-between rounded-xl">
            <a href='https://fragments.gitbook.io/intro/xstream/what-is-xstream' target="_blank" rel="noreferrer" className="text-lg text-[#000000] font-medium">See Docs</a>
            <BsArrowUpRight className="text-[#000000] font-medium text-lg" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Xstream