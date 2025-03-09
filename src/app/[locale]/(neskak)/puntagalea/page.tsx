"use client"
import Slideshow from "../../components/mainPage/eskola/slide";
import Section from "../../components/main/Section";
import P from "../../components/main/P";
import Runner from "../../components/mainPage/drom/Runner";
import { runner } from "./images";
import { images } from "./images";
import Line from "../../components/main/line0m";
import { useTranslations } from "next-intl";
export default function Page() {
    const t = useTranslations("PuntaGaleaMainPage");
    return (
        <>
            <Slideshow
                images={images}
                title="PUNTAGALEA OCCIDENT-DURANGALDEKO"
            />
            <Line color="bg-customPuntagaleaDarkOrange"/>
            <Section >
            <Runner runner={runner} title={t("titleRunners")} color="bg-customPuntagaleaOrange" color2="bg-customPuntagaleaBlue" />
            </Section >
            <Section >
                <P>
                {t("p1")}
                </P>
                <P>
                {t("p2")}
                </P>
                <P>
                {t("p3")}
                </P>
                <P>
                {t("p4")}
                </P>
                <P>
                {t("p5")}

                </P>
            </Section>
            

        </>
    )
}