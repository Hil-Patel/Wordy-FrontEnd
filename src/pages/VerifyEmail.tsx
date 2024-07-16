import React, { useState } from "react";
import Navbar from "../component/Navbar";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import {postVerifyEmail}from "../ApiEndPoints/index.js"
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate =useNavigate();

  const handleSubmit=async()=>{
    setLoading(true);
    const res=await postVerifyEmail(otp)
    if(res.success){
        if(res.data.verified){
            toast.success(res.data.message)
            navigate("/authenticate")
        }
        else{
            toast.success(res.data.message)
        }

    }else{
        toast.error(res.message)
    }
    setLoading(false)
  }
  
  return (
    <div className="h-screen flex flex-col transition-colors duration-500 ">
      <Navbar />
      {loading ? (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <BeatLoader color="#ffffff" />
        </div>
      ) : null}
      <div className="flex flex-col flex-grow justify-center items-center bg-gray-100 dark:bg-gray-700 transition-colors duration-500">
        <div className="w-1/3 py-8 bg-blue-100 dark:bg-gray-800 rounded text-black dark:text-white flex flex-col gap-5 items-center">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => <input {...props} />}
            containerStyle={"w-full flex gap-3 justify-center"}
            shouldAutoFocus={true}
            skipDefaultStyles={true}
            inputStyle={
              "hover:shadow-lg w-8 text-2xl p-2.5 text-white dark:text-black bg-gray-600 dark:bg-white focus:bg-gray-400 focus:dark:bg-gray-500 focus:shadow-lg rounded focus:outline-none transition-colors duration-300"
            }
          />
          <button onClick={()=>{handleSubmit()}}
          className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
