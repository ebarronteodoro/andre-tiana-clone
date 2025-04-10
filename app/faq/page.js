import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '../../components/AnimateOnScroll'
import CustomPhysicsImages from '@/components/CustomPhysicsImages'

export const metadata = {
  title: 'Preguntas Frecuentes',
  description: 'Preguntas frecuentes sobre los servicios de Andre & Tania design studio'
}

export default async function Home () {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 md:px-20 xl:px-64 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Preguntas Frecuentes sobre Nuestros Servicios
          </h1>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-6 md:px-20 xl:px-64 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <AnimateOnScroll>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                ¿Cómo contrato el servicio de branding en Andre & Tiana?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                El primer paso es agendar una sesión con Mon, nuestra experta en branding, para conocer más sobre tu negocio y necesidades. Esta sesión virtual es un espacio cómodo y relajado, como tomar un café con amigos. Durante esta conversación, te sugerimos el paquete que mejor se adapte a ti y podremos comenzar cuando estés listo.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Una vez que hayas seleccionado tu paquete ideal, deberás realizar un depósito del 50% del costo total para confirmar tu contratación. A partir de ese momento, nuestro equipo te guiará en cada paso del proceso.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                ¿Puedo solicitar cambios en las propuestas?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Sí, todos nuestros paquetes incluyen hasta 3 rondas de revisiones para garantizar que el resultado final refleje tu visión y objetivos. En la mayoría de los casos, la propuesta final se elige en la primera o segunda ronda. Si necesitas una ronda adicional de cambios, se aplicará un costo extra de $20 USD.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                ¿Cuánto tiempo tarda el desarrollo del branding estratégico?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El proceso completo tiene una duración estimada de 5 semanas y se estructura de la siguiente manera:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>Brief y cuestionario - Recopilamos información clave sobre tu marca y objetivos.</li>
                <li>Investigación - Analizamos el mercado, competencia y tendencias relevantes.</li>
                <li>Sesión creativa - Desarrollamos conceptos alineados con tu visión.</li>
                <li>Propuestas de logotipo - Presentamos opciones visuales para tu marca.</li>
                <li>Entrega del Brand Pack - Te proporcionamos los elementos finales de tu identidad visual y otros recursos adicionales.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Si tienes una fecha límite específica, comunícalo con nuestro equipo desde el inicio para asegurarnos de cumplir con tus necesidades.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-600 text-center">
                Para cualquier otra consulta, no dudes en {' '}
                <Link href="/contact" className="text-[#1a47c4] hover:underline">
                  ponerte en contacto con nosotros
                </Link>
                . Estamos aquí para ayudarte a construir una marca poderosa y memorable.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  )
}
