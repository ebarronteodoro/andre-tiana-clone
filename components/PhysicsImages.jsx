'use client'
import { useEffect, useRef } from 'react'
import Matter from 'matter-js'

export default function PhysicsImages () {
  const sceneRef = useRef(null)
  const timeouts = useRef([])

  useEffect(() => {
    if (!sceneRef.current) return

    const width = window.innerWidth
    const height = window.innerHeight

    // Crear engine y mundo
    const engine = Matter.Engine.create()
    const world = engine.world
    // Aumentar la gravedad para que caigan más rápido
    engine.world.gravity.y = 0.5

    // Crear renderizador sin wireframes para ver las texturas
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        background: '#ffffff',
        wireframes: false
      }
    })

    // Crear runner y ejecutar el motor
    const runner = Matter.Runner.create()
    Matter.Runner.run(runner, engine)
    Matter.Render.run(render)

    // Agregar un suelo estático para detener los cuerpos
    const ground = Matter.Bodies.rectangle(width / 2, height - 25, width, 50, {
      isStatic: true
    })
    Matter.World.add(world, ground)

    // Rutas de las imágenes a usar
    const imagePaths = ['/burbuja-1.png', '/burbuja-2.png', '/burbuja-3.png']
    // Factor de escala para hacer las imágenes más pequeñas
    const scaleFactor = 0.3
    // Número de lados para aproximar un óvalo
    const numSides = 12

    imagePaths.forEach((path, i) => {
      // Se agrega cada imagen con 500ms de diferencia
      const delay = i * 500
      const timeout = setTimeout(() => {
        const img = new Image()
        img.src = path
        img.onload = () => {
          const originalWidth = img.naturalWidth
          const originalHeight = img.naturalHeight
          // Dimensiones deseadas en pantalla
          const desiredWidth = originalWidth * scaleFactor
          const desiredHeight = originalHeight * scaleFactor

          // Aproximación de un óvalo: semi-ejes
          const a = desiredWidth / 2
          const b = desiredHeight / 2
          // Generar vértices para el óvalo con 'numSides' lados
          const vertices = []
          for (let j = 0; j < numSides; j++) {
            const theta = (2 * Math.PI * j) / numSides
            vertices.push({ x: a * Math.cos(theta), y: b * Math.sin(theta) })
          }

          // Posición horizontal centrada y ajustada
          let x
          if (i === 0) {
            x = width / 2 - 120
          } else if (i === 1) {
            x = width / 2
          } else {
            x = width / 2 + 120
          }

          // Menor separación vertical: empezar en -50 y aumentar 30 por imagen
          const y = -50 - i * 30

          // Crear el cuerpo a partir de los vértices
          const body = Matter.Bodies.fromVertices(
            x,
            y,
            [vertices],
            {
              restitution: 0.7,
              friction: 0.1,
              render: {
                sprite: {
                  texture: path,
                  xScale: scaleFactor,
                  yScale: scaleFactor
                }
              }
            },
            true
          )

          Matter.World.add(world, body)
        }
      }, delay)
      timeouts.current.push(timeout)
    })

    // Cleanup: limpiar los timeouts y detener Matter.js
    return () => {
      timeouts.current.forEach(clearTimeout)
      Matter.Render.stop(render)
      Matter.World.clear(world, false)
      Matter.Engine.clear(engine)
      if (render.canvas) render.canvas.remove()
      render.textures = {}
    }
  }, [])

  return (
    <div
      ref={sceneRef}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        border: '1px solid black'
      }}
    />
  )
}
