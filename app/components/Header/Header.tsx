import { NavLink } from "react-router";
import logo from "../../assets/images/logo_profatto.png";
import { navLinks } from "./model.header";
import { FaWhatsapp } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import SocialMedia from "../socialmedia/SocialMedia";

export default function Header() {
 return (
  <header className="w-full  mx-auto flex md:justify-center md:px-0">
   <div className="absolute flex md:flex-col justify-between lg:container md:px-40 w-full items-center z-50 mt-5">
    <div className="flex w-full md:justify-between gap-x-10 lg:px-2 px-0">
     <img
      src={logo}
      alt="Logo Profatto"
      className="border-0 h-full lg:w-[216px] w-[200px]  object-contain cursor-pointer md:mb-0 mb-2"
     />

     <div className="lg:flex flex-wrap hidden items-center space-x-4">
      <h1 className="text-white lg:text-base text-xs flex items-center gap-x-2">
       <FaWhatsapp />
       (48) 3207-2222
      </h1>
      <div className="md:flex items-center gap-x-2 hidden">
       <SocialMedia />
       <a
        href="/"
        aria-label="Contato"
        className="px-3 py-2 uppercase cursor-pointer text-white bg-gradient-to-br from-[#8B941F] to-green-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg  text-center me-2 mb- "
       >
        Contato
       </a>
      </div>
     </div>
    </div>
    <nav className=" justify-between md:space-x-6 md:text-sm lg:text-xl lg:px-10  md:w-full text-pretty lg:flex hidden">
     {navLinks.map((link) => {
      return (
       <NavLink
        key={link.label}
        to={link.href}
        className={({ isActive }: { isActive: boolean }) =>
         `cursor-pointer ${isActive ? "text-[#8B941F] " : "text-white "}`
        }
       >
        {link.label}
       </NavLink>
      );
     })}
    </nav>
    <ImMenu className="lg:hidden absolute right-2 flex text-7xl  text-[#8B941F]  " />
   </div>
  </header>
 );
}
