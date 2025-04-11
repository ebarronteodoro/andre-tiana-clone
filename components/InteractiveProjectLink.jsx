import Link from 'next/link'
import Image from 'next/image'

export default function InteractiveProjectLink ({
  href,
  defaultText,
  hoverText,
  marcoSrc,
  projectSrc,
  width = 600,
  height = 500
}) {
  return (
    <Link href={href} className='block mt-6 max-w-[500px] mx-auto group'>
      <div className='relative overflow-hidden'>
        <Image
          className='w-full h-auto object-cover'
          src={marcoSrc}
          alt='Marco de foto'
          width={width}
          height={height}
          loading='lazy'
        />
        <Image
          className='absolute top-[50%] left-[50%] w-full h-[100%] object-cover -z-10 -translate-x-1/2 -translate-y-1/2 transition duration-300 group-hover:scale-110'
          src={projectSrc}
          alt='Proyecto'
          width={width}
          height={height}
          loading='lazy'
        />
      </div>
      {/* Texto: se muestran dos spans que cambian de opacidad */}
      <div className='mt-4 relative h-6'>
        <span className='block transition-opacity duration-300 group-hover:opacity-0'>
          {defaultText}
        </span>
        <span className='block absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          {hoverText}
        </span>
      </div>
    </Link>
  )
}
