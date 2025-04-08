'use client'
import { useEffect, useRef, useState } from 'react'

export default function AnimateOnScroll ({
  children,
  animationClass,
  delayClass = ''
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${visible ? `${animationClass} ${delayClass}` : 'opacity-0'}`}
    >
      {children}
    </div>
  )
}
