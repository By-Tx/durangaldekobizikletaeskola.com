import Card from "@/app/[locale]/(main)/components/gallery/Card";
import Item from "@/app/[locale]/(main)/components/gallery/ItemGallery"
interface AlbumPageProps {
    params: { album: string; categoria?: string };
  }

 
async function fetchImages(album: string) {

  try {
    const API_URL =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
        : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

    if (!API_URL) {
      throw new Error("API URL no definida en las variables de entorno");
    }

    const response = await fetch(`${API_URL}/api/category`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ album }),
      cache: "no-store", 
    });

    if (!response.ok) {
      throw new Error(`Error al obtener datos: ${response.status}`);
    }

    const responseData = await response.json();

    return responseData
      .filter((item: string) => !item.includes("../"))
      .map((item: string) => ({
        title: item,
        image: `https://photos.txuli.com/duranguesa/gallery/${album}/${item}`,
        link: `/${item.slice(0, -1)}`,
      }));
  } catch (error) {
    console.error("Fetching error:", error);
    return [];
  }
}

export default async function AlbumPage({ params }: AlbumPageProps) {
const { album } = await params;
const { categoria } = await params;
  const test = `${album}/${categoria}`;
  const fetchData = await fetchImages(test);

  return (
    <div>
        <div className="mt-20 flex h-screen w-full">
      <Card album={fetchData} />
    
    </div>

    </div>
  );
}
