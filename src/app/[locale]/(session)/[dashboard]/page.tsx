import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import NavBarS from "../../components/session/NavBarS";
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
            <NavBarS />
            <h2>Welcome, {name}</h2>
            <h2>your role is {rol}</h2>
            
            </div>
            
     
    );
}
