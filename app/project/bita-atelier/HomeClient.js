import React from "react";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import Testimonial from "@/components/Testimonial";
import { getSlugProjects } from '@/lib/data'

export default async function HomeClient() {

  const { projects } = await getSlugProjects()
  const project = projects.find(p => p.slug === "bita-atelier")

  // Usamos directamente el array galleryImages del proyecto
  const galleryImages = project.galleryImages;
  // console.log(galleryImages);

  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[3], galleryImages[5]]} columns={2} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[7]]} horizontal={true}/>
      </section>
      
      
      <section className='container mx-auto px-4 mt-4 md:mt-16'>
        <div className='w-full md:w-1/2 md:ml-auto'>
          <Testimonial
            text={project.data[1]}
            linkText='Saber más'
            linkUrl='/saber-mas'
          />
        </div>
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[4], galleryImages[6]]} columns={2} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[1]]} horizontal={true} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16 max-h-[744px] overflow-hidden relative flex items-center justify-center">
        <ImageGallery images={[galleryImages[12], galleryImages[15]]} columns={2} width={1080} height={1080}/>
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[8]]} horizontal={true} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[10], galleryImages[14]]} columns={2} />
      </section>

      

      <section className='container mx-auto px-4 mt-4 md:mt-16'>
        <div className='w-full md:w-1/2 md:ml-auto'>
          <Testimonial
            text={project.data[2]}
            linkText='Saber más'
            linkUrl='/saber-mas'
          />
        </div>
      </section>

     
      
      
    </main>
  );
}
