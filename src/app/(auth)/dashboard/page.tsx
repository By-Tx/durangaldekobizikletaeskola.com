import auth from "@/lib/auth";

import { redirect } from "next/navigation";
import { headers } from "next/headers";


export default async function Dashboard() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/sign-in");
      }

    const name = session?.user?.name;
    return (
        <div className="mt-52">
            <h1>Dashboard</h1>
            <h2>Welcome, {name}</h2>
            {session ? (
                <form
                    action={async () => {
                        'use server'
                        await auth.api.signOut({
                            headers: await headers()
                        });
                        redirect('/');
                    }}
                > <button>sign out</button></form>

            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
}