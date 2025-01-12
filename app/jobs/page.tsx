import React from 'react'
import HeaderTwo from '@/components/HeaderTwo'
import { Geologica } from 'next/font/google';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const geologicaFont = Geologica({
    subsets: ['latin'],
    weight: ['400', '800', '900'],
});

const page = () => {

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
            <div className='mx-4 md:mx-40'>

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
                                        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-[#EA4C89]"
                                    />
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className='md:w-1/3 border md:ml-8 mt-4 md:mt-0'>dfd</div>

                </div>

            </div>

        </div>
    )
}

export default page