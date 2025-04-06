'use client'

import Link from 'next/link'
import Image from 'next/image'
import TypewriterHeader from './functions/TypewriterHeader.js'
import { useState, useEffect } from 'react'
import AnimateOnScroll from './contact/AnimateOnScroll' // Ajusta la ruta según corresponda
import '../styles/index.css'

export default function HomeClient() {
  const [showRetrato, setShowRetrato] = useState(false) // Cambiamos el estado inicial a false

  useEffect(() => {
    const interval = setInterval(() => {
      setShowRetrato((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className='min-h-screen !relative'>
      <section className='!relative w-full h-auto bg-[#1a47c4] p-8'>
        {/* Animamos el título usando AnimateOnScroll */}
        <AnimateOnScroll
          animationClass='animate-fade-up'
          delayClass='animate-delay-1s'
        >
          <h1 className='mx-auto text-4xl text-white text-center font-cardo'>
            Welcome to our Gallery
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll
          animationClass='animate-fade-up'
          delayClass='animate-delay-2s'
        >
          <span className='block text-white mt-[16px] text-center font-cardo'>
            <TypewriterHeader text='Where Design Meets Art' />
          </span>
        </AnimateOnScroll>

        <div className='relative w-full h-auto max-w-[300px] mx-auto'>
          {/* Imagen normal de fondo */}
          <Image
            className='w-full h-auto object-cover'
            src='/foto-andrea.png'
            alt='Foto Andrea'
            width={1920}
            height={1080}
          />
          {/* Imagen retrato encima con opacity inicial 0 */}
          <Image
            className={`absolute top-0 left-0 w-full h-auto object-cover transition-opacity duration-1000 ${showRetrato ? 'opacity-100' : 'opacity-0'
              }`}
            src='/foto-andrea-retrato.png'
            alt='Foto Retrato Andrea'
            width={1920}
            height={1080}
          />
          <span
            className='text-center w-x-auto text-white absolute bottom-[10%] left-[50%] -translate-x-1/2 -translate-y-1/2 font-cardo
'>
            Designer & Creative Director

          </span>
        </div>

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
            <h2 className='text-center text-4xl  text-[#48535d] mt-8'>
              Cada proyecto es una obra única
            </h2>

          </div>
        </AnimateOnScroll>

        <AnimateOnScroll
          animationClass='animate-fade-up'
          delayClass='animate-delay-1s'
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto mt-8">
            <Link href="" className='block mt-6 max-w-[500px] mx-auto'>
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
                  src='/bolsa-atelier.jpg'
                  alt='Foto Retrato Andrea'
                  width={1920}
                  height={1080}
                />
              </div>
              <span className='mt-4 block text-xl'>
                Vita Atelier
              </span>
            </Link>
            <Link href="" className='block mt-6 max-w-[500px] mx-auto'>
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
                  src='/bolsa-atelier.jpg'
                  alt='Foto Retrato Andrea'
                  width={1920}
                  height={1080}
                />
              </div>
              <span className='mt-4 block text-xl'>
                Vita Atelier
              </span>
            </Link>
            <Link href="" className='block mt-6 max-w-[500px] mx-auto'>
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
                  src='/bolsa-atelier.jpg'
                  alt='Foto Retrato Andrea'
                  width={1920}
                  height={1080}
                />
              </div>
              <span className='mt-4 block text-xl'>
                Vita Atelier
              </span>
            </Link>
            <Link href="" className='block mt-6 max-w-[500px] mx-auto'>
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
                  src='/bolsa-atelier.jpg'
                  alt='Foto Retrato Andrea'
                  width={1920}
                  height={1080}
                />
              </div>
              <span className='mt-4 block text-xl'>
                Vita Atelier
              </span>
            </Link>
            <Link href="" className='block mt-6 max-w-[500px] mx-auto'>
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
                  src='/bolsa-atelier.jpg'
                  alt='Foto Retrato Andrea'
                  width={1920}
                  height={1080}
                />
              </div>
              <span className='mt-4 block text-xl'>
                Vita Atelier
              </span>
            </Link>
            <Link href="" className='block mt-6 max-w-[500px] mx-auto'>
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
                  src='/bolsa-atelier.jpg'
                  alt='Foto Retrato Andrea'
                  width={1920}
                  height={1080}
                />
              </div>
              <span className='mt-4 block text-xl'>
                Vita Atelier
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
