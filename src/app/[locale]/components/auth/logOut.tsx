"use client";
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
const Logout = () => {
    const router = useRouter();
    return (
        <button onClick={async () => {
            
                await authClient.signOut({
                    fetchOptions: {
                        onSuccess: () => {
                            router.push("/"); 
                        },
                        onError: (ctx) => {
                            alert(ctx.error.message);
                        },
                    },
                });
            
        }} >Cerrar sesión</button>
    );
}
export default Logout;