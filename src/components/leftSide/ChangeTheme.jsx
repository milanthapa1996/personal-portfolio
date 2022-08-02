import React, { useState,useEffect } from "react";
import { HiMoon, HiLightBulb } from "react-icons/hi";

const ChangeTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

useEffect(()=>{
  if(window.matchMedia('(prefers-color-schema:dark)').matches){
    setDarkMode(true)
  }else{
    setDarkMode(false)
  }
},[])

useEffect(()=>{
  if(darkMode){
    document.documentElement.classList.add("dark")
  }else{
    document.documentElement.classList.remove("dark")
  }
},[darkMode])


  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl min-h-[100px] p-5">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-center text-slate-600 dark:text-gray-100 font-semibold text-2xl">
            Theme
          </h1>
          <span className="font-semibold text-slate-500 dark:text-gray-300 text-start text-sm">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </div>
        <div
          className="flex flex-row justify-center items-center border-2 w-12 h-12 border-double rounded-lg border-slate-300 hover:border-slate-400 "
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? (
            <HiLightBulb className="text-blue-400 text-3xl cursor-pointer hover:scale-125 duration-300" />
          ) : (
            <HiMoon className="text-black text-3xl cursor-pointer hover:scale-125 duration-300" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChangeTheme;
