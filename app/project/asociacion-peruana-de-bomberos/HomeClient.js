import React from "react";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import Testimonial from "@/components/Testimonial";
import { getSlugProjects } from '@/lib/data'

export default async function HomeClient() {

  const { projects } = await getSlugProjects()
  const project = projects.find(p => p.slug === "asociacion-peruana-de-bomberos")

  // Usamos directamente el array galleryImages del proyecto
  const galleryImages = project.galleryImages;
  // console.log(galleryImages);

  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[3], galleryImages[4]]} columns={2} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[2]]} horizontal={true} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[6], galleryImages[13]]} columns={2} />
      </section>
      {/* <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[12]]} columns={1} />
      </section> */}

      
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
        <ImageGallery images={[galleryImages[7]]} columns={1} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16 max-h-[744px] overflow-hidden relative flex items-center justify-center">
        <ImageGallery images={[galleryImages[5], galleryImages[14]]} columns={2} width={1920} height={1920}/>
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
      <section className="container mx-auto px-4 mt-4 md:mt-16 max-h-[847.91px] overflow-hidden relative flex items-center justify-center">
        <ImageGallery images={[galleryImages[1]]} horizontal={true} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16 max-h-[847.91px] overflow-hidden relative flex items-center justify-center">
        <ImageGallery images={[galleryImages[15]]} horizontal={true} width={862} height={487} />
      </section>
      {/* <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[16]]} columns={1} />
      </section> */}
      
    </main>
  );
}
