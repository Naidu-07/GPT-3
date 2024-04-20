import React from 'react'
import img1 from '../src/assets/grid1.png'
import img2 from '../src/assets/grid2.png'
import img3 from '../src/assets/grid3.png'
import img4 from '../src/assets/grid4.png'
import img5 from '../src/assets/grid5.png'

export default function Grid() {
  return (
    <div>
        <div className='py-20'>
            <p className='content sm:text-5xl text-3xl'>A lot is happening,<br/> We are blogging about it.</p>
        </div>
        <div className='sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-8 flex-rows'>
        <div className='gridd col-span-1 row-span-2 gap-2'>
            <img className='w-full h-[50%] object-cover' src={img1}/>
            <p>Sep 26, 2021</p>
            <p className='text-2xl font-bold'>GPT-3 and Open AI is<br/> the future. Let us <br/> exlore how it is?</p>
            <p className='font-lg text-sm mt-60 '>Read Full Article</p>
        </div>
        <div className='gridd'>
            <img src={img2}/>
            <p>Sep 26, 2021</p>
            <p className='text-2xl font-bold pb-20'>GPT-3 and Open AI is<br/> the future. Let us <br/> exlore how it is?</p>
            <p className='font-lg text-sm'>Read Full Article</p>
        </div>
        <div className='gridd'>
            <img src={img3}/>
            <p>Sep 26, 2021</p>
            <p className='text-2xl font-bold pb-20'>GPT-3 and Open AI is<br/> the future. Let us <br/> exlore how it is?</p>
            <p className='font-lg text-sm'>Read Full Article</p>
        </div>
        <div  className='gridd'>
            <img src={img4}/>
            <p>Sep 26, 2021</p>
            <p className='text-2xl font-bold pb-20'>GPT-3 and Open AI is<br/> the future. Let us <br/> exlore how it is?</p>
            <p className='font-lg text-sm'>Read Full Article</p>
        </div>
        <div className='gridd'>
            <img src={img5}/>
            <p>Sep 26, 2021</p>
            <p className='text-2xl font-bold pb-20'>GPT-3 and Open AI is<br/> the future. Let us <br/> exlore how it is?</p>
            <p className='font-lg text-sm'>Read Full Article</p>
        </div>
        </div>
    </div>
  )
}
