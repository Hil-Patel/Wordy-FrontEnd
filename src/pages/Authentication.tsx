import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import axios from "axios"
import {useFormik} from "formik"
import AuthenticationLogin from '../component/AuthenticationLogin'
import image from "../assets/wordy.png"
import AuthenticationSignUp from '../component/AuthenticationSignUp'

const Authentication = ({page}) => {
  const [openPage,setOpenPage]=useState(page)
  console.log(openPage);
  
  return (
    <div className='flex flex-col h-screen dark:bg-gray-700 text-black dark:text-white transition-colors duration-500'>
      <Navbar/>
      <div className='w-full flex-grow flex justify-center items-center'>
        <div className='w-2/3 h-4/5 bg-blue-100 dark:bg-gray-800 flex relative'><AuthenticationLogin setOpenPage={setOpenPage}/><AuthenticationSignUp setOpenPage={setOpenPage}/><img src={image} alt="" className={`absolute w-1/2 h-full ${openPage === "Login" ? "left-1/2" : "left-0"} transition-all duration-300 ease-in-out`}
        /></div>
        
      </div>
    </div>
  )
}

export default Authentication
