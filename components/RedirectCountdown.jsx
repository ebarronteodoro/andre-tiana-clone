'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RedirectCountdown ({ seconds = 5 }) {
  const [count, setCount] = useState(seconds)
  const router = useRouter()

  useEffect(() => {
    if (count === 0) {
      router.replace('/')
      return
    }
    const timer = setTimeout(() => setCount(count - 1), 1000)
    return () => clearTimeout(timer)
  }, [count, router])

  return (
    <span className='text-xs mt-2 leading-[1.2] font-cardo'>
      Redirigiendo al inicio en <strong>{count}</strong> segundo{count !== 1 ? 's' : ''}
    </span>
  )
}
