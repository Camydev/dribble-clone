'use client'

import React from 'react'
import HeaderTwo from '@/components/HeaderTwo'
import { Geologica } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import SectionMarquee from '@/components/SectionMarquee';
import Footer from '@/components/Footer';
import { IoIosArrowDroprightCircle } from "react-icons/io";


const geologicaFont = Geologica({
    subsets: ['latin'],
    weight: ['400', '800', '900'],
});


const page = () => {

    const blogData = [
        {
            id: 1,
            title: '5 creative effects to upgrade your animated portfolio',
            image: '/img/blog/244d461cc460ca86f4e7d1737a7d49ec.webp',
            small_content: "If you’re a creative professional working in a visual medium like web design, photography, illustration, or motion graphics, it’s important to put effort into your craft. But even if you’re great at what you do, if you don’t have a well-designed portfolio, you’re missing out on getting your artistry out in front of a bigger audience.",
            date: 'Nov 18, 2024',
        },
        {
            id: 2,
            title: 'Valuable Tips for Engaging with Tech Users',
            image: '/img/blog/539b03683fc4aec9ab223991f129df07.webp',
            small_content: "Creating effective designs for tech-savvy audiences, such as data scientists and software engineers, requires a careful balance between visual clarity, functionality, and creativity.",
            date: 'Nov 12, 2024',
        },
        {
            id: 3,
            title: "Don’t be mistaken. Imposter Syndrome can be a good thing!",
            image: '/img/blog/cf71d0bf0340146f34ea1559958ebdba.webp',
            small_content: "If you’ve ever reached a point in your life when a voice in your head starts telling you that you’re not good enough, not experienced enough, not smart enough, not _____ enough; pay attention. It’s telling you more than you think.",
            date: 'Nov 12, 2024',
        },
    ]

    return (
        <div>
            <HeaderTwo />
            <div className='mx-4 mb-8 md:mx-40 mt-60'>
                <h2 className={`text-5xl font-bold ${geologicaFont.className}`}>Courtside: <br /> The Dribbble Blog</h2>
                <div className='flex mt-8'>
                    <div className=' w-2/3'>
                        <p className='text-gray-500 uppercase '>Dec 17, 2024</p>
                        <h2 className='text-4xl font-semibold hover:text-[#EA4C89] mb-2'>Work In Progress, Part 6 🚧</h2>
                        <Image src='/img/blog/imageBlog1.webp' className='w-full rounded-lg' width={500} height={500} alt='image' />
                        <p className='text-lg'>
                            Last week, we released Services, allowing designers to sell freelance services that can be purchased instantly on Dribbble. Designers outline the work offered and set the price, completion time, number of revisions, and any other specifications they want to include.
                        </p>
                        <hr className='my-4' />

                        <div>
                            {
                                blogData.map((data) => (
                                    <div key={data.id}>

                                        <div className='md:flex space-y-2'>
                                            <p className='md:hidden text-gray-500 uppercase'>{data.date}</p>
                                            <h2 className='md:hidden text-lg md:text-2xl font-semibold hover:text-[#EA4C89]'><Link href="#">{`${data.title}`}</Link></h2>

                                            <div className='w-full md:w-1/4'>
                                                <Link href='#' className='hover:opacity-75'> <Image src={data.image} className='w-48 h-42 rounded-lg' width={500} height={500} alt='image' /></Link>
                                            </div>
                                            <div className='md:pl-4 w-3/4'>
                                                <p className='hidden md:block text-gray-500 uppercase'>{data.date}</p>
                                                <h2 className='hidden md:block text-lg md:text-2xl font-semibold hover:text-[#EA4C89]'><Link href="#">{`${data.title}`}</Link></h2>
                                                <p className=' text-sm  md:text-lg text-gray-500'>{`${data.small_content}`}</p>
                                            </div>

                                        </div>
                                        <hr className='my-4' />

                                    </div>


                                ))
                            }

                        </div>
                        <div className='flex justify-center text-2xl text-gray-300 hover:text-gray-400'>
                            <Link href="#"> <IoIosArrowDroprightCircle size={60} /></Link>


                        </div>
                    </div>
                    <div className='ml-8 w-1/3 font-medium'>
                        <ul className='mb-8'>
                            <li>
                                <Link href="#"> Overtime</Link>
                            </li>
                            <li>
                                <Link href="#" className='peer-disabled:cursor-not-allowed'> The Dribbble Podcast</Link>
                            </li>
                            <li>
                                <Link href="#" className='peer-disabled:cursor-not-allowed'> The Power of Play</Link>
                            </li>
                        </ul>
                        <hr />
                        <h2 className='font-semibold mt-4'>All Categories</h2>
                        <ul className='mb-8 space-y-1 text-sm'>
                            <li>
                                <Link href="#"> Overtime</Link>
                            </li>
                            <li>
                                <Link href="#"> Interviews</Link>
                            </li>
                            <li>
                                <Link href="#"> Podcast</Link>
                            </li>
                            <li>
                                <Link href="#"> Inspiration</Link>
                            </li>
                            <li>
                                <Link href="#"> Process</Link>
                            </li>
                            <li>
                                <Link href="#"> Meetups</Link>
                            </li>
                            <li>
                                <Link href="#"> Updates</Link>
                            </li>
                            <li>
                                <Link href="#">Hang Time</Link>
                            </li>
                            <li>
                                <Link href="#">Community</Link>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
            <SectionMarquee />
            <Footer />


        </div>
    )
}

export default page