'use client'
import React, { useEffect, useRef } from 'react'

function PdfPage ({ pdf, pageNumber, scale = 1.5 }) {
  const canvasRef = useRef(null)
  // Bandera para evitar renderizados repetidos
  const renderedRef = useRef(false)

  useEffect(() => {
    // Si ya se ha renderizado esta página, no hacemos nada
    if (renderedRef.current) return
    renderedRef.current = true

    let renderTask
    const renderPage = async () => {
      try {
        const page = await pdf.getPage(pageNumber)
        const canvas = canvasRef.current
        if (!canvas) return
        const context = canvas.getContext('2d')
        const viewport = page.getViewport({ scale })
        // Ajusta las dimensiones del canvas
        canvas.width = viewport.width
        canvas.height = viewport.height
        const renderContext = { canvasContext: context, viewport }
        renderTask = page.render(renderContext)
        await renderTask.promise
      } catch (error) {
        if (error.name !== 'RenderingCancelledException') {
          console.error(`Error renderizando la página ${pageNumber}:`, error)
        }
      }
    }

    renderPage()

    // Limpieza: cancela la renderización si se desmonta el componente
    return () => {
      if (renderTask) {
        renderTask.cancel()
      }
    }
  }, [pdf, pageNumber, scale])

  return (
    <canvas
      ref={canvasRef}
      className='w-full'
    />
  )
}

export default PdfPage
