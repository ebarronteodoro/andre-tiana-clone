// Simulación de datos que podrían venir de una API o base de datos
// Esta función es asíncrona para simular una llamada a API real
export async function getCategories () {
  // Simulamos un pequeño retraso para demostrar el loading state
  await new Promise(resolve => setTimeout(resolve, 500))

  return [
    {
      id: 1,
      name: 'Arts & Culture',
      count: 447,
      title: 'BRASIL!',
      bgColor: '#ff3366',
      textColor: 'text-black'
    },
    {
      id: 2,
      name: 'Banking & Finance',
      count: 54,
      title: 'GSA',
      bgColor: '#33ccff',
      textColor: 'text-white'
    },
    {
      id: 3,
      name: 'Civic & Public',
      count: 77,
      title: 'Sharjah',
      bgColor: '#ff9933',
      textColor: 'text-white'
    },
    {
      id: 4,
      name: 'Education',
      count: 128,
      title: 'MIT',
      bgColor: '#cc3366',
      textColor: 'text-white'
    },
    {
      id: 5,
      name: 'Technology',
      count: 215,
      title: 'NVIDIA',
      bgColor: '#33cc99',
      textColor: 'text-white'
    },
    {
      id: 6,
      name: 'Fashion',
      count: 93,
      title: 'VOGUE',
      bgColor: '#000000',
      textColor: 'text-white'
    },
    {
      id: 7,
      name: 'Healthcare',
      count: 62,
      title: 'MAYO',
      bgColor: '#6633cc',
      textColor: 'text-white'
    },
    {
      id: 8,
      name: 'Hospitality',
      count: 41,
      title: 'HILTON',
      bgColor: '#cc9933',
      textColor: 'text-white'
    },
    {
      id: 9,
      name: 'Media & Entertainment',
      count: 189,
      title: 'HBO',
      bgColor: '#333333',
      textColor: 'text-white'
    }
  ]
}
