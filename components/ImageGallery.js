// components/ImageGallery.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

export default function ImageGallery({ images, columns = 2 }) {
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
    <div>
      <div className={`grid ${baseGridClass} gap-4`}>
        {images.map((img, index) => {
          // Si la imagen es horizontal, se extiende en todas las columnas
          const itemClass = img.horizontal ? horizontalClass : "";
          return (
            <div
              key={index}
              className={`cursor-pointer ${itemClass}`}
              onClick={() => handleClick(index)}
            >
              <Image
                src={img.src}
                alt={img.alt || `Imagen ${index + 1}`}
                width={300}
                height={200}
                className="object-cover w-full h-auto"
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
