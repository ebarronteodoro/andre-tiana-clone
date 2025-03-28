import { getProjectsByCategory } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'

export default async function CategoryPage (props) {
  const params = await Promise.resolve(props.params)
  const { slug } = params
  const projects = await getProjectsByCategory(slug)

  return (
    <main className='container mx-auto px-4 mt-16'>
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
      
      <h1 className='text-[55px] font-medium -mt-12 md:mt-0 mb-16 md:mb-0 capitalize'>
        Proyectos en {slug}
      </h1>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.length > 0 ? (
          projects.map(project => (
            <Link
              key={project.id}
              href={`/project/${project.slug}`}
              className='group'
            >
              <div className='space-y-4'>
                <div className='flex items-baseline justify-between'>
                  <h2 className='text-2xl font-bold'>{project.title}</h2>
                </div>
                <div className='w-full h-[200px] relative overflow-hidden group-hover:opacity-80 transition-opacity duration-300'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={200}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <h3 className='text-4xl font-bold text-white'>
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No se encontraron proyectos para esta categoría.</p>
        )}
      </section>
    </main>
  )
}
