import React from 'react'

export default function Footer() {
  return (
        <div className='footer mt-20'>
            <div className='gridd py-10'>
            <div>
                <p className='content px-20 md:text-6xl text-3xl'>Do you want to step in to the future <br/><span className='sm:px-80'>before others</span></p>
                <div className='flex justify-center py-10'>
                    <button className='border-2 py-2 px-6'>Request Early Access</button>
                </div>
            </div>
            <div className='sm:flex flex-rows justify-between'>
            <div>
            <p className='text-4xl font-bold'>GPT-3</p>
            <p className='text-xs font-bold'>Crechterwoord K12 182 DK Alknjkcb</p>
            <p className='text-xs font-bold'>All Rights Reserved</p>
        </div>
        <div className='text-sm'>
            <p className='text-base font-bold' >Links</p>
            <p >Overons</p>
            <p >Social Media</p>
            <p >Counters</p>
            <p >Contact</p>
        </div>
        <div  className='text-sm'>
            <p className='text-base font-bold' >Company</p>
            <p >Terms & Conditions</p>
            <p >Privacy Policy</p>
            <p >Contact</p>
        </div>
        <div className='text-sm'>
            <p className='text-base font-bold' >Get in touch</p>
            <p >Crechterwoord K12 182 DK Alknjkcb</p>
            <p >085-132567</p>
            <p>info@payme.net</p>
        </div>
            </div>
            <div className='flex justify-center'>
                <p>Copyright Ⓒ 2022 broBank. All Rights Reserved.</p>
            </div>
        </div>
        </div>
  )
}
