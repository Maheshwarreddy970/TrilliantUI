import React from 'react'
import { Alertdialoglist } from '@/lib/ComponentsConstants/componentslist/alertdialoglist'
export default function page() {
  return (
    <div>
      <h3 className=' text-3xl font-bold mb-2'>AlertDialog</h3>
      <h1 className=' opacity-85  mb-8'>An AlertDialog component is a modal pop-up box used to display critical information or prompt users for input in applications. It typically includes a message and action buttons for user interaction.</h1>
      {
        Alertdialoglist.map((data, i) => (
          <>
            <div className="my-6  block p-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                {data.Component}
            </div>
          </>
        ))
      }
    </div>
  )
}
