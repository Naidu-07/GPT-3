import React from 'react'

export default function Navbar() {
  return (
    <div className='Navbar'>
        <div className='flex justify-between px-20'>
          <div className=' flex font-medium text-lg leading-6 cpaitalize sans-serif'>
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
