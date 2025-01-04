import React from 'react'
import { Geologica } from 'next/font/google';
import { IoIosSearch } from "react-icons/io";

const geologicaFont = Geologica({
    subsets: ['latin'],
    weight: ['400', '800', '900'],
});

const Hero = () => {
    return (
        <div className='md:p-20 p-8 pt-16 text-center'>
            <div className='flex flex-col justify-center items-center mb-8'>
                <h1 className={`${geologicaFont.className} text-2xl md:text-6xl `}>Discover the world’s <br />top designers</h1>
                <p className='text-sm md:text-lg mt-4 w-full md:w-1/2'>Explore work from the most talented and accomplished designers ready to take on your next project</p>
            </div>
            <div className='md:flex md:justify-center'>

                <div className="relative text-sm mt-2 w-full size-full md:w-1/2 mt-6  text-gray-500 ">

                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="w-full px-4 md:pl-8 md:pr-16 py-4 appearance-none bg-slate-100 outline-none border focus:border-slate-300 shadow-sm rounded-full"
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center">
                        <select className="text-sm font-bold bg-transparent outline-none  rounded-lg h-full">
                            <option className='font-bold bg-slate-100'>Shots</option>
                            <option className='font-bold bg-slate-100'>Designers</option>
                        </select>
                        <div className='rounded-full bg-[#EA4C89] p-2 text-white'><IoIosSearch size={26} /></div>
                    </div>


                </div>
            </div>
            <div className='flex md:justify-center justify-around mt-8 '>
                <p></p>
                <div className="md:flex">
                    <div className='text-slate-400 mr-4 mb-2 md:mb-0 text-sm'>Trending searches</div>
                    <div className='md:flex  grid grid-cols-2'>

                        <div>
                            <button className="inline-flex items-center mb-2 btn rounded-full mr-4 bg-gray-100 hover:bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                landing page
                            </button>
                        </div>
                        <div>
                            <button className="inline-flex items-center mb-2 rounded-full mr-4  bg-gray-100 hover:bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                e-commerce
                            </button>
                        </div>
                        <div>
                            <button className="inline-flex items-center mb-2 rounded-full mr-4  bg-gray-100 hover:bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                mobile app
                            </button>
                        </div>
                        <div>
                            <button className="inline-flex items-center mb-2 rounded-full mr-4  bg-gray-100 hover:bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                logo design
                            </button>
                        </div>
                        <div>
                            <button className="inline-flex items-center mb-2 rounded-full mr-4  bg-gray-100 hover:bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                dashboard
                            </button>
                        </div>
                        <div>
                            <button className="inline-flex items-center mb-2 rounded-full mr-4  bg-gray-100 hover:bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                icons
                            </button>
                        </div>
                      
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero