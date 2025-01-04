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
                                <SelectItem value="n">New & Noteworthy</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                </div>
       
                <div className='flex'>

                    <div>
                        <button className="inline-flex items-center mb-2 btn rounded-full mr-4 bg-gray-100 hover:bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                            landing page
                        </button>
                    </div>
                    <div>
                        <button className="inline-flex items-center mb-2 rounded-full mr-4  bg-gray-100 hover:bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                            e-commerce
                        </button>
                    </div>
                    <div>
                        <button className="inline-flex items-center mb-2 rounded-full mr-4  bg-gray-100 hover:bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                            mobile app
                        </button>
                    </div>
                    <div>
                        <button className="inline-flex items-center mb-2 rounded-full mr-4  bg-gray-100 hover:bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                            logo design
                        </button>
                    </div>
                    <div>
                        <button className="inline-flex items-center mb-2 rounded-full mr-4  bg-gray-100 hover:bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                            dashboard
                        </button>
                    </div>
                    <div>
                        <button className="inline-flex items-center mb-2 rounded-full mr-4  bg-gray-100 hover:bg-gray-50 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                            icons
                        </button>
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