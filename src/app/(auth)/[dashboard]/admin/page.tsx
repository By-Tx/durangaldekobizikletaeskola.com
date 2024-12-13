import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function admin(){
   const session = await auth.api.getSession({
           headers: await headers()
       });
       if(session?.user.role !== 'admin'){
            redirect("/dashboard");
       }
       if (!session) {
           redirect("/");
       }
 return(
    
    <div>dajfhlkajd</div>
    
 )
}
