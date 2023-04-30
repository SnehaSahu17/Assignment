import React from "react";
import SecTwo from "../assests/SecTwo.png";
import Stars from "../assests/Stars.png";

function SectionTwo() {
  return (
    <div className=" max-w-7xl px-8 mx-auto text-[#FFFFFF] mt-10 sm:mt-44">
      <div className="flex">
        <div>
          <p className="font-black text-2xl sm:text-5xl">Why Fragments?</p>
        </div>
        <div className="w-[38%]  -mt-5 sm:hidden">
          <img src={Stars}></img>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row -mt-4 sm:mt-14 justify-between">
        <div className="flex flex-col sm:w-[45%]">
          <h1 className="font-black text-xl sm:text-4xl ">Composable</h1>
          <p className="mt-4 mb-8 sm:mt-10 text-[#838383] font-normal text-base sm:text-xl sm:leading-8">
            We believe in the power of different decentralized applications
            (dApps) and protocols to seamlessly interact and work together to
            create new, more complex functionalities. This feature allows
            developers to build and combine existing components or building
            blocks to create new and innovative solutions without having to
            reinvent the wheel. Composability leads to greater efficiency,
            interoperability, and overall growth of the blockchain ecosystem by
            fostering collaboration and innovation.
          </p>
        </div>
        <div className="flex flex-col sm:w-[45%]">
          <h1 className="font-black text-xl sm:text-4xl ">Trustless</h1>
          <p className="mt-4 mb-8 sm:mt-10 text-[#838383] font-normal text-base sm:text-xl sm:leading-8">
            We promote a decentralized environment where participants don't need
            to rely on a central authority or trust any single party to validate
            transactions or maintain the network's security. Instead, trust is
            achieved through cryptography, consensus algorithms, and smart
            contracts, ensuring that the system operates transparently and
            securely without the need for intermediaries. Trustless systems are
            a core feature of blockchain technology, as they eliminate single
            points of failure and reduce the risk of fraud, censorship, and
            manipulation.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mt-0 sm:mt-14 space-x-44 ">
        <div className="flex flex-col sm:w-[45%]">
          <h1 className="font-black text-xl sm:text-4xl ">Chain Agnostic</h1>
          <p className="mt-4 mb-8 sm:mt-10 text-[#838383] font-normal text-base sm:text-xl sm:leading-8">
            We advocate in the ability of a blockchain solution or middleware to
            work with multiple blockchain networks, regardless of their
            underlying protocols or consensus mechanisms. A chain-agnostic
            solution is designed to be adaptable and flexible, allowing for
            seamless integration with various blockchains without requiring
            significant modifications or customization. This feature is
            particularly important for cross-chain interoperability, as it
            enables the creation of applications and services that can work
            across different blockchain networks, fostering a more
            interconnected and versatile ecosystem.
          </p>
        </div>
        <div className="sm:flex sm:flex-col hidden">
          <img src={SecTwo} className="w-[2/3] "></img>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
