import React from 'react'
import IMG from '../assets/Frame 59546.png'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-around bg-cardOverlay h-774 ' id='nft'>
    <div className='flex flex-col items-start justify-center gap-12 ml-5'>
    <h1 className=' text-4xl text-primary font-bold md:text-xl lg:text-4xl'>Metabnb NFTs</h1>
    <p className=' text-sm text-primary leading-8 '>Discover our NFT gift cards collection loyal<br/>customers get amazing gift cards which are<br/> traded as NFTs. These NFTs gives our customer<br/> access to loads of exclusive services</p>
    <button className=' text-cardOverlay bg-primary rounded-md m-1 p-2  text-base w-150 h-80'>
    learn more
    </button>
    </div>
    <div className=' h-575 p-7'>
    <img src={IMG} alt=''/>
    </div>
    </div>
  )
}

export default About