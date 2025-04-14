import Image from 'next/image'

export default function ServicesPage () {
  const servicesData = [
    {
      src: '/services/bg-1.png',
      title: 'Branding',
      imageFront: '/contacto/branding_request.png',
      description: 'Solución innovadora',
      price: '$1000'
    },
    {
      src: '/services/bg-2.png',
      title: 'Rebranding',
      imageFront: '/contacto/rebranding_request.png',
      description: 'Diseño responsivo',
      price: '$1500'
    },
    {
      src: '/services/bg-3.png',
      title: 'Social Media',
      imageFront: '/contacto/socialmedia_request.png',
      description: 'Nueva imagen para tu marca',
      price: '$1200'
    },
    {
      src: '/services/bg-4.png',
      title: 'Web',
      description: 'Desarrollo y diseño web creativo',
      imageFront: '/contacto/web_request_1.png',
      price: '$1800'
    },
    {
      src: '/services/bg-5.png',
      title: 'Ilustración',
      imageFront: '/contacto/ilustracion_request.png',
      description: 'Ilustraciones únicas para tu marca',
      price: '$1300'
    },
    {
      src: '/services/bg-6.png',
      title: 'Consultoría Creativa',
      imageFront: '/contacto/consultoriacreativa_request.png',
      description: 'Estrategia e inspiración para crecer',
      price: '$1600'
    },
    {
      src: '/services/bg-7.png',
      title: 'Fotografía',
      imageFront: '/contacto/fotografia_request.png',
      description: 'Capturamos la esencia de tu marca',
      price: '$1400'
    },
    {
      src: '/services/bg-8.png',
      title: 'Packaging',
      imageFront: '/contacto/packaging_request.png',
      description: 'Diseño de empaque que cautiva',
      price: '$1500'
    }
  ]

  return (
    <main>
      <section className='bg-[#1a47c4] min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-76px)] flex flex-col items-center justify-center'>
        <h1 className='text-white text-3xl mb-4 font-cardo capitalize'>Te ayudamos en:</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1200px] mx-auto w-4/5 py-4'>
          {servicesData.map((service, index) => (
            <article
              key={index}
              className='relative w-full overflow-hidden h-full group'
            >
              <div className='relative h-full w-full transition-transform duration-500 group-hover:rotate-y-180'>
                <div>
                  <Image
                    src={service.src}
                    alt={service.title}
                    width={500}
                    height={500}
                    className='object-cover'
                  />
                  <div className='absolute inset-0 flex flex-col items-center justify-center gap-3 group-hover:opacity-0 transition-opacity duration-300'>
                    <span className='font-cardo text-3xl w-3/4 text-center'>
                      {service.title}
                    </span>
                    <Image
                      src={service.imageFront}
                      alt={service.title}
                      width={500}
                      height={500}
                      className='w-4/7'
                    />
                  </div>
                  <div className='absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-y-180'>
                    <span className='font-cardo text-3xl w-3/4 text-center'>
                      {service.description}
                    </span>
                    <span className='font-cardo text-3xl w-3/4 text-center'>
                      DESDE
                      <strong>
                        {service.price}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
