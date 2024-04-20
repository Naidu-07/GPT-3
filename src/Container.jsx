import React from 'react';
import img1 from '../src/assets/heroimg.png';
import img2 from '../src/assets/people.png';

export default function Container() {
  return (
    <div className='mt-20'>
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start px-4 lg:px-20'>
        <div className='lg:w-1/2'>
          <p className='content text-4xl lg:text-7xl font-semibold mb-4 lg:mb-8'>Let's Build Something amazing with GPT-3 OpenAI</p>
          <p className='text-base lg:text-lg leading-7 lg:leading-8 text-blue-300 mb-6 lg:mb-10'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <div className='flex flex-col lg:flex-row items-start lg:items-center'>
            <input type="text" placeholder='Your Email address' className='p-2 lg:p-4 px-6 lg:px-8 py-4 bg-cyan-950 rounded-l-md text-lg lg:text-xl mb-4 lg:mb-0'/>
            <button className='bg-orange-700 p-2 lg:p-4 px-6 lg:px-8 py-4 rounded-r-md text-lg lg:text-xl font-semibold focus:none'>Get Started</button>
          </div>
          <div className='flex items-center mt-6 lg:mt-10'>
            <img src={img2} alt="People Icon" className='w-6 lg:w-auto mr-2 lg:mr-4'/>
            <p className='text-xs lg:text-sm'>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className='lg:w-1/2 lg:ml-10'>
          <img src={img1} alt="Hero Image" className='w-full h-auto'/>
        </div>
      </div>
    </div>
  );
}
