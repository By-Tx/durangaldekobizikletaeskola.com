// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import NavBar from "../components/main/navBar";
import Sponsor from "../components/sponsors/sponsors";
import Footer from "../components/main/Footer";
import { Fredoka } from 'next/font/google';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300','400', '500', '700'], 
  display: 'swap', 
});

const Oswald = localFont({
  src: "../fonts/Oswald-Light.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DURANGALDEKO BZK",
  description:
    "Durangaldeko Bizikleta Eskola - Batu gure tropelera! Bizikletaren munduan murgiltzeko aukera ezin hobea, errepide, mendi, ziklokros edo pista diziplinetan!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="/media/logo.png" />
      </head>
      <body
        className={`${Oswald.variable} ${geistMono.variable} antialiased`}
      >

         <NavBar /> 
       
        {children} 
        <Sponsor />
        <Footer />
      </body>
    </html>
  );
}
