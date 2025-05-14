import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import CodigosClient from "@/app/[locale]/components/session/Codigos";

export default async function Codigos() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/");
    }
    
    return <CodigosClient />;
}