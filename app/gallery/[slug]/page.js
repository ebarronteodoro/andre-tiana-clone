import { getSlugProjects } from '@/lib/data'
import Image from 'next/image'
import Testimonial from '@/components/Testimonial'
import ImageGallery from '@/components/ImageGallery'
import { renderContenidoPorSlug } from './renderContenidoPorSlug'
import Link from 'next/link'

export async function generateMetadata ({ params }) {
  const { slug } = await params
  const { projects } = await getSlugProjects()
  const project = projects.find(p => p.slug === slug)
  const Componente = renderContenidoPorSlug(slug)

  if (!Componente) return <div>Página no encontrada</div>

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
      description: 'El proyecto solicitado no se encontró.'
    }
  }

  const additionalTag = project.tagline ? ` - ${project.tagline}` : ''
  const improvedTitle = `${project.name}${additionalTag} | Andrea Loarte Studio`
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
  const Componente = renderContenidoPorSlug(slug)

  if (!project) {
    return <p>Proyecto no encontrado.</p>
  }

  const currentIndex = projects.findIndex(p => p.slug === slug)
  let nextProject = null
  if (currentIndex !== -1) {
    if (projects[currentIndex + 1]) {
      nextProject = projects[currentIndex + 1]
    } else {
      nextProject = projects[0]
    }
  }

  return (
    <>
      <section className='container mx-auto px-4 mt-16 animate-fade-up'>
        <div className='flex flex-col md:flex-row md:justify-between relative'>
          <div className='w-full'>
            <h1 className='text-4xl md:text-[55px] font-medium -mt-12 md:mt-0 mb-8 md:mb-0'>
              {project.name}
            </h1>
            <span className='md:text-lg 2xl:text-2xl flex md:w-80 text-balance text-gray-400'>
              {project.phrase}
            </span>
          </div>
          <div className='w-full max-w-[740px] mt-8 md:mt-0'>
            <p className='mb-4 2xl:text-2xl font-medium text-pretty md:text-[27px]'>
              {project.introductionText}
            </p>
          </div>
        </div>
      </section>

      {project.firstImage && (
        <section className='container mx-auto px-4 mt-16'>
          <div className='max-h-[847.91px] overflow-hidden relative flex items-center justify-center'>
            {['.mp4', '.webm', '.mov'].some(ext =>
              project.firstImage.toLowerCase().endsWith(ext)
            ) ? (
              <video
                autoPlay
                loop
                controls
                playsInline
                preload='auto'
                className='w-full h-full object-cover relative animate-fade-up animate-delay-200'
                style={{ maxHeight: '847.91px' }}
              >
                <source
                  src={project.firstImage}
                  type={`video/${project.firstImage.split('.').pop()}`}
                />
                <source src={project.firstImage} type='video/mp4' />
                Tu navegador no soporta el elemento de video.
              </video>
            ) : (
              <Image
                src={project.firstImage}
                alt={`Animación de ${project.name}`}
                className='w-full h-auto relative animate-fade-up animate-delay-200'
                width={1920}
                height={1080}
                unoptimized
              />
            )}
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
              className='md:text-[27px]'
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

      <section class='wrapper py-8 mt-8'>
        <div class='animate-fade-up animate-delay-300'>
          <div class='md:flex md:items-center max-w-[1440px] md:mx-auto md:justify-center'>
            <h3 class='font-cardo text-white text-center text-2xl px-8 md:text-5xl'>
              Quiero Empezar A Construir Mi Obra
            </h3>
            <a
              target='_blank'
              rel='noopener noreferrer'
              class='mx-auto text-center block w-fit bg-white text-[16px] mt-4 px-4 py-2 shadow-[0px_14px_36px_rgba(0,0,0,0.5)] text-[#292605] md:m-0 rounded-[10px] hover:bg-[#1a47c4] transition all hover:text-white'
              href='https://docs.google.com/forms/d/e/1FAIpQLScJ5p8uYDnV24f9Ivg-PVMUNG70N1XbUvGZCRw0lXMoATVxuA/viewform?usp=sharing'
            >
              Agenda Aquí
            </a>
          </div>
        </div>
      </section>

      {nextProject && (
        <section className='container mx-auto px-4 animate-fade-up border-t border-gray-200 pt-4 max-h-[100dvh] overflow-hidden group'>
          <Link href={`/gallery/${nextProject.slug}`}>
            <h2 className='font-medium mb-8 text-lg text-[#1a47c4]'>
              Siguiente Proyecto
            </h2>
            <div className='flex flex-col md:flex-row md:justify-between relative cursor-pointer'>
              <div className='w-full'>
                <h1 className='text-4xl md:text-[55px] font-medium mt-0 mb-4 md:mb-0'>
                  {nextProject.name}
                </h1>
                <span className='md:text-lg 2xl:text-2xl flex md:w-80 text-balance text-gray-400'>
                  {nextProject.phrase}
                </span>
              </div>
              <div className='w-full max-w-[740px] mt-8 md:mt-0'>
                <p className='mb-4 2xl:text-2xl font-medium text-pretty md:text-[27px]'>
                  {nextProject.introductionText}
                </p>
              </div>
            </div>
            {nextProject.firstImage && (
              <div className='max-h-[847.91px] overflow-hidden relative flex items-center justify-center mt-16'>
                {['.mp4', '.webm', '.mov'].some(ext =>
                  nextProject.firstImage.toLowerCase().endsWith(ext)
                ) ? (
                  <video
                    autoPlay
                    loop
                    controls
                    playsInline
                    muted
                    preload='auto'
                    className='w-full h-full object-cover relative animate-fade-up animate-delay-200 group-hover:scale-105 transition-transform duration-300'
                    style={{ maxHeight: '847.91px' }}
                  >
                    <source
                      src={nextProject.firstImage}
                      type={`video/${nextProject.firstImage.split('.').pop()}`}
                    />
                    <source src={nextProject.firstImage} type='video/mp4' />
                    Tu navegador no soporta el elemento de video.
                  </video>
                ) : (
                  <Image
                    src={nextProject.firstImage}
                    alt={`Animación de ${nextProject.name}`}
                    className='w-full h-auto relative animate-fade-up animate-delay-200 group-hover:scale-105 transition-transform duration-300'
                    width={1920}
                    height={1080}
                    unoptimized
                    loading='lazy'
                  />
                )}
              </div>
            )}
          </Link>
        </section>
      )}
    </>
  )
}
