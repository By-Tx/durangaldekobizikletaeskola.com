"use client";
import TopImage from "@/app/[locale]/components/mainPage/noticeComponents/topImageImage";
import { useTranslations } from "next-intl";
import SubTitle from "@/app/[locale]/components/mainPage/Titles/SubTitle";
import P from "@/app/[locale]/components/main/P";
import Section from "@/app/[locale]/components/main/Section";
export default function Page() {
    const t = useTranslations("2025StartPage");
    return (

        <>
            <TopImage image="https://photos.txuli.com/duranguesa/notices/noticia20252.jpeg" alt={t("altImage")} title={t("title")} subTitle={t("subTitle")} />

            <Section>
            <P>{t("p1")}</P>
            <P>{t("p2")}</P>
            <P>{t("p3")}</P>
            <P>{t("p4")}</P>
            </Section>
        <SubTitle subTitle={t("subTitle2")} />
      <section>
      <div className="mb-10 text-center">
       <a href="https://www.gtxe.eus/datos/carreras/202503031156540.LIII%20PRUEBA%20USURBE%20-%20TO-%20Resultados%20-%2039,7%20km.pdf?s_CAT=CAD&s_ANIO=2025" className="font-fredoka text-blue-500 underline font-semibold text-2xl" target="_blank" rel="noopener noreferrer">Prueba usurbe</a>
       </div>
        <div className="mb-10 text-center">
        <a href="https://www.gtxe.eus/datos/carreras/202503021612440.XLVII.%20UDABERRI%20SARIA,%20clasificacion.pdf?s_CAT=JUN&s_ANIO=2025" className="font-fredoka text-blue-500 underline font-semibold text-2xl" target="_blank" rel="noopener noreferrer">Udaberi saria</a>
        </div>
        <div className="mb-10 text-center">
        <a href="https://yosoyciclista.s3.amazonaws.com/documentos/smartweb/noticia/57735/documentos/doc_67c4d2949334d7_65454139_imagen_CLASIFICACION-CADETE-MASC.pdf" className="font-fredoka text-blue-500 underline font-semibold text-2xl" target="_blank" rel="noopener noreferrer">Copa españa BTT XCO CADETE</a>
        </div>
        <div className="mb-10 text-center">
        <a href="https://yosoyciclista.s3.amazonaws.com/documentos/smartweb/noticia/57735/documentos/doc_67c4d293af1213_80457163_imagen_CLASIFICACION-JUNIOR-MASC.pdf" className="font-fredoka text-blue-500 underline font-semibold text-2xl" target="_blank" rel="noopener noreferrer">Copa españa BTT XCO JUNIOR</a>
        </div>
      </section>
        </>
    )
}