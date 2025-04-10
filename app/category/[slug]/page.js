import { getProjectsByCategory } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'
import WorkLayout from '../../gallery/layout'

export default async function CategoryPage (props) {
  const params = await Promise.resolve(props.params)
  const { slug } = params
  const projects = await getProjectsByCategory(slug)

  const categoryImage =
    projects.length > 0 && projects[0].categoryImage
      ? projects[0].categoryImage
      : projects.length > 0
      ? projects[0].image
      : null

  return (
    <WorkLayout>
      {categoryImage && (
        <div className='relative w-full h-[300px] overflow-hidden'>
          <Image
            src={categoryImage}
            alt={`Categoría ${slug}`}
            width={1200}
            height={300}
            className='object-cover w-full h-full'
            viewtransitionname='category-image'
          />
        </div>
      )}
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
                    viewtransitionname={`project-image-${project.id}`}
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
    </WorkLayout>
  )
}
