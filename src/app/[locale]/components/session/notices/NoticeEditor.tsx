import { API_URL } from "@/lib/config";
import NoticeEditorClient from "./NoticeEditorClient";

export default async function NoticeEditor() {
  const res = await fetch(`${API_URL}/api/notices/mainNotices`, {
    method: "POST",
    body: JSON.stringify({ path: "Modify", loc: "es" }),
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Error al cargar las noticias");

  const { data } = await res.json();
  return <NoticeEditorClient items={data} />;
}
