import React from 'react'
import {Rent} from '../data/data'
import FRAME2 from '../assets/Frame 59528.png';

const Menu = () => {
  return (
    <div className='flex flex-col lg:m-6'>
    <div className='flex items-center justify-center'>
    <p className=' text-3xl text-center font-bold tracking-widest'>Inspiration for your next adventure</p>
    </div>
    <div className='grid grid-cols-1 gap-4 justify-between  m-5 p-5 md:m-4 md:p-4 md:grid-cols-2  lg:grid-cols-4'>
    {
      Rent && Rent.filter(datas=>
        datas.id < 9
      ).map((data,idx)=>(
       
        <div class=" overflow-hidden rounded-3xl shadow-md" key={idx}>
        <img class="w-full  p-5" src={data.imgsrc} alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
          <div class="flex items-center justify-between ">
          <p className=' text-cartBg'>{data.name}</p>
          <p className=' font-bold text-cartBg'>{data.amount}</p>
          </div>
          <div class="flex items-center justify-between mt-3 ">
          <p className=' text-cartBg'>{data.distance}</p>
          <p className=' text-cartBg'>{data.time}</p>
          </div>
          <div class="flex items-center justify-start ">
          <img src={FRAME2} alt='' className=' text-base font-medium mt-3'/>
          
          </div>
          
          
        </div>
      </div>
     
      ))
    }
    </div>
   
    </div>
  )
}

export default Menu