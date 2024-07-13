import React from "react";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white p-6 max-w-md mx-auto rounded-lg ">
        <h2 className="text-2xl font-bold mb-4">How To Play</h2>
        <p className="mb-4">Guess the Wordle in n tries.</p>
        <ul className="list-disc list-inside mb-4">
          <li>Each guess must be a valid letter word.</li>
          <li>
            The color of the tiles will change to show how close your guess was
            to the word.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mb-4">Examples of length of 5</h3>
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
      </div>
    </>
  );
};

export default Home;
