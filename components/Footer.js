"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-white py-8">
      <div className="max-w-8xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Columna 1 */}
          <div className="w-full">
            <Image
              className="h-auto object-contain w-64 mx-auto"
              src="/logo/logo.png"
              alt="Logo AyT"
              width={500}
              height={100}
            />
            <p className="text-[#1a47c4] text-lg text-center">
              Design & Consulting
            </p>
          </div>

          <div className="w-full">
            <p className="text-gray-400 text-xl">
              Aqui estan nuestras redes para hablar mas de cerca ¡Nos vemos ahi!
            </p>
          </div>

          <div className="w-full">
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="text-center">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/andreytiana.design/"
                  className="hover:text-[#1a47c4] text-xl"
                >
                  Instagram
                </Link>
              </li>
              <li className="text-center">
                <Link
                  target="_blank"
                  href="https://www.tiktok.com/@andretiana.design"
                  className="hover:text-[#1a47c4] text-xl"
                >
                  Tik-Tok
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
          &copy; 2025 Todos los derechos reservados.
        </div> */}
      </div>
    </footer>
  );
}
