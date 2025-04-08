import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '../../components/AnimateOnScroll'

export const metadata = {
  title: 'Contact — Get in touch',
  description: 'Contact page of Andre & Tania design studio'
}

export default async function Home() {
  return (
    <main>
      <section className='p-4 h-[200px] md:px-8'>
      <AnimateOnScroll
          animationClass='animate-fade-up'
          delayClass='animate-delay-1s'
        >
          <div className='relative top-10 max-w-[1200px] md:w-[80%] md:mx-auto '>
          <picture>
            <Image
              src='/contacto/ticket.png'
              width={1500}
              height={800}
              alt='Imagen de contacto'
              className='hidden md:block w-full h-auto object-contain'
            />
            <Image
              src='/contacto/ticket_movil.png'
              width={1500}
              height={800}
              alt='Imagen de contacto'
              className='md:hidden w-full h-auto object-contain'
            />
          </picture>
          
            <Image
              src='/contacto/camara.png'
              width={24}
              height={200}
              alt='Imagen de contacto'
              className='h-auto object-contain absolute -translate-y-1/2 top-[20%] left-6 x5c:w-[32px] md:left-10 lg:left-16 lg:w-[48px] '
            />
            <h1 className='absolute -translate-y-1/2 top-[50%] left-6 text-white font-cardo w-[200px] text-[80%] x5c:text-[1rem] x5c:w-[262px] sm:text-[1.5rem] md:left-10 lg:left-16'>
              Agenda una videollamada gratuita para platicar de tu proyecto
            </h1>
            <Link href='#' target='_blank' className='bg-[#1a47c4] block w-fit  text-white py-1 px-2 rounded-[10px] text-xs absolute -translate-y-1/2 bottom-[8%] left-6 x4c:bottom-[15%] sm:text-[.8rem] md:left-10 lg:text-[16px] lg:left-16 lg:px-4 lg:py-2'>
              Agenda aquí
            </Link>
          
        </div>
        </AnimateOnScroll>

        
      </section>
      <section className='bg-[#1a47c4] px-20 2xl:px-64 pt-10'>
        {/* <AnimateOnScroll
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
        </AnimateOnScroll> */}
      </section>
    </main>
  )
}
