import React from 'react' 
import foot from '../assests/footer.png'
import LogoMob from "../assests/LogoMob.png"

function footer() {
  return (
    <div className='max-w-7xl mt-20 mx-auto relative  ' >
        <img src={foot} className='w-full h-full'></img>
        <div className='absolute w-full h-fit top-20 flex mt-10 justify-stretch  items-center'>
            
            <div className='flex flex-col text-left px-20 w-1/2' >
            <span className='text-[#FFFFFF] text-5xl   font-black  '>Let’s setup a chat?</span>
            <button className='w-44 h-12 bg-[#2BFFB1] rounded-xl mt-8 '>
                   <span className='text-lg text-[#000000] font-medium'>Let's Chat</span>
             </button>
            </div>

             <div className='items-end w-1/2'><img src={LogoMob} className='w-28 ml-[70%]'></img></div>
        </div>

        <p className='font-normal text-xl text-[#7A7A7A] absolute bottom-10 px-20 '>
        © 2023 Fragments Inc. All rights reserved.
        </p>
    </div>
  )
}

export default footer