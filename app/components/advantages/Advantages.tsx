import { advantagesData } from "./model.advantages";
import Animation from "../../utils/AboutSectionAnimations";
import { useEffect } from "react";
export default function Advantages() {
 useEffect(() => {
  const mq = window.matchMedia("(min-width: 1024px)");
  if (mq.matches) {
   Animation.cardsCompany();
  }
 }, []);
 return (
  <section className="w-full container mx-auto my-20 px-4 ">
   <div className="">
    <h2 className="text-center text-4xl">
     Como a <span className="text-[#8B941F]">Profatto</span> pode te ajudar
    </h2>
    <div className="flex-grow border-b w-60 border-2 text-[#8B941F] mx-auto mt-5"></div>
    <div className="flex md:flex-row flex-col items-center justify-center space-x-10 mt-10 ">
     {advantagesData.map((advantage) => {
      return (
       <div
        className="flex flex-row md:flex-col cardProject lg:flex-row  items-center min-w-44 xl:w-[400px] md:mb-0 mb-5"
        key={advantage.index}
       >
        <div className="px-6 py-4 md:mr-5 mr-2 flex justify-center items-center rounded-full xl:text-5xl md:text-3xl sm:text-xs bg-[#8B941F] font-bold text-white">
         {advantage.index}
        </div>
        <div>
         <h1 className="text-3xl">{advantage.title}</h1>
         <p className="text-pretty">{advantage.description}</p>
        </div>
       </div>
      );
     })}
    </div>
   </div>
  </section>
 );
}
