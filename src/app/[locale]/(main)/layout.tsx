// app/layout.tsx

import type { Metadata } from "next";
import { getMessages} from 'next-intl/server';
import "../globals.css";
import NavBar from "../components/main/navBar";
import Sponsor from "../components/mainPage/sponsors/sponsors";
import Footer from "../components/main/Footer";
import { Fredoka } from 'next/font/google';
import Line from "@/app/[locale]/components/main/line";
import { NextIntlClientProvider } from "next-intl";

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});



export const metadata: Metadata = {
  title: "DURANGALDEKO BZK",
  description:
    "Durangaldeko Bizikleta Eskola - Batu gure tropelera! Bizikletaren munduan murgiltzeko aukera ezin hobea, errepide, mendi, ziklokros edo pista diziplinetan!",
  
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
        className={`${fredoka}  antialiased pageNO-specific`}
      >

<NavBar />
        <Line />

        {children}
        <Sponsor />
        <Line />
        <Footer  color="bg-customblue"/>
      </body>
    </html>
    </NextIntlClientProvider>
  );
}
