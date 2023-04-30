import React from 'react' 
import foot from '../assests/footer.png'
import LogoMob from "../assests/LogoMob.png"
import { BsArrowUpRight } from "react-icons/bs";

function footer() {
  return (
   
    // <div className=" sm:w-[90%] mt-10 h-[500px] relative mx-auto leading-8 tracking-wide ">
    //     <img src={foot} className='w-full h-full'></img>
       
    //     <div className='absolute top-[15%] h-full flex flex-col sm:flex-row text-[#FFFFFF]  w-full'>
    //                 <div className='px-16 flex flex-col justify-start items-start'>
    //                 <h1 className='font-black w-72 sm:w-full text-[#D9D9D9] text-center text-3xl sm:text-5xl mx-auto'>Let’s setup a chat?</h1>
                    
    //                 <button className='w-44 h-12 mt-10 mb-4 px-4 mx-auto bg-[#2BFFB1] flex items-center justify-between rounded-xl'>
    //            <span className='sm:text-lg text-[#000000] font-medium text-sm'>Schedule Meeting</span>
    //            <BsArrowUpRight className='text-[#000000] font-medium text-lg'/>
    //      </button>
    //                 </div>
    //      <div className='items-end w-1/2 mt-24'><img src={LogoMob} className='w-28 ml-[70%]'></img></div>
        
    //      </div>
    //     <div className='w-full '>
    //     <p className='font-normal text-xs px-16 sm:text-xl text-[#7A7A7A] absolute bottom-5 sm:bottom-20   sm:px-20 '>
    //    © 2023 Fragments Inc. All rights reserved.
    //    </p>
    //     </div>

     
    //    </div>
    <div className=" sm:w-[90%] mt-10 h-[500px] relative mx-auto leading-8 tracking-wide ">
      <img src={foot} className='w-full h-full'></img>

      <div className='absolute top-[15%] h-full flex flex-col sm:flex-row justify-stretch text-[#FFFFFF]  w-full'>
        <div className='w-1/2  flex flex-col justify-start items-start px-16'>
        <h1 className='font-black w-72 sm:w-full text-[#D9D9D9] text-center text-3xl sm:text-5xl mx-auto'>Let’s setup a chat?</h1>
        <div className='px-12 '>
        <button className='w-44 sm:w-56 h-12 mt-10 p-4 mx-auto bg-[#2BFFB1] flex items-center justify-between rounded-xl'>
               <span className='sm:text-lg text-[#000000] font-medium text-xs'>Schedule Meeting</span>
              <BsArrowUpRight className='text-[#000000] font-medium text-lg'/>
        </button>
        </div>

        </div>
        <div className=' w-1/2 mt-20 sm:mt-0'><img src={LogoMob} className='w-28 ml-[80%]'></img></div>

      </div>
      <div className='w-full px-20 sm:px-8 '>
         <p className='font-normal text-xs sm:text-xl text-[#7A7A7A] absolute bottom-5 sm:bottom-20  mx-auto sm:px-20 '>
       © 2023 Fragments Inc. All rights reserved.
      </p>
        </div>

    </div>
               
  )
}

export default footer