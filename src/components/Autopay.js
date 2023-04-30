import React from "react";
import Back from "../assests/Background.png";
import Auto from "../assests/Autopay.png";
import Stars from "../assests/Stars.png";
import { BsArrowUpRight } from "react-icons/bs";
import AutoMob from "../assests/AutopayMob.png";

function Autopay() {
  return (
    <div className="w-[390px] sm:w-[90%]  h-[983px] md:h-[800px] relative mt-10 sm:mt-36  mx-auto text-[#FFFFFF] leading-8 tracking-wide ">
      <img src={Back} className="w-[656.01px] mx-auto hidden sm:flex"></img>
      <div className="absolute  top-0 ">
        <div className="w-full relative  ">
          <img src={Auto} className="hidden sm:flex"></img>
          <img src={AutoMob} className="sm:hidden"></img>
          <div className="absolute top-6 flex-col px-4 sm:flex-row sm:top-[35%] sm:px-32 flex justify-start items-start sm:items-center">
            <h1 className="font-black text-4xl sm:text-5xl  ">Autopay</h1>
            <span className="font-medium  text-sm sm:text-xl w-full sm:w-1/2 mt-5 sm:mt-0 sm:ml-24">
              the go-to solution for developers seeking a streamlined and
              accessible crypto integration.
            </span>
            <div className=" sm:hidden bg-gradient-to-r from-[#285F48] to-[#285F48] w-full h-[1px] rounded-lg mt-4"></div>

            <div className=" mt-8 sm:hidden ">
              <p className="font-normal text-xl max-w-xs">
                Autopay makes it easy for businesses of all sizes to incorporate
                crypto-based solutions into their operations. With our
                user-friendly products and APIs, developers can effortlessly
                integrate features like crypto subscriptions, dollar-cost
                averaging (DCA) strategies, and automated payouts into their
                dApps, enhancing the overall user experience.
              </p>
            </div>
            
            <p className="font-normal text-xl mt-4  sm:text-[#838383]  sm:hidden ">
          Unlock the potential of recurring crypto transactions with Autopay,
          and simplify the process of managing subscriptions, implementing DCA
          strategies, and automating payouts for your dApp ecosystem. Embrace
          the future of decentralized applications with Autopay.
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
            Autopay makes it easy for businesses of all sizes to incorporate
            crypto-based solutions into their operations. With our user-friendly
            products and APIs, developers can effortlessly integrate features
            like crypto subscriptions, dollar-cost averaging (DCA) strategies,
            and automated payouts into their dApps, enhancing the overall user
            experience.
          </p>
          <img src={Stars} className="ml-28 "></img>
        </div>

        <p className="font-normal text-xl mt-20 w-2/3 text-[#838383] hidden sm:flex">
          Unlock the potential of recurring crypto transactions with Autopay,
          and simplify the process of managing subscriptions, implementing DCA
          strategies, and automating payouts for your dApp ecosystem. Embrace
          the future of decentralized applications with Autopay.
        </p>

        <div className="hidden sm:flex">
          <button className="w-44 h-12 mt-14 mb-4 px-4 bg-[#2BFFB1] flex items-center justify-between rounded-xl">
            <span className="text-lg text-[#000000] font-medium">See Docs</span>
            <BsArrowUpRight className="text-[#000000] font-medium text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Autopay;
