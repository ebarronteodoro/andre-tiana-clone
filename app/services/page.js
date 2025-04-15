import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Servicios | Andrea Loarte Design Studio',
  description: 'Servicios de diseño gráfico y branding para tu marca.',
  keywords: 'branding, diseño gráfico, servicios de diseño, identidad visual, marketing digital',
}

export default function ServicesPage () {
  const servicesData = [
    {
      src: '/services/bg-1.png',
      title: 'Branding',
      imageFront: ['/contacto/branding_request.png'],
      description: 'Tu marca merece una identidad visual que impacte.',
      price: '$300',
      color: '#b59894'
    },
    {
      src: '/services/bg-2.png',
      title: 'Rebranding',
      imageFront: ['/contacto/rebranding_request.png'],
      description: 'Transformemos tu historia para que impacte como nunca.',
      price: '$400',
      color: '#3e241b'
    },
    {
      src: '/services/bg-3.png',
      title: 'Social Media',
      imageFront: ['/contacto/socialmedia_request.png'],
      description: 'Contenido visual alineado a tu marca.',
      price: '$300',
      color: '#f2a5e6'
    },
    {
      src: '/services/bg-4.png',
      title: 'Web',
      imageFront: [
        '/contacto/web_request_2.png',
        '/contacto/web_request_1.png'
      ],
      description: 'Diseñamos landing y webs con venta en línea.',
      price: '$400',
      color: '#768b88'
    },
    {
      src: '/services/bg-5.png',
      title: 'Ilustración',
      imageFront: ['/contacto/ilustracion_request.png'],
      description: 'Gráficos personalizados que cuentan historias.',
      price: '$100',
      color: '#6c5c09'
    },
    {
      src: '/services/bg-6.png',
      title: 'Consultoría Creativa',
      imageFront: ['/contacto/consultoriacreativa_request.png'],
      description: 'Te guiamos para potenciar tu imagen y comunicación.',
      price: '$30',
      color: '#ae6a3f'
    },
    {
      src: '/services/bg-7.png',
      title: 'Fotografía',
      imageFront: ['/contacto/fotografia_request.png'],
      description: 'Imágenes que resaltan la esencia de tu marca.',
      price: '$100',
      color: '#c0b233'
    },
    {
      src: '/services/bg-8.png',
      title: 'Packaging',
      imageFront: ['/contacto/packaging_request.png'],
      description: 'Empaques que comunican valores y conectan con el cliente.',
      price: '$100',
      color: '#1c1647'
    }
  ]

  return (
    <main>
      <section className='bg-[#1a47c4] min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-76px)] flex flex-col items-center justify-center py-8 2xl:py-16'>
        <h1 className='text-white text-4xl md:text-5xl mb-8 font-cardo capitalize'>
          Te ayudamos en:
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1300px] mx-auto w-6/7 py-4'>
          {servicesData.map((service, index) => (
            <article
              key={index}
              className='relative w-full overflow-hidden h-full group'
            >
              <div className='relative h-full w-full transition-transform duration-500 group-hover:rotate-y-180'>
                <div>
                  <picture>
                    <source
                      media='(max-width: 768px)'
                      srcSet={service.src.replace('.png', '-variant.png')}
                    />
                    <Image
                      src={service.src}
                      alt={service.title}
                      width={500}
                      height={500}
                      className='object-cover'
                    />
                  </picture>
                  <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
                    <div className='relative md:absolute md:inset-0 flex flex-col items-center justify-center gap-3 md:group-hover:opacity-0 transition-opacity duration-300 py-4'>
                      <span
                        style={{ color: service.color }}
                        className='font-cardo text-4xl w-3/4 text-center leading-none mb-auto mt-6'
                      >
                        {service.title}
                      </span>
                      {service.title === 'Web' ? (
                        <>
                          <Image
                            src={service.imageFront[0]}
                            alt={service.title}
                            width={500}
                            height={500}
                            className='w-[55%] mb-auto mr-auto ml-8'
                          />
                          <Image
                            src={service.imageFront[1]}
                            alt={service.title}
                            width={500}
                            height={500}
                            className='hidden md:block w-[55%] -mt-5 mb-auto mr-8 ml-auto'
                          />
                        </>
                      ) : service.title === 'Consultoría Creativa' ? (
                        <Image
                          src={service.imageFront[0]}
                          alt={service.title}
                          width={500}
                          height={500}
                          className='w-4/7 mb-auto'
                        />
                      ) : (
                        <Image
                          src={service.imageFront[0]}
                          alt={service.title}
                          width={500}
                          height={500}
                          className='w-5/7 mb-auto 2xl:w-7/10'
                        />
                      )}
                    </div>

                    <div
                      className='relative md:absolute md:inset-0 flex flex-col gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:rotate-y-180 font-cardo py-4 px-12'
                      style={{ color: service.color }}
                    >
                      <span className='font-cardo text-lg w-5/6 text-left text-balance leading-[1] md:mt-5 2xl:mt-0'>
                        {service.description}
                      </span>
                      <span className='font-cardo flex mt-auto'>
                        DESDE
                        <strong className='text-[4.2rem] ml-auto mr-2'>
                          {service.price}
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className='bg-white text-[#1a47c4] text-center space-y-20 py-12'>
        <h2 className='uppercase tracking-[1px] font-helvetica-neue'>
          Cotiza tu proyecto
        </h2>
        <p className='text-6xl font-cardo capitalize'>
          Hagamos de tus ideas realidad
        </p>
        <Link
          href='https://docs.google.com/forms/d/e/1FAIpQLScJ5p8uYDnV24f9Ivg-PVMUNG70N1XbUvGZCRw0lXMoATVxuA/viewform?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-[#1a47c4] shadow-[0px_14px_36px_rgba(0,0,0,0.5)] text-white py-2 md:py-1 px-4 md:px-2 rounded-[10px] text-xs sm:text-[.8rem] lg:text-[16px] lg:px-4 lg:py-2'
        >
          Agenda aquí
        </Link>
      </section>
    </main>
  )
}
