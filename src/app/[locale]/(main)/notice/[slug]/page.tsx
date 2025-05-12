import NoticeTemplate from "@/app/[locale]/components/mainPage/noticeComponents/noticeTemplate";
import { NewsProps } from "@/app/[locale]/components/mainPage/noticeComponents/noticeTemplate";
import { API_URL } from "@/lib/config";

export default async function Page(props: { params: Promise<{ slug: string; locale: string }> }) {
  const params = await props.params;
  const slug= await params.slug;
  
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
    urls: data.urls,
    
  };
 


  return (
   
    <NoticeTemplate NewsProps={noticia} />

  );
}