"use client"
import { useTranslations } from "next-intl";
import "./style.css"
import SubTitle from "@/app/[locale]/components/mainPage/Titles/SubTitle";
import  Line  from "@/app/[locale]/components/main/line0m";

import Slideshow from "../../components/mainPage/eskola/slide";
import Runner from "../../components/mainPage/drom/Runner";
import Technicians from "../../components/mainPage/drom/Technicians";
import P from "@/app/[locale]/components/main/P";
import Section from "@/app/[locale]/components/main/Section";
import { images, runner, runnercadete, runnerMtbJunior, technician, runnerMtbKadete } from "../../(neskak)/puntagalea/images";

export default function CafeDromedario() {
    const t = useTranslations("dromPage");

    return (
        <div className="">

            <Slideshow
                images={images}
                title={t("title")}
            />
            <Line />

            <Section >
                <P>
                    {t("sectionRoadP1")}
                </P>
                <P>
                    {t("sectionRoadP2")}
                </P>
                <P>
                    {t("sectionRoadP3")}
                </P>
            </Section>
            <SubTitle subTitle={t("subtitleRunnersRoad")} />


            <Runner runner={runner} title={t("componentRunner1Title")} />
            <Runner runner={runnercadete} title={t("componentRunner2Title")} />
            <Technicians technicians={technician} />



            <Section >
                <SubTitle subTitle={t("sectionMtbTitle")} />
                <P>
                    {t("sectionMtbP1")}
                </P>
                <P>
                    {t("sectionMtbP2")}
                </P>
                <Runner runner={runnerMtbJunior} title={t("componentRunner1Title")} />
                <Runner runner={runnerMtbKadete} title={t("componentRunner2Title")} />


            </Section>

            <Section>
                <SubTitle subTitle="PISTA" />
                <P>
                    {t("sectionPistaP1")}
                </P>

            </Section>
            <Section >
                <SubTitle subTitle="CX" />
                <P>
                    {t("sectionCXP1")}
                </P>
            </Section>



        </div>
    )
}