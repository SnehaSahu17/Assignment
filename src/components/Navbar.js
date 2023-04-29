import React from 'react'
import Logo from '../assests/Logo.png'
import LogoMob from "../assests/LogoMob.png"
import { useState } from 'react';
import {FaBars,FaTimes} from "react-icons/fa";

import { BsArrowUpRight } from "react-icons/bs";
import {Link} from "react-scroll";

const links = [
    {
        id:1,
        link:'Autopay',
    },
    {
        id:2,
        link:'Xstream',
    },
    {
        id:3,
        link:'Swapx',
    },
    {
        id:4,
        link:'API Docs'
    }
    
];

function Navbar() {
    const [nav,setNav] = useState(false);
  return (
   <div className='max-w-7xl h-20 bg-[#1A1A1A] border border-1 border-[#393939] rounded-full mx-auto '>
    <div className='w-full h-full p-7 flex justify-between items-center '>
        <div>
        <a href='\' className='hidden sm:flex'><img src={Logo} width={160} height={100}></img></a>
            <a href='\' className='block sm:hidden'><img src={LogoMob} width={50} height={50}></img></a>
            
        </div>
        <div className='text-[#838383] text-lg font-medium space-x-20 hidden sm:flex'>
            <a href='\'>
                Autopay
            </a>
            <a href='\'>
                XStream
            </a>
            <a href='\'>
                SwapX
            </a>
        </div>
        <div onClick={() => setNav(!nav)} className='cursor-pointer text-[#FFFFFF]  z-10 sm:hidden'>
               {nav ?  <FaTimes size={30}/> :  <FaBars size={30}/>}
         </div>

         {nav && (
             <ul className='flex flex-col justify-center items-center absolute w-[90%] left-5 h-fit top-[30%]  bg-[#1A1A1A] border border-[#393939] rounded-2xl'>
             
             {links.map(({id,link}) =>(
                <div className='w-full border-b-2 border-[#393939] last:border-b-0 '>
                 <li key={id} className='px-4 py-6 cursor-pointer text-lg font-medium text-[#FFFFFF]'>
                    <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                 </li>
                 </div>
             ))}

             <button className='w-[90%] h-12 mt-14 mb-4 px-4 bg-[#2BFFB1] flex items-center justify-between'>
                   <span className='text-lg text-[#000000] font-medium'>Scheduled Demo</span>
                   <BsArrowUpRight className='text-[#000000] font-medium text-lg'/>
             </button>
             
            </ul>
        )}
    </div>
    
   </div>
  )
}

export default Navbar