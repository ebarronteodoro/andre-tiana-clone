'use client'
import { useEffect, useRef } from 'react'
import Matter from 'matter-js'

export default function PhysicsImages ({
  images = [
    '/animated_bubble/bubble_branding.png',
    '/animated_bubble/bubble_consultoria.png',
    '/animated_bubble/bubble_ilustracion.png',
    '/animated_bubble/bubble_packaging.png'
  ],
  className = '' // permite pasar clases de Tailwind
}) {
  const sceneRef = useRef(null)
  const timeouts = useRef([])

  useEffect(() => {
    if (!sceneRef.current) return

    const width = window.innerWidth
    const height = window.innerHeight

    // Crear engine y mundo
    const engine = Matter.Engine.create()
    const world = engine.world
    engine.world.gravity.y = 1.1

    // Crear renderizador sin wireframes y fondo transparente
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

    // Agregar las clases de Tailwind al canvas generado
    if (className) {
      render.canvas.className = className
    }

    // Crear runner y ejecutar el motor
    const runner = Matter.Runner.create()
    Matter.Runner.run(runner, engine)
    Matter.Render.run(render)

    // Crear control de mouse con menor stiffness para suavizar el arrastre
    const mouse = Matter.Mouse.create(render.canvas)
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.05,
        render: { visible: false }
      }
    })
    Matter.World.add(world, mouseConstraint)
    render.mouse = mouse

    // Definir margen para la caja (todos los cuerpos caerán entre margin y width - margin)
    const margin = width * 0.2

    // Agregar suelo y paredes laterales (todos invisibles)
    const ground = Matter.Bodies.rectangle(
      width / 2,
      height - 25,
      width - 2 * margin,
      50,
      { isStatic: true, render: { visible: false } }
    )
    Matter.World.add(world, ground)

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
    Matter.World.add(world, [leftWall, rightWall])

    // Configurar y agregar las imágenes
    const imagePaths = images
    const scaleFactor = 0.9
    const numSides = 12
    const totalImages = imagePaths.length

    for (let i = 0; i < totalImages; i++) {
      const delay = i * 200
      const timeout = setTimeout(() => {
        const img = new Image()
        const texture = imagePaths[i % imagePaths.length]
        img.src = texture
        img.onload = () => {
          const originalWidth = img.naturalWidth
          const originalHeight = img.naturalHeight
          const desiredWidth = originalWidth * scaleFactor
          const desiredHeight = originalHeight * scaleFactor

          const safeX =
            margin +
            desiredWidth / 2 +
            Math.random() * (width - 2 * margin - desiredWidth)
          const x = safeX
          const y = -50 - i * 30

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
          // Etiquetar el cuerpo para identificarlo como imagen
          body.label = 'imageBody'
          Matter.World.add(world, body)
        }
      }, delay)
      timeouts.current.push(timeout)
    }

    // Cambiar cursor a pointer al pasar el mouse sobre cuerpos con label 'imageBody'
    Matter.Events.on(mouseConstraint, 'mousemove', event => {
      const mousePosition = event.mouse.position
      const hoveredBodies = Matter.Query.point(
        world.bodies,
        mousePosition
      ).filter(body => body.label === 'imageBody')
      if (hoveredBodies.length > 0) {
        render.canvas.style.cursor = 'pointer'
      } else {
        render.canvas.style.cursor = 'default'
      }
    })

    // Cleanup
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
