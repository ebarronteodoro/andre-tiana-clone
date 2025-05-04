import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '../../components/AnimateOnScroll'
import '../../styles/index.css'

export const metadata = {
  title: 'Sobre mí | Andrea Loarte Studio',
  description:
    'Soy diseñadora y directora de arte con más de seis años de experiencia en la creación de identidades visuales.'
}

export default async function Home () {
  return (
    <main className='bg-[#1a47c4]'>
      <AnimateOnScroll
        animationClass='animate-fade-up'
        delayClass='animate-delay-1s'
      >
        <section className='p-8 md:px-8 bg-[#1a47c4]  '>
          <div className='mx-auto md:flex max-w-[1440px]'>
            <div className='md:w-full'>
              <picture className='hidden relative w-full mx-auto max-w-[300px] md:block '>
                <Image
                  src='/foto-andrea.webp'
                  alt='Andrea Loarte'
                  width={500}
                  height={500}
                  className='rounded-full w-full h-auto mx-auto mb-8'
                />
                <span
                  className='text-center w-x-auto text-white absolute bottom-[2rem] left-[50%] -translate-x-1/2 -translate-y-1/2 font-cardo
          '
                >
                  Designer & Creative Director
                </span>
              </picture>
            </div>
            <div className='md:w-full'>
              <div>
                <h1 className='text-white font-cardo text-3xl mb-8 md:text-5xl'>
                  Hola,
                  <br />
                  soy Andrea Loarte
                </h1>
              </div>
              <div className='md:hidden'>
                <p className='text-white mb-8'>
                  Fundé este estudio de diseño porque considero que las marcas
                  más potentes nacen desde la empatía. Escuchar, observar y
                  conectar con las personas detrás de cada proyecto es lo que me
                  permite crear identidades que no solo comunican bien, sino que
                  también se sienten reales.
                </p>

                <picture className='relative w-full mx-auto max-w-[300px] md:hidden'>
                  <Image
                    src='/foto-andrea.webp'
                    alt='Andrea Loarte'
                    width={500}
                    height={500}
                    className='rounded-full w-full h-auto mx-auto mb-8 max-w-[300px]'
                  />
                  <span className='text-center w-x-auto text-white absolute bottom-[4rem] left-[50%] -translate-x-1/2 -translate-y-1/2 font-cardo'>
                    Designer
                    <br />& Creative Director
                  </span>
                </picture>
                <p className='text-white mb-8'>
                  Desde hace más de seis años, he acompañado a marcas de
                  distintos sectores en procesos de construcción visual
                  estratégicos y auténticos. Cada proyecto que entra al estudio
                  lo trato con el mismo compromiso y detalle que si fuera
                  propio, porque sé lo importante que es sentirte representado
                  con tu marca. Andrea Loarte Studio es un espacio de creación
                  visual donde el diseño no es solo forma, es pensamiento, es
                  postura, es narrativa. Aquí, cada proyecto parte de una
                  pregunta, no de una plantilla. Porque creemos que cada marca
                  tiene su propia voz —solo necesita el lenguaje correcto para
                  expresarse. Nos movemos entre el branding, la ilustración, la
                  animación, la publicidad y la fotografía, conectando
                  disciplinas para contar historias relevantes con claridad y
                  carácter. Nuestra filosofía es clara: “El diseño no es arte…
                  pero cada proyecto es una obra única.”
                </p>
              </div>
              <div className='hidden md:flex gap-16'>
                <p className='text-white mb-8 w-full md:max-w-[300px]'>
                  Fundé este estudio de diseño porque considero que las marcas
                  más potentes nacen desde la empatía. Escuchar, observar y
                  conectar con las personas detrás de cada proyecto es lo que me
                  permite crear identidades que no solo comunican bien, sino que
                  también se sienten reales.
                  <br />
                  <br /> Desde hace más de seis años, he acompañado a marcas de
                  distintos sectores en procesos de construcción visual
                  estratégicos y auténticos. Cada proyecto que entra al estudio
                  lo trato con el mismo compromiso y detalle que si fuera
                  propio, porque sé lo importante que es sentirte representado
                  con tu marca.
                </p>

                <p className='text-white mb-8 w-full md:max-w-[300px]'>
                  {' '}
                  <span className='font-extrabold'>
                    Andrea Loarte Studio
                  </span>{' '}
                  es un espacio de creación visual donde el diseño no es solo
                  forma, es pensamiento, es postura, es narrativa. Aquí, cada
                  proyecto parte de una pregunta, no de una plantilla. Porque
                  creemos que cada marca tiene su propia voz —solo necesita el
                  lenguaje correcto para expresarse.
                  <br />
                  <br />
                  Nos movemos entre el branding, la ilustración, la animación,
                  la publicidad y la fotografía, conectando disciplinas para
                  contar historias relevantes con claridad y carácter. Nuestra
                  filosofía es clara: “El diseño no es arte… pero cada proyecto
                  es una obra única.”
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
      <AnimateOnScroll
        animationClass='animate-fade-up'
        delayClass='animate-delay-1s'
      >
        <section className='p-8 md:px-8 bg-[#1a47c4]'>
          <div className='md:flex w-full max-w-[1440px] mx-auto'>
            <div className='md:w-full'>
              <h2 className='text-white font-cardo text-3xl mb-8 text-center md:text-5xl md:text-left max-w-[350px] mx-auto'>
                Sé que el diseño no es arte, pero en mi estudio cada proyecto es
                una obra única.
              </h2>
            </div>
            <div className='md:w-full md:flex md:gap-16'>
              <div className='md:w-full flex justify-center items-center mb-8 md:max-w-[300px]'>
                <picture className='w-full mx-auto md:max-w-[300px]'>
                  <Image
                    src='/about/little_andre.png'
                    alt='Andrea Loarte'
                    width={500}
                    height={500}
                    className='w-full mx-auto md:m-0 h-auto max-w-[300px]'
                  />
                </picture>
              </div>
              <div className='md:w-full md:flex  md:items-center'>
                <p className='text-white mb-8 w-full md:max-w-[300px]'>
                  Desde pequeña el arte ha sido parte de mi forma de ver el
                  mundo: la pintura, la cerámica, y la creación siempre han sido
                  mi manera de expresarme.
                  <br />
                  <br /> Hoy, ese mismo espíritu guía mi trabajo como diseñadora
                  y directora de arte.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
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
              href='https://docs.google.com/forms/d/e/1FAIpQLScJ5p8uYDnV24f9Ivg-PVMUNG70N1XbUvGZCRw0lXMoATVxuA/viewform?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='mx-auto text-center block w-fit bg-white text-[16px] mt-4 px-4 py-2 shadow-[0px_14px_36px_rgba(0,0,0,0.5)] text-[#292605] md:m-0 rounded-[10px] hover:bg-[#1a47c4] transition all hover:text-white'
            >
              Agenda Aquí
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
      <AnimateOnScroll
        animationClass='animate-fade-up'
        delayClass='animate-delay-1s'
      >
        <section className='p-8 md:px-8 bg-[#1a47c4] pb-16'>
          <div className='md:flex w-full max-w-[1440px] mx-auto'>
            <div className='md:w-[50%] md:mt-16'>
              <h4 className='text-white font-cardo text-3xl mb-8 text-center md:text-5xl md:text-left max-w-[350px] mx-auto'>
                Diseños Por
                <br />
                El Mundo
              </h4>
              <p className='text-white mb-8 w-full md:m-0 md:max-w-[350px] md:mx-auto'>
                Cada proyecto es una chispa de autoexpresión, una oportunidad
                para darle fuerza y forma a la voz de quienes sueñan con crear.
                Aquí, el diseño y la estrategia se entrelazan para construir
                historias con propósito, transformando ideas en realidades que
                inspiran y dejan huella.
              </p>
            </div>
            <div className='md:w-[50%] md:flex md:justify-center md:items-center'>
              <picture className='w-full  md:max-w-[100%] mx-auto relative'>
                <Image
                  src='/about/world_map.png'
                  alt='Mapa del mundo'
                  width={500}
                  height={500}
                  className='w-full mx-auto md:m-0 h-auto   md:max-w-[100%]'
                />
                <Image
                  src='/about/flag_usa.png'
                  alt='Mapa del mundo'
                  width={500}
                  height={500}
                  className='w-[24px] top-[25%] left-[5%] mx-auto md:m-0 h-auto absolute max-w-[300px] md:w-[32px] md:left-[0%] md:top-[28%] lg:w-[56px] flag-animation'
                />
                <Image
                  src='/about/flag_peru.png'
                  alt='Mapa del mundo'
                  width={500}
                  height={500}
                  className='w-[24px] bottom-[20%] left-[15%] mx-auto md:m-0 h-auto absolute max-w-[300px] md:w-[32px] md:left-[15%] md:bottom-[25%] lg:w-[56px] flag-animation'
                />
                <Image
                  src='/about/flag_argentina.png'
                  alt='Mapa del mundo'
                  width={500}
                  height={500}
                  className='w-[24px] bottom-[10%] left-[25%] mx-auto md:m-0 h-auto absolute max-w-[300px] md:w-[32px] lg:w-[56px] flag-animation'
                />
                <Image
                  src='/about/flag_suiza.png'
                  alt='Mapa del mundo'
                  width={500}
                  height={500}
                  className='w-[24px] top-[25%] left-[50%] mx-auto md:m-0 h-auto absolute max-w-[300px] md:w-[32px] lg:w-[56px] flag-animation'
                />
              </picture>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </main>
  )
}
