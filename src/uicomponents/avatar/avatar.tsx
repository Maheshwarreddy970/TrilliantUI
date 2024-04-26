"use client"

import React from 'react'
import { useState } from 'react'
import { motion } from "framer-motion"


export default function Avatar() {
    return (
        <>
            <Messageavatar></Messageavatar>
            <Ringavatar></Ringavatar>
            <Flipavatar></Flipavatar>
            <Dotavatar></Dotavatar>
        </>
    )
}
// messageavatar animation
const avatarhandvariants = {
    hover: {
        scale: [0.9, 1.1, 1.1, 0.9],
        rotate: [0, 100, -60, 0],
        loop: Infinity
    },
    initial: {
        rotate: 0
    }
}
const avatarvariants = {
    hover: {
        y: -100,
        scale: [1.1, 1],
        opacity: 1
    },
    initial: {
        opacity: 0,
        y: -30,
    }
}


function Messageavatar() {
    const [isHovered, setIsHovered] = useState(false);
    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }
    return (
        <button
            className="rounded-full">
            <img
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                src="/avatar.jpg"
                alt="avatar image"
                className="h-16  duration-500 hover:scale-75 w-16 rounded-full object-cover"
            />
            <motion.div
                variants={avatarvariants}
                animate={isHovered ? "hover" : "initial"}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
                className="flex-1 opacity-0  bg-white shadow-xl p-1 rounded-lg mb-2 relative">
                <span className="flex text-gray-950 m-0">Heyy<motion.span
                    variants={avatarhandvariants}
                    animate={isHovered ? "hover" : "initial"}
                    transition={{
                        duration: 2,
                        yoyo: Infinity,
                    }}
                >👋</motion.span></span>
            </motion.div>
        </button>
    )
}




function Ringavatar() {
    return (
        <motion.button className="h-16 w-16 hover:border-2 rounded-full border-green-400">
            <motion.img
                whileHover={{
                    scale: 0.9
                }}
                src="/avatar.jpg"
                alt="avatar image"
                className="w-full h-full rounded-full object-cover"
            />
        </motion.button>
    )
}


function Flipavatar() {
    return (
        <motion.img
            whileTap={{ scale: 0.95 }}
            whileHover={{
                rotateY: 360,
                transition: { duration: 0.7 },
            }}
            src="/avatar.jpg"
            alt="avatar image"
            className="h-16 w-16 rounded-full object-cover"
        />
    )
}



function Dotavatar(){
    return(
        <div className="group flex relative">
        <img
          src="/avatar.jpg"
          alt="avatar image"
          className="h-16 w-16 rounded-full object-cover"
        />
        <span className="left-12 absolute group-hover:block hidden w-4 h-4 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
    )
}