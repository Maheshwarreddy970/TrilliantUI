import { AccordionList } from '@/lib/ComponentsConstants/componentslist/accordionlist'
import React from 'react'

export default function page() {
  return (
    <div>
      <h3 className='text-3xl font-bold'>Accordion</h3>
      <h1 className=' opacity-85  mb-12'>An accordion component is a collapsible UI element that organizes content into sections. Each section can be expanded or collapsed independently, allowing users to easily navigate through the content.</h1>
      {
        AccordionList.map((data, i) => (
          <>
            <h1 className='text-xl underline  decoration-1 font-bold'>{data.Title}</h1>
            <div className="my-6  block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className=" p-5">
                {data.Component}
              </div>
            </div>
          </>
        ))
      }
    </div>
  )
}
