// app/all-projects/page.js
// import { getAllProjects } from "@/lib/data";
// import Link from "next/link";
// import Image from "next/image";

export default async function AllProjectsPage () {
  // const projects = await getAllProjects();

  return (
    // <main className="container mx-auto px-4 mt-16">
    //   <h1 className="text-[55px] font-medium -mt-12 md:mt-0 mb-16 md:mb-0">
    //     All Projects
    //   </h1>
    //   <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //     {projects.map((project) => (
    //       <Link
    //         key={project.id}
    //         href={`/project/${project.slug}`}
    //         className="group"
    //       >
    //         <div className="space-y-4">
    //           <div className="flex items-baseline justify-between">
    //             <h2 className="text-2xl font-bold">{project.title}</h2>
    //             {/* Si deseas agregar otros datos, puedes hacerlo aquí */}
    //           </div>
    //           <div
    //             className="w-full h-[200px] relative overflow-hidden group-hover:opacity-80 transition-opacity duration-300"
    //             style={{
    //               backgroundImage: `url(${project.image})`,
    //               backgroundSize: "100% auto",
    //               backgroundPosition: "center",
    //               backgroundRepeat: "no-repeat",
    //             }}
    //           >
    //             <div className="absolute inset-0 flex items-center justify-center">
    //               <h3 className="text-4xl font-bold text-white">
    //                 {/* {project.title} */}
    //               </h3>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //     ))}
    //   </section>
    // </main>
    <></>
  )
}
