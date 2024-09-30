import { FaLocationDot, FaYoutube } from "react-icons/fa6";
import { FaPhoneAlt, FaLinkedin, FaInstagram  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function TopBar () {
    return (
        <div className="bg-gray900 w-full py-6 px-8 tablet:px-[8.5rem] flex items-center justify-between">
            <div className="flex items-center gap-10">
                <span className="cell:flex text-nowrap hidden items-center space-x-2.5">
                    <FaLocationDot className="fill-brown400 size-5"/>
                    <p className="text-[1rem] font-medium text-gray500">Rua 987, St. Pedro, Goiânia-GO.</p>
                </span>
                <span className="max-[450px]:hidden text-nowrap flex items-center space-x-2.5">
                    <FaPhoneAlt className="fill-brown400 size-5"/>
                    <p className="text-[1rem] font-medium text-gray500">+55 62 98765-4321</p>
                </span>
                <span className="text-nowrap flex items-center space-x-2.5">
                    <MdEmail className="fill-brown400 size-5"/>
                    <p className="text-[1rem] font-medium text-gray500">contato@lexpro.adv.br</p>
                </span>
            </div>

            <Nav/>
        </div>
    )
}

export const Nav = () => {
    return (
        <nav className="max-[450px]:flex-1 max-[450px]:space-x-12 flex items-center justify-end space-x-4">
            <a href="">
            <FaInstagram className="fill-brown400 size-5 hover:scale-125 transition-all"/>
            </a>
            <a href="">
            <FaYoutube className="fill-brown400 size-5 hover:scale-125 transition-all"/>
            </a>
            <a href="">
            <FaLinkedin className="fill-brown400 size-5 hover:scale-125 transition-all"/>
            </a>
       </nav>  
    )
}