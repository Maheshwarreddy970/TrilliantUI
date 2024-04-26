"use client"

import React from "react";
import { useState } from "react";
import { motion,AnimatePresence } from 'framer-motion';

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

export const Individualaccordion = () => {
    const [activeId, setActiveId] = useState(null);

    const togglerFunction = (index: any) => {
        if (activeId === index) {
            setActiveId(null);
        } else {
            setActiveId(index);
        }
    };

    return (
        <div className=" w-11/12 flex flex-col justify-center">
            {frequentlyAskQuestions.map((item, i) => (
                <div key={i} className="bg-white dark:bg-black ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:mx-auto sm:max-w-sm sm:rounded-lg  w-full m-2 rounded-lg shadow-md">
                    <div
                        className={`px-5 w-full py-4 flex justify-center ${activeId === i ? "col-span-2 text-lg font-bold capitalize rounded-md" : ""
                            }`}
                        onClick={() => togglerFunction(i)}
                    >
                        <p className="flex-1">{item.title}</p>

                        <span>
                            {activeId === i ? (
                                <i className="fa-solid fa-angle-up"></i>
                            ) : (
                                <i className="fa-solid fa-angle-down"></i>
                            )}
                        </span>
                        <svg
                            className="fill-black dark:fill-white shrink-0 ml-8"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="7"
                                width="16"
                                height="2"
                                rx="1"
                                className={`transform origin-center transition duration-200 ease-out ${activeId === i && "!rotate-180"
                                    }`}
                            />
                            <rect
                                y="7"
                                width="16"
                                height="2"
                                rx="1"
                                className={`transform origin-center rotate-90 transition duration-200 ease-out ${activeId === i && "!rotate-180"
                                    }`}
                            />
                        </svg>
                    </div>
                                    
                    {activeId === i && (
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        
                        transition={{
                        ease:"easeInOut",
                          duration: 1,
                        }}
                            className="overflow-hidden transition-all duration-300 ease-in-out px-5 py-4 flex items-center justify-between"
                        >
                            <p>{item.description}</p>
                        </motion.div>
                    )}
                </div>
            ))}

        </div>
    );
};
