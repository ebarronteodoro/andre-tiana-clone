import Link from 'next/link'
import TypewriterHeader from './functions/TypewriterHeader.js'
import AnimateOnScroll from '../components/AnimateOnScroll.jsx'
import PhysicsImages from '@/components/PhysicsImages.jsx'
import '../styles/index.css'
import InteractiveProjectLink from '@/components/InteractiveProjectLink'
import Image from 'next/image.js'

export const metadata = {
  title: 'Andrea Design Studio - Portfolio of projects and design works.',
  keywords:
    'Andrea Design Studio, Portfolio, Projects, Design, Web Design, Graphic Design',
  description:
    'Andrea Design Studio is a portfolio showcasing a variety of projects and design works.'
}

export default function HomePage () {
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
          <Image
            className='w-full h-auto object-cover aspect-[3/4]'
            src='/foto-andrea.png'
            alt='Foto Andrea'
            width={800}
            height={900}
            priority
          />
          <Image
            className='fadeToggle w-full h-auto object-cover aspect-[3/4]'
            src='/foto-andrea-retrato.png'
            alt='Foto Retrato Andrea'
            width={800}
            height={900}
            priority
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
          animationClass='animate-fade-up'
          delayClass='animate-delay-1s'
        >
          <div>
            <h2 className='text-center text-4xl font-cardo  text-[#1a47c4] mt-8'>
              Cada Proyecto Es Una Obra Unica
            </h2>
            <span className='text-center block mt-2  font-cardo text-xl text-[#1a47c4]'>
              Obras Recientes En Exposición
            </span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll
          animationClass='animate-fade-up'
          delayClass='animate-delay-1s'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto mt-8'>
            <InteractiveProjectLink
              href=''
              defaultText='ASHETI'
              hoverText='Revalorizando la cultura shipibo desde el empaque.'
              marcoSrc='/marco_de_foto.png'
              projectSrc='/projects/asheti/asheti_portada.jpg'
            />
            <InteractiveProjectLink
              href=''
              defaultText='Materia Secreta'
              hoverText='Dark kitchen peruana que ofrece una propuesta de pizza artesanal'
              marcoSrc='/marco_de_foto.png'
              projectSrc='/projects/materia_secreta/portada_2.jpg'
            />
            <InteractiveProjectLink
              href=''
              defaultText='Verdânt Inmobiliaria'
              hoverText='Rebranding verde que no pasa desapercibido.'
              marcoSrc='/marco_de_foto.png'
              projectSrc='/projects/verdant/portada.jpg'
            />
            <InteractiveProjectLink
              href=''
              defaultText='Haz Group'
              hoverText='Solidez y diferenciación para un grupo empresarial.'
              marcoSrc='/marco_de_foto.png'
              projectSrc='/projects/haz-group/portada.jpg'
            />
            <InteractiveProjectLink
              href=''
              defaultText='Asociación Peruana de Bomberos'
              hoverText='Una identidad con propósito social.'
              marcoSrc='/marco_de_foto.png'
              projectSrc='/projects/asociacion_peruana_de_bomberos/portada.jpg'
            />
            <InteractiveProjectLink
              href=''
              defaultText='NDK Arquitectos'
              hoverText='Geometría, precisión y herencia familiar.'
              marcoSrc='/marco_de_foto.png'
              projectSrc='/projects/ndk_arquitectos/portada-final-.jpg'
            />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll
          animationClass='animate-fade-up'
          delayClass='animate-delay-1s'
        >
          <div>
            <Link
              href='#'
              className='mx-auto my-8 text-center block w-fit bg-[#1a47c4] text-[16px] px-4 py-2 shadow-[0px_14px_36px_rgba(0,0,0,0.5)] text-white rounded-[10px] hover:bg-white transition all hover:text-[#1a47c4]'
            >
              Ver más proyectos
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      <AnimateOnScroll
        animationClass='animate-fade-up'
        delayClass='animate-delay-1s'
      >
        <section className='wrapper py-8'>
          <div className='md:flex md:items-center max-w-[1440px] md:mx-auto md:justify-center'>
            <h3 className='font-cardo text-white text-center text-2xl px-8 md:text-5xl'>
              Quiero Empezar A Construir Mi Obra
            </h3>
            <Link
              href='/dashboard'
              className='mx-auto text-center block w-fit bg-white text-[16px] mt-4 px-4 py-2 shadow-[0px_14px_36px_rgba(0,0,0,0.5)] text-[#292605] md:m-0 rounded-[10px] hover:bg-[#1a47c4] transition all hover:text-white'
            >
              Agenda Aquí
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </main>
  )
}
