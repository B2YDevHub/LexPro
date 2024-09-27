'use client'

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { FaWhatsapp } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavLinkProps {
  side?: "left" | "top" | "right" | "bottom" | undefined;
  align?: "center" | "start" | "end" | undefined
}

export function NavLink ({side, align}: NavLinkProps) {
  const path = usePathname()
    return (
      <>
        <nav className="tablet:flex hidden items-center flex-1 justify-evenly max-w-[50rem]">
          <Link href="/" className={`text-4 font-bold uppercase hover:text-brown400 ${path == '/' ? 'text-brown400' : 'text-gray500' } transition-all`}>
            Home
          </Link>
          <Link href="office" className={`text-4 text-nowrap font-bold uppercase hover:text-brown400 ${path == '/office' ? 'text-brown400' : 'text-gray500' } transition-all`}>
            O Escritório
          </Link>
          <Link href="acting" className={`text-4 font-bold uppercase hover:text-brown400 ${path == '/acting' ? 'text-brown400' : 'text-gray500' } transition-all`}>
            Atuação
          </Link>
          <Link href="contact" className={`text-4 font-bold uppercase hover:text-brown400 ${path === '/contact' ? 'text-brown400' : 'text-gray500'} transition-all`}>
            Contato
          </Link>
        </nav>

        <DropdownMenu.Root modal={false}>
          <DropdownMenu.Trigger className="tablet:hidden" asChild>
            <button className="text-white">
              <RxHamburgerMenu className="size-6"/>
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="tablet:hidden z-20 bg-gray800 rounded space-y-4 px-2 py-4 mt-5 -mr-5" side={side} align={align}>

              <DropdownMenu.Item className="DropdownMenuItem">
                <Link href="/" className={`text-3 font-bold uppercase hover:text-brown400 ${path == '/' ? 'text-brown400' : 'text-gray500' } transition-all`}>
                  Home
                </Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item className="DropdownMenuItem">
                <Link href="office" className={`text-3 text-nowrap font-bold uppercase hover:text-brown400 ${path == '/office' ? 'text-brown400' : 'text-gray500' } transition-all`}>
                  O Escritório
                </Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item className="DropdownMenuItem" disabled>
                <Link href="acting" className={`text-3 font-bold uppercase hover:text-brown400 ${path == '/acting' ? 'text-brown400' : 'text-gray500' } transition-all`}>
                  Atuação
                </Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item className="DropdownMenuItem" disabled>
                <Link href="contact" className={`text-3 font-bold uppercase hover:text-brown400 ${path === '/contact' ? 'text-brown400' : 'text-gray500'} transition-all`}>
                  Contato
                </Link>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className="h-[1px] w-full bg-gray400" />

              <DropdownMenu.Item className="DropdownMenuItem" disabled>
                <Link href="contact" className="text-green">
                  <FaWhatsapp className="size-5"/>
                </Link>
              </DropdownMenu.Item>
              
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </>
    )
}