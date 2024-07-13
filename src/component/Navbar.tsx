import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };
  return (
    <div className='flex bg-blue-100 dark:bg-green-100  px-4 py-2'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt="Logo of Wordy" className='h-8'/>
        <p className='text-xl font-bold'>Wordy</p>
      </div>
      <button
      onClick={toggleDarkMode}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
    >
      Toggle Dark Mode
    </button>
    </div>
  )
}

export default Navbar
