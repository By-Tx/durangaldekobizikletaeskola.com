import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import RaceClient from "@/app/[locale]/components/session/Carreras";

export default async function Race() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/");
    }

    return (
        <RaceClient/>
    );
}