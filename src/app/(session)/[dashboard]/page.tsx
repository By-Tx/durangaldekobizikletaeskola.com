import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
export default async function Dashboard() {
    
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        
        redirect("/");
    }




    const name = session?.user?.name;
    const rol = session?.user?.role;
    return (
        <div className="">
            <h2>Welcome, {name}</h2>
            <h2>your role is {rol}</h2>
            
            </div>
            
     
    );
}
