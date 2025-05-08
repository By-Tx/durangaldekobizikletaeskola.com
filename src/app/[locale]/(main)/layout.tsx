import type { Metadata } from "next";
import "../globals.css";

import NavBar from "../components/main/navBar";
import Sponsor from "../components/mainPage/sponsors/sponsors";
import Footer from "../components/main/Footer";
import { Fredoka } from "next/font/google";
import Line from "@/app/[locale]/components/main/line";
import { NextIntlClientProvider } from "next-intl";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DURANGALDEKO BZK",
  description:
    "Durangaldeko Bizikleta Eskola - Batu gure tropelera! Bizikletaren munduan murgiltzeko aukera ezin hobea, errepide, mendi, ziklokros edo pista diziplinetan!",
};

export const runtime = "nodejs";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout(props: Props) {
  const { children } = props;
  const { locale } = await props.params; 

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
      : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

  let messages = {};
  try {
    const res = await fetch(`${baseUrl}/api/translations?lang=${locale}`, {
      cache: "no-store",
    });
    messages = await res.json();
  } catch (error) {
    console.error("Error cargando traducciones en layout:", error);
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="shortcut icon" href="/media/logo.png" />
      </head>
      <body
        className={`${fredoka} antialiased pageNO-specific absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          
          <NavBar />
          <Line />
          {children}
          <Sponsor />
          <Line />
          <Footer color="bg-customblue" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}