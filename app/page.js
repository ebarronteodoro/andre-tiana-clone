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
      <section className="!relative w-full h-[90dvh] bg-[#1a47c4]">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white text-center font-cardo" >
          <TypewriterHeader
            text="A multidisciplinary, independent design studio driven by creativity
          and strategy"
          />
        </h1>

        <span className="text-white !absolute bottom-8 left-0 right-0 text-center font-cardo">
          based in Lima - Peru
        </span>
      </section>
      <section className="relative w-full h-[90dvh] bg-[#B3AE4C] flex flex-col md:flex-row items-center justify-center">
        {/* Contenedor de la imagen */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8">
          <Image
            className="h-auto object-contain w-40 md:w-56 lg:w-[600px] xl:w-[800px]"
            src="/AyT.png"
            alt="Logo AyT"
            width={800}
            height={200}
          />
        </div>
        {/* Contenedor del blockquote */}
        <blockquote className="w-full max-w-lg px-4 text-center md:text-left">
          <div className="relative">
            {/* Comilla superior */}
            <Image
              className="hidden md:block h-auto object-contain w-8 lg:w-10 absolute -left-10 -top-6"
              src="/comilla.png"
              alt="Comilla"
              width={100}
              height={100}
            />
            <p className="text-[#796D2A] text-2xl md:text-3xl lg:text-4xl font-cardo">
              Diseño enfocado en creatividad, branding y diseño visual, con un estilo{" "}
              <span className="font-bold">sofisticado y artístico</span>
            </p>
            {/* Comilla inferior, girada 180 grados */}
            <Image
              className="hidden md:block h-auto object-contain w-8 lg:w-10 absolute right-10 -bottom-6 rotate-180"
              src="/comilla.png"
              alt="Comilla"
              width={100}
              height={100}
            />
          </div>
        </blockquote>
      </section>


    </main>
  );
}
