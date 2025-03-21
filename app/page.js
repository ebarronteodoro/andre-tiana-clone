import Header from "@/components/Header";
import { getCategories } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import TypewriterHeader from "./functions/TypewriterHeader.js";

export const metadata = {
  title: "Work — Browse by type of client",
  description: "Portfolio of Pentagram design agency",
};

export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="min-h-screen !relative">
      <section className="!relative w-full h-[90dvh] bg-[#1a47c4]">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white text-center">
          <TypewriterHeader
            text="A multidisciplinary, independent design studio driven by creativity
          and strategy"
          />
        </h1>

        <span className="text-white !absolute bottom-8 left-0 right-0 text-center">
          based in Lima - Peru
        </span>
      </section>
      <section className="!relative w-full h-[90dvh] bg-[#B3AE4C]">
        <div className="absolute bottom-32 left-24">
          <Image
            className="h-auto object-contain !w-200 md:w-56"
            src="/AyT.png"
            alt="Logo AyT"
            width={500}
            height={100}
          />
        </div>
        <blockquote className="absolute right-32 bottom-32 w-70">
          <div className="w-auto relative">
            <Image
              className="h-auto object-contain !w-12 md:w-8 absolute -left-16 -top-6"
              src="/comilla.png"
              alt="Logo AyT"
              width={500}
              height={100}
            />

            <p className="!text-[#796D2A] text-4xl ">
              Diseño enfocado en cretividad, branding y diseño visual, con un
              estilo{" "}
              <span className="!text-[#796D2A] font-bold">
                sofisticado y artístico
                <Image
                  className="h-auto object-contain !w-12 md:w-8 absolute right-16 -bottom-6 rotate-180"
                  src="/comilla.png"
                  alt="Logo AyT"
                  width={500}
                  height={100}
                />
              </span>
            </p>
          </div>
        </blockquote>
      </section>
    </main>
  );
}
