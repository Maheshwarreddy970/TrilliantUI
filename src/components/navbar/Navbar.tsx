"use client";


import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/../public/dropdevlogo.png"
import Image from "next/image";
import { Philosopher, Exo_2 } from 'next/font/google'
import ThemeToggle from "../tougle/ThemeToggle";
import AnimatedTabs from "./NavbarLinks";
import { SearchBar } from "./NavbarSearch";

const inter = Philosopher({ subsets: ['latin'], weight: ['400'] })
const inter2 = Exo_2({ subsets: ['latin'], weight: ['300'] })


export default function Navbar() {
    return (
        <nav className=" shadow-lg fixed z-10 bg-white bg-opacity-15  backdrop-filter backdrop-blur-lg  dark:bg-black flex justify-between w-full px-8 py-1 top-0">
            <div className="flex items-center gap-1">
                <Image src={Logo} alt="logo" className="h-7 w-7 ">
                </Image>
                <p className={`${inter.className} font-bold text-xl mt-1 `}>Trilliant UI</p>
            </div>
            <ul className={`${inter2.className} flex items-center`}>
                <AnimatedTabs></AnimatedTabs>
            </ul>

            <div className="flex items-center gap-3 justify-between">
            <SearchBar></SearchBar>
                <Link href={"/"} className="flex" >
                    <svg xmlns="http://www.w3.org/2000/svg" color="green" className=" text-black dark:hidden " x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                        <path className="text-white fill-black dark:fill-white" d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                    </svg>
                    <svg className="hidden dark:block" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path></g></g>
                    </svg>
                </Link>
                <ThemeToggle></ThemeToggle>
            </div>

        </nav>
    );
}



