"use client";

import { useState, useEffect } from "react";

export default function TypewriterHeader({ text = "" }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    console.log("Texto recibido:", text);
    let index = 0;
    const interval = setInterval(() => {
      //   console.log(`Index: ${index} / Longitud del texto: ${text.length}`);
      if (index < text.length) {
        const nextChar = text[index];
        if (nextChar === undefined) {
          console.error(`Carácter undefined en el índice ${index}`);
        } else {
          //   console.log(`Agregando carácter: ${nextChar}`);
          setDisplayedText((prev) => prev + nextChar);
        }
        index++;
      } else {
        console.log("Texto completo, deteniendo intervalo.");
        clearInterval(interval);
      }
    }, 100); // Ajusta la velocidad (100ms entre cada letra)
    return () => clearInterval(interval);
  }, [text]);

  return <>{displayedText}</>;
}
