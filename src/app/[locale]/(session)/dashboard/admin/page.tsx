import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from '@/i18n/routing';

export default async function admin(){
   const session = await auth.api.getSession({
           headers: await headers()
       });
       if(session?.user.role !== 'admin'){
            redirect({ href: "/dashboard", locale: "es" });
       }
       if (!session) {
           redirect({ href: "/", locale: "es" });
       }
 return(
    
    <div>dajfhlkajd</div>
    
 )
}
