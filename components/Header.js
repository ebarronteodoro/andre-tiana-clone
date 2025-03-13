'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto'

    if (mobileMenuOpen) {
      setMenuVisible(true)
      setTimeout(() => {
        setFadeIn(true)
      }, 10)
    } else {
      setFadeIn(false)
      const timeout = setTimeout(() => {
        setMenuVisible(false)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [mobileMenuOpen])

  const navigationLinks = (
    <>
      <Link
        href='/work'
        onClick={() => setMobileMenuOpen(false)}
        className={`font-medium ${
          mobileMenuOpen ? 'text-white' : 'text-[#999]'
        } md:text-black`}
      >
        WORK
      </Link>
      <Link
        href='/about'
        onClick={() => setMobileMenuOpen(false)}
        className={`font-medium ${
          mobileMenuOpen ? 'text-white' : 'text-[#999]'
        } md:text-black`}
      >
        ABOUT
      </Link>
      <Link
        href='/news'
        onClick={() => setMobileMenuOpen(false)}
        className={`font-medium ${
          mobileMenuOpen ? 'text-white' : 'text-[#999]'
        } md:text-black`}
      >
        NEWS
      </Link>
      <Link
        href='/contact'
        onClick={() => setMobileMenuOpen(false)}
        className={`font-medium ${
          mobileMenuOpen ? 'text-white' : 'text-[#999]'
        } md:text-black`}
      >
        CONTACT
      </Link>
    </>
  )

  return (
    <header className='container mx-auto px-4 py-6 flex justify-between items-center relative'>
      <Link
        href='/'
        className='text-red-600 text-5xl font-medium font-times-new-roman relative z-50'
      >
        <Image
          className='h-auto object-contain w-44 md:w-56'
          src='/logo/logo.png'
          alt='Logo Andrea'
          width={500}
          height={100}
        />
      </Link>
      <nav className='hidden md:flex items-center space-x-8'>
        {navigationLinks}
        <button aria-label='Search'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='text-gray-500'
          >
            <circle cx='11' cy='11' r='8'></circle>
            <path d='m21 21-4.3-4.3'></path>
          </svg>
        </button>
      </nav>
      <button
        className='md:hidden relative z-50 flex flex-col justify-center'
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label='Toggle Menu'
      >
        <span
          className={`block w-5 h-0.5 bg-[#666] transition transform duration-300 ${
            mobileMenuOpen ? 'rotate-45 translate-y-1' : ''
          }`}
        ></span>
        <span
          className={`block w-5 h-0.5 bg-[#666] transition transform duration-300 mt-1 ${
            mobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''
          }`}
        ></span>
      </button>
      {menuVisible && (
        <div
          className={`fixed inset-0 bg-black/90 z-40 flex flex-col items-start transition-opacity duration-300 ${
            fadeIn ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <nav className='flex flex-col ml-4 space-y-3 text-xl mt-32'>
            {navigationLinks}
            <button aria-label='Search'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-gray-500'
              >
                <circle cx='11' cy='11' r='8'></circle>
                <path d='m21 21-4.3-4.3'></path>
              </svg>
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
