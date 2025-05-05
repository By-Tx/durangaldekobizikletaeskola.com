// app/[locale]/page.tsx
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import NoticeContent from "../../components/session/forms/Notice"; 

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers()
});

if (!session) {
    
    redirect("/");
}

  return <NoticeContent />;
}
