import TopImage from "@/app/[locale]/components/mainPage/noticeComponents/topImageImage";
import { useTranslations } from "next-intl";

import P from "@/app/[locale]/components/main/P";
import Section from "@/app/[locale]/components/main/Section";
export default function Page() {
    const t = useTranslations("presentacion");
    return (

        <>
            <TopImage image="https://photos.txuli.com/duranguesa/notices/DuranguesaPresentacion.jpg" alt={t("altImage")} title={t("title")} subTitle={t("subTitle")} />

            <Section>
            <P>{t("p1")}</P>
            <P>{t("p2")}</P>
            <P>{t("p3")}</P>
            
            <P className="text-blue-500">#drompack💪🏻✊🏻💨
            </P>
            
            </Section>
            
        </>

    )
}