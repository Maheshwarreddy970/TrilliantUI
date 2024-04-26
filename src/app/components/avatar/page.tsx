import React from 'react'
import { AvatarList } from '@/lib/ComponentsConstants/componentslist/avatar'


export default function page() {
  return (
    <div>
      <h3 className=' text-3xl font-bold mb-2'>Avatar</h3>
      <h1 className=' opacity-85  mb-8'>An Avatar component displays a small image or icon representing a user or entity, commonly used in user profiles and comments for quick identification.</h1>
      {
        AvatarList.map((data, i) => (
          <>
            <div className="my-6 flex gap-10 p-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                {data.Component}
            </div>
          </>
        ))
      }
    </div>
  )
}
