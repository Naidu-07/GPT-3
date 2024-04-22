import React from 'react'
import img1 from '../src/assets/Google.png'
import img2 from '../src/assets/Slack.png'
import img3 from '../src/assets/Att.png'
import img4 from '../src/assets/Shop.png'

export default function Container2() {
  return (
    <div className='py-10'>
        <div className='md:flex flex-rows justify-center  h-full w-full object-cover gap-24 '>
            <img src={img1}/>
            <img src={img2}/>
            <img src={img3}/>
            <img src={img4}/>
        </div>
    </div>
  )
}
