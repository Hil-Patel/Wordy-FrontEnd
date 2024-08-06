import React from 'react'
import OnePlayer from "../assets/1 Player.png"

const SinglePlayer = () => {
  return (
    <div className='w-20 p-1  hover:shadow-md border border-gray-300 dark:border-gray-500 h-20 flex justify-center dark:bg-gray-600 items-center bg-gray-100 transform transition-transform duration-200 hover:scale-110'>
        <img src={OnePlayer} alt=""  />
    </div>
  )
}

export default SinglePlayer
