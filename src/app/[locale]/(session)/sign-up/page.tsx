import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import SignUp from "@/app/[locale]/components/auth/SignUp";

export default async function SignUpPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (session) {
        redirect("/es/dashboard");
    }

    return (
        <SignUp />
    );
}