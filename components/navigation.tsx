"use client"

import * as React from "react"
import Link from "next/link"
import { FiTrendingUp } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { LuNotebookPen } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
//import { cn } from "@/lib/utils"
//import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" p-4 w-[250px]">
             
              <li className="hover:text-slate-400 ml-2 mt-4 mb-4">
                <Link href="#" className="flex items-center gap-2 font-bold"><FiTrendingUp /> Popular</Link>
              </li>
              <li className="hover:text-slate-400 ml-2 mt-4 mb-4">
                <Link href="#" className="flex items-center gap-2 font-bold"><BsStars /> New and Noteworthy</Link>
              </li>
              <hr />
              <li className="hover:text-slate-400 ml-2 mt-4 mb-4">
                <Link href="#" className=""> Product Design</Link>
              </li>
              <li className="hover:text-slate-400 ml-2 mt-4 mb-4">
                <Link href="#" className=""> Web Design</Link>
              </li>
              <li className="hover:text-slate-400 ml-2 mt-4 mb-4">
                <Link href="#" className=""> Animation </Link>
              </li>
              <li className="hover:text-slate-400 ml-2 mt-4 mb-4">
                <Link href="#" className=""> Branding </Link>
              </li>
              <li className="hover:text-slate-400 ml-2 mt-4 mb-4">
                <Link href="#" className=""> Illustration </Link>
              </li>
              <li className="hover:text-slate-400 ml-2 mt-4 mb-4">
                <Link href="#" className=""> Mobile </Link>
              </li>
              <li className="hover:text-slate-400 ml-2 mt-4 mb-4">
                <Link href="#" className=""> Typography </Link>
              </li>
              <li className="hover:text-slate-400 ml-2 mt-4 mb-4">
                <Link href="#" className=""> Print </Link>
              </li>
           
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Hire a Designer</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" p-4 w-[250px]">
             
              <li className="hover:text-slate-400 ml-2 mt-4 mb-4">
                <Link href="#" className="flex items-center gap-2 font-bold"><VscSearch /> Browse Designers</Link>
              </li>
              <li className="hover:text-slate-400 ml-2 mt-4 mb-4">
                <Link href="#" className="flex items-center gap-2 font-bold"><LuNotebookPen />Submit a Project Brief</Link>
              </li>
              <li className="hover:text-slate-400 ml-2 mt-4 mb-4">
                <Link href="#" className="flex items-center gap-2 font-bold"><IoNewspaperOutline />Post a Job</Link>
              </li>
              <li className="hover:text-slate-400 ml-2 mt-4 mb-4">
                <Link href="#" className="flex items-center gap-2 font-bold"><BsExclamationCircle />Hirring on Dribbble</Link>
              </li>
              
           
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="/jobs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Find job
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

