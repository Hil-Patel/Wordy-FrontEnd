import React from 'react'
import { useNavigate } from 'react-router-dom';

const HowToPlay = ({setButtonClick}) => {
    
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-gray-100 justify-center items-center dark:bg-gray-700 flex-grow  overflow-y-scroll scrollbar-hide transition-colors duration-300">
        <div
          data-aos="fade-up"
          className="hover:shadow-xl bg-blue-100 dark:bg-gray-800 border border-gray-500  text-black dark:text-white p-4 max-w-md rounded-lg 0.5s ease-in-out"
        >
          <h2 className="text-2xl font-bold  mb-4">How To Play</h2>
          <p className="mb-4">Guess the Wordly in given tries.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Each guess must be a valid letter word.</li>
            <li>
              The color of the tiles will change to show how close your guess
              was to the word.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-4">Examples of length=5</h3>
          <div className="mb-4">
            <div className="flex mb-2">
              <span className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-md mr-1">
                W
              </span>
              <span className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-md mr-1">
                E
              </span>
              <span className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-md mr-1">
                A
              </span>
              <span className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-md mr-1">
                R
              </span>
              <span className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-md">
                Y
              </span>
            </div>
            <p>W is in the word and in the correct spot.</p>
          </div>
          <div className="mb-4">
            <div className="flex mb-2">
              <span className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-md mr-1">
                P
              </span>
              <span className="w-10 h-10 bg-yellow-500 text-white flex items-center justify-center rounded-md mr-1">
                I
              </span>
              <span className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-md mr-1">
                L
              </span>
              <span className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-md mr-1">
                L
              </span>
              <span className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-md">
                S
              </span>
            </div>
            <p>I is in the word but in the wrong spot.</p>
          </div>
          <div className="mb-4">
            <div className="flex mb-2">
              <span className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-md mr-1">
                V
              </span>
              <span className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-md mr-1">
                A
              </span>
              <span className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-md mr-1">
                G
              </span>
              <span className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-md mr-1">
                U
              </span>
              <span className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-md">
                E
              </span>
            </div>
            <p>U is not in the word in any spot.</p>
          </div>
          <div className="flex items-center gap-5 mt-10">
            <p className="text-blue-700 dark:text-blue-400">To Play </p>
            <div className="flex items-center ">
              <button
                type="button"
                onClick={() => {
                  setButtonClick("SignUp");
                  navigate("/authenticate");
                }}
                className="py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1 me-5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={() => {
                  setButtonClick("Login");
                  navigate("/authenticate");
                }}
                className="py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HowToPlay
