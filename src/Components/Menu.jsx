import React from 'react'
import FRAME1 from '../assets/Frame 151 (1).png';
import FRAME2 from '../assets/Frame 59528.png';

const Menu = () => {
  return (
    <div className='flex flex-col'>
    <div className='flex items-center justify-center'>
    <p className=' text-3xl text-center font-bold tracking-widest'>Inspiration for your next adventure</p>
    </div>
    <div class="max-w-sm overflow-hidden rounded-3xl shadow-md">
  <img class="w-full  p-5" src={FRAME1} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="flex items-center justify-between ">
    <p className=' text-cartBg'>Desert King</p>
    <p className=' font-bold'>1MBT per night</p>
    </div>
    <div class="flex items-center justify-between mt-3 ">
    <p className=' text-cartBg'>2345km away</p>
    <p className=' text-cartBg'>available for 2weeks stay</p>
    </div>
    <div class="flex items-center justify-start ">
    <img src={FRAME2} alt='' className=' text-base font-medium mt-3'/>
    
    </div>
    
    
  </div>
</div>
    </div>
  )
}

export default Menu