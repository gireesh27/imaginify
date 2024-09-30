"use client";
import React from 'react'
import Image from 'next/image'
import {Sheet,SheetContent,SheetTrigger,} from "@/components/ui/sheet"

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button';
  

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <header className='header'>
        <Link href="/" className='  flex items-center gap-2 md:py-2'>
          <Image className="w-auto h-auto"
          src="/assets/images/logo-text.svg" 
          alt="logo" 
          width={180} 
          height={28} 
          priority />
        </Link>

        <nav className='flex gap-2'>
            <SignedIn>
                <UserButton />
                <Sheet>
                  <SheetTrigger>
                    <Image src="/assets/icons/menu.svg"
                     alt="menu"
                     width={32}
                     height={32}
                     className='cursor-pointer w-auto h-auto'
                    />
                  </SheetTrigger>
                  <SheetContent>
                    <>
                    <Image className="w-auto h-auto"
                    src="/assets/images/logo-text.svg" 
                    alt="logo" 
                    width={152} 
                    height={23} 
                    priority />  
                    <ul className="header-nav_elements">
              {navLinks.map((link,index) => {
                const isActive = link.route === pathname

                return (
                  <li 
                    className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                    key={index}
                    >
                    <Link className="sidebar-link cursor-pointer" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>  
                    </>
                </SheetContent>
                </Sheet>
            </SignedIn>

            <SignedOut>
               <Button asChild className='button bg-purple-gradient bg-cover'>
              <Link href="/sign-in" >Login</Link>
            </Button>
          </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav