import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import NavBarS from "../components/session/layout/NavBarS";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { ErrorProvider } from "@/context/ErrorContext";
import GlobalErrorHandler from "@/app/[locale]/components/handler/GlobalErrorHandler";
import { Fredoka } from "next/font/google";
import { InfoProvider } from "@/context/infoContext";

const fredoka = Fredoka({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "GI DURANGALDEKO BZK",
    description:
        "BARNEKO KUDEAKETA. Durangaldeko Bizikleta Eskola - Batu gure tropelera! Bizikletaren munduan murgiltzeko aukera ezin hobea, errepide, mendi, ziklokros edo pista diziplinetan!",
};

export default async function dashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const messages = await getMessages();

    // Obtén la sesión y el rol del usuario
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const rol = session?.user?.role || "";

    return (
        <NextIntlClientProvider messages={messages}>
            <html lang="es">
                <body className="scrollbar-carreras">
                    <InfoProvider>
                        <ErrorProvider>
                            <NavBarS rol={rol} />
                            <div className={`${fredoka} fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#001f5f_100%)]`}></div>
                            {children}
                            <GlobalErrorHandler />
                        </ErrorProvider>
                    </InfoProvider>
                </body>
            </html>
        </NextIntlClientProvider>
    );
}
