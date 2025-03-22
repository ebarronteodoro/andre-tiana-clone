import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import localFont from "next/font/local";

const neueHaas = localFont({
  src: [
    {
      path: "../public/fonts/Neue/337111_0_0.woff2", // Regular 500
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Neue/337111_1_0.woff2", // Regular sin peso definido
      weight: "400", // Asigna 400 si es la normal
      style: "normal",
    },
    {
      path: "../public/fonts/Neue/33F0E7_0_0.woff2", // Italic normal
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Neue/33F0E7_1_0.woff2", // Italic 500
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--neuehaas-font",
  display: "swap",
});

const helveticaNeue = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueBlack.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueBlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueHeavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueHeavyItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueMediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueThin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueThinItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueUltraLight.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue/HelveticaNeueUltraLightItalic.otf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--helvetica-neue-font",
  display: "swap",
});

const timesNewRoman = localFont({
  src: [
    {
      path: "../public/fonts/TimesNewRoman/times new roman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TimesNewRoman/times new roman italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/TimesNewRoman/times new roman bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/TimesNewRoman/times new roman bold italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--times-new-roman-font",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={
        neueHaas.className +
        " " +
        helveticaNeue.variable +
        " " +
        timesNewRoman.variable
      }
    >
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </head>
      <body className="!relative">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
