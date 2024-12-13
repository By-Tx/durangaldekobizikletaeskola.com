import "../globals.css";
export default function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
     
      <body>
        <div>layout desarrollo
          
        </div>
        {children}  {/* Este es el lugar donde se renderiza el contenido de las páginas */}
        
      </body>
    </html>
  );
}