import React from 'react'
import Logo from '../assets/Group.png'
import {useStateContext} from '../context/ContextProvider'
import {TiThMenuOutline} from 'react-icons/ti'
import {motion} from 'framer-motion'


const Header = () => {
  const {setthemesettings,ismenu, setIsmenu,themesettings}= useStateContext();
  return (
    <div className=''>
    <div className=' hidden lg:flex flex-col lg:flex-row lg:gap-30 items-center gap-6 justify-around m-8 mb-16'>
    <div className=' w-full lg:w-auto flex items-center justify-between'>
    <a href='/'>
    <img src={Logo} alt='logo'/>
    </a>
    </div>
    <div className=' hidden  lg:flex items-center justify-center gap-8'>
    <a href='/' className=' text-cartBg '>Home</a>
    <a href='/place' className=' text-cartBg '>Place to stay</a>
    <a href='#nft' className=' text-cartBg'>NFTs</a>
    <a href='#community' className=' text-cartBg'>Community</a>
    </div>
    <div className=' items-center justify-center mt-5 lg:mt-0'>
    <button className=' bg-cardOverlay rounded-md m-1 p-2 text-white text-sm w-150 h-80'
    onClick={()=>setthemesettings(!themesettings)}
    >
    Connect wallet
    </button>
    </div>
    </div>
     { /*mobile*/}
     <div className='flex flex-row  items-center gap-6 justify-around m-8 mb-16 lg:hidden'>
     <div className=' w-full  flex items-center'>
     <a href='/'>
     <img src={Logo} alt='logo'/>
     </a>
     </div>
     <div className='relative'>
     <TiThMenuOutline className='  font-semibold text-4xl'
     onClick={()=>setIsmenu(!ismenu)}/>
  {ismenu && (<motion.div 
   initial={{opacity:0,scale:0.6}}
   animate={{opacity:1,scale:1}}
   exit={{opacity:0,scale:0.6}}
   className='  relative w-screen bg-gray-50 shadow-xl  rounded-lg flex flex-col  top-5 right-0 m-3 p-3'> 
   <ul className='flex flex-col items-center justify-center'>
    <a href='/'> <li className=' text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-4'>Home</li></a>
     <a href='/place'><li className=' text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-4 hover:bg-slate-100'>Place to stay</li></a>
     <a href='/#nft'><li className=' text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-4 hover:bg-slate-100'>NFTs</li></a>
     <a href='/#community'><li className=' text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-4 hover:bg-slate-100'>Community</li></a>
     <div className=' items-center justify-center mt-5 lg:mt-0'>
    <button className=' bg-cardOverlay rounded-md m-1 p-2 text-white text-sm w-150 h-80'
    onClick={()=>setthemesettings(!themesettings)}
    >
    Connect wallet
    </button>
    </div>
   </ul>
 </motion.div> )}
   </div>
     </div>
    </div>
    
  )
}

export default Header