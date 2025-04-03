'use client'
import React, { useEffect, useState } from 'react'
import PdfPage from './PdfPage' // Ajusta la ruta según corresponda

export default function PdfViewer () {
  const [pdf, setPdf] = useState(null)
  const [numPages, setNumPages] = useState(0)

  useEffect(() => {
    const loadPdf = async () => {
      // Importa pdfjs-dist en modo legacy (para evitar errores de SSR)
      const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf')
      // Configura el worker local (asegúrate de tener /pdf.worker.min.mjs en public)
      pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'
      // Carga el PDF (colocado en public/brochure)
      const loadingTask = pdfjsLib.getDocument(
        '/brochure/Andrea&Tiana-Brochure.pdf'
      )
      const loadedPdf = await loadingTask.promise
      setPdf(loadedPdf)
      setNumPages(loadedPdf.numPages)
    }
    loadPdf()
  }, [])

  return (
    <div className='w-full max-w-6xl mx-auto py-8 animate-fade-up shadow-2xl'>
      {pdf &&
        Array.from({ length: numPages }).map((_, index) => (
          <PdfPage key={index} pdf={pdf} pageNumber={index + 1} />
        ))}
    </div>
  )
}
