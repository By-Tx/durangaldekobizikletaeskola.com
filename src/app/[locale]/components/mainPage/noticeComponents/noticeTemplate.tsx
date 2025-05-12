"use client";
import TopImage from "@/app/[locale]/components/mainPage/noticeComponents/topImageImage";
import { useTranslations } from "next-intl";

import P from "@/app/[locale]/components/main/P";
import Section from "@/app/[locale]/components/main/Section";
import SubTitle from "../Titles/SubTitle";
export interface NewsProps {
    translation: string;
    idImage: string;
    urls?: { url: string; txt: string }[];
}
interface PageProps {
    NewsProps: NewsProps;
}

export default function NoticeTemplate({ NewsProps }: PageProps) {
    const t = useTranslations(NewsProps.translation);

    if (!NewsProps.urls) {
        return <>
            <TopImage image={NewsProps.idImage} alt={t("altImage")} title={t("title")} subTitle={t("subTitle")} />

            <Section>
                <P>{t("p1")}</P>
                <P>{t("p2")}</P>
                <P>{t("p3")}</P>
                {t.has("p4") && <P>{t("p4")}</P>}

                {t.has("p5") && <P>{t("p5")}</P>}

                {t.has("p6") && <P>{t("p6")}</P>}

            </Section></>
    } else {
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
                <Section>
                    <SubTitle subTitle={t("urls")} />
                    {NewsProps.urls?.map((item, index) => (
                        <P key={index}>
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-fredoka text-blue-500 underline font-semibold text-2xl text-center block mb-6"
                            >
                                {item.txt}
                            </a>
                        </P>
                    ))}


                </Section>
            </>
        );
    }




}


