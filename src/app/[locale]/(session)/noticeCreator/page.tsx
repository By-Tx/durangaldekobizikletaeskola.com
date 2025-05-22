import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import NoticeContent from "../../components/session/dashboard/Notice";
import DropdownClient from "../../components/session/ui/drowpdown";
import NoticeEditor from "../../components/session/notices/NoticeEditor";

export default async function Page(props: any) {
    const searchParams = props.searchParams as { option?: string } | undefined;

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/");
    }

    const selected = await  searchParams?.option;

    const renderContent = () => {
        switch (selected) {
            case "EditNotices":
                return <NoticeEditor />;
            case "CreateNotices":
                return <NoticeContent />;
            default:
                return (
                    <div className="text-gray-500">Selecciona una opción para comenzar</div>
                );
        }
    };

    return (
        <main className="p-4 font-fredoka">
            <h1 className="text-3xl font-semibold mb-4 uppercase text-center">Noticias</h1>
            <DropdownClient />
            <div className="mt-6">{renderContent()}</div>
        </main>
    );
}