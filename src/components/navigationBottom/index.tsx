'use client'

import { NavLink } from "../header/navLink";
import { Nav } from "../topBar";

export function NavigationBottom () {

  return (
    <div className="flex justify-between items-center bg-gray800 h-[11.33rem] px-8 tablet:px-[8.5rem]">
      <img
        src='/logoV.png'
        className="w-[8.5rem]"
        alt="Logo"
      />

      <NavLink align="end"/>
      
      <div className="tablet:flex hidden">
        <Nav/>
      </div>
    </div>
  )
}