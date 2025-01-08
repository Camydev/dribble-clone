'use client'
import React from "react"
import Image from "next/image"
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillPinterest } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {

    const footerNavs = [
        {
            href: '#',
            name: 'For designers'
        },
        {
            href: '#',
            name: 'Hire talent'
        },
        {
            href: '#',
            name: 'Inspiration'
        },
        {
            href: '#',
            name: 'Advertising'
        },
        {
            href: '#',
            name: 'Blog'
        },
        {
            href: '#',
            name: 'About'
        },
        {
            href: '#',
            name: 'Careers'
        },
        {
            href: '#',
            name: 'Support'
        },
    ]
    const footerNavs2 = [
        {
            href: '#',
            name: 'Jobs'
        },
        {
            href: '#',
            name: 'Designers'
        },
        {
            href: '#',
            name: 'Freelancers'
        },
        {
            href: '#',
            name: 'Tags'
        },
        {
            href: '#',
            name: 'Places'
        },
        {
            href: '#',
            name: 'Resources'
        },
        
        
        
        
        
        
    ]
    const footerNavs3 = [
        {
            href: '#',
            name: 'Terms'
        },
        {
            href: '#',
            name: 'Privacy'
        },
        {
            href: '#',
            name: 'Cookies'
        },
      
 
        
    ]
    const currentYear = new Date().getFullYear();
    return (
        <footer className="pt-10 pb-10">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="md:flex md:justify-between space-y-6">
                        <div className="flex justify-center">

                        <a href="javascript:void(0)" className="rotate-[-3deg]">
                            <Image
                                src="/img/dribble.png"
                                width={120}
                                height={50}
                                alt="Dribbble logo"
                            />
                        </a>
                        </div>
                        <div className="md:ml-16">
                        <ul className="flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base">
                            {
                                footerNavs.map((item, idx) => (
                                    <li className="text-gray-800 hover:text-gray-500 font-semibold mx-2 md:mx-4 duration-150" key={idx}>
                                        <Link key={idx} href={item.href}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                        </div>
                    <div className="mt-6 flex justify-center gap-4 items-center text-gray-900">
                       <div>
                        <FaXTwitter size={25}/>
                       </div>
                       <div>
                        <FaFacebookSquare size={25}/>
                       </div>
                       <div>
                        <RiInstagramFill size={25}/>
                       </div>
                       <div>
                        <AiFillPinterest size={25}/>
                       </div>

                    </div>

                    </div>
                <div className="md:flex md:justify-between pt-10">
                    <div className="flex text-center">
                        <div>

                        <p>© {currentYear} Dribbble</p>
                        </div>
                        <div>
                        <ul className="flex flex-wrap items-center justify-items-center gap-2 text-sm sm:text-base ">
                            {
                                footerNavs3.map((item, idx) => (
                                    <li className="text-gray-800 hover:text-gray-500  mx-2 duration-150" key={idx}>
                                        <Link key={idx} href={item.href}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        </div>


                    </div>
                    <div className="mt-4">
                    <ul className="flex flex-wrap items-center justify-items-center gap-4 text-sm sm:text-base ">
                            {
                                footerNavs2.map((item, idx) => (
                                    <li className="text-gray-800 hover:text-gray-500  mx-2 duration-150" key={idx}>
                                        <Link key={idx} href={item.href}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}
Footer.displayName = 'Footer';
export default Footer;