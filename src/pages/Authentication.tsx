import React, { useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import { useFormik } from "formik";
import AuthenticationLogin from "../component/AuthenticationLogin";
import image from "../assets/wordy.png";
import AuthenticationSignUp from "../component/AuthenticationSignUp";
import { BeatLoader } from "react-spinners";

const Authentication = ({ page, setToken, token }) => {
  const [loading, setLoading] = useState(false);
  const [openPage, setOpenPage] = useState(page);

  return (
    <div className=" relative flex flex-col h-screen dark:bg-gray-700 text-black dark:text-white transition-colors duration-500">
      <Navbar />
      {loading ? (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
        <BeatLoader color="#ffffff"/>
      </div>
      ) : null}
      <div className="w-full flex-grow flex justify-center items-center">
        <div className="w-2/3 h-5/6 bg-blue-100 dark:bg-gray-800 flex relative">
          <AuthenticationLogin
            setOpenPage={setOpenPage}
            setToken={setToken}
            token={token}
            setLoading={setLoading}
          />
          <AuthenticationSignUp
            setOpenPage={setOpenPage}
            setLoading={setLoading}
          />
          <img
            src={image}
            alt=""
            className={`absolute object-fit w-1/2 h-full ${
              openPage === "Login" ? "left-1/2" : "left-0"
            } transition-all duration-300 ease-in-out`}
          />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
