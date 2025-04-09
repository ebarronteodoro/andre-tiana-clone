'use client'
// Polyfills para compatibilidad con Safari

// Polyfill para Array.from, en caso de que no esté soportado.
if (!Array.from) {
  Array.from = function (iterable) {
    return [].slice.call(iterable)
  }
}

// Polyfill para Promise.withResolvers
if (!Promise.withResolvers) {
  Promise.withResolvers = function () {
    let resolve, reject
    const promise = new Promise((res, rej) => {
      resolve = res
      reject = rej
    })
    return { promise, resolve, reject }
  }
}

// Polyfill para Promise.prototype.finally
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    const P = this.constructor
    return this.then(
      value => P.resolve(callback()).then(() => value),
      reason =>
        P.resolve(callback()).then(() => {
          throw reason
        })
    )
  }
}

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
