"use client"
import { useState } from "react"
import { motion } from 'framer-motion';
import { TriangleAlert } from "lucide-react";

export const Alertdialog=()=> {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex justify-center items-center">
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        className="group relative m-1 inline-flex cursor-pointer items-center justify-center rounded-lg border-b-2 border-l-2 border-r-2 border-gray-200 bg-gradient-to-tr from-gray-100 to-gray-50 px-4 py-1 text-white shadow-lg transition duration-100 ease-in-out active:translate-y-0.5 active:border-gray-100 active:shadow-none   dark:active:border-gray-900 dark:border-gray-950  dark:from-gray-900 dark:to-gray-800"
      >
        <span className=" absolute h-0 w-0 rounded-full text-black dark:text-white opacity-10 transition-all duration-300 ease-out group-hover:h-32 group-hover:w-32"></span>
        <span className="relative text-sm text-gray-800 dark:text-gray-50 font-medium">Show Dialog</span>
      </motion.button>
      {open &&
        <div onClick={() => setOpen(false)} className="w-screen z-20  bg-black bg-opacity-30 fixed top-0 right-0 inset-0 flex justify-center items-center h-screen">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{duration:0.4}}
            className=" text-center shadow-xl dark:shadow-white/50 dark:shadow-md dark:border-t dark:border-white bg-white dark:bg-black rounded-lg w-2/6 p-4">
            <div className="w-full overflow-hidden">
              <p className="text-base flex mb-2 justify-center font-semibold dark:text-gray-100 text-gray-800">
                <TriangleAlert className="h-5 w-5 mr-1" />
                Are you absolutely sure?
              </p>
              <p className="font-normal text-xs dark:text-gray-200  text-gray-600">
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </p>
            </div>
            <div className="flex gap-3 mt-3 justify-end">
              <button onClick={() => setOpen(false)} className=" relative h-7 w-20 font-medium text-base overflow-hidden rounded-md border border-neutral-200 bg-transparent px-3 text-neutral-950 dark:text-neutral-100  before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full before:translate-x-full dark:before:bg-neutral-800 before:bg-neutral-100 before:transition-transform hover:before:translate-x-0"><span className=" text-sm relative">Cancle</span></button>
              <button onClick={() => alert("clicked")} className="group relative w-20 inline-flex h-7 items-center justify-center overflow-hidden rounded-md bg-neutral-950 dark:bg-neutral-50 px-3 font-medium text-neutral-200 dark:text-neutral-950"><span className="text-sm">Continue</span><div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative h-full w-8 dark:bg-black/15 bg-white/20"></div></div></button>
            </div>
          </motion.div>
        </div>
      }
    </div>
  )
}
