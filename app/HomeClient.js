"use client";

import Link from 'next/link';
import Image from 'next/image';
import TypewriterHeader from './functions/TypewriterHeader.js';
import { useState, useEffect } from "react";
import "../styles/index.css";

export default function HomeClient() {
    const colors = ["#1c1547", "#521549", "#1a47c4", "#788988"];
    const [currentColor, setCurrentColor] = useState(colors[0]);
    const [prevColor, setPrevColor] = useState(colors[0]);
    const [showAndrea, setShowAndrea] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        // Actualiza el color previo con el color actual
        setPrevColor(currentColor);
        // Calcula el siguiente color
        index = (index + 1) % colors.length;
        setCurrentColor(colors[index]);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [currentColor, colors]);

    useEffect(() => {
      const handleResize = () => {
        const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
        setIsMobile(isMobileDevice);
        console.log(`Is mobile: ${isMobileDevice}`); // Imprime si es móvil o no
      };

      // Verificar el tamaño inicial de la pantalla
      handleResize();

      // Escuchar cambios en el tamaño de la pantalla
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    useEffect(() => {
      if (isMobile) {
        const interval = setInterval(() => {
          setShowAndrea((prev) => !prev);
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(interval);
      }
    }, [isMobile]);

  return (
    <main className='min-h-screen !relative'>
      <section className='!relative w-full h-auto bg-[#1a47c4] p-8'>
      <h1 className='m-x-auto text-4xl text-white text-center font-cardo'>
          Welcome to our Gallery
        </h1>

        <span className='block text-white mt-[16px] text-center font-cardo m-x-auto'>
          
          <TypewriterHeader text='Where Design Meets Art' />
        </span>
        <div className='flex inset-0 w-full h-auto max-w-[1440px] mx-auto justify-center md:gap-16'>
          {isMobile ? (
            // Mostrar solo una imagen a la vez en dispositivos móviles
            showAndrea ? (
              <picture className='w-full max-w-[300px] relative flex items-center animate-fade animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate animate-fill-backwards'>
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-cardo text-center'>
                  Andrea Loarte
                </span>
                <span className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-cardo text-center top-[75%]'>
                  CEO &
                </span>
                <span className='absolute w-[118px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-cardo text-center top-[80%]'>
                  Director de Arte
                </span>
                <Image
                  className='w-full h-auto object-cover '
                  src='/andrea-foto.png'
                  alt='Foto Silueta Andrea'
                  width={1920}
                  height={1080}
                />
              </picture>
            ) : (
              <picture className='w-full max-w-[300px] relative flex items-center animate-fade animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate animate-fill-backwards'>
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-cardo text-center'>
                  Tatiana Lopez
                </span>
                <span className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-cardo text-center top-[75%]'>
                  Co-Fundadora &
                </span>
                <span className='absolute w-[118px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-cardo text-center top-[80%]'>
                  Asesora Creativa
                </span>
                <Image
                  className='w-full h-auto object-cover'
                  src='/susana-foto.png'
                  alt='Foto Silueta Tiana'
                  width={1920}
                  height={1080}
                />
              </picture>
            )
          ) : (
            // Mostrar ambas imágenes al mismo tiempo en pantallas más grandes
            <>
              <picture className='w-full max-w-[300px] relative flex items-center '>
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-cardo text-center'>
                  Andrea Loarte
                </span>
                <span className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-cardo text-center top-[75%]'>
                  CEO &
                </span>
                <span className='absolute w-[118px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-cardo text-center top-[80%]'>
                  Director de Arte
                </span>
                <Image
                  className='w-full h-auto object-cover '
                  src='/andrea-foto.png'
                  alt='Foto Silueta Andrea'
                  width={1920}
                  height={1080}
                />
              </picture>
              <picture className='w-full max-w-[300px] relative flex items-center '>
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-cardo text-center'>
                  Tatiana Lopez
                </span>
                <span className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-cardo text-center top-[75%]'>
                  Co-Fundadora &
                </span>
                <span className='absolute w-[118px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-cardo text-center top-[80%]'>
                  Asesora Creativa
                </span>
                <Image
                  className='w-full h-auto object-cover'
                  src='/susana-foto.png'
                  alt='Foto Silueta Tiana'
                  width={1920}
                  height={1080}
                />
              </picture>
            </>
          )}
        </div>
        

        <Link
          href='/work'
          className='mx-auto text-center block w-fit bg-[#B3AE4C] text-[16px] mt-8 px-4 py-2 shadow-[0px_14px_36px_rgba(0,0,0,0.5)] text-[#292605] rounded-[35px] hover:bg-white transition all hover:text-[#1a47c4]'
        >
          Ver Proyectos
        </Link>
      </section>

      <section className='!relative w-full h-auto bg-white'>
        <div className='mt-16 md:flex md:items-center md:justify-center md:gap-25 md:px-16 md:mx-auto max-w-[1440px]'>
          <div>
            <h2 className='font-cardo text-[#1a47c4] text-5xl text-center md:text-left'>Design Studio?</h2>
            <h2 className='font-cardo text-[#1a47c4] text-5xl text-center mt-3 md:text-left'>Gallery?</h2>
          </div>
          <div className='md:flex md:items-center'>   
            <p className='w-[256px] text-center mx-auto mt-16 md:mt-0 md:text-left text-[#555555]'>
              Estudio multidisciplinario que fusiona creatividad y estrategia
              para crear identidades poderosas.
            </p>
          </div>
        </div>
        <div className='mt-16 md:flex md:justify-center md:gap-16 md:px-16 md:mx-auto max-w-[1440px]'>
        
          <picture className="w-full mt-[32px] block max-w-[300px] mx-auto">
            <Image
              className="w-full h-auto object-cover mx-auto"
              src="/marco_de_foto.png"
              width={100}
              height={100}
              alt="Foto Marco"
            />
          </picture>
          <span className='block text-[#1a47c4] mt-[32px] text-center font-cardo m-x-auto md:flex md:items-center '>
          <Image
              className='w-[40px] inline-block h-auto object-cover'
              src='/comillas.png'
              width={100}
              height={100}
              alt='Foto Silueta Andrea'
            />
            <p className='inline-block font-helvetica-neue fonttext-2xl text-black font-bold'>CADA PROYECTO ES UNA OBRA ÚNICA</p>
            <Image
              className='w-[40px] inline-block h-auto object-cover rotate-180'
              src='/comillas.png'
              width={100}
              height={100}
              alt='Foto Silueta Andrea'
            />
          </span>
        </div>
      </section>

      <section 
  className='wrapper py-8'
>
        <div className='md:flex md:items-center max-w-[1440px] md:mx-auto md:justify-center'>
          <h3 className='font-cardo text-white text-center text-2xl px-8 md:text-5xl'>Quiero Empezar A Construir Mi Obra</h3>
          <Link
            href='/dashboard'
            className='mx-auto text-center block w-fit bg-[#B3AE4C] text-[16px]  mt-4 px-4 py-2 shadow-[0px_14px_36px_rgba(0,0,0,0.5)] text-[#292605] md:m-0 rounded-[35px] hover:bg-white transition all hover:text-[#1a47c4]'
          >
            Agenda Aquí
          </Link>
        </div>
      </section>
 
    </main>
    
  );
}
