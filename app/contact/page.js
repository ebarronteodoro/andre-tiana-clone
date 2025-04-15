import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '../../components/AnimateOnScroll'
import CustomPhysicsImages from '@/components/CustomPhysicsImages'

export const metadata = {
  title: 'Contact — Get in touch',
  description: 'Contact page of Andre & Tania design studio'
}

export default async function Home () {
  return (
    <main>
      <section className='p-4 md:px-8'>
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
              className='h-auto object-contain absolute -translate-y-1/2 top-[20%] left-7 md:left-10 lg:left-16 lg:w-[48px] '
            />
            <h1 className='absolute -translate-y-1/2 top-[50%] left-7 text-white font-cardo w-2/5 max-w-[400px] text-pretty md:text-3xl md:leading-[1.2] md:left-10 lg:left-16'>
              Agenda una videollamada gratuita para platicar de tu proyecto
            </h1>
            <Link
              href='https://docs.google.com/forms/d/e/1FAIpQLScJ5p8uYDnV24f9Ivg-PVMUNG70N1XbUvGZCRw0lXMoATVxuA/viewform?usp=sharing'
              target='_blank'
              className='bg-[#1a47c4] shadow-[0px_14px_36px_rgba(0,0,0,0.5)] block w-fit  text-white py-1 px-2 rounded-[10px] text-xs absolute -translate-y-1/2 bottom-[8%] left-7 x4c:bottom-[15%] sm:text-[.8rem] md:left-10 lg:text-[16px] lg:left-16 lg:px-4 lg:py-2 lg:bottom-[10%] xl:bottom-[15%]'
            >
              Agenda aquí
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
      <section className='bg-[#1a47c4] px-8 md:px-20 2xl:px-64 pt-10 overflow-hidden hidden md:block'>
        <AnimateOnScroll
          animationClass='animate-fade-up relative z-10 max-w-[1200px] mx-auto w-[75%]'
          delayClass='animate-delay-200'
        >
          <h2 className='text-white w-full md:w-[20rem] text-left py-10 text-xl md:leading-[1.1] md:text-3xl font-cardo -mb-10 2xl:-mb-20 text-pretty'>
            Recuerda que aquí te apoyamos con proyectos de:
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll
          animationClass='animate-fade-up max-w-[1200px] mx-auto w-[75%]'
          delayClass='animate-delay-200'
        >
          <CustomPhysicsImages className='overflow-hidden -mt-20 md:-mt-52 [@media(min-width:90rem)]:-mt-[35rem] w-full max-h-[70dvh] object-contain' />
        </AnimateOnScroll>
      </section>
      {/* <section className='pt-4 md:pt-0'>
        <div className='bg-[#3c251d] px-4 py-6 md:flex md:h-[380px]'>
          <div className='md:w-full md:relative'>
            <div className='right-0 md:absolute w-[200px] md:top-[20%] mx-auto'>
              <h3 className='text-center font-cardo text-2xl text-[#b89895] md:right-0 md:text-3xl md:text-left font-bold mx-auto'>
                Branding
              </h3>
            </div>
          </div>
          <picture className='w-full max-w-[400px] mx-auto flex items-center'>
            <Image
              src='/contacto/branding_request.png'
              width={200}
              height={100}
              alt='Imagen de contacto'
              className='w-full mx-auto max-w-[350px] h-auto my-4 animate-[float_3s_ease-in-out_infinite_300ms]'
            />
          </picture>
          <div className='md:w-full relative'>
            <p className='text-center block mx-auto font-cardo text-xl text-[#b89895] w-[224px] md:absolute md:left-0 md:top-[50%] md:-translate-y-1/2 md:text-2xl font-bold'>
              Tu marca merece una identidad visual que impacte.
            </p>
          </div>
        </div>
        <div className='bg-[#b89895] px-4 py-6 md:flex md:h-[380px]'>
          <div className='md:w-full md:relative'>
            <div className='right-0 md:absolute w-[200px] md:top-[20%] mx-auto'>
              <h3 className='text-center font-cardo text-2xl text-[#3c251d] md:right-0 md:text-3xl md:text-left font-bold mx-auto'>
                ReBranding
              </h3>
            </div>
          </div>
          <picture className='w-full max-w-[400px] mx-auto flex items-center'>
            <Image
              src='/contacto/rebranding_request.png'
              width={200}
              height={100}
              alt='Imagen de contacto'
              className='w-full mx-auto max-w-[350px] h-auto my-4 animate-[float_3s_ease-in-out_infinite]'
            />
          </picture>
          <div className='md:w-full relative'>
            <div className=''></div>
            <p className='text-center block mx-auto font-cardo text-xl text-[#3c251d] w-[15rem] md:absolute md:left-0 md:top-[50%] md:-translate-y-1/2 md:text-2xl font-bold'>
              Transformemos tu historia para que impacte como nunca.
            </p>
          </div>
        </div>
        <div className='bg-[#5a0f4a] px-4 py-6 md:flex md:h-[380px]'>
          <div className='md:w-full md:relative'>
            <div className='right-0 md:absolute w-[200px] md:top-[20%] mx-auto'>
              <h3 className='text-center font-cardo text-2xl text-[#f5a3e7] md:right-0 md:text-3xl md:text-left font-bold mx-auto md:m-0 w-[150px]'>
                Social Media
              </h3>
            </div>
          </div>
          <picture className='w-full max-w-[400px] mx-auto flex items-center'>
            <Image
              src='/contacto/socialmedia_request.png'
              width={200}
              height={100}
              alt='Imagen de contacto'
              className='w-full mx-auto max-w-[350px] h-auto my-4 animate-[float_3s_ease-in-out_infinite]'
            />
          </picture>
          <div className='md:w-full relative'>
            <div className=''></div>
            <p className='text-center block mx-auto font-cardo text-xl text-[#f5a3e7] w-[14rem] md:absolute md:left-0 md:top-[50%] md:-translate-y-1/2 md:text-2xl font-bold'>
              Contenido visual alineado a tu marca
            </p>
          </div>
        </div>
        <div className='bg-[#cae1de] px-4 py-6 md:flex md:h-[380px]'>
          <div className='md:w-full md:relative'>
            <div className='right-0 md:absolute w-[200px] md:top-[20%] mx-auto'>
              <h3 className='text-center font-cardo text-2xl text-[#718784] md:right-0 md:text-3xl md:text-left font-bold mx-auto'>
                Web
              </h3>
            </div>
          </div>
          <picture className='w-full max-w-[400px] mx-auto flex-column items-center'>
            <Image
              src='/contacto/web_request_1.png'
              width={200}
              height={100}
              alt='Imagen de contacto'
              className='w-full mx-auto max-w-[350px] h-auto my-4 animate-[float_3s_ease-in-out_infinite]'
            />
            <Image
              src='/contacto/web_request_2.png'
              width={200}
              height={100}
              alt='Imagen de contacto'
              className='w-full mx-auto max-w-[350px] h-auto my-4 animate-[float_3s_ease-in-out_infinite]'
            />
          </picture>
          <div className='md:w-full relative'>
            <div className=''></div>
            <p className='text-center block mx-auto font-cardo text-xl text-[#718784] w-[14rem] md:absolute md:left-0 md:top-[50%] md:-translate-y-1/2 md:text-2xl font-bold'>
              Diseñamos landing y webs con venta en línea.
            </p>
          </div>
        </div>
        <div className='bg-[#b3ad35] px-4 py-6 md:flex md:h-[380px]'>
          <div className='md:w-full md:relative'>
            <div className='right-0 md:absolute w-[200px] md:top-[20%] mx-auto'>
              <h3 className='text-center font-cardo text-2xl text-[#6c5c0d] md:right-0 md:text-3xl md:text-left font-bold mx-auto'>
                Ilustración
              </h3>
            </div>
          </div>
          <picture className='w-full max-w-[400px] mx-auto flex items-center'>
            <Image
              src='/contacto/ilustracion_request.png'
              width={200}
              height={100}
              alt='Imagen de contacto'
              className='w-full mx-auto max-w-[350px] h-auto my-4 animate-[float_3s_ease-in-out_infinite]'
            />
          </picture>
          <div className='md:w-full relative'>
            <div className=''></div>
            <p className='text-center block mx-auto font-cardo text-xl text-[#6c5c0d] w-[12rem] md:absolute md:left-0 md:top-[50%] md:-translate-y-1/2 md:text-2xl font-bold'>
              Gráficos personalizados que cuentan historias.
            </p>
          </div>
        </div>
        <div className='bg-[#eeac6c] px-4 py-6 md:flex md:h-[380px]'>
          <div className='md:w-full md:relative'>
            <div className='right-0 md:absolute w-[200px] md:top-[20%] mx-auto'>
              <h3 className='text-center font-cardo text-2xl text-[#af683b] md:right-0 md:text-3xl md:text-left font-bold mx-auto'>
                Consultoría Creativa
              </h3>
            </div>
          </div>
          <picture className='w-full max-w-[400px] mx-auto flex items-center'>
            <Image
              src='/contacto/consultoriacreativa_request.png'
              width={200}
              height={100}
              alt='Imagen de contacto'
              className='w-full mx-auto max-w-[350px] h-auto my-4 animate-[float_3s_ease-in-out_infinite]'
            />
          </picture>
          <div className='md:w-full relative'>
            <div className=''></div>
            <p className='text-center block mx-auto font-cardo text-xl text-[#af683b] w-[14rem] md:absolute md:left-0 md:top-[50%] md:-translate-y-1/2 md:text-2xl font-bold'>
              Te guiamos para potenciar tu imagen y comunicación.
            </p>
          </div>
        </div>
        <div className='bg-[#f0e48e] px-4 py-6 md:flex md:h-[380px]'>
          <div className='md:w-full md:relative'>
            <div className='right-0 md:absolute w-[200px] md:top-[20%] mx-auto'>
              <h3 className='text-center font-cardo text-2xl text-[#c3ae3a] md:right-0 md:text-3xl md:text-left font-bold mx-auto'>
                Fotografía
              </h3>
            </div>
          </div>
          <picture className='w-full max-w-[400px] mx-auto flex items-center'>
            <Image
              src='/contacto/fotografia_request.png'
              width={200}
              height={100}
              alt='Imagen de contacto'
              className='w-full mx-auto max-w-[350px] h-auto my-4 animate-[float_3s_ease-in-out_infinite]'
            />
          </picture>
          <div className='md:w-full relative'>
            <div className=''></div>
            <p className='text-center block mx-auto font-cardo text-xl text-[#c3ae3a] w-[14rem] md:absolute md:left-0 md:top-[50%] md:-translate-y-1/2 md:text-2xl font-bold'>
              Imágenes que resaltan la esencia de tu marca.
            </p>
          </div>
        </div>
        <div className='bg-[#d8c1de] px-4 py-6 md:flex md:h-[380px]'>
          <div className='md:w-full md:relative'>
            <div className='right-0 md:absolute w-[200px] md:top-[20%] mx-auto'>
              <h3 className='text-center font-cardo text-2xl text-[#1c1644] md:right-0 md:text-3xl md:text-left font-bold mx-auto'>
                Packaging
              </h3>
            </div>
          </div>
          <picture className='w-full max-w-[400px] mx-auto flex items-center'>
            <Image
              src='/contacto/packaging_request.png'
              width={200}
              height={100}
              alt='Imagen de contacto'
              className='w-full mx-auto max-w-[350px] h-auto my-4 animate-[float_3s_ease-in-out_infinite]'
            />
          </picture>
          <div className='md:w-full relative'>
            <div className=''></div>
            <p className='text-center block mx-auto font-cardo text-xl text-[#1c1644] w-[12.5rem] md:absolute md:left-0 md:top-[50%] md:-translate-y-1/2 md:text-2xl font-bold'>
              Empaques que comunican valores y conectan con el cliente.
            </p>
          </div>
        </div>
      </section> */}
    </main>
  )
}
