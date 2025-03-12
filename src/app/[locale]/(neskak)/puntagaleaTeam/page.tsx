
import TopImage from "@/app/[locale]/components/mainPage/noticeComponents/topImageImage";
import NoticeContent from "../../components/mainPage/noticeComponents/noticeContent";
import { useTranslations } from "next-intl";
export default function Page() {  
const t = useTranslations("PuntaGaleaPage");
    return (
        <>
         <TopImage image = "https://photos.txuli.com/duranguesa/notices/noticiaNeskak.JPG" alt={t("altImage")} title={t("title")} subTitle={t("subtitle")} colors="bg-customPuntagaleaDarkOrange"/>
        <NoticeContent 



        p1={t("p1")}
        p2={t("p2")}
        p3={t("p3")}
        p4={t("p4")}
        p5={t("p5")}
        
        />
        </>
    )
}