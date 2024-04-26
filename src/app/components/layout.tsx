import { SideNavbar } from '@/components/navbar/SideNavbar'
import React from 'react'

export default function page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex px-9">
      <div className="h-full w-3/12 px-12 mt-20 flex fixed justify-center">
      <SideNavbar></SideNavbar>
      </div>
      <div className="w-full mt-20 ml-80">
        {children}
      </div>
    </div>
)
}
