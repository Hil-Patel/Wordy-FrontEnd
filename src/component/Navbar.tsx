import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className='flex bg-blue-100 px-4 py-2'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt="Logo of Wordy" className='h-8'/>
        <p className='text-xl font-bold'>Wordy</p>
      </div>
    </div>
  )
}

export default Navbar
