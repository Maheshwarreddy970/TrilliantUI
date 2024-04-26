"use client"
import { useState } from "react";
import { SideNavbar } from "@/components/navbar/SideNavbar";
import { ChevronsDown } from "lucide-react";
import { motion } from 'framer-motion';


const avatarhandvariants={
  hover:{
    scale: [0.9,1.1,1.1,0.9],
    rotate: [0,100,-60,0],
    loop:Infinity
  },
  initial:{
    rotate:0
  }
}
const avatarvariants={
  hover:{
    y:-100,
    scale: [1.1, 1],
    opacity:1
  },
  initial:{
    opacity:0,
    y:-30 ,
  }
}

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div className="flex mr-12">
      <div className="  fixed h-full w-3/12 px-12 mt-20 flex justify-center">
        <SideNavbar></SideNavbar>
      </div>
      <div className=" w-full mt-20 ml-80  block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex gap-5 p-5">
        </div>
      </div>
    </div>
  );
}
