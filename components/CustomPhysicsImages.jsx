'use client'
import { useEffect, useRef } from 'react'
import Matter from 'matter-js'

export default function CustomPhysicsImages ({
  images = [
    '/animated_bubble/bubble_a.png',
    '/animated_bubble/bubble_b.png',
    '/animated_bubble/bubble_c.png',
    '/animated_bubble/bubble_d.png',
    '/animated_bubble/bubble_e.png',
    '/animated_bubble/bubble_f.png',
    '/animated_bubble/bubble_g.png',
    '/animated_bubble/bubble_h.png'
  ],
  className = '' // Permite pasar clases de Tailwind
}) {
  const sceneRef = useRef(null)
  const timeouts = useRef([])

  useEffect(() => {
    if (!sceneRef.current) return

    const width = window.innerWidth
    const height = window.innerHeight

    // Crear engine, mundo, render y runner
    const engine = Matter.Engine.create()
    const world = engine.world
    engine.world.gravity.y = 1

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false
      }
    })
    if (className) {
      render.canvas.className = className
    }

    const runner = Matter.Runner.create()
    Matter.Runner.run(runner, engine)
    Matter.Render.run(render)

    // Agregar control de mouse
    const mouse = Matter.Mouse.create(render.canvas)
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.05, render: { visible: false } }
    })
    Matter.World.add(world, mouseConstraint)
    render.mouse = mouse

    // Definir un margen (para centrar los cuerpos en un área)
    const margin = width * 0.1

    // Agregar suelo y paredes (invisibles)
    const ground = Matter.Bodies.rectangle(
      width / 2,
      height - 25,
      width - 2 * margin,
      50,
      { isStatic: true, render: { visible: false } }
    )
    const leftWall = Matter.Bodies.rectangle(margin, height / 2, 2, height, {
      isStatic: true,
      render: { visible: false }
    })
    const rightWall = Matter.Bodies.rectangle(
      width - margin,
      height / 2,
      2,
      height,
      { isStatic: true, render: { visible: false } }
    )
    Matter.World.add(world, [ground, leftWall, rightWall])

    // Configurar las 8 imágenes:
    // - Grupo 1 (índices 0,1,2): caen a la derecha
    // - Grupo 2 (índices 3,4,5): caen a la izquierda
    // - Grupo 3 (índices 6,7): caen a la derecha
    const totalImages = 8
    const scaleFactor = 0.6
    const numSides = 12

    for (let i = 0; i < totalImages; i++) {
      const delay = i * 200
      const timeout = setTimeout(() => {
        const img = new Image()
        // Usa el arreglo de imágenes (si i es mayor que images.length, se recicla)
        const texture = images[i % images.length]
        img.src = texture
        img.onload = () => {
          const originalWidth = img.naturalWidth
          const originalHeight = img.naturalHeight
          const desiredWidth = originalWidth * scaleFactor
          const desiredHeight = originalHeight * scaleFactor

          // Definir posición X según grupo:
          // Para grupos a la derecha: safeX entre width/2 + margin y width - margin - desiredWidth/2
          // Para grupo a la izquierda: safeX entre margin + desiredWidth/2 y width/2 - margin
          let safeX = 0
          if (i < 3 || i >= 6) {
            // Caen a la derecha
            safeX =
              width / 2 +
              margin +
              Math.random() * (width / 2 - 2 * margin - desiredWidth)
          } else {
            // Caen a la izquierda
            safeX =
              margin +
              desiredWidth / 2 +
              Math.random() * (width / 2 - margin - desiredWidth)
          }

          // Posición inicial en Y elevada (así caen desde arriba)
          const x = safeX
          const y = -50 - i * 30

          // Crear un polígono regular aproximado
          const a = desiredWidth / 2
          const b = desiredHeight / 2
          const vertices = []
          for (let j = 0; j < numSides; j++) {
            const theta = (2 * Math.PI * j) / numSides
            vertices.push({ x: a * Math.cos(theta), y: b * Math.sin(theta) })
          }

          const body = Matter.Bodies.fromVertices(
            x,
            y,
            [vertices],
            {
              restitution: 0.4,
              friction: 0.9,
              frictionAir: 0.05,
              render: {
                sprite: {
                  texture: texture,
                  xScale: scaleFactor,
                  yScale: scaleFactor
                }
              }
            },
            true
          )
          body.label = 'imageBody'
          Matter.World.add(world, body)
        }
      }, delay)
      timeouts.current.push(timeout)
    }

    // Cambio de cursor al pasar sobre cuerpos con etiqueta 'imageBody'
    Matter.Events.on(mouseConstraint, 'mousemove', event => {
      const mousePosition = event.mouse.position
      const hoveredBodies = Matter.Query.point(
        world.bodies,
        mousePosition
      ).filter(body => body.label === 'imageBody')
      render.canvas.style.cursor = hoveredBodies.length ? 'pointer' : 'default'
    })

    return () => {
      timeouts.current.forEach(clearTimeout)
      Matter.Render.stop(render)
      Matter.World.clear(world, false)
      Matter.Engine.clear(engine)
      if (render.canvas) render.canvas.remove()
      render.textures = {}
    }
  }, [])

  return <div ref={sceneRef} />
}
