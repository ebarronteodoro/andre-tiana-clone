import Header from "@/components/Header";
import { getCategories } from "@/lib/data";
import Link from "next/link";

export const metadata = {
  title: "Work — Browse by type of client",
  description: "Portfolio of Pentagram design agency",
};

export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="min-h-screen">
      <Header />

      <section className="container mx-auto px-4 mt-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between relative">
          <h1 className="text-[55px] font-medium -mt-12 md:mt-0 mb-16 md:mb-0">
            Work
          </h1>
          <div className="border-b border-gray-200 w-full mx-auto md:w-auto absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <nav className="flex space-x-8">
              <Link
                href="#"
                className="pb-4 font-helvetica-neue tracking-[.8px] text-md text-[#1a1a1a] border-b-1 border-[#1a1a1a] relative -mb-[1px]"
              >
                TYPE OF CLIENT
              </Link>
              <Link
                href="#"
                className="pb-4 font-helvetica-neue tracking-[.8px] text-md text-[#999]"
              >
                TYPE OF WORK
              </Link>
              <Link
                href="#"
                className="pb-4 font-helvetica-neue tracking-[.8px] text-md text-[#999]"
              >
                ALL PROJECTS
              </Link>
            </nav>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="space-y-4">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-bold">{category.name}</h2>
              <span className="text-gray-500">{category.count}</span>
            </div>
            <div
              className="aspect-square relative overflow-hidden"
              style={{ backgroundColor: category.bgColor }}
            >
              {/* <Image
                src='/placeholder.svg?height=400&width=400'
                alt={category.title}
                width={400}
                height={400}
                className='object-cover w-full h-full'
              /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className={`text-4xl font-bold ${category.textColor}`}>
                  {category.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
