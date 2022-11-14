import React from 'react'
import {useStateContext} from '../context/ContextProvider'
import IMG1 from '../assets/x.png';
import IMG2 from '../assets/Down Chevron.png'
import {Walett} from '../data/data'

const Cwp = () => {
  const {setthemesettings}= useStateContext();
  return (
    <div className=' bg-card w-screen fixed  inset-0 overflow-y-auto'>
<div
	class="relative top-20 mx-auto  border md:w-[600px] shadow-lg rounded-2xl bg-white "
>
	<div class="mt-1 flex flex-col m-3 p-2">
	<div className='flex items-center justify-between m-2 p-2 '>
  <p className=' text-xl font-bold text-textColor'>Connect Walett</p>
  <img src={IMG1} alt='' onClick={()=>{setthemesettings(false)}} className=' cursor-pointer'/>
  </div>
  <p className=' border-t-2  border-lineColor p-5 items-start ' >Choose your preferred walett:</p>
  {
    Walett && Walett.map((walett,idx)=>(
      <button className=' border border-NumBg rounded-md p-3 mb-5 text-white text-sm w-full h-[68px] flex items-center justify-between'
  style={{backgroundColor:walett.btnBg}}
  key={idx}
  >
    <div className='flex items-center justify-between gap-4'>
    <img src={walett.imgsrc} alt=''/>
    <p className=' text-lg font-bold text-textColor'>{walett.name} </p>
    </div>
    <div>
    <img src={IMG2} alt=''/>
    </div>
    </button>
    ))
  }
	</div>
</div>
    
    
    </div>
  )
}

export default Cwp