import Link from 'next/link'
import TypewriterHeader from './functions/TypewriterHeader.js'
import AnimateOnScroll from '../components/AnimateOnScroll.jsx'
import PhysicsImages from '@/components/PhysicsImages.jsx'
import '../styles/index.css'
import InteractiveProjectLink from '@/components/InteractiveProjectLink'
import Image from 'next/image'
import { getSlugProjects } from '@/lib/data'

export const metadata = {
  title: 'Andrea Design Studio - Portfolio of projects and design works.',
  keywords:
    'Andrea Design Studio, Portfolio, Projects, Design, Web Design, Graphic Design',
  description:
    'Andrea Design Studio is a portfolio showcasing a variety of projects and design works.'
}

export default async function HomePage () {
  const { projects } = await getSlugProjects()

  return (
    <main className='min-h-screen !relative'>
      <section className='!relative w-full h-auto bg-[#1a47c4] p-8'>
        <h1 className='mx-auto text-4xl text-white text-center font-cardo animate-fade-up'>
          Welcome to my Gallery
        </h1>

        <span className='block text-white mt-[8px] mb-[8px] text-center font-cardo animate-fade-up animate-delay-300'>
          <TypewriterHeader text='Where Design Meets Art' />
        </span>

        <div className='relative w-full z-10 h-auto max-w-[300px] mx-auto animate-fade-up animate-delay-500'>
          <img
            className='w-full h-auto object-cover aspect-[3/4]'
            src='/foto-andrea.webp'
            alt='Foto Andrea Loarte'
            loading='eager'
          />
          <img
            className='fadeToggle w-full h-auto object-cover aspect-[3/4]'
            src='/foto-andrea-retrato.webp'
            alt='Foto Retrato Andrea Loarte'
            loading='eager'
          />
          <span className='text-center w-x-auto text-white absolute bottom-[10%] left-[50%] -translate-x-1/2 -translate-y-1/2 font-cardo'>
            Designer & Creative Director
          </span>
        </div>
        <PhysicsImages
          className='overflow-hidden hidden md:block w-2/5 absolute -bottom-4 left-0'
          images={[
            '/animated_bubble/bubble_ilustracion.png',
            '/animated_bubble/bubble_web.png',
            '/animated_bubble/bubble_fotografia.png',
            '/animated_bubble/bubble_consultoria.png'
          ]}
        />
        <PhysicsImages
          className='overflow-hidden hidden md:block w-2/5 absolute -bottom-4 right-0'
          images={[
            '/animated_bubble/bubble_packaging.png',
            '/animated_bubble/bubble_socialmedia.png',
            '/animated_bubble/bubble_branding.png',
            '/animated_bubble/bubble_rebranding.png'
          ]}
        />
      </section>
      <section className='!relative w-full h-auto bg-white p-8'>
        <AnimateOnScroll
          animationClass='animate-fade-up relative flex flex-col items-center'
          delayClass='animate-delay-100'
        >
          <img
            src='/index/header-img.png'
            className='mx-auto w-2/5 md:w-1/9'
            alt='corona andrea loarte studio'
          />
          <h2 className='text-center text-5xl tracking-wide font-cardo capitalize text-[#1a47c4] mt-12'>
            ¿Tu marca necesita un
            <br />
            impulso real?
          </h2>
          <img src='/index/diagnostico-bubble.png' className='mx-auto w-48' />
          <p className='text-center mt-14 text-sm/[1.2] uppercase font-helvetica-neue md:w-[27rem] text-balance md:text-pretty text-[#1a47c4]'>
            Recibe una mirada estratégica sobre cómo potenciar tu identidad,
            conectar con tu audencia y diferenciarte en tu mercado.
          </p>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className='bg-[#1a47c4] mt-8 shadow-[0px_14px_36px_rgba(0,0,0,0.5)] text-white py-2 md:py-1 px-4 md:px-2 rounded-[10px] text-xs sm:text-[.8rem] lg:text-[16px] lg:px-4 lg:py-2'
            href='https://docs.google.com/forms/d/e/1FAIpQLScJ5p8uYDnV24f9Ivg-PVMUNG70N1XbUvGZCRw0lXMoATVxuA/viewform?usp=sharing'
          >
            Agenda aquí
          </Link>
          <span className='mx-auto text-center mt-8 font-bold text-[#1a47c4]'>
            |
          </span>
          <img
            src='/index/blue-bird-l.png'
            className='hidden md:flex absolute left-4 md:left-20 [@media(min-width:90rem)]:left-40 2xl:!left-60 top-1/2 transform -translate-y-1/2 w-28'
            alt='pajaro azul andrea loarte design studio'
          />
          <img
            src='/index/blue-bird-r.png'
            className='hidden md:flex absolute right-4 md:right-20 [@media(min-width:90rem)]:right-40 2xl:!right-60 top-1/2 transform -translate-y-1/2 w-28'
            alt='pajaro azul andrea loarte design studio'
          />
        </AnimateOnScroll>

        <AnimateOnScroll
          animationClass='animate-fade-up'
          delayClass='animate-delay-200'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto mt-8'>
            <InteractiveProjectLink
              href={`/gallery/${
                projects.find(p => p.name === 'ASHETI')?.slug || ''
              }`}
              defaultText='ASHETI'
              hoverText='Revalorizando la cultura shipibo desde el empaque.'
              marcoSrc='/marco_de_foto.png'
              projectSrc='/projects/asheti/asheti_portada.jpg'
            />
            <InteractiveProjectLink
              href={`/gallery/${
                projects.find(p => p.name === 'Materia Secreta')?.slug || ''
              }`}
              defaultText='Materia Secreta'
              hoverText='Dark kitchen peruana que ofrece una propuesta de pizza artesanal'
              marcoSrc='/marco_de_foto.png'
              projectSrc='/projects/materia_secreta/portada_2.jpg'
            />
            <InteractiveProjectLink
              href={`/gallery/${
                projects.find(p => p.name === 'Verdânt Inmobiliaria')?.slug ||
                ''
              }`}
              defaultText='Verdânt Inmobiliaria'
              hoverText='Rebranding verde que no pasa desapercibido.'
              marcoSrc='/marco_de_foto.png'
              projectSrc='/projects/verdant-inmobiliaria/PORTADA.jpg'
            />
            <InteractiveProjectLink
              href={`/gallery/${
                projects.find(p => p.name === 'Haz Group')?.slug || ''
              }`}
              defaultText='Haz Group'
              hoverText='Solidez y diferenciación para un grupo empresarial.'
              marcoSrc='/marco_de_foto.png'
              projectSrc='/projects/haz-group/portada.jpg'
            />
            <InteractiveProjectLink
              href={`/gallery/${
                projects.find(p => p.name === 'Asociación Peruana de Bomberos')
                  ?.slug || ''
              }`}
              defaultText='Asociación Peruana de Bomberos'
              hoverText='Una identidad con propósito social.'
              marcoSrc='/marco_de_foto.png'
              projectSrc='/projects/asociacion_peruana_de_bomberos/portada.jpg'
            />
            <InteractiveProjectLink
              href={`/gallery/${
                projects.find(p => p.name === 'NDK Arquitectos')?.slug || ''
              }`}
              defaultText='NDK Arquitectos'
              hoverText='Geometría, precisión y herencia familiar.'
              marcoSrc='/marco_de_foto.png'
              projectSrc='/projects/ndk_arquitectos/portada-final-.jpg'
            />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll
          animationClass='animate-fade-up'
          delayClass='animate-delay-200'
        >
          <div>
            <Link
              href='/gallery'
              className='mx-auto my-8 text-center block w-fit bg-[#1a47c4] text-[16px] px-4 py-2 shadow-[0px_14px_36px_rgba(0,0,0,0.5)] text-white rounded-[10px] hover:bg-white transition all hover:text-[#1a47c4]'
            >
              Ver más proyectos
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      <section className='wrapper py-8'>
        <AnimateOnScroll
          animationClass='animate-fade-up'
          delayClass='animate-delay-300'
        >
          <div className='md:flex md:items-center max-w-[1440px] md:mx-auto md:justify-center'>
            <h3 className='font-cardo text-white text-center text-2xl px-8 md:text-5xl'>
              Quiero Empezar A Construir Mi Obra
            </h3>
            <Link
              href='https://docs.google.com/forms/d/e/1FAIpQLScJ5p8uYDnV24f9Ivg-PVMUNG70N1XbUvGZCRw0lXMoATVxuA/viewform?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='mx-auto text-center block w-fit bg-white text-[16px] mt-4 px-4 py-2 shadow-[0px_14px_36px_rgba(0,0,0,0.5)] text-[#292605] md:m-0 rounded-[10px] hover:bg-[#1a47c4] transition all hover:text-white'
            >
              Agenda Aquí
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}
