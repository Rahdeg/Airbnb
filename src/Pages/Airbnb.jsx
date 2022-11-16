import React from 'react';
import Side from '../assets/Group 4028.png';
import IMG1 from '../assets/Group 59536.png';
import IMG2 from '../assets/Group 4038.png';
import IMG3 from '../assets/logo (1).png'
import {Menu, About} from '../Components'

const Airbnb = () => {
  return (
    <div className='flex flex-col  '>
    <div className='flex flex-col  md:flex-row justify-around w-[350px] md:w-full '>
    <div className=' flex flex-col  ml-5 lg:ml-0 justify-center w-full md:w-646 gap-4'>
    <div>
    <h2 className=' font-bold text-4xl md:text-5xl text-cartBg '> Rent a <span className=' text-cardOverlay'>Place</span> away from <br/> </h2>
    <h2 className='font-bold text-4xl md:text-5xl text-cartBg   mt-4'><span className=' text-cardOverlay'>Home</span> in the <span className=' text-cardOverlay'>Metaverse</span></h2>
    </div>
    <p className='text-left text-lg font-medium mt-8 text-cartBg item-center '> we provide you access to luxury and affordable houses <br/>in the metaverse, get a chance to turn your<br/> imagination to reality at your comfort zone</p>
    <div className='flex md:w-full w-full mt-20 outline outline-houtlineColor rounded-md items-center justify-between'>
    <input type='text' placeholder='search for location' className='h-80  p-2 outline-none '/>
    <button className=' bg-cardOverlay rounded-r-md   p-2 text-white text-sm md:w-150 w-[350px] h-80  md:h-full'>
    Search
    </button>
    </div>
    </div>
    <div className='mt-10 md:mt-0 ml-5 '>
    <img src={Side} alt='side' className=''/>
    </div>
    </div>
    <div className=' w-full h-full md:flex-row p-2 mt-12 flex flex-col items-center justify-around bg-cardOverlay'>
   <div className='flex items-center justify-center'>
   <img src={IMG1} alt='' className=''/>
   <p className='text-white text-xl font-extrabold'>MBToken</p>
   </div>
   <div className='flex items-center justify-center'>
   <img src={IMG2} alt='' className=''/>
   <p className='text-white text-xl font-extrabold m-1'>METAMASK</p>
   </div>
   <div className='flex items-center justify-center'>
   <img src={IMG3} alt='' className=''/>
   <p className=' text-white text-xl font-extrabold m-1'>OpenSea</p>
   </div>
    </div>
    <Menu/>
    <About/>
    </div>
  )
}

export default Airbnb