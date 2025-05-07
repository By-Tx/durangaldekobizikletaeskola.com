"use client";
import TopImage from "@/app/[locale]/components/mainPage/noticeComponents/topImageImage";
import { useTranslations } from "next-intl";

import P from "@/app/[locale]/components/main/P";
import Section from "@/app/[locale]/components/main/Section";
export default function Page() {
    const t = useTranslations("cronica9-03-25Page");
    return (

        <>
            <TopImage image="https://photos.txuli.com/duranguesa/notices/cronica2b.jpeg" alt={t("altImage")} title={t("title")} subTitle={t("subTitle")} />

            <Section>
            <P>{t("p1")}</P>
            <P>{t("p2")}</P>
            <P>{t("p3")}</P>
            <P>{t("p4")}</P>
            <P>{t("p5")}</P>
            <P>{t("p6")}</P>
            </Section>
        </>
    )
}