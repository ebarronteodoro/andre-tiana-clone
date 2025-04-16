import React from "react";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import Testimonial from "@/components/Testimonial";
import { getSlugProjects } from '@/lib/data'

export default async function HomeClient() {

  const { projects } = await getSlugProjects()
  const project = projects.find(p => p.slug === "empapa-t")

  // Usamos directamente el array galleryImages del proyecto
  const galleryImages = project.galleryImages;
  // console.log(galleryImages);

  return (
    <main className="min-h-screen">
      
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[3]]} horizontal={true} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[9]]} horizontal={true} />
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
        <ImageGallery images={[galleryImages[10], galleryImages[2]]} columns={2} />
      </section>

      {/* <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[6], galleryImages[4]]} columns={2} />
      </section> */}

      <section className="container mx-auto px-4 mt-4 md:mt-16 overflow-hidden relative flex items-center justify-center">
        <ImageGallery images={[galleryImages[6]]} horizontal={true} width={1920} height={1281}/>
      </section>

      <section className="container mx-auto px-4 mt-4 md:mt-16 overflow-hidden relative flex items-center justify-center">
        <ImageGallery images={[galleryImages[4]]} horizontal={true} width={681} height={800}/>
      </section>

      <section className="container mx-auto px-4 mt-4 md:mt-16 overflow-hidden relative flex items-center justify-center">
        <ImageGallery images={[galleryImages[8]]} horizontal={true} width={681} height={800}/>
      </section>

      <section className="container mx-auto px-4 mt-4 md:mt-16 max-h-[847.91px] overflow-hidden relative flex items-center justify-center">
        <ImageGallery images={[galleryImages[5]]} horizontal={true} />
      </section>
      
      
    </main>
  );
}
