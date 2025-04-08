import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '../../components/AnimateOnScroll'

export const metadata = {
  title: 'About — Get in touch',
  description: `About page of Andrea's design studio`
}

export default async function Home() {
  return (
    <main>
      <section className='p-4 md:px-8 bg-[#1a47c4]'>
        <div></div>
        <div>
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
      <section>
      <div></div>  
      <div></div>  
      <div></div>  
        
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
      <section>
        <div>
          <h4></h4>
          <div></div>
        </div>
        <div></div>
        
      </section>

    </main>
  )
}
