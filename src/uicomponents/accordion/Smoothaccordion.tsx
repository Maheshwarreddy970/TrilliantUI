"use client"

import React from "react";
import { useState } from "react";
import { motion } from 'framer-motion';

const frequentlyAskQuestions = [
    {
        title: "Accordion1",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque incidunt error, at possimus eligendi iure"
    },
    {
        title: "Accordion2",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque incidunt error, at possimus eligendi iure"
    },
    {
        title: "Accordion3",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque incidunt error, at possimus eligendi iure"
    },
];

export const Smoothaccordion = () => {
    const [activeId, setActiveId] = useState(null);

    const togglerFunction = (index: any) => {
        if (activeId === index) {
            setActiveId(null);
        } else {
            setActiveId(index);
        }
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-[600px] bg-white dark:bg-black h-max border-b rounded-lg overflow-hidden">
                {frequentlyAskQuestions.map((item, i) => (
                    <div key={i} className="border-b last:border-b-1">
                        <motion.div
                        
                            className={`px-5 py-4 flex items-center justify-between ${activeId === i ? "" : ""
                                }`}
                            onClick={() => togglerFunction(i)}
                        >
                                {activeId === i ? (
                                    <>
                                        <p className="flex-1 text-blue-600">{item.title}</p>
                                        <svg className='transition duration-500 text-blue-600 rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                         <p className="flex-1 hover:text-blue-600 dark:text-white">{item.title}</p>
                                        <svg className='text-gray-900 dark:text-white transition duration-500 hover:text-blue-600 accordion-active:text-blue-600 accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
                                        </svg>
                                    </>
                                )}

                        </motion.div>
                        {activeId === i && (
                            <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 1,
                            }}
                            className="overflow-hidden transition-all duration-300 ease-in-out px-5 py-4 flex items-center justify-between">
                                <p>{item.description}</p>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
