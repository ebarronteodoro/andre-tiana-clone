import React from "react";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import Testimonial from "@/components/Testimonial";
import { getSlugProjects } from '@/lib/data'

export default async function HomeClient() {

  const { projects } = await getSlugProjects()
  const project = projects.find(p => p.slug === "verdant-inmobiliaria")

  // Usamos directamente el array galleryImages del proyecto
  const galleryImages = project.galleryImages;
  // console.log(galleryImages);

  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[7]]} horizontal={true} width={3000} height={2000} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[6]]} horizontal={true} width={3020} height={1456} />
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
        <ImageGallery images={[galleryImages[11]]} horizontal={true} width={3000} height={2000} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[1]]} horizontal={true} width={3014} height={1440} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[4],galleryImages[5]]} columns={2}/>
      </section>
      {/* <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[5]]} horizontal={true} width={3014} height={1440} />
      </section> */}
      
      {/* <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[3], galleryImages[7]]} columns={2} />
      </section> */}
      {/* <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[1], galleryImages[4]]} columns={2} />
      </section> */}
      
      {/* 
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[7], galleryImages[8]]} columns={2} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[9]]} columns={2} />
      </section> */}


      <section className='container mx-auto px-4 mt-4 md:mt-16'>
        <div className='w-full md:w-1/2 md:ml-auto'>
          <Testimonial
            text={project.data[2]}
            linkText='Saber más'
            linkUrl='/saber-mas'
          />
        </div>
      </section>

      {/* <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[9], galleryImages[8]]} columns={2} />
      </section> */}
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[9]]} horizontal={true} width={3000} height={2000} />
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[8]]} horizontal={true} width={3000} height={2000} />
      </section>

    </main>
  );
}
