'use client'
import React from 'react'
import HeaderTwo from '@/components/HeaderTwo'
import { Geologica } from 'next/font/google';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { SlLocationPin } from "react-icons/sl";
import { Checkbox } from "@/components/ui/checkbox"
import SectionMarquee from '@/components/SectionMarquee';
import Footer from '@/components/Footer';


const geologicaFont = Geologica({
    subsets: ['latin'],
    weight: ['400', '800', '900'],
});


const page = () => {

    const postData = [
        {
            id: 1,
            title: 'Graphic Designer illustrator',
            company: 'Need Pastel.',
            logo: '/img/profil2.jpg',
            location: 'New York',
            posted: '2 days ago',
        },
        {
            id: 2,
            title: 'Art Director (USA Only)',
            company: 'DC&Co.',
            logo: '/img/profil6.webp',
            location: 'Los Angeles',
            posted: '3 days ago',
        },
        {
            id: 3,
            title: 'Creative Director Advisor',
            company: 'LyonShare',
            logo: '/img/profil7.webp',
            location: 'Remote',
            posted: '3 days ago',
        },
        {
            id: 4,
            title: 'Design Director',
            company: 'Constructive',
            logo: '/img/profil4.png',
            location: 'Remote',
            posted: '4 days ago',
        },
        {
            id: 5,
            title: 'Designer',
            company: 'LyonShare',
            logo: '/img/profil7.webp',
            location: 'Remote',
            posted: '5 days ago',
        },
        {
            id: 6,
            title: 'UI/UX Designer',
            company: 'LyonShare',
            logo: '/img/profil7.webp',
            location: 'Remote',
            posted: '6 days ago',
        },
    ]
    const checkBoxName = [
        {
            id: 1,
            name: 'Animation',
        },
        {
            id: 2,
            name: 'Brand / Graphic Design',
        },
        {
            id: 3,
            name: 'Illustration',
        },
        {
            id: 4,
            name: 'Leadership',
        },
        {
            id: 5,
            name: 'Mobile Design',
        },
        {
            id: 6,
            name: 'UI / Visual Design',
        },
        {
            id: 7,
            name: 'Product Design',
        },
        {
            id: 8,
            name: 'UX Design / Research',
        },
        {
            id: 9,
            name: 'Web Design',
        },
    ]

    return (
        <div>
            <HeaderTwo />
            <div className=' p-8 pt-40  md:mt-0 text-center'>
                <div className='flex flex-col justify-center items-center mb-8'>
                    <h1 className={`${geologicaFont.className} text-2xl md:text-6xl md:w-2/5 `}>The #1 Job Board for Graphic Design Jobs</h1>
                    <p className='text-sm md:text-lg mt-4 w-full md:w-2/5'>Dribbble is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.</p>
                    <Button className="default mt-8" size="sm">
                        + Post a job
                    </Button>
                </div>
            </div>
            <div className='mx-4 mb-8 md:mx-40'>

                <div className='flex snap-x snap-mandatory overflow-x-scroll md:overflow-x-hidden'>

                    <div>
                        <button className="inline-flex items-center mb-2 btn rounded-full mr-4 bg-gray-100 hover:bg-gray-50 px-4 py-2 text-md font-medium text-gray-900 ring-1 ring-inset ring-gray-500/10">
                            Job Board
                        </button>
                    </div>
                    <div>
                        <Link href="#" className="inline-flex items-center mb-2 mr-4  px-4 py-2 text-md font-medium text-gray-900 dark:text-slate-300">
                            Designer Search
                        </Link>
                    </div>



                </div>
                <div className='md:flex'>
                    <div className='md:w-2/3'>
                        <div>
                            <form
                                className="mt-4">
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Search by company, skill, tag"
                                        className="w-full py-3 pl-12 pr-4 text-gray-500 rounded-xl hover:outline outline-offset-2 outline-4  outline-[#EA4C89]/10 hover:shadow bg-gray-50 border border-gray-200 focus:bg-white"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='mt-8'>
                            <h2 className={`${geologicaFont.className} text-2xl font-bold`}>Recent posts</h2>
                            <p className='text-sm mt-2'>2 new opportunities posted today!</p>
                        </div>
                        <div className='mt-8'>
                            {
                                postData.map((post) => (
                                    <div key={post.id} className='flex group justify-between border w-full p-4 md:p-6 rounded-lg mb-4 hover:shadow-md'>
                                        <div className='flex'>
                                            <Image src={post.logo} alt='image' className='rounded-lg h-16 w-16' width={60} height={60} />

                                            <div className='ml-6'>
                                                <h2 className='font-semibold pb-2'>{post.company}</h2>
                                                <h2 className='font-bold  md:text-xl'>{post.title}</h2>
                                                <h2 className='md:hidden text-gray-500 text-sm'>{post.location}</h2>

                                            </div>

                                        </div>
                                        <div className='relative hidden md:block' >

                                            <div className='flex opacity-100 group-hover:opacity-0 transition-opacity duration-300'>
                                                <div className=' '>
                                                    <h2 className='pb-2 text-gray-500 text-sm'>Posted {post.posted}</h2>
                                                    <div className='flex justify-end items-center'>
                                                        <SlLocationPin />
                                                        <h2 className='ml-2 text-sm font-semibold'>{post.location}</h2></div>

                                                </div>


                                            </div>
                                            <div className='duration-300  absolute top-2 right-0 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                                <button className="inline-flex items-center  btn rounded-full mr-4 bg-gray-100 hover:bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-500/10">
                                                    View&nbsp;job
                                                </button>
                                                <button className="inline-flex items-center  btn rounded-full bg-gray-100 hover:bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-500/10">
                                                    Apply&nbsp;now
                                                </button>

                                            </div>
                                        </div>

                                    </div>
                                ))
                            }

                        </div>

                    </div>
                    <div className='md:w-1/3 border rounded-xl p-8  hidden md:block md:ml-8 mt-4'>
                        <div>
                            <h2 className='text-xl font-medium mb-4' >Specialties</h2>
                            {
                                checkBoxName.map((name) => (
                                    <div key={name.id} className="flex items-center space-x-2 mb-4">
                                        <Checkbox id={`check-${name.id}`} />
                                        <label
                                            htmlFor={`check-${name.id}`}
                                            className=" leading-none  text-gray-600"
                                        >
                                            {name.name}
                                        </label>
                                    </div>

                                ))
                            }
                            <hr />
                            <h2 className='text-xl font-medium mt-6 mb-4' >Specialties</h2>

                            <div>


                                <div className="relative">

                                    <input
                                        type="text"
                                        placeholder="Enter location"
                                        className="w-full py-3 pl-4 pr-4 text-gray-500 rounded-xl hover:outline outline-offset-2 outline-4  outline-[#EA4C89]/10 hover:shadow bg-gray-50 border border-gray-200 focus:bg-white"
                                    />
                                </div>
                                <div className="flex items-center space-x-2 mt-4 mb-4">
                                    <Checkbox id="open" />
                                    <label
                                        htmlFor="open"
                                        className=" leading-none  text-gray-600"
                                    >
                                        Open to remote

                                    </label>

                                </div>
                                <hr />
                                <div className="flex items-center space-x-2 mt-4 mb-4">
                                    <Checkbox id="time" />
                                    <label
                                        htmlFor="time"
                                        className=" leading-none  text-gray-600"
                                    >
                                        Full-Time

                                    </label>

                                </div>
                                <div className="flex items-center space-x-2 mt-4 mb-4">
                                    <Checkbox id="freelance" />
                                    <label
                                        htmlFor="freelance"
                                        className=" leading-none  text-gray-600"
                                    >
                                        Freelance/Contract
                                    </label>

                                </div>
                                <Button className="default mt-8 w-full" size="sm">
                                   Filter
                                </Button>



                            </div>


                        </div>

                    </div>

                </div>

            </div>
            <div className=" mb-8">
                <SectionMarquee/>
            </div>
            <Footer/>

        </div>
    )
}

export default page