import data from '@/app/data/data_projects.json'

// Función que simula la obtención de categorías
export async function getCategories () {
  // Simulamos un pequeño retraso para emular una llamada a API real
  await new Promise(resolve => setTimeout(resolve, 500))

  return [
    {
      id: 1,
      name: 'Gastronomía',
      slug: 'gastronomia',
      bgImg: '/sushi.jpg',
      textColor: 'text-black'
    },
    {
      id: 2,
      name: 'Inmobiliaria',
      slug: 'inmobiliaria',
      bgImg: '/projects/verdant/inmobiliaria-verdant.png',
      textColor: 'text-white'
    },
    {
      id: 3,
      name: 'Arquitectura',
      slug: 'arquitectura',
      bgImg: '/projects/ndk_arquitectos/ndk_arquitectos_portada.jpg',
      textColor: 'text-white'
    },
    {
      id: 4,
      name: 'Wear Style',
      slug: 'wear-style',
      bgImg: '/projects/ndk_arquitectos/ndk_arquitectos_portada.jpg',
      textColor: 'text-white'
    },
    {
      id: 5,
      name: 'Bita-Atelier',
      slug: 'bita-atelier',
      bgImg: '/projects/bita_atelier/bolsa-atelier.jpg',
      textColor: 'text-white'
    },
    {
      id: 6,
      name: 'ONG',
      slug: 'ong',
      bgImg: '/projects/bita_atelier/bolsa-atelier.jpg',
      textColor: 'text-white'
    },
    {
      id: 7,
      name: 'Ingeniería',
      slug: 'ingenieria',
      bgImg: '/projects/bita_atelier/bolsa-atelier.jpg',
      textColor: 'text-white'
    }
  ]
}

// Función que simula la obtención de proyectos por categoría
export async function getProjectsByCategory (slug) {
  // Simulamos un pequeño retraso para demostrar el loading state
  await new Promise(resolve => setTimeout(resolve, 500))

  // Datos de ejemplo: un proyecto por cada categoría (o más, según corresponda)
  const allProjects = [
    {
      id: 1,
      title: 'Sushi',
      slug: 'proyecto-sushi',
      category: 'gastronomia',
      image: '/sushi.jpg',
      description: 'Proyecto relacionado con gastronomía japonesa.'
    },
    {
      id: 2,
      title: 'Inmobiliario',
      slug: 'proyecto-inmobiliario',
      category: 'inmobiliaria',
      image: '/inmobiliaria-verdant.png',
      description: 'Desarrollo de nuevos espacios habitacionales.'
    },
    {
      id: 3,
      title: 'Arquitectura Moderna',
      slug: 'proyecto-arquitectura-moderna',
      category: 'arquitectura',
      image: '/ndk-arquitectos.jpg',
      description: 'Diseño vanguardista de espacios urbanos.'
    },
    {
      id: 4,
      title: 'Wear Style Urbano',
      slug: 'proyecto-wear-style-urbano',
      category: 'wear-style',
      image: '/inmobiliaria-verdant.png',
      description: 'Colección de moda urbana y contemporánea.'
    },
    {
      id: 5,
      title: 'Bita-Atelier',
      slug: 'bita-atelier',
      category: 'bita-atelier',
      image: '/bolsa-atelier.jpg',
      description: 'Diseños artísticos y sostenibles desde el atelier.'
    },
    {
      id: 6,
      title: 'ONG Social',
      slug: 'proyecto-ong-social',
      category: 'ong',
      image: '/bolsa-atelier.jpg',
      description: 'Iniciativa social para el desarrollo comunitario.'
    },
    {
      id: 7,
      title: 'Ingeniería Innovadora',
      slug: 'proyecto-ingenieria-innovadora',
      category: 'ingenieria',
      image: '/bolsa-atelier.jpg',
      description: 'Soluciones tecnológicas y de ingeniería para el futuro.'
    }
  ]

  // Se filtran los proyectos según el slug de la categoría
  return allProjects.filter(project => project.category === slug)
}

// lib/data.js

// Función que simula la obtención de todas los proyectos
export async function getAllProjects () {
  return data
}

export async function getSlugProjects () {
  return data
}
