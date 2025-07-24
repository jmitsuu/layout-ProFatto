import companyImg from "../../assets/images/imgCompany.png";
import { previewAboutData } from "./model.previewAbout";
import Animation from "../../utils/AboutSectionAnimations";
import { useEffect } from "react";
export default function PreviewAbout() {
 useEffect(() => {
  const mq = window.matchMedia("(min-width: 1024px)");
  if (mq.matches) {
   Animation.ImageAnimation();
   Animation.companyCardAnimation();
  }
 }, []);
 return (
  <section className="w-full container mx-auto my-10">
   <div className="flex w-full xl:flex-row flex-col px-4 md:px-0">
    <img
     src={companyImg}
     alt="Background"
     className="w-full max-w-[800px] verticalImage rounded-lg h-auto object-cover xl:w-[600px] 2xl:w-[800px] md:h-[500px] xl:h-[562px] "
    />
    <div className="whoAmICard w-full flex flex-col justify-center md:items-start items-center md:px-10  md:mt-0 mt-5  ">
     <h1 className="text-4xl underline underline-offset-[20px] decoration-[#545738]">
      Sobre <span className="text-[#8B941F]">Nós</span>
     </h1>
     <div className="mt-10 text-pretty text-xl xl:w-[600px]">
      <p>
       Lorem ipsum dolor sit amet consectetur. Massa vitae in sed pharetra. Id
       sit purus urna sed facilisis cursus fringilla. Dignissim elit diam purus
       tellus tristique nec senectus turpis tellus. Risus nam amet risus vitae
       tristique vestibulum gravida luctus vulputate. Lorem nunc etiam hendrerit
       diam pulvinar eu. Placerat sed nunc vel eget curabitur.
      </p>
      <br />
      <p>
       Risus nam amet risus vitae tristique vestibulum gravida luctus vulputate.
       Lorem nunc etiam hendrerit diam pulvinar eu. Placerat sed nunc.
      </p>
      <div className="flex flex-row flex-wrap justify-between mb-10 mt-5 gap-4">
       {previewAboutData.map((item, index) => {
        return (
         <div
          key={index}
          className="flex flex-col items-center font-bold min-w-[120px]"
         >
          <h2 className="text-3xl text-[#8B941F] font-extrabold">{item.qtd}</h2>
          <p className="text-2xl font-semibold text-pretty text-center">
           {item.quote}
          </p>
         </div>
        );
       })}
      </div>
      <a
       href="/"
       className="md:inline-block flex  px-3 py-2 justify-center uppercase font-bold rounded-md text-sm bg-[#8B941F] hover:bg-[#a2a57c] text-white transition-colors"
      >
       Saiba Mais
      </a>
     </div>
    </div>
   </div>
  </section>
 );
}
