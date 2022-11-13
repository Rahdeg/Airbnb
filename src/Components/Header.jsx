import React from 'react'
import Logo from '../assets/Group.png'

const Header = () => {
  return (
    <div className=' flex flex-col md:flex-row  gap-6 items-center justify-between m-6'>
    <div className=' items-center justify-center'>
    <a href='/'>
    <img src={Logo} alt='logo'/>
    </a>
    </div>
    <div className=' flex items-center justify-center gap-8'>
    <a href='/' className=' text-cartBg'>Home</a>
    <a href='/place' className=' text-cartBg'>Place to stay</a>
    <a href='#nft' className=' text-cartBg'>NFTs</a>
    <a href='#community' className=' text-cartBg'>Community</a>
    </div>
    <div className=' items-center justify-center'>
    <button className=' bg-cardOverlay rounded-md m-1 p-2 text-white text-sm w-150 h-80'>
    Connect wallet
    </button>
    </div>
    </div>
  )
}

export default Header