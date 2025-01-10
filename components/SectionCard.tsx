import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Card from './Card'
import Link from 'next/link'


const SectionCard = () => {
    return (
        <div className='mx-4 md:mx-20'>
            <div className='md:flex justify-between'>
                <div>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Popular" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="e">Popular</SelectItem>
                                <SelectItem value="n">New&nbsp;&&nbsp;Noteworthy</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                </div>
       
             <div className='flex snap-x snap-mandatory overflow-x-scroll md:overflow-x-hidden'>

                    <div>
                        <button className="inline-flex items-center mb-2 btn rounded-full mr-4 bg-gray-100 hover:bg-gray-50 px-4 py-2 text-md font-medium text-gray-900 ring-1 ring-inset ring-gray-500/10">
                           Discover
                        </button>
                    </div>
                    <div>
                        <Link href="#" className="inline-flex items-center mb-2 mr-4  px-4 py-2 text-md font-medium text-gray-900 dark:text-slate-300">
                            Animation
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="inline-flex items-center mb-2 mr-4  px-4 py-2 text-md font-medium text-gray-900  dark:text-slate-300">
                            Branding
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="inline-flex items-center mb-2 mr-4  px-4 py-2 text-md font-medium text-gray-900 dark:text-slate-300">
                            Illusration
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="inline-flex items-center mb-2 mr-4  px-4 py-2 text-md font-medium text-gray-900 dark:text-slate-300">
                            Mobile
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="inline-flex items-center mb-2 mr-4  px-4 py-2 text-md font-medium text-gray-900 dark:text-slate-300">
                            Print
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="inline-flex items-center mb-2 mr-4  px-4 py-2 text-md font-medium text-gray-900 dark:text-slate-300">
                            Product&nbsp;design
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="inline-flex items-center mb-2 mr-4  px-4 py-2 text-md font-medium text-gray-900 dark:text-slate-300">
                            Typography
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="inline-flex items-center mb-2 mr-4  px-4 py-2 text-md font-medium text-gray-900 dark:text-slate-300">
                            Web&nbsp;design
                        </Link>
                    </div>

                </div> 
            </div>
          <div className=''>
                <Card />
            </div> 
        </div>
    )
}

export default SectionCard