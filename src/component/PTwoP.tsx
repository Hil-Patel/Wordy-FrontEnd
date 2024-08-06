import React, { useRef, useState } from 'react'
import TwoPlayer from "../assets/1v1.png"
import PTwoPDropdown from './PTwoPDropdown'

const PTwoP = () => {
  
  const [dropdownVisiblity,setDropdownVisiblity]=useState(false);
  return (
    <div
    onMouseEnter={()=>setDropdownVisiblity(true)}
    onMouseLeave={()=>setDropdownVisiblity(false)}
    className='w-20 h-20 cursor-not-allowed p-1 hover:shadow-md border border-gray-300 dark:border-gray-500 flex justify-center items-center bg-gray-100 dark:bg-gray-600 transform transition-transform duration-200 hover:scale-110'>
        <img src={TwoPlayer} alt=""  />
        <PTwoPDropdown  visible={dropdownVisiblity}/>
    </div>
  )
}

export default PTwoP
