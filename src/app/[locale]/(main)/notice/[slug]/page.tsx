import NoticeTemplate from "@/app/[locale]/components/mainPage/noticeComponents/noticeTemplate";
import { NewsProps } from "@/app/[locale]/components/mainPage/noticeComponents/noticeTemplate";

export default async function Page(props: { params: Promise<{ slug: string; locale: string }> }) {
  const params = await props.params;
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
  const {data} = await res.json();
  
  
  const noticia: NewsProps = {
    translation: data.translationKey, 
    idImage: data.imagePage,
    
  };
  


  return (
   
    <NoticeTemplate NewsProps={noticia} />

  );
}