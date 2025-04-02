'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactClient () {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Remover clases iniciales y agregar clases de Tailwind Animated (animate.css)
            entry.target.classList.remove('opacity-0', 'translate-y-4')
            entry.target.classList.add('animate__animated', 'animate__fadeIn')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <section className='flex bg-[#B4AE36] px-20 xl:px-64 py-10'>
        <div
          className='w-1/2 flex flex-col justify-center items-start gap-y-10 opacity-0 translate-y-4'
          data-animate
        >
          <h1 className='sr-only'>Contact — Get in touch</h1>
          <Image
            src='/camara-de-video.png'
            width={100}
            height={50}
            alt='Icono camara video'
            className='w-16 h-auto object-contain delay-100'
          />
          <h2 className='text-[#796d2a] w-[24.5rem] text-4xl font-cardo delay-400'>
            Agenda una videollamada gratuita para platicar de tu proyecto
          </h2>
          <Link
            className='text-white bg-[#1a47c4] px-6 text-xs xl:text-base py-2 rounded-xl font-helvetica delay-500'
            href='https://calendly.com/monpalette/reunion?month=2025-04'
            target='_blank'
            rel='noopener noreferrer'
          >
            Agenda aquí
          </Link>
        </div>
        <div
          className='w-1/2 flex justify-center items-center opacity-0 translate-y-4'
          data-animate
        >
          <Image
            src='/laptop.png'
            width={1000}
            height={500}
            alt='Icono laptop'
            className='w-2/3 h-auto object-contain delay-200'
          />
        </div>
      </section>
      <section className='bg-[#1a47c4] px-20 xl:px-64 pt-10'>
        <h2
          className='text-white w-[30rem] text-left text-pretty py-10 text-4xl font-cardo -mb-20 opacity-0 translate-y-4'
          data-animate
        >
          Recuerda que podemos apoyarte con proyectos de:
        </h2>
        <Image
          src='/elementos.png'
          width={1500}
          height={800}
          alt='Imagen referencial proyectos'
          className='w-full h-auto object-contain opacity-0 translate-y-4 delay-200'
          data-animate
        />
      </section>
    </main>
  )
}
