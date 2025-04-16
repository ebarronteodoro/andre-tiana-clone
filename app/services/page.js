import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Servicios | Andrea Loarte Design Studio',
  description: 'Servicios de diseño gráfico y branding para tu marca.',
  keywords:
    'branding, diseño gráfico, servicios de diseño, identidad visual, marketing digital'
}

export default function ServicesPage () {
  const servicesData = [
    {
      src: '/services/bg-1.png',
      title: 'Branding',
      serviceChats: [
        '¡Por fin con mi negocio propio! Solo me falta el branding para despegar..'
      ],
      description: '“Tu marca merece una identidad visual que impacte.”',
      price: '$300',
      color: '#321d18',
      bubbles: []
    },
    {
      src: '/services/bg-2.png',
      title: 'Rebranding',
      serviceChats: ['“Quiero mejorar la imagen de mi marca. ¡Ayudaa!”'],
      description: 'Transformemos tu historia para que impacte como nunca.',
      price: '$400',
      color: '#321d18',
      bubbles: []
    },
    {
      src: '/services/bg-3.png',
      title: 'Social Media',
      serviceChats: [
        '“Necesito que manejen el perfil de mi negocio y que mejore su imagen en redes sociales”'
      ],
      description: 'Contenido visual alineado a tu marca.',
      price: '$300',
      color: '#4d134c',
      bubbles: ['Reels', 'Profile Feed']
    },
    {
      src: '/services/bg-4.png',
      title: 'Diseño Web',
      serviceChats: [
        '“Soy psicóloga y quiero un espacio donde mis clientes encuentren información sobre mis servicios”',
        '“Tengo mi marca de ropa y me gustaría que mis clientes compren por la web”'
      ],
      description: 'Diseñamos landing y webs con venta en línea.',
      price: '$400',
      color: '#6b7f7e',
      bubbles: ['Landing Page', 'Web + Shop']
    },
    {
      src: '/services/bg-5.png',
      title: 'Ilustración',
      serviceChats: [
        '“Estoy desarrollando un evento gastronómico y necesito una ilustración para hacer el merch del evento”'
      ],
      description: 'Gráficos personalizados que cuentan historias.',
      price: '$100',
      color: '#7b8a73',
      bubbles: ['Animación 2D', 'Digital', 'Impresión incluida']
    },
    {
      src: '/services/bg-6.png',
      title: 'Fotografía',
      serviceChats: [
        '“Estoy por inaugurar mi cafetería pero necesito las fotos para mi contenido”'
      ],
      description: 'Te guiamos para potenciar tu imagen y comunicación.',
      price: '$100',
      color: '#877f30',
      bubbles: ['Producto', 'Life Style']
    },
    {
      src: '/services/bg-7.png',
      title: 'Packaging',
      serviceChats: [
        '“Soy #matchalover y quiero un empaque que refleje la esencia artesanal de mis postres con matcha”'
      ],
      description: 'Imágenes que resaltan la esencia de tu marca.',
      price: '$100',
      color: '#4d134c',
      bubbles: []
    },
    {
      src: '/services/bg-8.png',
      title: 'Consultoría Creativa',
      serviceChats: [
        '“Quiero que mi marca de velas se vea profesional y transmita mi esencia, pero no sé por dónde empezar..”'
      ],
      description: 'Empaques que comunican valores y conectan con el cliente.',
      price: '$30',
      color: '#a97448',
      bubbles: []
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
              <div className='relative h-full w-full transition-transform duration-500 md:group-hover:rotate-y-180'>
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
                <div className='absolute top-0 left-0 w-full h-full flex flex-col md:justify-center'>
                  <div className='relative md:absolute md:inset-0 flex flex-col items-center gap-3 md:group-hover:opacity-0 transition-opacity duration-300 py-0 [@media(min-width:90rem)]:py-1 px-5 [@media(min-width:90rem)]:px-6'>
                    <span
                      style={{
                        color: service.color,
                        borderColor: service.color
                      }}
                      className='font-cardo text-[31px] md:text-4xl w-full text-left leading-none border-b mt-6 pb-4 md:pb-2'
                    >
                      {service.title}
                    </span>
                    {service.serviceChats.length > 1 ? (
                      <div className='flex gap-4 flex-col md:flex-row justify-between'>
                        <p
                          style={{ color: service.color }}
                          className='font-cardo leading-[1.1] md:leading-[1.2] md:w-[45%] md:text-[15px] [@media(min-width:90rem)]:text-lg text-pretty md:text-balance'
                        >
                          {service.serviceChats[0]}
                        </p>
                        <p
                          style={{ color: service.color }}
                          className='font-cardo leading-[1.1] md:leading-[1.2] w-[70%] ml-auto md:ml-0 md:w-[45%] [@media(min-width:90rem)]:text-lg text-pretty md:text-balance pb-6 md:pb-0'
                        >
                          {service.serviceChats[1]}
                        </p>
                      </div>
                    ) : (
                      service.serviceChats.map((chat, chatIndex) => (
                        <p
                          key={chatIndex}
                          style={{ color: service.color }}
                          className={`font-cardo leading-[1.1] md:leading-[1.2] text-[22px] w-[90%] md:w-full mx-auto md:mx-0 md:px-0 pb-6 md:pb-0 [@media(min-width:90rem)]:text-2xl md:text-pretty ${service.bubbles.length < 1 && '[@media(min-width:90rem)]:pt-3 [@media(min-width:90rem)]:text-[26px]'}`}
                        >
                          {chat}
                        </p>
                      ))
                    )}
                  </div>

                  <div
                    className='relative md:absolute md:inset-0 flex flex-col gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:rotate-y-180 font-cardo py-0 [@media(min-width:90rem)]:py-1 px-5 [@media(min-width:90rem)]:px-6 h-full md:h-auto'
                    style={{ color: service.color }}
                  >
                    <span
                      className='font-cardo text-xl w-full pt-7 md:pt-0 px-3 md:px-0 md:w-5/6 text-left text-balance leading-[1] md:mt-6 [@media(min-width:90rem)]:mt-10 border-t md:border-t-0'
                      style={{ borderColor: service.color }}
                    >
                      {service.description}
                    </span>
                    <span className='font-cardo flex text-sm px-3 md:px-0 pt-6 [@media(min-width:90rem)]:text-base mt-auto mb-7 md:mb-6'>
                      DESDE
                      <strong className='text-6xl px-5 border rounded-4xl ml-auto mr-2 font-normal'>
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
