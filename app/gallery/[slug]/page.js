import { getSlugProjects } from '@/lib/data'
import GalleryImage from '@/components/GalleryImage'

export async function generateMetadata ({ params }) {
  const { slug } = await params
  const { projects } = await getSlugProjects()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
      description: 'El proyecto solicitado no se encontró.'
    }
  }

  return {
    title: project.name,
    description: project.phrase
  }
}

export default async function GalleryPage ({ params }) {
  const { slug } = await params
  const { projects } = await getSlugProjects()

  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return <p>Proyecto no encontrado.</p>
  }

  const galleryImage = project.galleryImage || project.image

  return (
    <>
      <GalleryImage src={galleryImage} alt={`Gallery ${slug}`} slug={slug} />
      <section className='container mx-auto px-4 py-8'>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold'>{project.name}</h2>
          <p className='text-lg'>{project.phrase}</p>
          <p>{project.data}</p>
        </div>
      </section>
    </>
  )
}
