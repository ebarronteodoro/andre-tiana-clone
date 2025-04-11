'use client'

import InstagramIcon from '@/app/icons/InstagramIcon'
import MailIcon from '@/app/icons/MailIcon'
import TikTokIcon from '@/app/icons/TikTokIcon'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header () {
  const pathname = usePathname()

  // Configuración dinámica según la ruta
  const styleConfig = {
    headerBg:
      pathname === '/' || pathname === '/brochure' || pathname === '/about'
        ? 'bg-[#1a47c4]'
        : 'bg-white',
    navActive:
      pathname === '/' || pathname === '/brochure' || pathname === '/about'
        ? 'md:text-white'
        : 'md:text-[#1a1a1a]',
    navInactive:
      pathname === '/' || pathname === '/brochure' || pathname === '/about'
        ? 'md:text-white'
        : 'md:text-[#999] md:hover:text-[#1a1a1a]',
    logoSrc:
      pathname === '/' || pathname === '/brochure' || pathname === '/about'
        ? '/logo/logo-blanco.png'
        : '/logo/logo.png',
    mobileBar:
      pathname === '/' || pathname === '/about' ? 'bg-white' : 'bg-black'
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)

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
  const NavLink = ({ href, children, target, ...props }) => {
    const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
    return (
      <Link
        href={href}
        onClick={() => setMobileMenuOpen(false)}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={`
          ${isActive ? styleConfig.navActive : styleConfig.navInactive}
          md:text-[17px] md:tracking-[1px] md:font-helvetica-neue
          md:mobile-menu:text-white // El menú móvil siempre tendrá texto blanco
        `}
        {...props}
      >
        {children}
      </Link>
    )
  }

  // Si estamos en la página brochure, mostramos otros links
  const navigationLinks =
    pathname === '/brochure' ? (
      <>
        <NavLink
          target='_blank'
          href='https://www.instagram.com/andrea.loarte.s/'
        >
          <InstagramIcon className='text-white size-7 transition duration-300 hover:scale-105' />
        </NavLink>
        <NavLink
          target='_blank'
          href='https://www.tiktok.com/@andrealoarte?_t=ZM-8vJZ7j61zba&_r=1'
        >
          <TikTokIcon className='text-white size-7 transition duration-300 hover:scale-105' />
        </NavLink>
        <NavLink target='_blank' href='mailto:adrealoarte.studio@gmail.com'>
          <MailIcon className='text-white size-7 transition duration-300 hover:scale-105' />
        </NavLink>
      </>
    ) : (
      <>
        <NavLink href='/gallery'>PROYECTOS</NavLink>
        <NavLink href='/about'>CONOCER</NavLink>
        <NavLink href='/contact'>CONTACTO</NavLink>
      </>
    )

  return (
    <header className={styleConfig.headerBg}>
      <div className='container mx-auto px-4 py-6 flex justify-between items-center relative z-10'>
        <Link
          href={
            pathname === '/brochure'
              ? 'https://www.instagram.com/andrea.loarte.s/'
              : '/'
          }
          target={pathname === '/brochure' ? '_blank' : undefined}
          rel={pathname === '/brochure' ? 'noopener noreferrer' : undefined}
          className='relative z-50'
        >
          <img
            className='h-auto object-contain w-44 md:w-56 aspect-[8/1]'
            src={styleConfig.logoSrc}
            alt='Logo Andrea Loarte Design Studio'
            loading='eager'
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
              href={
                pathname === '/brochure'
                  ? 'https://www.instagram.com/andreytiana.design/'
                  : '/'
              }
              target={pathname === '/brochure' ? '_blank' : undefined}
              rel={pathname === '/brochure' ? 'noopener noreferrer' : undefined}
              className='relative z-50 flex flex-col items-center'
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
          <nav className='flex flex-col ml-4 space-y-3 text-xl mt-16 text-white'>
            {navigationLinks}
          </nav>
        </div>
      )}
    </header>
  )
}
