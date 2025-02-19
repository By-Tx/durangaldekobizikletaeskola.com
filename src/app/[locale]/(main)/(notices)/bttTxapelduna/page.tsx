
import TopImage from "@/app/[locale]/(main)/components/noticeComponents/topImageImage";
import NoticeContent from "../../components/noticeComponents/noticeContent";
import { useTranslations } from "next-intl";
export default function Page() {  
const t = useTranslations("bttTxapeldunaPage");
    return (
        <>
         <TopImage image = "https://photos.txuli.com/duranguesa/notices/ander2.JPG" alt={t("altImage")} title={t("title")} subTitle={t("subTitle")}/>
        <NoticeContent 
        p1={t("p1")}
        p2={t("p2")}
        p3={t("p3")}
        
        />
        </>
    )
}