import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

export default function SocialMedia() {
 return (
  <div className="flex items-center gap-x-2">
   <a href="/">
    <FaFacebookF className="bg-[#8B941F] cursor-pointer hover:bg-[#a2a57c] text-white rounded-full h-5 w-5 p-1" />
   </a>
   <a href="/">
    <FaInstagram className="bg-[#8B941F] cursor-pointer hover:bg-[#a2a57c] text-white rounded-full h-5 w-5 p-1" />
   </a>
   <a href="/">
    {" "}
    <FaLinkedinIn className="bg-[#8B941F] cursor-pointer hover:bg-[#a2a57c] text-white rounded-full h-5 w-5 p-1" />
   </a>
   <a href="/">
    {" "}
    <IoLogoYoutube className="bg-[#8B941F] cursor-pointer hover:bg-[#a2a57c] text-white rounded-full h-5 w-5 p-1" />
   </a>
  </div>
 );
}
