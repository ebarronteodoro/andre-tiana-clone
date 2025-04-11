// src/utils/renderContenidoPorSlug.js

import dynamic from "next/dynamic";

export const renderContenidoPorSlug = (slug) => {
  const paginas = {
    "asheti": dynamic(() => import("../../project/asheti/page.js")),
    "materia-secreta": dynamic(() => import("../../project/materia-secreta/page.js")),
    "asociacion-peruana-de-bomberos": dynamic(() => import("../../project/asociacion-peruana-de-bomberos/page.js")),
    "verdant-inmobiliaria": dynamic(() => import("../../project/verdant-inmobiliaria/page.js")),
    "ndk-arquitectos": dynamic(() => import("../../project/ndk-arquitectos/page.js")),
    "haz-group": dynamic(() => import("../../project/haz-group/page.js")),
    "bita-atelier": dynamic(() => import("../../project/bita-atelier/page.js")),
    "plena": dynamic(() => import("../../project/plena/page.js")),
    "empapa-t": dynamic(() => import("../../project/empapa-t/page.js"))
  };

  return paginas[slug] || null;
};
