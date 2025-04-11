'use client'
import { useState } from 'react'
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
  const [linkText, setLinkText] = useState(defaultText)

  return (
    <Link
      href={href}
      className='block mt-6 max-w-[500px] mx-auto'
      onMouseEnter={() => setLinkText(hoverText)}
      onMouseLeave={() => setLinkText(defaultText)}
    >
      <div className='relative'>
        <Image
          className='w-full h-auto object-cover'
          src={marcoSrc}
          alt='Marco de foto'
          width={width}
          height={height}
          loading='lazy'
        />
        <Image
          className='absolute top-[50%] left-[50%] w-full h-[100%] object-cover -z-10 -translate-x-1/2 -translate-y-1/2'
          src={projectSrc}
          alt='Proyecto'
          width={width}
          height={height}
          loading='lazy'
        />
      </div>
      <span className='mt-4 block text-xl transition-all duration-300'>
        {linkText}
      </span>
    </Link>
  )
}
