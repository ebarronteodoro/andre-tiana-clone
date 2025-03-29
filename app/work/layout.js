'use client'
import { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { unstable_ViewTransition as ViewTransition } from 'react'

export default function WorkLayout ({ children }) {
  const pathname = usePathname()
  const router = useRouter()

  // Determinamos la pestaña activa en base al pathname
  const [activeTab, setActiveTab] = useState(
    pathname.includes('archive') ? 'all' : 'client'
  )
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 })
  const [slideDirection, setSlideDirection] = useState('') // 'left' o 'right'

  // Refs para calcular posición y ancho del indicador
  const clientRef = useRef(null)
  const allRef = useRef(null)
  // Ref para determinar si es el primer render (sin animación)
  const isInitialRender = useRef(true)

  useEffect(() => {
    setActiveTab(pathname.includes('archive') ? 'all' : 'client')
  }, [pathname])

  useLayoutEffect(() => {
    if (activeTab === 'client' && clientRef.current) {
      setIndicatorStyle({
        width: clientRef.current.offsetWidth,
        left: clientRef.current.offsetLeft
      })
    } else if (activeTab === 'all' && allRef.current) {
      setIndicatorStyle({
        width: allRef.current.offsetWidth,
        left: allRef.current.offsetLeft
      })
    }
  }, [activeTab])

  // Marcamos que ya no es el primer render después del montaje
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
    }
  }, [])

  // Al hacer click se asigna la dirección y se navega
  const handleNavClick = (e, href) => {
    e.preventDefault()
    if (href.includes('archive')) {
      setSlideDirection('left')
    } else {
      setSlideDirection('right')
    }
    router.push(href)
  }

  // Reseteamos la dirección después de que la animación (300ms) finaliza
  useEffect(() => {
    if (slideDirection) {
      const timeout = setTimeout(() => {
        setSlideDirection('')
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [pathname, slideDirection])

  return (
    <>
      {/* Estilos globales para las animaciones de View Transition */}
      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }
        /* Animación para la transición cuando se navega a la página "archive" */
        [data-direction='left']::view-transition-new {
          animation: slideInLeft 300ms ease-in-out forwards;
        }
        [data-direction='left']::view-transition-old {
          animation: slideOutLeft 300ms ease-in-out forwards;
        }
        /* Animación para la transición cuando se navega a la página "work" */
        [data-direction='right']::view-transition-new {
          animation: slideInRight 300ms ease-in-out forwards;
        }
        [data-direction='right']::view-transition-old {
          animation: slideOutRight 300ms ease-in-out forwards;
        }
      `}</style>
      <main className='overflow-hidden'>
        <section className='container px-4 mx-auto mt-16 relative'>
          <div className='flex flex-col md:flex-row md:items-end md:justify-between border-b border-gray-200'>
            <h1 className='text-[55px] font-medium -mt-12 md:mt-0 mb-16 md:mb-0 font-helvetica-neue'>
              Work
            </h1>
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full md:w-auto'>
              <div className='relative mx-auto w-[85%] sm:w-[70%] md:w-fit'>
                <nav className='flex border-b-2 border-gray-200 md:border-b-0 justify-between md:justify-center gap-x-10 relative'>
                  <button
                    ref={clientRef}
                    onClick={e => handleNavClick(e, '/work')}
                    className={`pt-4 pb-2 md:py-4 cursor-pointer font-helvetica-neue tracking-[.8px] text-lg hover:text-[#1a1a1a] ${
                      activeTab === 'client' ? 'text-[#1a1a1a]' : 'text-[#999]'
                    }`}
                  >
                    TYPE OF CLIENT
                  </button>
                  <button
                    ref={allRef}
                    onClick={e => handleNavClick(e, '/work/archive')}
                    className={`pt-4 pb-2 md:py-4 cursor-pointer font-helvetica-neue tracking-[.8px] text-lg hover:text-[#1a1a1a] ${
                      activeTab === 'all' ? 'text-[#1a1a1a]' : 'text-[#999]'
                    }`}
                  >
                    ALL PROJECTS
                  </button>
                </nav>
                <span
                  className='absolute bottom-0 left-0 h-0.5 md:h-[1px] bg-[#1a1a1a] transition-all duration-300'
                  style={{
                    width: indicatorStyle.width,
                    transform: `translateX(${indicatorStyle.left}px)`
                  }}
                ></span>
              </div>
            </div>
          </div>
        </section>
        {/* En el primer render (carga directa) data-direction queda vacío para no animar;
            luego, al navegar con los botones se asigna slideDirection */}
        <ViewTransition
          name='page'
          data-direction={isInitialRender.current ? '' : slideDirection}
        >
          <div className='slider-container'>{children}</div>
        </ViewTransition>
      </main>
    </>
  )
}
