import React from 'react'
import img1 from '../src/assets/heroimg.png'
import img2 from '../src/assets/people.png'

export default function Container() {
  return (
    <div className='mt-20'>
        <div className='flex justify-between'>
            <div>
                <p className='content text-7xl font-semibold'>Let's Build Something<br/> amazing with GPT-3 OpenAI</p>
                <p className='text-lg leading-8 text-blue-300'>Yet bed any for travelling assistance indulgence<br/> unpleasing. Not thoughts all exercise blessing. Indulgence<br/> way everything joy alteration boisterous the attachment.<br/> Party we years to order allow asked of.</p>
                
                <div className='py-6'>
                    <input type="text" placeholder='Your Email address' className='p-2 px-20 py-4 bg-cyan-950 rounded-l-md text-lg'/>
                    <button className='bg-orange-700 p-2 py-4 rounded-r-md px-4 text-lg font-semibold focus:none'>Get Started</button>
                    <div className='flex py-10'>
                    <img src={img2}/>
                    <p className='text-xs'>1,600 people requested access a visit in last 24 hours</p>
            </div>
                </div>
            </div>
            <div className='h-full w-full object-cover'>
                <img src={img1}/>
            </div>
        </div>
    </div>
  )
}
