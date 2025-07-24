import img from "../../assets/images/heroBackground.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";

import "swiper/css";
export default function Hero() {
 return (
  <section className="relative w-full md:h-[862px] h-[440px] ">
   <img
    src={img}
    alt="Background"
    className="absolute md:h-[800px] h-[440px]  object-center inset-0 w-full  z-0"
   />
   <div className="absolute inset-0 bg-gradient-to-b from-[#092820] z-10" />

   <div className="relative z-20 flex items-center justify-center h-full">
    <Swiper
     spaceBetween={1}
     slidesPerView={1}
     autoplay={{
      delay: 4000,
      disableOnInteraction: false,
     }}
     modules={[Autoplay, Navigation, Pagination]}
     navigation
     pagination={{ clickable: true }}
     className="hero-swiper relative"
    >
     <SwiperSlide className=" swpslider  absolute h-full">
      <div className="flex flex-col justify-center items-center md:h-[700px] h-[200px] relative ">
       <div>
        <div className="flex-grow  border-t w-44 border-2 text-white mx-auto md:mb-10 mb-5"></div>
        <h1 className="text-white md:text-5xl text-xl text-pretty text-center">
         Revestimentos e Louças de Alto Padrão
        </h1>
        <div className="flex-grow border-b w-44 border-2 text-white mx-auto mt-10"></div>
       </div>
      </div>
     </SwiperSlide>
     <SwiperSlide className=" swpslider  absolute h-full">
      <div className="flex flex-col justify-center items-center md:h-[700px] h-[200px] relative ">
       <div>
        <div className="flex-grow  border-t w-44 border-2 text-white mx-auto md:mb-10 mb-5"></div>
        <h1 className="text-white md:text-5xl text-xl text-pretty text-center">
         Why do we use it?
        </h1>
        <div className="flex-grow border-b w-44 border-2 text-white mx-auto mt-10"></div>
       </div>
      </div>
     </SwiperSlide>
     <SwiperSlide className=" swpslider  absolute h-full">
      <div className="flex flex-col justify-center items-center md:h-[700px] h-[200px]  relative ">
       <div>
        <div className="flex-grow  border-t w-44 border-2 text-white mx-auto md:mb-10 mb-5"></div>
        <h1 className="text-white md:text-5xl text-xl text-pretty text-center">
         What is Lorem Ipsum?
        </h1>
        <div className="flex-grow border-b w-44 border-2 text-white mx-auto mt-10"></div>
       </div>
      </div>
     </SwiperSlide>
    </Swiper>
   </div>
  </section>
 );
}
