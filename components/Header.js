'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header () {
  const pathname = usePathname()

  // Configuración dinámica según la ruta
  const styleConfig = {
    headerBg:
      pathname === '/'
        ? 'bg-[#1a47c4]'
        : pathname === '/contact'
        ? 'bg-[#B4AE36]'
        : 'bg-white',
    // Si estás en '/' los enlaces son blancos, en '/contact' se muestran en negro (activo) y gris (inactivo)
    navActive:
      pathname === '/'
        ? 'md:text-white'
        : pathname === '/contact'
        ? 'md:text-white'
        : 'md:text-[#1a1a1a]',
    navInactive:
      pathname === '/'
        ? 'md:text-white'
        : pathname === '/contact'
        ? 'md:text-white md:hover:text-white'
        : 'md:text-[#999] md:hover:text-[#1a1a1a]',
    // Para el logo se cambia de imagen según la ruta
    logoSrc: pathname === '/' || pathname === '/contact' ? '/logo/logo-blanco.png' : '/logo/logo.png',
    // Color de las barras del botón móvil según el fondo
    mobileBar: pathname === '/' ? 'bg-white' : 'bg-black'
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)

  // Controla el overflow del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto'
    if (mobileMenuOpen) {
      setMenuVisible(true)
      setTimeout(() => setFadeIn(true), 10)
    } else {
      setFadeIn(false)
      const timeout = setTimeout(() => setMenuVisible(false), 300)
      return () => clearTimeout(timeout)
    }
  }, [mobileMenuOpen])

  // Componente para los enlaces del navbar
  const NavLink = ({ href, children }) => {
    const isActive = href === pathname

    return (
      <Link
        href={href}
        onClick={() => setMobileMenuOpen(false)}
        className={`
          ${isActive ? styleConfig.navActive : styleConfig.navInactive}
          md:text-[17px] md:tracking-[1px] md:font-helvetica-neue
        `}
      >
        {children}
      </Link>
    )
  }

  const navigationLinks = (
    <>
      <NavLink href='/work'>WORK</NavLink>
      <NavLink href='/about'>ABOUT</NavLink>
      {/* <NavLink href='/news'>NEWS</NavLink> */}
      <NavLink href='/contact'>CONTACT</NavLink>
    </>
  )

  return (
    <header className={styleConfig.headerBg}>
      <div className='container mx-auto px-4 py-6 flex justify-between items-center relative z-10'>
        <Link href='/' className='relative z-50'>
          <Image
            className='h-auto object-contain w-44 md:w-56'
            src={styleConfig.logoSrc}
            alt='Logo Andrea'
            width={500}
            height={100}
          />
        </Link>
        <nav className='hidden md:flex items-center space-x-8'>
          {navigationLinks}
        </nav>
        <button
          className='md:hidden relative z-50 flex flex-col justify-center'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label='Toggle Menu'
        >
          <span
            className={`block w-5 h-0.5 ${
              styleConfig.mobileBar
            } transition transform duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-1' : ''
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 ${
              styleConfig.mobileBar
            } transition transform duration-300 mt-1 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''
            }`}
          ></span>
        </button>
      </div>

      {menuVisible && (
        <div
          className={`fixed inset-0 bg-black/90 z-40 flex flex-col transition-opacity duration-300 ${
            fadeIn ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='container px-4 mx-auto py-6 flex justify-between items-center'>
            <Link
              href='/'
              onClick={() => setMobileMenuOpen(false)}
              className='relative z-50'
            >
              <Image
                className='h-auto object-contain w-44 md:w-56'
                src={styleConfig.logoSrc}
                alt='Logo Andrea'
                width={500}
                height={100}
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label='Close Menu'
              className='relative z-50'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <nav className='flex flex-col ml-4 space-y-3 text-xl mt-16'>
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
