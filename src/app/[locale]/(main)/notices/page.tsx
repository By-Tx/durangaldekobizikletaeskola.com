// Importamos los componentes visuales
import News from "@/app/[locale]/components/mainPage/noticeComponents/notices";
import Title from "@/app/[locale]/components/mainPage/Titles/Title";
import Section from "@/app/[locale]/components/main/Section";

// Importamos utilidades para traducir en servidor
import { getLocale } from "next-intl/server";
import { createTranslator } from "next-intl";

// Definimos el tipo de una noticia
interface Notice {
  slug: string;
  imageSrc: string;
  alt: string;
  date: string;
  title: string;
  category: string;
}

// Función que hace una petición al endpoint de noticias, pasándole el idioma actual
async function fetchNotices(locale: string): Promise<Notice[]> {
  const API_URL =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
      : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

  if (!API_URL) {
    throw new Error("API URL no definida en las variables de entorno");
  }

  // Hacemos un POST al endpoint con el idioma
  const response = await fetch(`${API_URL}/api/mainNotices`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: "allNotices", loc: locale }),
  });

  if (!response.ok) {
    throw new Error("Error al obtener noticias");
  }

  // Extraemos el array de noticias traducidas
  const { data } = await response.json();
  return data;
}

// Carga las traducciones desde tu API para un idioma concreto
async function fetchMessages(locale: string) {
  const API_URL =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
      : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

  const res = await fetch(`${API_URL}/api/translations?lang=${locale}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("No se pudieron cargar las traducciones");
  }

  return res.json();
}

// Página principal que se renderiza en el servidor
export default async function Page() {
  // Obtenemos el idioma de la URL (por ejemplo, "es", "eus", etc.)
  const locale = await getLocale();

  // Cargamos las traducciones de la API para ese idioma
  const messages = await fetchMessages(locale);

  // Creamos un traductor con esas traducciones y namespace "noticePage"
  const translator = createTranslator({ locale, messages, namespace: "noticePage" });

  // Obtenemos las noticias traducidas desde el backend
  const data = await fetchNotices(locale);

  // Renderizamos el componente con el título traducido y las noticias
  return (
    <div>
      {/* Título de la página traducido desde "noticePage.title" */}
      <Title title={translator("title")} />
      
      {/* Mostramos todas las noticias */}
      <Section>
        <News items={data} />
      </Section>
      
    </div>
  );
}
