import RedirectCountdown from "@/components/RedirectCountdown"

export const metadata = {
  title: '404 Not Found',
  description: 'This page could not be found yet'
}

export default function NotFoundPage () {
  return (
    <main className='h-[calc(100dvh-390px)] md:h-[calc(100dvh-196px)] flex justify-center items-center space-x-3 md:space-x-6 text-[#1a47c4]'>
      <h1 className='text-4xl md:text-5xl font-bold text-center font-cardo border-r-2 min-h-16 flex items-center border-[#1a47c4] pr-3 md:pr-6'>
        404
      </h1>
      <div>
        <p className='font-cardo md:text-lg text-balance max-w-52 md:max-w-none'>
          This page could not be found yet
        </p>
        <RedirectCountdown seconds={5} />
      </div>
    </main>
  )
}
