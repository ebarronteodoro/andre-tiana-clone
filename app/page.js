import Header from "@/components/Header";
// import getProjectsByCategory from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import TypewriterHeader from "./functions/TypewriterHeader.js";

export const metadata = {
  title: "Work — Browse by type of client",
  description: "Portfolio of Pentagram design agency",
};

export default async function Home() {

  return (
    <main className="min-h-screen !relative">
      <section className="!relative w-full h-[80dvh] bg-[#1a47c4]">
        <div className="flex inset-0 w-full h-[50dvh] max-w-[1440px] mx-auto justify-center gap-[16px] sm:gap-[16px] md:gap-[32px] lg:gap-[64px]">
          <picture className="w-full max-w-[300px] relative flex items-center">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-cardo text-center">
              <TypewriterHeader
                text="Hi, I'm Andrea Loarte"
              /></span>
            <Image
              className="w-full  h-auto object-cover"
              src="/andrea-foto.png"
              alt="Foto Silueta Andrea"
              width={1920}
              height={1080}
            />
          </picture>
          <picture className="w-full max-w-[300px] relative flex items-center">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-cardo text-center">
              <TypewriterHeader
                text="and I'm Tatiana Lopez"
              /></span>
            <Image
              className="w-full h-auto object-cover"
              src="/susana-foto.png"
              alt="Foto Silueta Tiana"
              width={1920}
              height={1080}
            />
          </picture>
        </div>
        <h1 className="m-x-auto text-4xl text-white text-center font-cardo" >
          <TypewriterHeader
            text="Welcome to our Gallery"
          />
        </h1>

        <span className="block text-white mt-[32px] text-center font-cardo m-x-auto ">
          Where Desing Meets Art
        </span>

        <Link href="/dashboard" className="
        mx-auto text-center block w-fit bg-[#B3AE4C] text-[#7e760a] text-[16px] py-1 px-2  rounded-xl mt-8">Ver Proyectos</Link>
      </section>

      <section className="!relative w-full h-[80dvh] bg-white">

        <div className="flex justify-evenly items-center w-full h-[50dvh] max-w-[1440px] mx-auto">
          <div><h2 className="font-cardo">Desing Studio?</h2>
          <h2 className="font-cardo">Gallery?</h2></div>
          <div><p>Estudio multidisciplinario que fusiona creatividad y estrategia para crear identidades poderosas.</p></div>

          
        </div>
        <div className="flex justify-evenly items-center w-full h-[50dvh] max-w-[1440px] mx-auto">
          <span className="block text-[#1a47c4] mt-[32px] text-center font-cardo m-x-auto ">
          <Image
              className="w-full h-auto object-cover"
              src="/andrea-foto.png"
              width={100}
              height={100}
              >
            </Image>
            <p>CADA PROYECTO ES</p>
            
          </span>
          <picture>
            <Image
              className="w-full h-auto object-cover"
              src="/andrea-foto.png"
              width={100}
              height={100}
              >
            </Image>
          </picture>
          <span className="block text-[#1a47c4] mt-[32px] text-center font-cardo m-x-auto ">
          
            <p>UNA OBRA ÚNICA</p>
            <Image
              className="w-full h-auto object-cover"
              src="/andrea-foto.png"
              width={100}
              height={100}
              >
            </Image>
          </span>
           

          
        </div>

        
      </section>
      

      
    


    </main>
  );
}
