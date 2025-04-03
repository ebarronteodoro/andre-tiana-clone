import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from './AnimateOnScroll'

export const metadata = {
  title: 'Contact — Get in touch',
  description: 'Contact page of Andre & Tania design studio'
}

export default async function Home () {
  return (
    <main>
      <section className='flex bg-[#B4AE36] px-20 2xl:px-64 py-10'>
        <div className='w-1/2 flex flex-col justify-center items-start gap-y-10'>
          <h1 className='sr-only'>Contact — Get in touch</h1>
          <AnimateOnScroll animationClass='animate-fade-up'>
            <Image
              src='/camara-de-video.png'
              width={100}
              height={50}
              alt='Icono camara video'
              className='w-16 h-auto object-contain'
            />
          </AnimateOnScroll>
          <AnimateOnScroll
            animationClass='animate-fade-up'
            delayClass='animate-delay-400'
          >
            <h2 className='text-[#796d2a] w-[24.5rem] text-4xl font-cardo'>
              Agenda una videollamada gratuita para platicar de tu proyecto
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll
            animationClass='animate-fade-up'
            delayClass='animate-delay-500'
          >
            <Link
              className='text-white bg-[#1a47c4] px-6 text-xs xl:text-base py-2 rounded-xl font-helvetica'
              href='https://calendly.com/monpalette/reunion?month=2025-04'
              target='_blank'
              rel='noopener noreferrer'
            >
              Agenda aquí
            </Link>
          </AnimateOnScroll>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <AnimateOnScroll
            animationClass='animate-fade-up'
            delayClass='animate-delay-200'
          >
            <Image
              src='/laptop.png'
              width={1000}
              height={500}
              alt='Icono laptop'
              className='w-2/3 h-auto object-contain'
            />
          </AnimateOnScroll>
        </div>
      </section>
      <section className='bg-[#1a47c4] px-20 2xl:px-64 pt-10'>
        <AnimateOnScroll
          animationClass='animate-fade-up'
          delayClass='animate-delay-200'
        >
          <h2 className='text-white w-[30rem] text-left text-pretty py-10 text-4xl font-cardo -mb-10 2xl:-mb-20'>
            Recuerda que podemos apoyarte con proyectos de:
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll
          animationClass='animate-fade-up'
          delayClass='animate-delay-200'
        >
          <Image
            src='/elementos.png'
            width={1500}
            height={800}
            alt='Imagen referencial proyectos'
            className='w-full h-auto object-contain'
          />
        </AnimateOnScroll>
      </section>
    </main>
  )
}
