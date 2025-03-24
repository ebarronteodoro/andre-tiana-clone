// app/work/WorkClient.js
"use client";
import { useState, useEffect } from "react";
import { getCategories, getAllProjects } from "@/lib/data";
import Link from "next/link";

export default function WorkClient() {
  const [activeTab, setActiveTab] = useState("client");
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [loadingProjects, setLoadingProjects] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      setLoadingCategories(true);
      const data = await getCategories();
      setCategories(data);
      setLoadingCategories(false);
    }
    async function fetchProjects() {
      setLoadingProjects(true);
      const data = await getAllProjects();
      setProjects(data);
      setLoadingProjects(false);
    }
    fetchCategories();
    fetchProjects();
  }, []);

  return (
    <main className="">
      <section className="container mx-auto px-4 mt-16 relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-[55px] font-medium -mt-12 md:mt-0 mb-16 md:mb-0">
            Work
          </h1>
          <div className="border-b border-gray-200 w-full mx-auto md:w-auto absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("client")}
                className={`pb-4 font-helvetica-neue tracking-[.8px] text-md relative -mb-[1px] ${
                  activeTab === "client"
                    ? "text-[#1a1a1a] border-b border-[#1a1a1a]"
                    : "text-[#999]"
                }`}
              >
                TYPE OF CLIENT
              </button>
              <button
                onClick={() => setActiveTab("all")}
                className={`pb-4 font-helvetica-neue tracking-[.8px] text-md relative -mb-[1px] ${
                  activeTab === "all"
                    ? "text-[#1a1a1a] border-b border-[#1a1a1a]"
                    : "text-[#999]"
                }`}
              >
                ALL PROJECTS
              </button>
            </nav>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeTab === "client" && (
          <>
            {loadingCategories ? (
              <p>Loading categories...</p>
            ) : (
              categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="group"
                >
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between">
                      <h2 className="text-2xl font-bold">
                        {category.name}
                      </h2>
                    </div>
                    <div
                      className="w-full h-[200px] relative overflow-hidden group-hover:opacity-80 transition-opacity duration-300"
                      style={{
                        backgroundImage: `url(${category.bgImg})`,
                        backgroundSize: "100% auto",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3
                          className={`text-4xl font-bold ${category.textColor}`}
                        >
                          {/* {category.name} */}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </>
        )}

        {activeTab === "all" && (
          <>
            {loadingProjects ? (
              <p>Loading projects...</p>
            ) : (
              projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/project/${project.slug}`}
                  className="group"
                >
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between">
                      <h2 className="text-2xl font-bold">
                        {project.title}
                      </h2>
                    </div>
                    <div
                      className="w-full h-[200px] relative overflow-hidden group-hover:opacity-80 transition-opacity duration-300"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: "100% auto",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-4xl font-bold text-white">
                          {/* {project.title} */}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </>
        )}
      </section>
    </main>
  );
}
