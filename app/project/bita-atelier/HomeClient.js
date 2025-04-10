"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import Testimonial from "@/components/Testimonial";

export default function HomeClient() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // async function fetchCategories() {
    //   const data = await getCategories();
    //   setCategories(data);
    // }
    // fetchCategories();
  }, []);

  // Definición de las imágenes para la galería:
  // Cada objeto puede incluir la propiedad "horizontal" para extender la imagen.
  const galleryImages = [
    { src: "/projects/bita_atelier/building.png", alt: "Edificio" },
    { src: "/projects/bita_atelier/building.png", alt: "Edificio 2" },
    { src: "/projects/bita_atelier/bolsa-atelier.jpg", alt: "Bolsa Atelier", horizontal: true },
  ];

  return (
    <main className="min-h-screen">

      <section className="container mx-auto px-4 mt-16">
        <ImageGallery images={galleryImages} columns={2} />
      </section>
    </main>
  );
}
