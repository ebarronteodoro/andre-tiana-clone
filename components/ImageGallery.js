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

  const isVideo = (src) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.wmv', '.flv', '.mkv', '.MOV'];
    return videoExtensions.some(ext => src.toLowerCase().endsWith(ext));
  };

  
  return (
    <div className="h-full w-full">
      <div className={`grid ${baseGridClass} gap-4 h-full`}>
        {images.map((media, index) => {
          const itemClass = horizontal ? horizontalClass : "";
          const isVideoFile = isVideo(media.src);
          

          return (
            <div
              key={index}
              className={`cursor-pointer ${itemClass} h-full relative`}
              onClick={() => handleClick(index)}
            >
              {isVideoFile ? (
                <video
                  src={media.src}
                  className="w-full h-full object-cover"
                  width={width}
                  height={height}
                />
              ) : (
                <Image
                  src={media.src}
                  alt={media.alt || `Media ${index + 1}`}
                  width={width}
                  height={height}
                  className={`w-full h-full`}
                />
              )}
              {isVideoFile && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <FsLightbox
        toggler={toggler}
        slide={activeSlide}
        sources={images.map((media) => media.src)}
        types={images.map((media) => isVideo(media.src) ? "video" : "image")}
      />
    </div>
  );
}
