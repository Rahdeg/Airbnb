import React from 'react'
import {Rent} from '../data/data'
import FRAME2 from '../assets/Frame 59528.png'
import FRAME3 from '../assets/setting-5.png'

const Pts = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-5'>
    
    <div className="relative w-full lg:max-w-sm block lg:hidden m-3 p-3">
    <select className="w-full p-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none  focus:border-indigo-600">
      <option>Restaurant</option>
      <option>Cottage</option>
      <option>Castle</option>
      <option>Fastast City</option>
      <option>Beach</option>
      <option>Cabins</option>
      <option>Off-grid</option>
      <option>Farm</option>
      <option className="font-[700px]">Location</option>
      </select>
      </div>

    <div className=' hidden lg:flex lg:flex-row  gap-4 items-center justify-center lg:gap-8'>
    <a href='#res' className=' text-cartBg'>Resturant</a>
    <a href='#cottage' className=' text-cartBg'>Cottage</a>
    <a href='#castle'className=' text-cartBg'>Castle</a>
    <a href='#fan'className=' text-cartBg'>Fantast city</a>
    <a href='#bes'className=' text-cartBg'>Beach</a>
    <a href='#cab'className=' text-cartBg'>Cabins</a>
    <a href='#off'className=' text-cartBg'>Off-grid</a>
    <a href='#fam'className=' text-cartBg'>Farm</a>
    <a href='#fam' className=' outline outline-cartBg rounded-md m-1 p-2 text-white text-sm w-150 h-80 flex items-center justify-around'>
    <p className=' text-sm text-cartBg'>Location</p>
    <img src={FRAME3} alt=''/>
    </a>
    </div>
    <div className='grid grid-cols-1 gap-4 justify-between  m-5 p-5 md:m-4 md:p-4 md:grid-cols-2  lg:grid-cols-4'>
    {


      Rent && Rent.map((data,idx)=>(
       
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

export default Pts