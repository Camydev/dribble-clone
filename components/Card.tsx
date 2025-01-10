"use client";
import * as React from "react"

import Image from "next/image"
import Link from "next/link"
import { IoMdHeartEmpty } from "react-icons/io";
import { TbBookmark } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
//import { useState } from "react";

type Likes = {
    [key:number]:number;
}


const Card = () => {



    const cardsData = [
        {
            id: 1,
            imageSrc: "/img/original-90dc99f2a7bd168776ea6c2b52f6ab83.webp",
            title: "Obite Logo & Branding",
            userImageSrc: "/img/749b03484f77f870e680468c9f7170e1.png",
            userName: "John Doe",
            userLocation: "New York",
            views: "1.2k",
        },
        {
            id: 2,
            imageSrc: "/img/image2.webp",
            title: "NFT Project",
            userImageSrc: "/img/profil2.jpg",
            userName: "WIx Doe",
            userLocation: "Los Angeles",
            views: "2.5k",
        },
        {
            id: 3,
            imageSrc: "/img/image3.webp",
            title: "Digit Project",
            userImageSrc: "/img/749b03484f77f870e680468c9f7170e1.png",
            userName: "Jane Doe",
            userLocation: "Los Angeles",
            views: "5k",
        },
        {
            id: 4,
            imageSrc: "/img/image4.webp",
            title: "Ok animation",
            userImageSrc: "/img/profil4.png",
            userName: "Deepak Bhat",
            userLocation: "Los Angeles",
            views: "5k",
        },
        {
            id: 5,
            imageSrc: "/img/image5.webp",
            title: "Voice chat",
            userImageSrc: "/img/profil5.webp",
            userName: "Cloe Doe",
            userLocation: "Los Angeles",
            views: "1k",
        },
        {
            id: 6,
            imageSrc: "/img/image6.webp",
            title: "Datacenter",
            userImageSrc: "/img/profil6.webp",
            userName: "Dorian Bhat",
            userLocation: "Los Angeles",
            views: "15k",
        },
        {
            id: 7,
            imageSrc: "/img/image7.webp",
            title: "Fresh design",
            userImageSrc: "/img/profil7.webp",
            userName: "Harry Doe",
            userLocation: "Los Angeles",
            views: "50k",
        },
        {
            id: 8,
            imageSrc: "/img/image8.webp",
            title: "Glorious",
            userImageSrc: "/img/profil7.webp",
            userName: "Deepak Bhat",
            userLocation: "Los Angeles",
            views: "5k",
        },

    ]
    const [likes, setLikes] = React.useState<Likes>(
        {
            1:20,
            2: 150,
            3: 33,
            4: 57
        }
    );

    const handleLike = (cardId: number) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [cardId]: prevLikes[cardId] + 1, 
        }));
    };


    return (
        <section className="mt-8 mb-10 ">

            <div className="mt-4 grid gap-8 sm:grid-cols-1 lg:grid-cols-4">
            {cardsData.map((card) => (
                <article key={card.id}  className=" mt-4 rounded-md duration-300  relative">
                    <Link href="#">
                        <div className="relative">

                            <Image src={card.imageSrc} loading="lazy" alt="e" width={500} height={500} className="rounded-lg" />
                            <div className="absolute inset-0  content-end opacity-0 hover:opacity-100 transition-opacity duration-300  bg-opacity-50 text-white text-lg ">
                                <div className="truncate font-sans font-medium p-4 rounded-lg hover:bg-gradient-to-t from-gray-800 from-2%">
                                    <div className="flex justify-between">
                                        <p>{card.title}</p>
                                        <span className="p-3 bg-white rounded-full text-gray-900"><TbBookmark /></span>
                                        <span className="p-3 bg-white rounded-full text-gray-900"><IoMdHeartEmpty /></span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </Link>
                    <div className="flex justify-between pt-1  mr-2">
                        <div className="flex">
                            <div className="relative inline-block group">
                                <button className="relative  transition-all duration-300 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover:opacity-75 transition-opacity" />
                                    <span className="relative flex items-center gap-2">

                                        <Image src={card.userImageSrc} className="w-6 h-6 rounded-full" alt="e" width={500} height={500} />

                                    </span>
                                </button>
                                <div  className="absolute invisible opacity-0 z-10 overflow-hidden clip-path-inset(0 0 0 0) group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 md:w-96 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 translate-x-1">
                                    <div className="relative overflow-hidden p-4 bg-white backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                                        <div className="flex justify-between">
                                            <div className="relative flex gap-2">

                                                <Image src={card.userImageSrc} className="w-16 h-16 rounded-full" alt="e" width={500} height={500} />
                                                <div>
                                                    <div className=" ml-2 text-gray-900 font-semibold">{card.userName}</div>
                                                    <p className=" ml-2 text-gray-600 ">{card.userLocation}</p>
                                                </div>

                                            </div>
                                            <div>
                                                <Link href="#" className="inline-flex items-center mb-2 btn rounded-full bg-gray-100 hover:bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                                    Follow
                                                </Link>

                                            </div>

                                        </div>
                                        <div className="grid grid-cols-3 gap-2 mt-4">
                                            <div>
                                                <Image src="/img/original-90dc99f2a7bd168776ea6c2b52f6ab83.webp" loading="lazy" alt="e" width={250} height={250} className="rounded-lg" />

                                            </div>
                                            <div>
                                                <Image src="/img/image2.webp" loading="lazy" alt="e" width={250} height={250} className="rounded-lg" />

                                            </div>
                                            <div>
                                                <Image src="/img/image3.webp" loading="lazy" alt="e" width={250} height={250} className="rounded-lg" />

                                            </div>

                                        </div>

                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl opacity-50" />
                                        <div className="absolute -bottom-1.5  -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-white/10" />
                                    </div>
                                </div>
                            </div>
                            <span className=" ml-2 text-gray-900 font-semibold dark:text-slate-300 pr-2">{card.userName}</span>
                            <span>
                                <button className="inline-flex items-center btn rounded-md bg-gray-400 hover:bg-gray-900  py-1/2 px-1 text-xs font-bold text-slate-100">
                                    PRO
                                </button>

                            </span>
                        </div>
                        <div className="ml-2 flex justify-between">
                            <div className="flex justify-end text-xs">


                                <button className="ml-2 flex text-sm"><FaHeart size={20} className="text-gray-400 mr-1 hover:text-[#EA4C89]" onClick={() => handleLike(card.id)} />{likes[card.id]}</button>
                                <div className="ml-2 flex text-sm"><IoEyeSharp size={20} className="text-gray-400 mr-1 hover:text-[#EA4C89]" />{card.views}</div>
                            </div>
                        </div>

                    </div>

                </article>
             ))}
              
            </div>
        </section>
    )
}
Card.displayName = 'Card';
export default Card;
