"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const pathname = usePathname();

  const logoSrc = pathname === "/" ? "/logo/logo-blanco.png" : "/logo/logo.png";
  const textColor = pathname === "/" ? "text-white" : "text-black";
  const bgColor = pathname === "/" ? "bg-white" : "bg-black";

  const bgColorHeader = pathname === "/" ? "bg-[#1a47c4]" : "";

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";

    if (mobileMenuOpen) {
      setMenuVisible(true);
      setTimeout(() => {
        setFadeIn(true);
      }, 10);
    } else {
      setFadeIn(false);
      const timeout = setTimeout(() => {
        setMenuVisible(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [mobileMenuOpen]);

  const navigationLinks = (
    <>
      <Link
        href="/work"
        onClick={() => setMobileMenuOpen(false)}
        className={`font-medium ${mobileMenuOpen ? "text-white" : textColor}`}
      >
        WORK
      </Link>
      <Link
        href="/about"
        onClick={() => setMobileMenuOpen(false)}
        className={`font-medium ${mobileMenuOpen ? "text-white" : textColor}`}
      >
        ABOUT
      </Link>
      <Link
        href="/news"
        onClick={() => setMobileMenuOpen(false)}
        className={`font-medium ${mobileMenuOpen ? "text-white" : textColor}`}
      >
        NEWS
      </Link>
      <Link
        href="/contact"
        onClick={() => setMobileMenuOpen(false)}
        className={`font-medium ${mobileMenuOpen ? "text-white" : textColor}`}
      >
        CONTACT
      </Link>
    </>
  );

  return (
    <header className={`${bgColorHeader}`}>
      {/* Header principal: fondo extendido y contenedor centrado */}
      <div className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <Link
          href="/"
          className="text-red-600 text-5xl font-medium font-times-new-roman relative z-50"
        >
          <Image
            className="h-auto object-contain w-44 md:w-56"
            src={logoSrc}
            alt="Logo Andrea"
            width={500}
            height={100}
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navigationLinks}
        </nav>
        <button
          className="md:hidden relative z-50 flex flex-col justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-5 h-0.5 ${bgColor} transition transform duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 ${bgColor} transition transform duration-300 mt-1 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-0.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {menuVisible && (
        <div
          className={`fixed inset-0 bg-black/90 z-40 flex flex-col transition-opacity duration-300 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Header interno en el overlay: logo y botón para cerrar */}
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-red-600 text-5xl font-medium font-times-new-roman relative z-50"
            >
              <Image
                className="h-auto object-contain w-44 md:w-56"
                src={logoSrc}
                alt="Logo Andrea"
                width={500}
                height={100}
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
              className="relative z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Navegación del menú móvil */}
          <nav className="flex flex-col ml-4 space-y-3 text-xl mt-16">
            {navigationLinks}
            <button aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
