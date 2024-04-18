import React from 'react'

export default function Box() {
  return (
    <div>
        <div className='box flex justify-between py-4 px-4 rounded-xl'>
          <div>
            <p>Request Early Access to Get Started</p>
            <p className='font-bold text-xl'>Register Today & start exploring the endless possibilities.</p>
            </div>
            <div className='flex justify-center'>
            <button className='bg-black px-12  rounded-full text-lg font-semibold'>Get Started</button>
            </div>
        </div>
        
    </div>
  )
}