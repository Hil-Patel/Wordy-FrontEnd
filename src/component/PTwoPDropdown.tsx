import React, { useState } from 'react';

const PTwoPDropdown = ({visible }) => {
  return (
    <div className={`text-xs top-3/4 left-1/3 absolute mt-2 w-72 bg-gray-300  dark:bg-gray-900 shadow-lg rounded  ${visible ? '' : 'hidden'} transition-all duration-300`}>
      <div className="relative p-1 shadow-md">
        This options is currently unavailable ,Coming Soon...
      </div>
      <div className="absolute bottom-full left-3 transform -translate-x-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-gray-300 dark:border-b-gray-900 border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
        
    </div>
  );
};

export default PTwoPDropdown;
