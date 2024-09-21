import Link from "next/link";
import { NavLink } from "./navLink";
import { FaWhatsapp } from "react-icons/fa";

export function Header () {
  return (
    <header className="w-full flex justify-between items-center bg-gray800 py-[3.75rem] px-8 tablet:px-[8.5rem]">
      <img
        src='logoH.png'
        className="w-[16.875rem]"
        alt="Logo"
      />

      <NavLink side="left" align="start"/>

      <Link href="#" className="tablet:flex text-[0.875rem] bg-green gap-4 rounded-[3px] px-5 py-4 hidden items-center font-bold text-nowrap uppercase text-white transition-all hover:opacity-80">
        <FaWhatsapp className="size-5"/> Falar com especialista
      </Link>
    </header>
  )
}