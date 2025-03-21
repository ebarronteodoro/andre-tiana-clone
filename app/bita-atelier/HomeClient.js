"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { getCategories } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

export default function HomeClient() {
  const [toggler, setToggler] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  const galleryImages = ["/edificio.png", "/edificio.png"];
  const galleryImages2 = ["/bolsa-atelier.jpg"];

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Resto del componente */}
      <section className="container mx-auto px-4 mt-16">
        <div className=" flex flex-col md:flex-row md:items-center md:justify-between relative">
          <div className="w-full">
            <h1 className="text-[55px] font-medium -mt-12 md:mt-0 mb-16 md:mb-0">
              Bita - Atelier
            </h1>
            <span>Diseña consciente</span>
          </div>
          <div className="w-full max-w-[740px] mr-8">
            <p className="text-2xl font-medium">
              Bita Atelier es una marca peruana que diseña con conciencia
              ambiental, artística y social, a través de bitácoras que es su
              producto estrella
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 mt-16">
        <div>
          <Image
            src="/bita-atelier-gif.gif"
            className="w-full h-auto"
            width={100}
            height={200}
            alt="Animación"
            unoptimized
          />
        </div>
      </section>
      <section className="container mx-auto px-4 mt-16">
        <div className="w-1/2 ml-auto">
          <blockquote>
            <p className="block text-2xl">
              Bita atelier es una marca peruana que fomenta una consciencia
              ambiental, artística y social. Trabajan de la mano con artesanos
              peruanos diseñando productos con materiales ecoamigables que
              permitan a los usuarios aprender a cuidar y amar el planeta,
              porque Bita atelier “Diseña consciente”.
            </p>
            <span className="block text-[#e61428] mt-4">Saber más</span>
          </blockquote>
        </div>
      </section>
      <section className="container mx-auto px-4 mt-16">
        {/* Galería de imágenes */}
        <div className="grid grid-cols-2 gap-4">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => {
                setActiveSlide(index + 1); // FS Lightbox usa slides comenzando en 1
                setToggler(!toggler); // Cambia el toggler para abrir el lightbox
              }}
            >
              <Image
                src={src}
                alt={`Imagen ${index + 1}`}
                width={300}
                height={200}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {galleryImages2.map((src, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => {
                setActiveSlide(index + 1); // FS Lightbox usa slides comenzando en 1
                setToggler(!toggler); // Cambia el toggler para abrir el lightbox
              }}
            >
              <Image
                src={src}
                alt={`Imagen ${index + 1}`}
                width={300}
                height={200}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Configuración del lightbox */}
        <FsLightbox
          toggler={toggler}
          slide={activeSlide}
          sources={[...galleryImages, ...galleryImages2]}
        />
      </section>
    </main>
  );
}
