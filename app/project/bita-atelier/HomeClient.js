"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import Testimonial from "@/components/Testimonial";

export default function HomeClient() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  // Definición de las imágenes para la galería:
  // Cada objeto puede incluir la propiedad "horizontal" para extender la imagen.
  const galleryImages = [
    { src: "/building.png", alt: "Edificio" },
    { src: "/building.png", alt: "Edificio 2" },
    { src: "/bolsa-atelier.jpg", alt: "Bolsa Atelier", horizontal: true },
  ];

  return (
    <main className="min-h-screen">
      {/* Sección principal */}
      <section className="container mx-auto px-4 mt-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between relative">
          <div className="w-full">
            <h1 className="text-4xl md:text-[55px] font-medium -mt-12 md:mt-0 mb-8 md:mb-0">
              Bita - Atelier
            </h1>
            <span className="text-lg md:text-xl">Diseña consciente</span>
          </div>
          <div className="w-full max-w-[740px] mt-8 md:mt-0">
            <p className="text-lg md:text-2xl font-medium">
              Bita Atelier es una marca peruana que diseña con conciencia ambiental, artística y social, a través de bitácoras que es su producto estrella.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de animación (directamente en el Home) */}
      <section className="container mx-auto px-4 mt-16">
        <div>
          <Image
            src="/bita-atelier-gif.gif"
            className="w-full h-auto"
            width={100}
            height={200}
            alt="Animación de Bita Atelier"
            unoptimized
          />
        </div>
      </section>

      {/* Sección de testimonio con estilos originales */}
      <section className="container mx-auto px-4 mt-16">
        <div className="w-full md:w-1/2 md:ml-auto">
          <Testimonial
            text="Bita atelier es una marca peruana que fomenta una consciencia ambiental, artística y social. Trabajan de la mano con artesanos peruanos diseñando productos con materiales ecoamigables que permitan a los usuarios aprender a cuidar y amar el planeta, porque Bita atelier ‘Diseña consciente’."
            linkText="Saber más"
            linkUrl="/saber-mas"
          />
        </div>
      </section>

      {/* Sección de galería (incluye imagen horizontal) */}
      <section className="container mx-auto px-4 mt-16">
        <ImageGallery images={galleryImages} columns={2} />
      </section>
    </main>
  );
}
