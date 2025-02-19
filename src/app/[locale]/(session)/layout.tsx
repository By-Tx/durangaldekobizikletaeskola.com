import "./globals.css";
// import LoggedNav from "./components/LoggedNav";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
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
      {/* <LoggedNav /> */}
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#001f5f_100%)]"></div>
        {children}  
        
      </body>
    </html>
    </NextIntlClientProvider>
  );
}