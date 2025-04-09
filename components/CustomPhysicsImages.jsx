'use client'
import { useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'

export default function CustomPhysicsImages ({
  images = [
    '/animated_bubble/bubble_packaging.png',
    '/animated_bubble/bubble_socialmedia.png',
    '/animated_bubble/bubble_ilustracion.png',
    '/animated_bubble/bubble_web.png',
    '/animated_bubble/bubble_fotografia.png',
    '/animated_bubble/bubble_consultoria.png',
    '/animated_bubble/bubble_branding.png',
    '/animated_bubble/bubble_rebranding.png'
  ],
  className = '' // Permite pasar clases de Tailwind
}) {
  const sceneRef = useRef(null)
  const timeouts = useRef([])
  // Nuevo estado para dimensiones responsivas
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  })

  // Escuchar resize para actualizar dimensiones
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Re-inicializar la simulación al cambiar dimensiones
  useEffect(() => {
    if (!sceneRef.current) return

    const { width, height } = dimensions

    // --- Configuración de Matter.js ---
    const engine = Matter.Engine.create()
    const world = engine.world
    engine.world.gravity.y = 1.3

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
    if (className) render.canvas.className = className

    const runner = Matter.Runner.create()
    Matter.Runner.run(runner, engine)
    Matter.Render.run(render)

    const mouse = Matter.Mouse.create(render.canvas)
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.05, render: { visible: false } }
    })
    Matter.World.add(world, mouseConstraint)
    render.mouse = mouse

    const margin = 0
    const ground = Matter.Bodies.rectangle(width / 2, height - 25, width, 50, {
      isStatic: true,
      render: { visible: false }
    })
    const leftWall = Matter.Bodies.rectangle(0, height / 2, 2, height, {
      isStatic: true,
      render: { visible: false }
    })
    const rightWall = Matter.Bodies.rectangle(width, height / 2, 2, height, {
      isStatic: true,
      render: { visible: false }
    })
    Matter.World.add(world, [ground, leftWall, rightWall])
    // --- Fin configuración Matter.js ---

    // Configuración para cajas
    const totalImages = 8
    const scaleFactor = 0.35
    const numSides = 12
    const safeMargin = width * 0.05
    const offsetX = safeMargin * 1.2

    // Definir regiones basadas en porcentajes
    const rightStart = width / 2 + safeMargin
    const rightEnd = width - safeMargin
    const regionWidthRight = rightEnd - rightStart

    const leftStart = safeMargin
    const leftEnd = width / 2 - safeMargin
    const regionWidthLeft = leftEnd - leftStart

    const middleStart = width / 3 + safeMargin
    const middleEnd = (2 * width) / 3 - safeMargin
    const regionWidthMiddle = middleEnd - middleStart

    // Crear cuerpos con un retardo
    for (let i = 0; i < totalImages; i++) {
      const delay = i * 100
      const timeout = setTimeout(() => {
        const img = new Image()
        const texture = images[i % images.length]
        img.src = texture
        img.onload = () => {
          const originalWidth = img.naturalWidth
          const originalHeight = img.naturalHeight
          const desiredWidth = originalWidth * scaleFactor
          const desiredHeight = originalHeight * scaleFactor

          let safeX = 0,
            y = 0
          if (i < 3) {
            // Grupo 1: cajas en la región derecha
            const fraction = (i + 0.5) / 3
            safeX = rightStart + fraction * regionWidthRight - desiredWidth / 2
            y = -height * 0.07
          } else if (i < 6) {
            // Grupo 2: cajas en la región izquierda
            const fraction = (i - 3 + 0.5) / 3
            safeX = leftStart + fraction * regionWidthLeft - desiredWidth / 2
            y = -height * 0.17
          } else {
            // Grupo 3: cajas en la región central
            const fraction = (i - 6 + 0.5) / 2
            safeX =
              middleStart + fraction * regionWidthMiddle - desiredWidth / 2
            y = -height * 0.27
          }
          // Desplazar ligeramente a la derecha
          safeX = safeX + offsetX
          const x = safeX

          // Crear los vértices del polígono
          const a = desiredWidth / 2,
            b = desiredHeight / 2
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
              restitution: 0.2, // menor rebote para evitar saltos exagerados
              friction: 0.8, // mayor fricción para reducir el deslizamiento
              frictionAir: 0.05, // mayor resistencia al aire para ralentizar el movimiento
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
  }, [dimensions, className, images])

  return <div ref={sceneRef} />
}
