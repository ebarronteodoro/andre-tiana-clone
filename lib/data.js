// Simulación de datos que podrían venir de una API o base de datos
// Esta función es asíncrona para simular una llamada a API real
export async function getCategories() {
  // Simulamos un pequeño retraso para demostrar el loading state
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: 1,
      name: "Gastronomía",
      // count: 447,
      // title: "BRASIL!",
      bgImg: "/sushi.jpg",
      textColor: "text-black",
    },
    {
      id: 2,
      name: "Inmobiliaria",
      // count: 54,
      // title: "GSA",
      bgImg: "/inmobiliaria-verdant.png",
      textColor: "text-white",
    },
    {
      id: 3,
      name: "Arquitectura",
      // count: 77,
      // title: "Sharjah",
      bgImg: "/ndk-arquitectos.jpg",
      textColor: "text-white",
    },
    {
      id: 4,
      name: "Wear Style",
      // count: 128,
      // title: "MIT",
      bgImg: "/bolsa-atelier.jpg",
      textColor: "text-white",
    },
    {
      id: 5,
      name: "Atelier",
      // count: 215,
      // title: "NVIDIA",
      bgImg: "/bolsa-atelier.jpg",
      textColor: "text-white",
    },
    {
      id: 6,
      name: "ONG",
      // count: 93,
      // title: "VOGUE",
      bgImg: "/bolsa-atelier.jpg",
      textColor: "text-white",
    },
    {
      id: 7,
      name: "Ingeniería",
      // count: 93,
      // title: "VOGUE",
      bgImg: "/bolsa-atelier.jpg",
      textColor: "text-white",
    },
  ];
}
