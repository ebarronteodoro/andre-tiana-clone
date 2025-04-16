import React from "react";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import Testimonial from "@/components/Testimonial";
import { getSlugProjects } from '@/lib/data'

export default async function HomeClient() {

  const { projects } = await getSlugProjects()
  const project = projects.find(p => p.slug === "santa-cruz")

  // Usamos directamente el array galleryImages del proyecto
  const galleryImages = project.galleryImages;
  
  

  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 mt-4 md:mt-16 max-h-[847.91px] overflow-hidden relative flex items-center justify-center">
        <ImageGallery images={[galleryImages[6]]} horizontal={true} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16 overflow-hidden relative flex items-center justify-center">
        <ImageGallery images={[galleryImages[2], galleryImages[3]]} columns={2} />
      </section>
     

      <section className='container mx-auto px-4 mt-4 md:mt-16 max-h-[744px] overflow-hidden relative flex items-center justify-center'>
        <div className='w-full md:w-1/2 md:ml-auto'>
          <Testimonial
            text={project.data[1]}
            linkText='Saber más'
            linkUrl='/saber-mas'
          />
        </div>
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16 Overflow-hidden relative flex items-center justify-center">
        <ImageGallery images={[galleryImages[1]]} horizontal={true} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16 max-h-[847.91px] overflow-hidden relative flex  justify-center">
        <ImageGallery images={[galleryImages[5]]} horizontal={true} />
      </section>
      
      {/* 
      <section className="container mx-auto px-4 mt-4 md:mt-16 max-h-[744px] overflow-hidden relative flex items-center justify-center">
        <ImageGallery images={[galleryImages[7], galleryImages[8]]} columns={2} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16 max-h-[744px] overflow-hidden relative flex items-center justify-center">
        <ImageGallery images={[galleryImages[9]]} columns={2} />
      </section> */}


      {/* <section className='container mx-auto px-4 mt-4 md:mt-16 max-h-[744px] overflow-hidden relative flex items-center justify-center'>
        <div className='w-full md:w-1/2 md:ml-auto'>
          <Testimonial
            text={project.data[2]}
            linkText='Saber más'
            linkUrl='/saber-mas'
          />
        </div>
      </section> */}


    </main>
  );
}
