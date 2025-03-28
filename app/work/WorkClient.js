// app/work/WorkClient.js
'use client'
import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { getCategories, getAllProjects } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'

// Componente LoadingSpinner para mostrar la animación de carga centrada
function LoadingSpinner () {
  return (
    <div role='status' className='mx-auto flex w-full justify-center'>
      <svg
        aria-hidden='true'
        className='inline size-28 text-gray-200 animate-spin dark:text-gray-600 fill-[#1a1a1a]'
        viewBox='0 0 100 101'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
          fill='currentColor'
        />
        <path
          d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
          fill='currentFill'
        />
      </svg>
      <span className='sr-only'>Loading...</span>
    </div>
  )
}

export default function WorkClient () {
  const [activeTab, setActiveTab] = useState('client')
  const [categories, setCategories] = useState([])
  const [projects, setProjects] = useState([])
  const [loadingCategories, setLoadingCategories] = useState(false)
  const [loadingProjects, setLoadingProjects] = useState(false)

  // Refs para los botones
  const clientRef = useRef(null)
  const allRef = useRef(null)
  // Estado para el estilo del indicador
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 })

  useEffect(() => {
    async function fetchCategories () {
      setLoadingCategories(true)
      const data = await getCategories()
      setCategories(data)
      setLoadingCategories(false)
    }
    async function fetchProjects () {
      setLoadingProjects(true)
      const data = await getAllProjects()
      setProjects(data)
      setLoadingProjects(false)
    }
    fetchCategories()
    fetchProjects()
  }, [])

  // Actualiza el estilo del indicador de forma síncrona para evitar lag
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

  return (
    <main>
      <section className='container px-4 mx-auto mt-16 relative'>
        <div className='flex flex-col md:flex-row md:items-end md:justify-between border-b-0 md:border-b border-gray-200'>
          <h1 className='text-[55px] font-medium -mt-12 md:mt-0 mb-16 md:mb-0 font-helvetica-neue'>
            Work
          </h1>
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full md:w-auto'>
            <div className='relative mx-auto w-[85%] sm:w-[70%] md:w-fit'>
              <nav className='flex border-b-2 border-gray-200 md:border-b-0 justify-between md:justify-center gap-x-10 relative'>
                <button
                  ref={clientRef}
                  onClick={() => setActiveTab('client')}
                  className={`pt-4 pb-2 md:py-4 cursor-pointer font-helvetica-neue tracking-[.8px] text-lg hover:text-[#1a1a1a] ${
                    activeTab === 'client' ? 'text-[#1a1a1a]' : 'text-[#999]'
                  }`}
                >
                  TYPE OF CLIENT
                </button>
                <button
                  ref={allRef}
                  onClick={() => setActiveTab('all')}
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

      <section className='container px-6 mx-auto mt-8 md:mt-16 overflow-hidden'>
        <div
          className='flex transition-transform duration-700 gap-16 w-[calc(200%+4rem)]'
          style={{
            transform:
              activeTab === 'client'
                ? 'translateX(0%)'
                : 'translateX(calc(-50% - 2rem))'
          }}
        >
          {loadingCategories ? (
            <div className='w-1/2 flex justify-center'>
              <LoadingSpinner />
            </div>
          ) : (
            <div className='w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {categories.map(category => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className='group'
                >
                  <div className='space-y-4'>
                    <div className='flex items-baseline justify-between'>
                      <h2
                        className='text-xl font-medium font-helvetica-neue
                        tracking-[.8px]
                        group-hover:[background-image:linear-gradient(to_bottom,_#1a1a1a_75%,_#1a1a1a_75%)]
                        group-hover:[background-repeat:repeat-x]
                        group-hover:[background-size:1px_1px]
                        group-hover:[background-position:0_98%]'
                      >
                        {category.name}
                      </h2>
                    </div>
                    <div className='w-full h-[200px] relative overflow-hidden group-hover:opacity-80 transition-opacity duration-300'>
                      <Image
                        width={500}
                        height={200}
                        src={category.bgImg}
                        alt={category.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {loadingCategories ? (
            <div className='w-1/2 flex justify-center'>
              <LoadingSpinner />
            </div>
          ) : (
            <div className='w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map(project => (
                <Link
                  key={project.id}
                  href={`/project/${project.slug}`}
                  className='group'
                >
                  <div className='space-y-4'>
                    <div className='flex items-baseline justify-between'>
                      <h2
                        className='text-xl font-medium font-helvetica-neue 
                        tracking-[.8px] 
                        group-hover:[background-image:linear-gradient(to_bottom,_#1a1a1a_75%,_#1a1a1a_75%)] 
                        group-hover:[background-repeat:repeat-x] 
                        group-hover:[background-size:1px_1px] 
                        group-hover:[background-position:0_98%]'
                      >
                        {project.title}
                      </h2>
                    </div>
                    <div className='w-full h-[200px] relative overflow-hidden group-hover:opacity-80 transition-opacity duration-300'>
                      <Image
                        width={500}
                        height={200}
                        src={project.image}
                        alt={project.title}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
