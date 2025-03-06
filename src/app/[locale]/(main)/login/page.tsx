
import { redirect } from '@/i18n/routing';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import LogInForm from "../../components/auth/logInForm";
export default async function SignIn() {

  const session = await auth.api.getSession({
    headers: await headers() 
})

  

  if (session) {

    redirect({ href: "/dashboard", locale: "es" });
  }


  return (
    <>
      <LogInForm />
    </>
  );
}
