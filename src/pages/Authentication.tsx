import React from 'react'
import Navbar from '../component/Navbar'
import axios from "axios"
import {useFormik} from "formik"

const Authentication = ({page}) => {
  return (
    <div className='flex flex-col h-screen dark:bg-gray-700 text-black dark:text-white'>
      <Navbar/>
      <div className='w-full flex-grow flex justify-center items-center'>
        <div className='w-2/3 h-4/5 bg-blue-100 dark:bg-gray-800'>a</div>
      </div>
    </div>
  )
}

export default Authentication
