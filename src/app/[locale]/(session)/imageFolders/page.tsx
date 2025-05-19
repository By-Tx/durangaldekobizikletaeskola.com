// app/[locale]/page.tsx
import { auth } from "@/lib/auth";
import { redirect } from '@/i18n/routing';
import { headers } from "next/headers";
import ImageContent from "../../components/session/dashboard/ImageFolder";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect({ href: "/", locale: "es" });
    return null; // Ensure the function exits after redirect
  }

  if (session.user.role !== 'admin' && session.user.role !== 'staff') {
    redirect({ href: "/dashboard", locale: "es" });
    return null; // Ensure the function exits after redirect
  }
  //role={session.user.role} 
  return <ImageContent/>;
}
