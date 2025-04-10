import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '../../components/AnimateOnScroll'
import CustomPhysicsImages from '@/components/CustomPhysicsImages'

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions page of Andre & Tania design studio'
}

export default async function Home () {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
      <AnimateOnScroll>
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Términos y Condiciones</h1>
      </AnimateOnScroll>

      <div className="space-y-8">
        {/* Definiciones */}
        <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
          <AnimateOnScroll>
            <h2 className="text-2xl font-semibold mb-4">1. Definiciones</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Andre & Tiana: Estudio de diseño especializado en branding, rebranding, socialmedia, webs, ilustración, packaging, fotografía y consultoría.</li>
              <li>Cliente: Persona física o jurídica que contrata los servicios de Andre & Tiana.</li>
              <li>Servicios: Incluyen, pero no se limitan a, diseño de logotipos, identidad corporativa, material publicitario y consultoría en branding.</li>
            </ul>
          </AnimateOnScroll>
        </section>

        {/* Objeto */}
        <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
          <AnimateOnScroll>
            <h2 className="text-2xl font-semibold mb-4">2. Objeto</h2>
            <p>Los presentes Términos y Condiciones regulan la prestación de servicios de diseño y branding por parte de Andre & Tiana al Cliente, estableciendo las obligaciones y derechos de ambas partes.</p>
          </AnimateOnScroll>
        </section>

        {/* Obligaciones del Cliente */}
        <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
          <AnimateOnScroll>
            <h2 className="text-2xl font-semibold mb-4">3. Obligaciones del Cliente</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Colaboración Activa:</span> El Cliente se compromete a proporcionar toda la información, documentación y materiales necesarios para la correcta ejecución de los servicios.</li>
              <li><span className="font-medium">Cumplimiento de Plazos:</span> Entregar la información solicitada en los plazos acordados.</li>
              <li><span className="font-medium">Revisiones:</span> Participar activamente en las etapas de revisión. Se incluyen hasta tres rondas de revisiones.</li>
              <li><span className="font-medium">Derechos de Uso de Materiales:</span> Garantizar que posee los derechos necesarios para el uso de cualquier material proporcionado.</li>
            </ul>
          </AnimateOnScroll>
        </section>

        {/* Obligaciones de Andre & Tiana */}
        <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
          <AnimateOnScroll>
            <h2 className="text-2xl font-semibold mb-4">4. Obligaciones de Andre & Tiana</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Calidad del Servicio:</span> Prestar los servicios con profesionalismo y conforme a los estándares de calidad del sector.</li>
              <li><span className="font-medium">Cumplimiento de Plazos:</span> Respetar los tiempos de entrega acordados, siempre que el Cliente haya cumplido con sus obligaciones.</li>
              <li><span className="font-medium">Confidencialidad:</span> Mantener la confidencialidad de la información proporcionada por el Cliente.</li>
            </ul>
          </AnimateOnScroll>
        </section>

        {/* Propiedad Intelectual */}
        <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
          <AnimateOnScroll>
            <h2 className="text-2xl font-semibold mb-4">5. Propiedad Intelectual</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Derechos de Autor:</span> Los derechos de autor serán transferidos al Cliente una vez realizado el pago completo.</li>
              <li><span className="font-medium">Uso de Diseños:</span> El Cliente tiene derecho a utilizar los diseños para los fines acordados.</li>
              <li><span className="font-medium">Portafolio:</span> Andre & Tiana se reserva el derecho de incluir los trabajos en su portafolio.</li>
            </ul>
          </AnimateOnScroll>
        </section>

        {/* Pagos y Facturación */}
        <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
          <AnimateOnScroll>
            <h2 className="text-2xl font-semibold mb-4">6. Pagos y Facturación</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Anticipo:</span> Se requiere un pago inicial del 50% del monto total presupuestado.</li>
              <li><span className="font-medium">Pago Final:</span> El 50% restante deberá ser abonado al finalizar el proyecto.</li>
              <li><span className="font-medium">Métodos de Pago:</span> Transferencia bancaria, tarjeta de crédito u otros acordados.</li>
              <li><span className="font-medium">Retrasos:</span> Andre & Tiana puede suspender el trabajo hasta regularizar pagos pendientes.</li>
            </ul>
          </AnimateOnScroll>
        </section>

        {/* Plazos de Entrega */}
        <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
          <AnimateOnScroll>
            <h2 className="text-2xl font-semibold mb-4">7. Plazos de Entrega</h2>
            <p>Los plazos de entrega serán establecidos de común acuerdo al inicio de cada proyecto y dependerán de la complejidad del mismo.</p>
          </AnimateOnScroll>
        </section>

        {/* Modificaciones y Cancelaciones */}
        <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
          <AnimateOnScroll>
            <h2 className="text-2xl font-semibold mb-4">8. Modificaciones y Cancelaciones</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Modificaciones:</span> Cambios en el alcance pueden afectar presupuesto y plazos. Límite de 3 cambios, después $20 por cambio.</li>
              <li><span className="font-medium">Cancelaciones:</span> El anticipo no es reembolsable y se deberá abonar el trabajo realizado hasta la fecha.</li>
            </ul>
          </AnimateOnScroll>
        </section>

        {/* Garantías y Responsabilidades */}
        <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
          <AnimateOnScroll>
            <h2 className="text-2xl font-semibold mb-4">9. Garantías y Responsabilidades</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Garantía:</span> Compromiso de realizar ajustes necesarios dentro del alcance acordado.</li>
              <li><span className="font-medium">Limitación:</span> No hay responsabilidad por daños indirectos del uso de los diseños.</li>
            </ul>
          </AnimateOnScroll>
        </section>

        {/* Confidencialidad */}
        <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
          <AnimateOnScroll>
            <h2 className="text-2xl font-semibold mb-4">10. Confidencialidad</h2>
            <p>Ambas partes se comprometen a mantener la confidencialidad de cualquier información sensible intercambiada durante el proyecto.</p>
          </AnimateOnScroll>
        </section>

        {/* Resolución de Disputas */}
        <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
          <AnimateOnScroll>
            <h2 className="text-2xl font-semibold mb-4">11. Resolución de Disputas</h2>
            <p>Las partes acuerdan intentar resolver disputas de manera amistosa. Si no hay acuerdo, se recurrirá a mediación o arbitraje.</p>
          </AnimateOnScroll>
        </section>

        {/* Ley Aplicable y Jurisdicción */}
        <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
          <AnimateOnScroll>
            <h2 className="text-2xl font-semibold mb-4">12. Ley Aplicable y Jurisdicción</h2>
            <p>Estos Términos y Condiciones se rigen por las leyes de la República del Perú. Las controversias se someterán a los tribunales de Lima.</p>
          </AnimateOnScroll>
        </section>

        <section className="bg-white/5 p-6 rounded-lg backdrop-blur-sm mt-8">
          <AnimateOnScroll>
            <p className="text-center text-sm italic">
              Al contratar los servicios de Andre & Tiana, el Cliente reconoce haber leído, entendido y aceptado estos Términos y Condiciones en su totalidad.
            </p>
          </AnimateOnScroll>
        </section>
      </div>
    </main>
  )
}
