"use client";

import localFont from "next/font/local";
import CustomNavbar from "../components/navbar/CustomNavbar";
import { MantineProvider } from "@mantine/core";
import { navbarModel } from "../models/navbar/navbarModel";

import "../styles/globals.css";
import { title } from "process";

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
          <CustomNavbar model={navbarModel} title={title} />
          <main className="flex-grow pt-16 p-6 bg-gray-50">{children}</main>
         
        </div>
        </MantineProvider>
      </body>
    </html>
  );
}
