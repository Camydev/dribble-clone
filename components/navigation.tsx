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

/* const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
] */

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
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Find job
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

/* const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  hover:text-slate-400 ",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink> 
    </li>
  )
})
ListItem.displayName = "ListItem"
 */