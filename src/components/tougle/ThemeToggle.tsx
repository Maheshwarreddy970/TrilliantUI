"use client";

import { useTheme } from 'next-themes'
import { motion } from "framer-motion";
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <>
            <motion.button
                name="light-switch"
                className="justify-center items-center"
                whileTap={{ scale: 0.50, rotate: 360 }}
                onClick={() => {
                    if (theme === 'dark') {
                        return setTheme('light')
                    }
                    return setTheme('dark')
                }}
            >        <Sun size={20} strokeWidth={0.75} className='hidden dark:block'></Sun>
                <Moon size={20} strokeWidth={0.75} className='dark:hidden' ></Moon>
            </motion.button>
        </>
    )
}
