import { NavLink } from "react-router";
import imgLogo from "../../assets/images/logo_profatto.png";
import SocialMedia from "../socialmedia/SocialMedia";
import { webSiteData } from "./model.footer";
export default function Footer() {
 return (
  <footer className="bg-[#092820] min-h-96 flex items-center text-white py-8 px-4">
   <div className="container mx-auto flex md:flex-row flex-col  justify-center md:items-center text-center">
    <div className="md:w-72  flex flex-col items-start md:mb-0 mb-5 ">
     <img src={imgLogo} alt="Logo Profatto" className=" mb-4 h-20 md:w-full" />
     <div className="pl-4 space-y-4">
      <SocialMedia />
      <p className="text-xs">
       copyright © {new Date().getFullYear()} ProFatto.
      </p>
     </div>
    </div>
    <div className="xl:min-w-60 h-80 sm:min-w-44 min-h-44  md:ml-10">
     <h1 className="uppercase text-white xl:text-xl text-start mb-5">
      Mapa do Site
     </h1>
     <ul className="flex flex-col  justify-start items-start space-y-1 ">
      {webSiteData.map((item) => {
       return (
        <NavLink
         className="xl:text-base sm:text-sm text-gray-400 uppercase hover:text-gray-200"
         to={item.href}
        >
         {item.title}
        </NavLink>
       );
      })}
     </ul>
    </div>
    <div className="md:max-w-80 w-full h-80 md:ml-10 md:mt-0 mt-5">
     <h1 className="uppercase text-white xl:text-xl text-start mb-5">LOJA 01</h1>
     <div className="flex flex-col justify-start items-start xl:space-y-2 ">
      <h1 className="text-white font-extrabold text-pretty xl:text-base sm:text-sm">
       ProFatto Florianopolis - SC
      </h1>
      <h2 className="text-white text-start text-pretty xl:text-base sm:text-sm">
       R. Antônio Carlos Ferreira, 219 - Agronomica Florianopolis/SC - 88025-211
      </h2>
      <h1 className="text-white font-extrabold text-pretty mt-5 xl:text-base sm:text-sm">
       Horario de Atendimento:
      </h1>
      <h2 className="text-white text-start text-pretty xl:text-base sm:text-sm">
       Seg a Sex 09h as 18h | Sábado 09h as 13h
      </h2>
      <h1 className="text-white font-extrabold text-pretty mt-5">Telefone:</h1>
      <h2 className="text-white text-start text-pretty xl:text-base sm:text-sm">(48) 3113-2600</h2>
     </div>
    </div>
    <div className="max-w-80 w-full h-80 md:ml-10 md:mt-0 mt-5">
     <h1 className="uppercase text-white xl:text-xl text-start mb-5">LOJA 02</h1>
     <div className="flex flex-col  justify-start items-start xl:space-y-2 ">
      <h1 className="text-white font-extrabold text-pretty xl:text-base sm:text-sm">
       ProFatto São José - SC
      </h1>
      <h2 className="text-white text-start text-pretty xl:text-base sm:text-sm">
       R. Koesa, 247 - Kobrasol, São José/SC, 88102-310
      </h2>
      <h1 className="text-white font-extrabold text-pretty mt-5 xl:text-base sm:text-sm">
       Horario de Atendimento:
      </h1>
      <h2 className="text-white text-start text-pretty xl:text-base sm:text-sm">
       Seg a Sex 09h as 18h | Sábado 09h as 13h
      </h2>
      <h1 className="text-white font-extrabold text-pretty mt-5 xl:text-base sm:text-sm">Telefone:</h1>
      <h2 className="text-white text-start text-pretty xl:text-base sm:text-sm">(48) 3113-2600</h2>
     </div>
    </div>
   </div>
  </footer>
 );
}
