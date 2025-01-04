import React from 'react'
import { Geologica } from 'next/font/google';
import { IoIosSearch } from "react-icons/io";

const geologicaFont = Geologica({
    subsets: ['latin'],
    weight: ['400', '800', '900'],
});

const Hero = () => {
    return (
        <div className='p-20  text-center'>
            <div>
                <h1 className={`${geologicaFont.className} text-6xl `}>Discover the world’s <br />top designers</h1>
                <p className=' mt-4'>Explore work from the most talented and accomplished designers <br />ready to take on your next project</p>
            </div>
            <div className='flex justify-center '>

                <div className="relative mt-2w-full md:w-1/2 mt-6  text-gray-500 ">

                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="w-full pl-8 pr-16 py-4 appearance-none bg-slate-100 outline-none border focus:border-slate-300 shadow-sm rounded-full"
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center">
                        <select className="text-sm font-bold bg-transparent outline-none px-1 rounded-lg h-full">
                            <option className='font-bold bg-slate-100'>Shots</option>
                            <option className='font-bold bg-slate-100'>Designers</option>
                        </select>
                        <div className='rounded-full bg-[#EA4C89] p-2 text-white'><IoIosSearch size={26} /></div>
                    </div>


                </div>
            </div>
            <div className='flex justify-center mt-8'>
                <p></p>
                <div className="flex ">
                    <div className='text-slate-500 mr-4'>Trending searches</div>
                    <div>
                        <button className="inline-flex items-center btn rounded-full mr-4 bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                            landing page
                        </button>
                    </div>
                    <div>
                        <button className="inline-flex items-center rounded-full mr-4 bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                            e-commerce
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero