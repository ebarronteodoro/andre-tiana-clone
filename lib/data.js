// lib/data.js

// Función que simula la obtención de categorías
export async function getCategories() {
  // Simulamos un pequeño retraso para emular una llamada a API real
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: 1,
      name: "Gastronomía",
      slug: "gastronomia",
      bgImg: "/sushi.jpg",
      textColor: "text-black",
    },
    {
      id: 2,
      name: "Inmobiliaria",
      slug: "inmobiliaria",
      bgImg: "/inmobiliaria-verdant.png",
      textColor: "text-white",
    },
    {
      id: 3,
      name: "Arquitectura",
      slug: "arquitectura",
      bgImg: "/ndk-arquitectos.jpg",
      textColor: "text-white",
    },
    {
      id: 4,
      name: "Wear Style",
      slug: "wear-style",
      bgImg: "/ndk-arquitectos.jpg",
      textColor: "text-white",
    },
    {
      id: 5,
      name: "Atelier",
      slug: "atelier",
      bgImg: "/bolsa-atelier.jpg",
      textColor: "text-white",
    },
    {
      id: 6,
      name: "ONG",
      slug: "ong",
      bgImg: "/bolsa-atelier.jpg",
      textColor: "text-white",
    },
    {
      id: 7,
      name: "Ingeniería",
      slug: "ingenieria",
      bgImg: "/bolsa-atelier.jpg",
      textColor: "text-white",
    },
  ];
}

// Función que simula la obtención de proyectos por categoría
export async function getProjectsByCategory(slug) {
  // Simulamos un pequeño retraso para demostrar el loading state
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Datos de ejemplo: un proyecto por cada categoría (o más, según corresponda)
  const allProjects = [
    {
      id: 1,
      title: "Proyecto Sushi",
      slug: "proyecto-sushi",
      category: "gastronomia",
      image: "/sushi.jpg",
      description: "Proyecto relacionado con gastronomía japonesa.",
    },
    {
      id: 2,
      title: "Proyecto Inmobiliario",
      slug: "proyecto-inmobiliario",
      category: "inmobiliaria",
      image: "/inmobiliaria-verdant.png",
      description: "Desarrollo de nuevos espacios habitacionales.",
    },
    {
      id: 3,
      title: "Proyecto Arquitectura Moderna",
      slug: "proyecto-arquitectura-moderna",
      category: "arquitectura",
      image: "/ndk-arquitectos.jpg",
      description: "Diseño vanguardista de espacios urbanos.",
    },
    {
      id: 4,
      title: "Proyecto Wear Style Urbano",
      slug: "proyecto-wear-style-urbano",
      category: "wear-style",
      image: "/inmobiliaria-verdant.png",
      description: "Colección de moda urbana y contemporánea.",
    },
    {
      id: 5,
      title: "Proyecto Atelier Creativo",
      slug: "bita-atelier",
      category: "atelier",
      image: "/bolsa-atelier.jpg",
      description: "Diseños artísticos y sostenibles desde el atelier.",
    },
    {
      id: 6,
      title: "Proyecto ONG Social",
      slug: "proyecto-ong-social",
      category: "ong",
      image: "/bolsa-atelier.jpg",
      description: "Iniciativa social para el desarrollo comunitario.",
    },
    {
      id: 7,
      title: "Proyecto Ingeniería Innovadora",
      slug: "proyecto-ingenieria-innovadora",
      category: "ingenieria",
      image: "/bolsa-atelier.jpg",
      description: "Soluciones tecnológicas y de ingeniería para el futuro.",
    },
  ];

  // Se filtran los proyectos según el slug de la categoría
  return allProjects.filter((project) => project.category === slug);
}

// lib/data.js

// Función que simula la obtención de todas los proyectos
export async function getAllProjects() {
  // Simula un pequeño retraso para emular una llamada a una API real
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: 1,
      title: "Proyecto Sushi",
      slug: "proyecto-sushi",
      category: "gastronomia",
      image: "/sushi.jpg",
      description: "Proyecto relacionado con gastronomía japonesa.",
    },
    {
      id: 2,
      title: "Proyecto Inmobiliario",
      slug: "proyecto-inmobiliario",
      category: "inmobiliaria",
      image: "/inmobiliaria-verdant.png",
      description: "Desarrollo de nuevos espacios habitacionales.",
    },
    {
      id: 3,
      title: "Proyecto Arquitectura Moderna",
      slug: "proyecto-arquitectura-moderna",
      category: "arquitectura",
      image: "/ndk-arquitectos.jpg",
      description: "Diseño vanguardista de espacios urbanos.",
    },
    {
      id: 4,
      title: "Proyecto Wear Style Urbano",
      slug: "proyecto-wear-style-urbano",
      category: "wear-style",
      image: "/ndk-arquitectos.jpg",
      description: "Colección de moda urbana y contemporánea.",
    },
    {
      id: 5,
      title: "Proyecto Atelier Creativo",
      slug: "proyecto-atelier-creativo",
      category: "atelier",
      image: "/bolsa-atelier.jpg",
      description: "Diseños artísticos y sostenibles desde el atelier.",
    },
    {
      id: 6,
      title: "Proyecto ONG Social",
      slug: "proyecto-ong-social",
      category: "ong",
      image: "/bolsa-atelier.jpg",
      description: "Iniciativa social para el desarrollo comunitario.",
    },
    {
      id: 7,
      title: "Proyecto Ingeniería Innovadora",
      slug: "proyecto-ingenieria-innovadora",
      category: "ingenieria",
      image: "/bolsa-atelier.jpg",
      description: "Soluciones tecnológicas y de ingeniería para el futuro.",
    },
  ];
}
