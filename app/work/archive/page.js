import ProjectsClient from '@/components/ProjectsClient'

export const metadata = {
  title: 'Work — Browse by type of client',
  description: 'All projects page of Andre & Tania design studio'
}

// Esta página se renderiza en el servidor y monta un componente cliente
export default function ProjectsPage () {
  return <ProjectsClient />
}
