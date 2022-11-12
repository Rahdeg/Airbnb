import React from 'react'
import Logo from '../assets/Group.png'

const Header = () => {
  return (
    <div className=' flex flex-col md:flex-row  gap-6 items-center justify-between m-6'>
    <div className=' items-center justify-center'>
    <a href='#j'>
    <img src={Logo} alt='logo'/>
    </a>
    </div>
    <div className=' flex items-center justify-center gap-8'>
    <a href='#Home'>Home</a>
    <a href='#Home'>Play to stay</a>
    <a href='#Home'>NFTs</a>
    <a href='#Home'>Community</a>
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