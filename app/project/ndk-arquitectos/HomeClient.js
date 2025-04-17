import React from "react";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import Testimonial from "@/components/Testimonial";
import { getSlugProjects } from '@/lib/data'

export default async function HomeClient() {

  const { projects } = await getSlugProjects()
  const project = projects.find(p => p.slug === "ndk-arquitectos")

  // Usamos directamente el array galleryImages del proyecto
  const galleryImages = project.galleryImages;
  // console.log(galleryImages);

  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[5]]} horizontal={true} width={1920} height={1057}/>
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[4]]} horizontal={true} width={1920} height={1054}/>
      </section>
{/* 
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[2], galleryImages[3]]} columns={2} />
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
        <ImageGallery images={[galleryImages[8]]} horizontal={true} width={1920} height={1054}/>
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[6]]} horizontal={true} width={1920} height={1054}/>
      </section>
      {/* <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[0]]} horizontal={true} />
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

      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[0]]} horizontal={true} width={1920} height={1062}/>
      </section>

      <section className='container mx-auto px-4 mt-4 md:mt-16'>
        <div className='w-full md:w-1/2 md:ml-auto'>
          <Testimonial
            text={project.data[3]}
            linkText='Saber más'
            linkUrl='/saber-mas'
          />
        </div>
      </section>

      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[9]]} horizontal={true} width={1920} height={1062}/>
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[11]]} horizontal={true} width={1920} height={1062}/>
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[10]]} horizontal={true} width={1920} height={1062}/>
      </section>
      <section className="container mx-auto px-4 mt-4 md:mt-16">
        <ImageGallery images={[galleryImages[2]]} horizontal={true} width={1920} height={1062}/>
      </section>
      
      
    </main>
  );
}
