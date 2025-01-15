'use client';
import * as React from "react"
import Image from "next/image";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { Button } from "./ui/button";
import { NavigationMenuDemo } from "./navigation";


const Header = () => {

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
                    <Link href="/" className="rotate-[-3deg]">
                        <Image
                            src="/img/dribble.png"
                            width={120}
                            height={50}
                            alt="Dribbble logo"
                        />
                    </Link>
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
                <ul className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${state ? 'absolute inset-x-0 pt-5 mt-2 px-4 border-b bg-white md:border-none md:static dark:bg-gray-950 dark:text-white' : 'hidden'}`}>
                    <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
                        {/* {
                            navigation.map((item, idx) => (
                                <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                                    <a href={item.path}>{item.title}</a>
                                </li>
                            ))
                        } */}
                        <NavigationMenuDemo />
                    </div>
                    <li className="order-2 py-5 pl-4 md:py-0">
                        <div className="flex justify-between items-center">

                            <div>
                                <Link href="/signup/new" >
                                    <button className="mr-2">
                                        Sign up
                                    </button>
                                </Link>
                                <Link href="/session/new" >
                                    <Button className="default " size="sm">
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
Header.displayName = 'Header';
export default Header;