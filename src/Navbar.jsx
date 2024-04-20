import React from 'react'

export default function Navbar() {
  return (
    <div className='Navbar'>
        <div className='md:flex justify-between  sm:px-20 px-0'>
          <div className='md:flex flex-rows sm:font-medium  sm:text-lg text-sm leading-6 cpaitalize sans-serif'>
              <h1 className='font-bold text-2xl'>GPT-3</h1>
              <a href="">Home</a>
              <a href="">What is GPT3?</a>
              <a href="">Open AI</a>
              <a href="">Case Studies</a>
              <a href="">Library</a>
          </div>
          <div className='font-medium text-lg leading-6 cpaitalize sans-serif'>
              <a href="">Sign in</a>
              <a className='bg-red-600 rounded-lg p-2 px-4' href="">Sign Up</a>
          </div>
        </div>
    </div>
  )
}
