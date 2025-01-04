import * as React from "react"

import Image from "next/image"
import Link from "next/link"
import { IoMdHeartEmpty } from "react-icons/io";
import { TbBookmark } from "react-icons/tb";



    const Card = () => {

    return (
        <section className="mt-8 mb-10 ">

            <div className="mt-4 grid gap-2 sm:grid-cols-1 lg:grid-cols-4">
                <article className=" mt-4 rounded-md duration-300  relative">
                    <Link href="#">
                        <div className="relative">

                            <Image src="/img/original-90dc99f2a7bd168776ea6c2b52f6ab83.webp" loading="lazy" alt="e" width={500} height={500} className="rounded-lg" />
                            <div className="absolute inset-0  content-end opacity-0 hover:opacity-100 transition-opacity duration-300  bg-opacity-50 text-white text-lg ">
                                <div className="truncate font-sans font-medium p-4 rounded-lg hover:bg-gradient-to-t from-gray-800 from-2%">
                                    <div className="flex justify-between">
                                        <p>Obite Logo & Branding</p>
                                        <span className="p-3 bg-white rounded-full text-gray-900"><TbBookmark /></span>
                                        <span className="p-3 bg-white rounded-full text-gray-900"><IoMdHeartEmpty /></span>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="flex  pt-1  mr-2">
                            <div className="flex-none w-8 h-8 rounded-full">
                                <Image src="/img/749b03484f77f870e680468c9f7170e1.png" className="rounded-full" alt="e" width={500} height={500} />
                            </div>
                            <div className="ml-2 flex justify-between">
                                <span className="block text-gray-900 font-semibold">John Doe</span>
                                <div className="flex justify-end">

                                    <span>
                                        <button className="inline-flex items-center btn rounded-md bg-gray-400 hover:bg-gray-900  py-1 px-2 text-xs font-bold text-slate-100 ring-1 ring-inset ring-gray-500/10">
                                            PRO
                                        </button>

                                    </span>
                                    <div className="ml-2 flex text-sm"><IoMdHeartEmpty size={20}/> 400</div>
                                </div>
                            </div>
                        </div>

                    </Link>
                </article>
            </div>
        </section>
    )
}
Card.displayName = 'Card';
export default Card;
