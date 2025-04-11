import { getSlugProjects } from '@/lib/data'
import Image from 'next/image'
import Testimonial from '@/components/Testimonial'
import ImageGallery from '@/components/ImageGallery'
import { renderContenidoPorSlug } from './renderContenidoPorSlug';

export async function generateMetadata ({ params }) {
  const { slug } = await params
  const { projects } = await getSlugProjects()
  const project = projects.find(p => p.slug === slug)
  const Componente = renderContenidoPorSlug(slug);

  if (!Componente) return <div>Página no encontrada</div>;

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
      description: 'El proyecto solicitado no se encontró.'
    }
  }

  const additionalTag = project.tagline ? ` - ${project.tagline}` : ''
  const improvedTitle = `${project.name}${additionalTag} | Andrea Design Studio`
  const firstParagraph =
    project.data && project.data[0] ? ` - ${project.data[0]}` : ''
  const improvedDescription = `${project.phrase}${firstParagraph}`

  return {
    title: improvedTitle,
    description: improvedDescription
  }
}

export default async function GalleryPage ({ params }) {
  const { slug } = await params
  const { projects } = await getSlugProjects()
  const project = projects.find(p => p.slug === slug)
  const Componente = renderContenidoPorSlug(slug);

  if (!project) {
    return <p>Proyecto no encontrado.</p>
  }

  return (
    <>
      <section className='container mx-auto px-4 mt-16'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between relative'>
          <div className='w-full'>
            <h1 className='text-4xl md:text-[55px] font-medium -mt-12 md:mt-0 mb-8 md:mb-0'>
              {project.name}
            </h1>
            <span className='md:text-lg 2xl:text-2xl flex md:w-80 text-balance'>
              {project.phrase}
            </span>
          </div> 
          <div className='w-full max-w-[740px] mt-8 md:mt-0'>
          <p
                 
                  className='mb-4 md:text-lg 2xl:text-2xl font-medium text-pretty'
                >
                  {project.introductionText}
                </p>
          </div>
        </div>
      </section>

      {project.firstImage && (
        <section className='container mx-auto px-4 mt-16'>
          <div className='max-h-[847.91px] overflow-hidden relative'>
            <Image
              src={project.firstImage}
              alt={`Animación de ${project.name}`}
              className='w-full h-auto relative -translate-y-[15%]'
              width={100}
              height={200}
              unoptimized
            />
          </div>
        </section>
      )}

      {project.data && (
        <section className='container mx-auto px-4 mt-16'>
          <div className='w-full md:w-1/2 md:ml-auto'>
            <Testimonial
              text={project.data[0]}
              linkText='Saber más'
              linkUrl='/saber-mas'
            />
          </div>
        </section>
      )}

      {/* {project.galleryImages && project.galleryImages.length > 0 && (
        <section className='container mx-auto px-4 mt-16'>
          <ImageGallery images={project.galleryImages} columns={2} />
        </section>
      )} */}

      {Componente && <Componente />}
    </>
  )
}
