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
  console.log(galleryImages);

  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 mt-16">
        <ImageGallery images={[galleryImages[0], galleryImages[1]]} columns={2} />
      </section>
      
      <section className='container mx-auto px-4 mt-16'>
        <div className='w-full md:w-1/2 md:ml-auto'>
          <Testimonial
            text={project.data[1]}
            linkText='Saber más'
            linkUrl='/saber-mas'
          />
        </div>
      </section>
      
      
    </main>
  );
}
