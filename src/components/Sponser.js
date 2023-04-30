import React from 'react'
import Connext from '../assests/connext.png'
import Coinshift from '../assests/coinshift.png'
import Superfluid from '../assests/superfluid.png'
import Person1 from '../assests/person1.png'
import Person2 from '../assests/person2.png'
import Person3 from '../assests/person3.png'
import Card from './Card'

function Sponser() {
  return (
    <div className='w-[90%] relative mx-auto text-[#FFFFFF] leading-8 tracking-wide '>
         <div className='mt-20 flex space-x-2'>
            <h1 className='font-black text-3xl mx-auto  sm:text-5xl h-2/5 '>
                The Resonated Few
            </h1>
            <div className='hidden sm:flex space-x-8 lg:space-x-4 w-3/5 h-14'>
                <img src={Connext} className='w-full'></img>
                <img src={Coinshift}></img>
                <img src={Superfluid}></img>
            </div>
         </div>

         < div className='sm:p-2 space-x-8 sm:space-x-0 mt-8 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide'>
         <div>
         <Card src={Person1} name="Arjun" company="Connext" quote={`“Since integrating Autopay into our dApp, managing subscriptions and payouts has become a breeze. Our users love the seamless experience, and we couldn't be happier with the results”` }/>
        </div>
        <div>
          <Card src={Person2} name="Srikar" company="Coinshift" quote={`“Since integrating Autopay into our dApp, managing subscriptions and payouts has become a breeze. Our users love the seamless experience, and we couldn't be happier with the results”` }/>
        </div>
        <div>
          <Card src={Person3} name="Fran" company="Superfluid" quote={`“Since integrating Autopay into our dApp, managing subscriptions and payouts has become a breeze. Our users love the seamless experience, and we couldn't be happier with the results”`}/>
        </div>
        
         </div>

    </div>
  )
}

export default Sponser