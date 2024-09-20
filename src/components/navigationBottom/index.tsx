'use client'

import { useEffect, useState } from "react";
import { NavLink } from "../header/navLink";
import { Nav } from "../topBar";

export function NavigationBottom () {
  // const [heigth, setHeigth] = useState(0)
  // console.log(heigth)
  // useEffect(() => {setHeigth(window.innerHeight)}, [window.innerHeight])
  return (
    <div className={`w-full ${1000 >= 1000 ? 'flex' : 'hidden'} justify-between items-center bg-gray800 h-[11.33rem] px-8 tablet:px-[8.5rem]`}>
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