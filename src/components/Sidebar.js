import React, { useState } from 'react'

import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs"

import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
    const [nav, setNav] = useState(false);


    return (
        <div className="absolute left-0 right-0 bottom-0 top-32 p-4 bg-[#141414] w-full h-[90vh]">
            <div class="flex flex-col h-[82vh] w-full  text-3xl relative border border-1 border-[#393939] rounded-[2rem]">
                <a href='https://www.autopay.finance/' target="_blank" rel="noreferrer" className=" font-medium leading-relaxed  text-white border-b-2 border-[#393939] px-8 py-6 cursor-pointer">Autopay</a>

                <a href='https://autopay-xstream.vercel.app/' target="_blank" rel="noreferrer" className=" font-medium leading-relaxed text-white   border-b-2 border-[#393939] px-8 py-6 cursor-pointer">XStream</a>

                <a href='https://eth-tokyo.vercel.app/' target="_blank" rel="noreferrer" className=" font-medium leading-relaxed text-white  border-b-2 border-[#393939] px-8 py-6 cursor-pointer">SwapX</a>

                <a href='https://fragments.gitbook.io/intro/' target="_blank" rel="noreferrer" className=" font-medium leading-relaxed text-white  border-b-2 border-[#393939] px-8 py-6 cursor-pointer">API Docs</a>

                <div class="inline-flex mt-auto w-full  items-center justify-center px-4 py-3 bg-green-400 rounded-lg">
                    <p class="flex-1  font-medium leading-normal text-center">Schedule Demo</p>
                    <BsArrowUpRight className='w-6 h-6' />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;




