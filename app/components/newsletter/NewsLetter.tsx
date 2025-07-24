export default function NewsLetter() {
  return (
   <section className="w-full py-7 bg-[#8B941F]">
    <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40">
     <div className="flex w-full justify-between items-center flex-col lg:flex-row gap-6 lg:gap-0">
      <div className="w-full lg:w-96 text-center lg:text-left">
       <h1 className="text-2xl sm:text-3xl uppercase text-white">NewsLetter</h1>
       <h2 className="text-pretty text-white mt-3 sm:mt-5 text-sm sm:text-base">
        Cadastre-se e saiba em primeira mão as nossas principais novidades
       </h2>
      </div>
 
      <form className="flex flex-col sm:flex-row items-center justify-center w-full lg:w-auto gap-3 sm:gap-x-5">
       <input
        className="h-10 bg-gray-200 text-xs px-4 rounded-lg outline-0 w-full sm:min-w-48 md:min-w-64"
        placeholder="Cadastre seu nome"
        type="text"
       />
       <input
        className="h-10 w-full sm:min-w-48 md:min-w-64 text-xs bg-gray-200 px-4 rounded-lg outline-0"
        placeholder="Cadastre seu e-mail"
        type="text"
       />
       <button className="text-lg sm:text-xl uppercase cursor-pointer text-white bg-gradient-to-br from-[#092820] to-green-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg px-8 sm:px-14 py-2.5 text-center w-full sm:w-auto">
        Enviar
       </button>
      </form>
     </div>
    </div>
   </section>
  );
 }
 