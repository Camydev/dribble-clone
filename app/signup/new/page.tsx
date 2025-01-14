'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowTurnUpRight } from "react-icons/hi2";
const page = () => {
    return (
        <div>
            <div className='flex h-screen'>
                <div className='w-1/4 hidden md:block'>
                    <div className='bg-gray-950  p-8'>
                        <Image src="/img/wix.png" className='' alt="Logo" width={200} height={200} />
                        <p className='text-white text-3xl'>Explore what Eliran Vahdi built on Wix Studio</p>
                        <div className=' flex items-center mt-4'>
                            <Link href="#" className='text-white text-lg underline'>Get inspired </Link>
                            <div className='text-white' ><HiArrowTurnUpRight /></div>
                        </div>

                    </div>
                    <div>
                        <video width={200} height={200} className='w-full' autoPlay loop muted>
                            <source src="/img/796e1b621a6d76807c14fa26b4004195.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                    </div>
                </div>
                <div className='md:w-3/4'>
                    <div className='mx-10 my-10 md:mx-40 md:my-40 md:w-1/3'>
                        <h2 className='text-2xl font-bold'>Sign up to Dribbble</h2>
                        <button className="w-full flex items-center justify-center gap-x-3 py-4 mt-8 border rounded-full text-sm font-medium hover:bg-gray-800 duration-150 bg-gray-950 text-white">
                            <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_17_40)">
                                    <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                    <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                    <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                    <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_40">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Sign up with Google
                        </button>

                        <div className='flex items-center justify-center my-4'>
                            <hr className='text-gray-900' />
                            <p className='px-4'>or</p>
                            <hr />

                        </div>
                        <button className="w-full flex items-center justify-center gap-x-3 py-4 border rounded-full text-sm font-medium duration-150 ">
                            Continue with email
                        </button>
                        <div className='text-center text-sm mt-12 font-light'>
                            By creating an account you agree with our <Link href='/' className='underline'> Terms of Service</Link>, <Link href='/' className='underline'> Privacy Policy</Link> , and our default <Link href='/' className='underline'> Notification Settings</Link>.
                            <p className='mt-8 text-sm font-normal'>Already have an account? <Link href='/session/new' className='underline'>Sign In</Link></p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default page