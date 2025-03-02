
import Card from "@/app/[locale]/(main)/components/gallery/Card";



async function fetchImages(album: string, params: { album: string }) {
  try {
  
    const API_URL =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
      : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;
    const response = await fetch(`${API_URL}/api/category`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ album }),
      cache: "no-store", // Evita el caché para SSR
    });

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const responseData = await response.json();

    return responseData
      .filter((item: string) => !item.includes("../"))
      .map((item: string) => ({
        title: item.slice(0, -1),
        image: `https://photos.txuli.com/duranguesa/covers/${album}/${item.slice(0, -1)}.png`,
        link: `${album}/${item.slice(0, -1)}`,
      }));
  } catch (error) {
    console.error("Fetching error:", error);
    return [];
  }
}

export default async function AlbumPage({ params }: { params: { album: string } }) {
  const {album} = await params;
  const fetchData = await fetchImages(album, params);

  return (
    <div className="mt-20 grid h-screen w-full space-x-4">
      <Card album={fetchData} />
    </div>
  );
}
