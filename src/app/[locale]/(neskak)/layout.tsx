// app/layout.tsx

import type { Metadata } from "next";
import { getMessages} from 'next-intl/server';
import "../globals.css";

import { Fredoka } from 'next/font/google';

import { NextIntlClientProvider } from "next-intl";
import NavBar from "../components/main/navBar";
const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});



export const metadata: Metadata = {
  title: "PUNTAGALEA OCCIDENT",
  description:
    "PUNTAGALEA OCCIDENT - Batu gure tropelera! Bizikletaren munduan murgiltzeko aukera ezin hobea, errepide, mendi, ziklokros edo pista diziplinetan!",
  
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  
  const messages = await getMessages();
  
  return (
    <NextIntlClientProvider messages={messages}
    >
    <html lang="eus">
      <head>
         <link rel="shortcut icon" href="/media/logo.png" /> 
      </head>
      <body
        className={`${fredoka}  antialiased`}
      >

      <NavBar  className="bg-customPuntagaleaOrange" color2="bg-customPuntagaleaDarkOrange"/>

        {children}
        
        
        
      </body>
    </html>
    </NextIntlClientProvider>
  );
}
