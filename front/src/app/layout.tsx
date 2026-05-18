import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Aprovechamos y ya te cambié el título de la pestaña del navegador para tu portfolio
export const metadata: Metadata = {
  title: "Valentin Lorenzo | Portfolio",
  description: "Backend & Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es" // Lo cambiamos a español
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`} // <-- Sumamos scroll-smooth para que el salto al clickear el menú sea suave
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-duo-black text-white relative`}
      >
        <Navbar />{" "}
        {/* <-- 3. Clavamos el menú acá. Va a flotar por encima del contenido */}
        {children} {/* Esto es todo el contenido de tu page.tsx */}
      </body>
    </html>
  );
}
