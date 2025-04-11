// components/ImageGallery.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

export default function ImageGallery({ images, columns = 2, isFull=true }) {
  const [toggler, setToggler] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  // Definimos la clase base del grid según la cantidad de columnas deseadas
  const baseGridClass =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-3";

  // Clase para imagen horizontal según cantidad de columnas (si no es 1)
  const horizontalClass =
    columns === 1 ? "" : columns === 2 ? "sm:col-span-2" : "sm:col-span-3";

  const handleClick = (index) => {
    setActiveSlide(index + 1); // FS Lightbox usa slides iniciando en 1
    setToggler(!toggler);
  };

  return (
    <div className="h-full">
      <div className={`grid ${baseGridClass} gap-4 h-full`}>
        {images.map((img, index) => {
          // Si la imagen es horizontal, se extiende en todas las columnas
          const itemClass = img.horizontal ? horizontalClass : "";
          return (
            <div
              key={index}
              className={`cursor-pointer ${itemClass} h-full ${isFull=== false && "max-h-[847.91px]"}`}
              onClick={() => handleClick(index)}
            >
              <Image
                src={img.src}
                alt={img.alt || `Imagen ${index + 1}`}
                width={1000}
                height={600}
                className={`w-full h-auto object-cover h-full ${isFull=== false && "max-h-[847.91px]"}`}
              />
            </div>
          );
        })}
      </div>
      <FsLightbox
        toggler={toggler}
        slide={activeSlide}
        sources={images.map((img) => img.src)}
      />
    </div>
  );
}
