// components/Testimonial.js
"use client";
import React from "react";

export default function Testimonial({
  text,
  linkText = "Saber más",
  linkUrl = "#",
  imageSrc,         // opcional
  imageAlt = "",
  imagePosition = "left" // "left" o "right"
}) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      {imageSrc && imagePosition === "left" && (
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img src={imageSrc} alt={imageAlt} className="w-full h-auto object-cover" />
        </div>
      )}
      <div className="w-full md:w-[68%]">
        <blockquote>
          <p className="text-base md:text-[27px]">{text}</p>
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
