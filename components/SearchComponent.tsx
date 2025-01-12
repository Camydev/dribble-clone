'use client'
import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoSearch } from "react-icons/io5";

const SearchComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        <IoSearch size={26} />
      </button>

      {isVisible && (
        <div className='border  md:block'>
          <div className={`absolute inset-y-0 top-24 right-4 left-0 flex items-center text-sm text-gray-500`}>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full px-4 md:pl-8 md:pr-16 py-4 appearance-none bg-slate-100 outline-none border focus:border-slate-300 shadow-sm rounded-full"
            />
            <div className="absolute inset-y-0 right-4 flex items-center">
              <select className="text-sm font-bold bg-transparent outline-none rounded-lg h-full">
                <option className='font-bold bg-slate-100'>Designers</option>
                <option className='font-bold bg-slate-100'>Shots</option>
              </select>
              <div className='rounded-full bg-[#EA4C89] p-2 text-white'>
                <IoIosSearch size={26} />
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;