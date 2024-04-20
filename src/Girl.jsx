import React from 'react'
import img1 from '../src/assets/ammay.png'

export default function Girl() {
  return (
    <div className='mt-40'>
        <div className='sm:flex flex-rows'>
        <div className='h-full w-full'>
          <img className='h-full w-full object-cover' src={img1}/>  
        </div>
        <div  className='sm:mt-80'>
          <p className='text-sky-300 text-lg font-semibold'>Request Early Access to Get Started</p>
          <p className='content text-4xl '>The possibilities are<br/> beyond your imagination</p>
          <p className='text-sky-600 leading-6'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p className='text-orange-400 text-lg py-10'>Request Early Access to Get Started</p>
        </div>
        </div>
    </div>
  )
}
