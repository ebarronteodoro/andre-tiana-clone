// components/ImageGallery.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

export default function ImageGallery({ 
  images, 
  columns = 2, 
  isFull = true, 
  horizontal = false,
  width = 1000,
  height = 600 
}) {
  const [toggler, setToggler] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  const baseGridClass =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-3";

  const horizontalClass =
    columns === 1 ? "" : columns === 2 ? "sm:col-span-2" : "sm:col-span-3";

  const handleClick = (index) => {
    setActiveSlide(index + 1);
    setToggler(!toggler);
  };

  return (
    <div className="h-full w-full">
      <div className={`grid ${baseGridClass} gap-4 h-full`}>
        {images.map((img, index) => {
          const itemClass = horizontal ? horizontalClass : "";
          return (
            <div
              key={index}
              className={`cursor-pointer ${itemClass} h-full `}
              onClick={() => handleClick(index)}
            >
              <Image
                src={img.src}
                alt={img.alt || `Imagen ${index + 1}`}
                width={width}
                height={height}
                className={`w-full h-full`}
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
