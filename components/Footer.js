"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-white py-8">
      <div className="max-w-8xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          {/* Columna 1 */}
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <Image
              className="h-auto object-contain w-48 mx-auto"
              src="/logo/logo.png"
              alt="Logo AyT"
              width={500}
              height={100}
            />
            <p className="text-[#1a47c4] text-base text-left font-cardo">
              Design and Consulting
            </p>
          </div>

          <div className="w-full">
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="text-left">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/andreytiana.design/"
                  className="hover:text-[#1a47c4] text-base
"
                >
                  Términos y condiciones
                </Link>
              </li>
              <li className="text-left">
                <Link
                  target="_blank"
                  href="https://www.tiktok.com/@andretiana.design"
                  className="hover:text-[#1a47c4] text-base
"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="text-left">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/andreytiana.design/"
                  className="hover:text-[#1a47c4] text-base
"
                >
                  Instagram
                </Link>
              </li>
              <li className="text-left">
                <Link
                  target="_blank"
                  href="https://www.tiktok.com/@andretiana.design"
                  className="hover:text-[#1a47c4] text-base
"
                >
                  Tik-Tok
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="text-left">
                <Link
                  target="_blank"
                  href="#"
                  className="hover:text-[#1a47c4] text-base
"
                >
                  2025
                </Link>
              </li>
              
            </ul>
          </div>
        </div>

        {/* <div className="border-t border-gray-700 mt-6 pt-4 text-left text-gray-500 text-sm">
          &copy; 2025 Todos los derechos reservados.
        </div> */}
      </div>
    </footer>
  );
}
