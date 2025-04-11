'use client'

import Link from 'next/link'
import Image from 'next/image'
import TypewriterHeader from './functions/TypewriterHeader.js'
import { useState, useEffect } from 'react'
import AnimateOnScroll from '../components/AnimateOnScroll.jsx'
import '../styles/index.css'
import PhysicsImages from '@/components/PhysicsImages.jsx'

export default function HomeClient () {
  const [showRetrato, setShowRetrato] = useState(false) // Cambiamos el estado inicial a false

  useEffect(() => {
    const interval = setInterval(() => {
      setShowRetrato(prev => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className='min-h-screen !relative'>
      <section className='!relative w-full h-auto bg-[#1a47c4] p-8'>
        <AnimateOnScroll
          animationClass='animate-fade-up'
          delayClass='animate-delay-1s'
        >
          <h1 className='mx-auto text-4xl text-white text-center font-cardo'>
            Welcome to my Gallery
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll
          animationClass='animate-fade-up'
          delayClass='animate-delay-2s'
        >
          <span className='block text-white mt-[8px] mb-[8px] text-center font-cardo'>
            <TypewriterHeader text='Where Design Meets Art' />
          </span>
        </AnimateOnScroll>

        <div className='relative w-full z-10 h-auto max-w-[300px] mx-auto'>
          <Image
            className='w-full h-auto object-cover'
            src='/foto-andrea.png'
            alt='Foto Andrea'
            width={1920}
            height={1080}
          />
          <Image
            className={`absolute top-0 left-0 w-full h-auto object-cover transition-opacity duration-1000 ${
              showRetrato ? 'opacity-100' : 'opacity-0'
            }`}
            src='/foto-andrea-retrato.png'
            alt='Foto Retrato Andrea'
            width={1920}
            height={1080}
          />
          <span
            className='text-center w-x-auto text-white absolute bottom-[10%] left-[50%] -translate-x-1/2 -translate-y-1/2 font-cardo
'
          >
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
          className='overflow-hidden w-2/5 absolute -bottom-4 right-0'
          images={[
            '/animated_bubble/bubble_packaging.png',
            '/animated_bubble/bubble_socialmedia.png',
            '/animated_bubble/bubble_branding.png',
            '/animated_bubble/bubble_rebranding.png'
          ]}
        />

        {/* <AnimateOnScroll
          animationClass='animate-fade-up'
          delayClass='animate-delay-1s'
        >
          <Link
            href='/work'
            className='mx-auto text-center block w-fit bg-[#B3AE4C] text-[16px] mt-8 px-4 py-2 shadow-[0px_14px_36px_rgba(0,0,0,0.5)] text-[#292605] rounded-[10px] hover:bg-white transition all hover:text-[#1a47c4]'
          >
            Ver Proyectos
          </Link>
        </AnimateOnScroll> */}
      </section>

      {/* Resto de la página */}
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
            <Link
              href=''
              className='block mt-6 max-w-[500px] mx-auto'
              onMouseEnter={e =>
                (e.currentTarget.querySelector('span').textContent =
                  'Revalorizando la cultura shipibo desde el empaque.')
              }
              onMouseLeave={e =>
                (e.currentTarget.querySelector('span').textContent = 'ASHETI')
              }
            >
              <div className='relative'>
                <Image
                  className='w-full h-auto object-cover'
                  src='/marco_de_foto.png'
                  alt='Foto Andrea'
                  width={1920}
                  height={1080}
                />
                <Image
                  className={`absolute top-[50%] left-[50%] w-full h-[100%] object-cover -z-10 -translate-x-1/2 -translate-y-1/2`}
                  src='/projects/asheti/asheti_portada.jpg'
                  alt='Foto Retrato Andrea'
                  width={1920}
                  height={1080}
                />
              </div>
              <span className='mt-4 block text-xl transition-all duration-300'>
                ASHETI
              </span>
            </Link>
            <Link
              href=''
              className='block mt-6 max-w-[500px] mx-auto'
              onMouseEnter={e =>
                (e.currentTarget.querySelector('span').textContent =
                  'Dark kitchen peruana que ofrece una propuesta de pizza artesanal')
              }
              onMouseLeave={e =>
                (e.currentTarget.querySelector('span').textContent =
                  'Materia Secreta')
              }
            >
              <div className='relative'>
                <Image
                  className='w-full h-auto object-cover'
                  src='/marco_de_foto.png'
                  alt='Foto Andrea'
                  width={1920}
                  height={1080}
                />
                <Image
                  className={`absolute top-[50%] left-[50%] w-full h-[100%] object-cover -z-10 -translate-x-1/2 -translate-y-1/2`}
                  src='/projects/materia_secreta/portada_2.jpg'
                  alt='Foto Retrato Andrea'
                  width={1920}
                  height={1080}
                />
              </div>
              <span className='mt-4 block text-xl transition-all duration-300'>
                Materia Secreta
              </span>
            </Link>
            <Link
              href=''
              className='block mt-6 max-w-[500px] mx-auto'
              onMouseEnter={e =>
                (e.currentTarget.querySelector('span').textContent =
                  'Rebranding verde que no pasa desapercibido.')
              }
              onMouseLeave={e =>
                (e.currentTarget.querySelector('span').textContent =
                  'Verdânt Inmobiliaria')
              }
            >
              <div className='relative'>
                <Image
                  className='w-full h-auto object-cover'
                  src='/marco_de_foto.png'
                  alt='Foto Andrea'
                  width={1920}
                  height={1080}
                />
                <Image
                  className={`absolute top-[50%] left-[50%] w-full h-[100%] object-cover -z-10 -translate-x-1/2 -translate-y-1/2`}
                  src='/projects/verdant/portada.jpg'
                  alt='Foto Retrato Andrea'
                  width={1920}
                  height={1080}
                />
              </div>
              <span className='mt-4 block text-xl transition-all duration-300'>
                Verdânt Inmobiliaria
              </span>
            </Link>
            <Link
              href=''
              className='block mt-6 max-w-[500px] mx-auto'
              onMouseEnter={e =>
                (e.currentTarget.querySelector('span').textContent =
                  'Solidez y diferenciación para un grupo empresarial.')
              }
              onMouseLeave={e =>
                (e.currentTarget.querySelector('span').textContent =
                  'Haz Group')
              }
            >
              <div className='relative'>
                <Image
                  className='w-full h-auto object-cover'
                  src='/marco_de_foto.png'
                  alt='Foto Andrea'
                  width={1920}
                  height={1080}
                />
                <Image
                  className={`absolute top-[50%] left-[50%] w-full h-[100%] object-cover -z-10 -translate-x-1/2 -translate-y-1/2`}
                  src='/projects/hazgroup/portada.jpg'
                  alt='Foto Retrato Andrea'
                  width={1920}
                  height={1080}
                />
              </div>
              <span className='mt-4 block text-xl transition-all duration-300'>
                Haz Group
              </span>
            </Link>
            <Link
              href=''
              className='block mt-6 max-w-[500px] mx-auto'
              onMouseEnter={e =>
                (e.currentTarget.querySelector('span').textContent =
                  'Una identidad con propósito social.')
              }
              onMouseLeave={e =>
                (e.currentTarget.querySelector('span').textContent =
                  'Asociación Peruana de Bomberos')
              }
            >
              <div className='relative'>
                <Image
                  className='w-full h-auto object-cover'
                  src='/marco_de_foto.png'
                  alt='Foto Andrea'
                  width={1920}
                  height={1080}
                />
                <Image
                  className={`absolute top-[50%] left-[50%] w-full h-[100%] object-cover -z-10 -translate-x-1/2 -translate-y-1/2`}
                  src='/projects/asociacion_peruana_de_bomberos/portada.jpg'
                  alt='Foto Retrato Andrea'
                  width={1920}
                  height={1080}
                />
              </div>
              <span className='mt-4 block text-xl transition-all duration-300'>
                Asociación Peruana de Bomberos
              </span>
            </Link>
            <Link
              href=''
              className='block mt-6 max-w-[500px] mx-auto'
              onMouseEnter={e =>
                (e.currentTarget.querySelector('span').textContent =
                  'Geometría, precisión y herencia familiar.')
              }
              onMouseLeave={e =>
                (e.currentTarget.querySelector('span').textContent =
                  'NDK Arquitectos')
              }
            >
              <div className='relative'>
                <Image
                  className='w-full h-auto object-cover'
                  src='/marco_de_foto.png'
                  alt='Foto Andrea'
                  width={1920}
                  height={1080}
                />
                <Image
                  className={`absolute top-[50%] left-[50%] w-full h-[100%] object-cover -z-10 -translate-x-1/2 -translate-y-1/2`}
                  src='/projects/ndk_arquitectos/portada-final-.jpg'
                  alt='Foto Retrato Andrea'
                  width={1920}
                  height={1080}
                />
              </div>
              <span className='mt-4 block text-xl transition-all duration-300'>
                NDK Arquitectos
              </span>
            </Link>
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
