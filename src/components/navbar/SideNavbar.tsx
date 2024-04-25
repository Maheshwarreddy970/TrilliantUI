
"use client"
import { motion } from 'framer-motion';
import { componentlist } from '../../lib/ComponentsConstants/componentlist';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Mina } from 'next/font/google';

const fugaz = Mina({ subsets: ['latin'], weight: ['400'] })

export function SideNavbar() {
  return (
    <Command className="h-full pb-11">
      <CommandInput className="" placeholder="Search..." />
      <CommandList className='h-full max-h-full'>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandSeparator />
        <CommandGroup className='pb-11'>
          <span className=' font-semibold  text-sm'>All Components</span>
          {componentlist.map((data, i) => (
            <CommandItem className='group bg-white  dark:bg-black' key={i}>
              <motion.button
                className='w-full h-full flex items-center justify-start'
                
                whileHover={{
                  scale: 1.1,
                  x: 10,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 ,x:0 }}
              >
                <span className={`${fugaz.className} text-sm opacity-70 group-hover:text-base group-hover:shadow-blue-500/50  group-hover:opacity-100 group-hover:text-blue-500`}>{data.Name}</span>
              </motion.button>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
