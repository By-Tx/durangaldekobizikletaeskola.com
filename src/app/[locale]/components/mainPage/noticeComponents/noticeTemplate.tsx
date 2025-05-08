"use client";
import TopImage from "@/app/[locale]/components/mainPage/noticeComponents/topImageImage";
import { useTranslations } from "next-intl";

import P from "@/app/[locale]/components/main/P";
import Section from "@/app/[locale]/components/main/Section";
export interface NewsProps {
    translation: string;
    idImage: string;


}
interface PageProps {
    NewsProps: NewsProps;
}

export default function NoticeTemplate({ NewsProps }: PageProps) {


    const t = useTranslations(NewsProps.translation);

    return (
        <>
            <TopImage image={NewsProps.idImage} alt={t("altImage")} title={t("title")} subTitle={t("subTitle")} />

            <Section>
                <P>{t("p1")}</P>
                <P>{t("p2")}</P>
                <P>{t("p3")}</P>
                {t.has("p4") && <P>{t("p4")}</P>}

                {t.has("p5") && <P>{t("p5")}</P>}

                {t.has("p6") && <P>{t("p6")}</P>}

            </Section>
        </>
    );
}


