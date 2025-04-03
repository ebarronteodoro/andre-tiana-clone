import PdfViewer from '@/components/PdfViewer'

export const metadata = {
  title: 'Brochure',
  description: 'Brochure page of Andre & Tania design studio'
}

export default function Home () {
  return (
    <main className='bg-[#1a47c4] px-20'>
      <PdfViewer />
    </main>
  )
}
