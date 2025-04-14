import Image from 'next/image'

export default function ServicesPage () {
  const images = [
    '/services/bg-1.png',
    '/services/bg-2.png',
    '/services/bg-3.png',
    '/services/bg-4.png',
    '/services/bg-5.png',
    '/services/bg-6.png',
    '/services/bg-7.png',
    '/services/bg-8.png'
  ]

  return (
    <main>
      <section className='bg-[#1a47c4] min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-76px)] flex flex-col items-center justify-center'>
        <h1 className='text-white text-3xl mb-4'>Te ayudamos en:</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {images.map((src, index) => (
            <div key={index} className='relative w-full overflow-hidden'>
              <picture>
                <source
                  media='(max-width: 768px)'
                  srcSet={src.replace('.png', '-variant.png')}
                />
                <Image
                  src={src}
                  alt={`Background ${index + 1}`}
                  width={500}
                  height={500}
                  className='object-contain h-full'
                />
              </picture>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
