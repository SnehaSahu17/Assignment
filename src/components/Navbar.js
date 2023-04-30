import React from 'react'
import Logo from '../assests/Logo.png'
import LogoMob from "../assests/LogoMob.png"
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-scroll";
import Sidebar from './Sidebar';

const links = [
    {
        id: 1,
        link: 'Autopay',
    },
    {
        id: 2,
        link: 'Xstream',
    },
    {
        id: 3,
        link: 'Swapx',
    },
    {
        id: 4,
        link: 'API Docs'
    }

];

function Navbar() {
    const [nav, setNav] = useState(false);
    return (
        <div className='max-w-7xl h-20 bg-[#1A1A1A] border border-1 border-[#393939] rounded-full mx-auto '>
            <div className='w-full h-full p-7 flex justify-between items-center '>
                <div>
                    <a href='\' className='hidden sm:flex'><img src="https://res.cloudinary.com/dkqxnquga/image/upload/v1682841837/Logo_maweeg.png" width={160} height={100}></img></a>
                    <a href='\' className='block sm:hidden'><img src="https://res.cloudinary.com/dkqxnquga/image/upload/v1682841838/LogoMob_fazafo.png" width={50} height={50}></img></a>

                </div>
                <div className='text-[#838383]  text-lg font-medium space-x-20 hidden sm:flex'>
                    <a href='https://www.autopay.finance/' target="_blank" rel="noreferrer" className='hover:text-[#2BFFB1]'>
                        Autopay
                    </a>
                    <a href='https://autopay-xstream.vercel.app/' target="_blank" rel="noreferrer" className='hover:text-[#2BFFB1]'>
                        XStream
                    </a>
                    <a href='https://eth-tokyo.vercel.app/' target="_blank" rel="noreferrer" className='hover:text-[#2BFFB1]'>
                        SwapX
                    </a>
                </div>
                <div onClick={() => setNav(!nav)} className='cursor-pointer text-[#FFFFFF]  z-10 sm:hidden'>
                    {nav ?
                        <>
                            <FaTimes size={30} />
                            <Sidebar />
                        </>
                        :
                        <FaBars size={30} />}
                </div>
            </div>
        </div>
    )
}

export default Navbar