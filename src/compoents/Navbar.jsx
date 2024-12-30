import React from 'react'

const Navbar = () => {
  return (
    <div className='flex border border-stone-800 h-fit bg-gray-800 w=-full flex-row justify-between px-2.5 text-[7px] text-white'>
      <div>
        <div className='border border-black '>
            Home
        </div>
      </div>
      <div className='flex border border-black '>
        <div>
            About
        </div>
        <div className='px-2.5 border border-black'>
            Documentation
        </div>
      </div>
    </div>
  )
}

export default Navbar
