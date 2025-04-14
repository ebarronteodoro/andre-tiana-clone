import Image from 'next/image'
import Link from 'next/link'

export default function InstagramButton () {
  return (
    <Link
      href='https://www.instagram.com/andrea.loarte.s/'
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-4 right-4 z-50'
    >
      <div className='relative size-20 flex items-center justify-center'>
        <span className='absolute inset-0 rounded-full bg-[#1a47c4] opacity-70 animate-ping' />
        <span className='relative rounded-full bg-white shadow-lg'>
          <Image
            src='/ig-icon.png'
            alt='Instagram Icon'
            width={50}
            height={50}
            className='rounded-full object-contain size-full'
          />
        </span>
      </div>
    </Link>
  )
}
