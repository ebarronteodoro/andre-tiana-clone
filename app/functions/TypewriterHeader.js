'use client'

import { useState, useEffect } from 'react'

export default function TypewriterHeader ({ text = '' }) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let active = true
    setDisplayedText('')

    const typeNext = (index = 0) => {
      if (!active || index >= text.length) return
      setDisplayedText(prev => prev + text[index])
      setTimeout(() => typeNext(index + 1), 100)
    }

    typeNext()

    return () => {
      active = false
    }
  }, [text])

  return <>{displayedText}</>
}
