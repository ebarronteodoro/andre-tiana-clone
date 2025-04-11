'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer () {
  return (
    <footer className='bg-white text-white py-8'>
      <div className='max-w-8xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left'>
          <Link
            href='/'
            className='w-full flex flex-col items-center justify-center'
          >
            <img
              className='h-auto object-contain w-48 mx-auto aspect-[8/1]'
              src='/logo/logo.png'
              alt='Logo Andrea Loarte Design Studio'
              loading='lazy'
            />
            <p className='text-[#1a47c4] text-base text-left font-cardo'>
              Design Studio
            </p>
          </Link>

          <div className='w-full'>
            <ul className='text-gray-400 text-sm space-y-2'>
              <li className='text-left'>
                <Link
                  target='_blank'
                  href='/terms-and-conditions'
                  className='hover:text-[#1a47c4] text-base'
                >
                  Términos y condiciones
                </Link>
              </li>
              <li className='text-left'>
                <Link
                  target='_blank'
                  href='/faq'
                  className='hover:text-[#1a47c4] text-base'
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div className='w-full'>
            <ul className='text-gray-400 text-sm space-y-2'>
              <li className='text-left'>
                <Link
                  target='_blank'
                  href='https://www.instagram.com/andrea.loarte.s/'
                  className='hover:text-[#1a47c4] text-base'
                >
                  Instagram
                </Link>
              </li>
              <li className='text-left'>
                <Link
                  target='_blank'
                  href='https://www.tiktok.com/@andrealoarte?_t=ZM-8vJZ7j61zba&_r=1'
                  className='hover:text-[#1a47c4] text-base'
                >
                  Tik-Tok
                </Link>
              </li>
            </ul>
          </div>

          <div className='w-full'>
            <ul className='text-gray-400 text-sm space-y-2'>
              <li className='text-left'>
                {/*
                  Si solo deseas mostrar el año sin navegación, considera reemplazar 
                  el Link por un <span> o <p> para evitar discrepancias.
                */}
                <span className='hover:text-[#1a47c4] text-base'>2025</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
