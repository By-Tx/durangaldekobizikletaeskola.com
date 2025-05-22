import UsersTable from "../../components/session/dashboard/Usuarios";
import { API_URL } from "@/lib/config";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

async function getUsers() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/");
    }

    const rol = session?.user?.role || "";

    if (rol !== "admin" && rol !== "staff") {
        redirect("/es/dashboard");
    }

    const res = await fetch(`${API_URL}/api/usersManagement`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }

    const data = await res.json();
    return { users: data, rol };
}

export default async function UsersPage() {
    const { users, rol } = await getUsers();

    return <UsersTable users={users} currentUserRole={rol} />;
}