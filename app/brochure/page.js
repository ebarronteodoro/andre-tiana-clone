import PdfViewer from '@/components/PdfViewer'

export const metadata = {
  title: 'Brochure',
  description: 'Brochure of Andrea Loarte Studio',
}

export default function Home () {
  return (
    <main className='bg-[#1a47c4] px-20 py-8'>
      <PdfViewer />
    </main>
  )
}
