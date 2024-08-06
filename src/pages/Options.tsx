import React, { useState, useEffect, useRef } from "react";
import Navbar from "../component/Navbar";
import PTwoP from "../component/PTwoP";
import SinglePlayer from "../component/SinglePlayer";
import SelectDropdown from "../component/SelectDropDown"; // Adjust the import path as needed
import PTwoPDropdown from "../component/PTwoPDropdown";

const Options = () => {
  const [buttonClicked, setButtonClicked] = useState("0");
  const options = ["2", "3", "4", "5", "6", "7", "8"];
  return (
    <div className="h-screen flex flex-col transition-colors duration-500">
      <Navbar isLoggedIn={true} />
      <div className="flex flex-col flex-grow justify-center items-center bg-gray-100 dark:bg-gray-700 transition-colors duration-500">
        <div className="w-1/2 py-6 bg-blue-100 dark:bg-gray-800 rounded text-black dark:text-white relative">
          <div>
            <p className="w-full text-md font-medium text-center mb-3">
              Choose the length of the Word
            </p>
            <div className="flex justify-around">
              {options.map((val, index) => (
                <button
                  key={index}
                  className={`w-16 h-16 ${
                    buttonClicked === val
                      ? "bg-green-400 dark:bg-green-500"
                      : "bg-gray-100 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                  } rounded  border border-gray-300 hover:shadow-md  dark:border-gray-600   transform transition-transform duration-200 hover:scale-110 `}
                  onClick={() => {
                    setButtonClicked(val);
                  }}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
          <div className={` mt-10  ${buttonClicked === "0" && "hidden"}`}>
            <p className="w-full text-center mb-3 text-md font-medium">Select Mode</p>
            <div className="flex justify-around items-center">
              <div className="w-1/4 flex flex-col items-center gap-4">
                <PTwoP />
                <p className="text-sm">Multiplayer</p>
              </div>
              <div className="w-1/4 flex flex-col items-center gap-4">
                <SinglePlayer />

                <p className="text-sm">Single player</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
