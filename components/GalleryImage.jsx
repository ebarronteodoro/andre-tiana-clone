'use client'
import Image from 'next/image'

export default function GalleryImage ({ src, alt, slug }) {
  return (
    <>
      <style jsx global>{`
        @keyframes imageUpStretch {
          from {
            transform: translateY(0) scale(1);
          }
          to {
            transform: translateY(-30px) scale(1.1);
          }
        }
        /* Aplica la animación en la vista nueva durante la transición */
        [viewtransitionname^='gallery-image-']::view-transition-new {
          animation: imageUpStretch 300ms ease-in-out forwards;
        }
        /* Aplica la animación en la vista antigua durante la transición */
        [viewtransitionname^='gallery-image-']::view-transition-old {
          animation: imageUpStretch 300ms ease-in-out forwards;
        }
      `}</style>
      {src && (
        <div className='relative w-full h-[300px] overflow-hidden'>
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={300}
            className='object-cover w-full h-full'
            viewtransitionname={`gallery-image-${slug}`}
          />
        </div>
      )}
    </>
  )
}
