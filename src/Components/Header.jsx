import React from 'react'
import Logo from '../assets/Group.png'
import {useStateContext} from '../context/ContextProvider'


const Header = () => {
  const {setthemesettings}= useStateContext();
  return (
    <div className=' flex flex-col md:flex-row lg:gap-64 items-center gap-6 justify-around m-8 mb-16'>
    <div className=' items-center justify-center'>
    <a href='/'>
    <img src={Logo} alt='logo'/>
    </a>
    </div>
    <div className=' flex items-center justify-center gap-4 lg:gap-8'>
    <a href='/' className=' text-cartBg '>Home</a>
    <a href='/place' className=' text-cartBg '>Place to stay</a>
    <a href='#nft' className=' text-cartBg'>NFTs</a>
    <a href='#community' className=' text-cartBg'>Community</a>
    </div>
    <div className=' items-center justify-center'>
    <button className=' bg-cardOverlay rounded-md m-1 p-2 text-white text-sm w-150 h-80'
    onClick={()=>{setthemesettings(true)}}
    >
    Connect wallet
    </button>
    </div>
    </div>
  )
}

export default Header