

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import LogInForm from "../components/logInForm";
export default async function SignIn() {

  const session = await auth.api.getSession({
    headers: await headers() 
})

  

  if (session) {

    redirect("/dashboard");
  }


  return (
    <>
      <LogInForm />
    </>
  );
}
