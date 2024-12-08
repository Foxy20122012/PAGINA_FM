"use client";

import localFont from "next/font/local";
import CustomNavbar from "../components/navbar/CustomNavbar";
import Footer from "../components/footer/Footer"; // Importa el Footer
import { MantineProvider } from "@mantine/core";
import { navbarModel } from "../models/navbar/navbarModel";
import Image from "next/image";

import "../styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const title = "Francisco Marroquin";
  const logo = (
    <div className="text-2xl md:text-3xl font-extrabold text-gray-800 hover:text-gray-600 transition-all">
      <Image
        src="/Ined Francisco.jpg" // Ruta de la imagen en la carpeta "public"
        alt="Logo de Ined Francisco"
        width={80} // Cambia según tus necesidades
        height={50} // Cambia según tus necesidades
      />
    </div>
  );

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme: "light" }} // Define un esquema de colores
        >
          <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <CustomNavbar model={navbarModel} title={title} logo={logo} />
            
            {/* Main Content */}
            <main className="flex-grow pt-16 p-6 bg-gray-50">{children}</main>
            
            {/* Footer */}
            <Footer />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
