import TopImage from "@/app/[locale]/(main)/components/noticeComponents/topImageImage";
import { useTranslations } from "next-intl";
import NoticeContent from "../../components/noticeComponents/noticeContent";

export default function Page() {  
    const t = useTranslations("espainakoTxapeldunaPage");
    return (
        
        <>
        <TopImage image = "https://photos.txuli.com/duranguesa/notices/noticiaseleccion2.jpeg" alt={t("altImage")} title={t("title")} subTitle={t("subTitle")}/>
        <NoticeContent 
        p1={t("p1")}
        p2={t("p2")}
        p3={t("p3")}
        
        
        />
        </>
    )
}