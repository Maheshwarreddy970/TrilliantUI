
import { motion } from 'framer-motion'
import { useState } from 'react'

const tabs = ['Components','Pricing','Servives']


const Tab = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={
        selected
          ? 'relative rounded-md px-2 py-1 text-sm font-medium transition-colors'
          : 'text-black opacity-70 hover:opacity-100 dark:text-white  relative rounded-md px-2 py-1 text-sm font-medium transition-colors'
      }
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: 'spring', duration: 0.4 }}
          className="absolute shadow-md dark:shadow-inner dark:shadow-white/70 inset-0 z-0 rounded-md border"
        ></motion.span>
      )}
    </button>
  )
}

const AnimatedTabs = () => {
  const [selected, setSelected] = useState(tabs[0])
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tabs.map((tab, index) => (
        <Tab text={tab} selected={selected === tab} setSelected={setSelected} key={tab} />
      ))}
    </div>
  )
}

export default AnimatedTabs

