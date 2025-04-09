'use client'
import React, { useEffect, useState } from 'react'
import PdfPage from './PdfPage'

export default function PdfViewer () {
  const [pdf, setPdf] = useState(null)
  const [numPages, setNumPages] = useState(0)

  useEffect(() => {
    const loadPdf = async () => {
      const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf')
      pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'
      const loadingTask = pdfjsLib.getDocument(
        '/brochure/AndreaLoarte.Studio.pdf'
      )
      const loadedPdf = await loadingTask.promise
      setPdf(loadedPdf)
      setNumPages(loadedPdf.numPages)
    }
    loadPdf()
  }, [])

  return (
    <div className='w-full max-w-6xl mx-auto animate-fade-up shadow-2xl'>
      {pdf &&
        Array.from({ length: numPages }).map((_, index) => (
          <PdfPage key={index} pdf={pdf} pageNumber={index + 1} />
        ))}
    </div>
  )
}
