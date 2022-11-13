import React from 'react';
import IMG1 from '../assets/Group.svg';
import IMG2 from '../assets/facebook-263-721950.png';
import IMG3 from '../assets/instagram-216-721958.png';
import IMG4 from '../assets/twitter-241-721979.png';
import IMG5 from '../assets/Group 1355.png'

const Footer = () => {
  return (
    <div className=' flex  flex-col items-center md:flex-row justify-around align-top h-322  bg-rowGb' id='community'>
    <div className='flex flex-col gap-7 mt-7'>
    <div className=''>
    <img src={IMG1} alt=''/>
    </div>
    <div className='flex items-center justify-between mt-10'>
    <img src={IMG2} alt=''/>
    <img src={IMG3} alt=''/>
    <img src={IMG4} alt=''/>
    </div>
    <div className='mt-2'>
    <img src={IMG5} alt=''/>
    </div>
    </div>
    <div className='flex items-center justify-between md:gap-5 gap-7 lg:gap-40'>
    <div className='flex flex-col items-start gap-3'>
    <h1 className=' font-bold text-xl text-primary'>Community </h1>
    <p className=' text-sm text-primary'>NFT</p>
    <p className=' text-sm text-primary'>Tokens</p>
    <p className=' text-sm text-primary'>Landlords</p>
    <p className=' text-sm text-primary'>Discord</p>
    
    </div>
    <div className='flex flex-col items-start gap-3'>
    <h1 className=' font-bold text-xl text-primary'>Places </h1>
    <p className=' text-sm text-primary'>Castle</p>
    <p className=' text-sm text-primary'>Farms</p>
    <p className=' text-sm text-primary'>Beach</p>
    <p className=' text-sm text-primary'>Lear more</p>
    </div>
    <div className='flex flex-col items-start gap-3'>
    <h1 className=' font-bold text-xl text-primary'>About us </h1>
    <p className=' text-sm text-primary'>Road map</p>
    <p className=' text-sm text-primary'>Creators</p>
    <p className=' text-sm text-primary'>carear</p>
    <p className=' text-sm text-primary'>Contact us</p>
    </div>
    </div>
    </div>
  )
}

export default Footer