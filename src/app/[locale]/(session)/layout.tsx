import "./globals.css";
// import LoggedNav from "./components/LoggedNav";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import NavBarS from "../components/session/NavBarS";

export default async function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang="es">
        <body>
          {/* Fondo fijo de página */}
          <div className="fixed inset-0 -z-50 w-full h-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#001f5f_100%)]"></div>

          {/* Contenido visible */}
          <NavBarS />
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
