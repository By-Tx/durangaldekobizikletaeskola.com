
export default async function Page({ params }: { params: { slug: string; locale: string } }) {
    const slug= await params.slug;
    const API_URL =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
      : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

  const res = await fetch(`${API_URL}/api/RenderNews`,{
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({slug: slug}),
  });
  if (!res.ok) {
    throw new Error("Error al cargar la noticia");
  }
    const data = await res.json();
  
  

  return (
    <div>
     
      <p>Estás viendo la noticia con slug: {slug}</p>
    </div>
  );
}