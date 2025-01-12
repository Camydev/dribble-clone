'use client';
import * as React from "react"
import Image from "next/image";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { Button } from "./ui/button";
import { NavigationMenuDemo } from "./navigation";
import { IoIosSearch } from "react-icons/io";
import SearchComponent from "./SearchComponent";


const HeaderTwo = () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path
    /*   const navigation = [
          { title: "Partners", path: "javascript:void(0)" },
          { title: "Customers", path: "javascript:void(0)" },
          { title: "Team", path: "javascript:void(0)" },
  
      ]
   */
    return (
        <>
            <nav className=" fixed top-0 left-0 right-0 z-50 pb-2 bg-white dark:bg-gray-950  items-center pt-5 px-4 mx-auto sm:px-8 md:flex md:space-x-6">
                <div className="flex justify-between">
                    <a href="javascript:void(0)" className="rotate-[-3deg]">
                        <Image
                            src="/img/dribble.png"
                            width={120}
                            height={50}
                            alt="Dribbble logo"
                        />
                    </a>

                    <div className="md:hidden">
                       <SearchComponent/>
                    </div>
                    <button className="text-gray-500 outline-none md:hidden"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )
                        }
                    </button>
                </div>

                <div className=' w-2/5 hidden md:block'>

                    <div className={`relative text-sm text-gray-500`}>

                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-full px-4 md:pl-8 md:pr-16 py-4 appearance-none bg-slate-100 outline-none border focus:border-slate-300 shadow-sm rounded-full"
                        />
                        <div className="absolute inset-y-0 right-4 flex items-center">
                            <select className="text-sm font-bold bg-transparent outline-none  rounded-lg h-full">
                                <option className='font-bold bg-slate-100'>Designers</option>
                                <option className='font-bold bg-slate-100'>Shots</option>
                            </select>
                            <div className='rounded-full bg-[#EA4C89] p-2 text-white'><IoIosSearch size={26} /></div>
                        </div>


                    </div>
                </div>

                <ul className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${state ? 'absolute inset-x-0 pt-5 mt-2 px-4 border-b bg-white md:border-none md:static dark:bg-gray-950 dark:text-white' : 'hidden'}`}>
                    <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
                        <NavigationMenuDemo />
                    </div>
                    <li className="order-2 py-5 md:py-0">
                        <div className="flex justify-between items-center">

                            <div>
                                <Link href="#" >
                                    <button className="mr-2">
                                        Sign up
                                    </button>
                                </Link>
                                <Link href="#" >
                                    <Button className="default" size="sm">
                                        Log in
                                    </Button>
                                </Link>

                            </div>
                            <div className="ml-2">
                                <ModeToggle />

                            </div>


                        </div>
                    </li>
                </ul>
            </nav>

        </>
    )
}
HeaderTwo.displayName = 'HeaderTwo';
export default HeaderTwo;