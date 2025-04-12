// components/Testimonial.js
"use client";
import React from "react";

export default function Testimonial({
  text = "", // Agregamos un valor por defecto
  linkText = "Saber más",
  linkUrl = "#",
  imageSrc,         // opcional
  imageAlt = "",
  imagePosition = "left" // "left" o "right"
}) {
  // Función para procesar el texto y convertir <br/> en elementos JSX
  const renderText = (text) => {
    if (!text) return null; // Validación adicional
    
    return text.split('<br/>').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('<br/>').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="flex flex-col md:flex-row items-center">
      {imageSrc && imagePosition === "left" && (
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img src={imageSrc} alt={imageAlt} className="w-full h-auto object-cover" />
        </div>
      )}
      <div className="w-full md:w-[68%]">
        <blockquote>
          <p className="text-base md:text-[27px]">{renderText(text)}</p>
          {/* <a href={linkUrl} className="block text-[#e61428] mt-4">
            {linkText}
          </a> */}
        </blockquote>
      </div>
      {imageSrc && imagePosition === "right" && (
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <img src={imageSrc} alt={imageAlt} className="w-full h-auto object-cover" />
        </div>
      )}
    </div>
  );
}
