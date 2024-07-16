import React from "react";
import Navbar from "../component/Navbar";

const Options = () => {
  const options=['2','3','4','5','6','7','8']
  return (
    <div className="h-screen flex flex-col transition-colors duration-500 ">
      <Navbar />
      <div className="flex flex-col flex-grow justify-center items-center bg-gray-100 dark:bg-gray-700 transition-colors duration-500">
        <div className="w-1/3 py-8 bg-blue-100 dark:bg-gray-800 rounded text-black dark:text-white">
          <form className="max-w-sm mx-auto">
            <select
              id="underline_select"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected disabled hidden>Choose the Size</option>
              {options.length>0 && options.map((val,index)=><option key={index} value={val}>{val}</option>)}
              
              
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Options;
