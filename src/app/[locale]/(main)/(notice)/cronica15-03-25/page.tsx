"use client";
import TopImage from "@/app/[locale]/components/mainPage/noticeComponents/topImageImage";
import { useTranslations } from "next-intl";
import SubTitle from "@/app/[locale]/components/mainPage/Titles/SubTitle";
import P from "@/app/[locale]/components/main/P";
import Section from "@/app/[locale]/components/main/Section";
export default function Page() {
    const t = useTranslations("cronica15-03-25Page");
    return (

        <>
            <TopImage image="https://photos.txuli.com/duranguesa/notices/cronica3.jpeg" alt={t("altImage")} title={t("title")} subTitle={t("subTitle")} />

            <Section>
            <P>{t("p1")}</P>
            <P>{t("p2")}</P>
            <P>{t("p3")}</P>
            <P>{t("p4")}</P>
            
            </Section>
            <SubTitle subTitle={t("subTitle2")} />
                  <section>
                  <div className="mb-10 text-center">
                   <a href="https://www.gtxe.eus/datos/carreras/202503151204290.XXXIV.%20ZARAUZTARRA%20SARIA%20CLASI.pdf?s_CAT=CAD&s_ANIO=2025" className="font-fredoka text-blue-500 underline font-semibold text-2xl" target="_blank" rel="noopener noreferrer">XXXIV. ZARAUZTARRA SARIA</a>
                   </div>
                    <div className="mb-10 text-center">
                    <a href="https://faciclismo.com/wp-content/uploads/2025/02/ClasificacionesAiarakoBira2025Etapa1.pdf" className="font-fredoka text-blue-500 underline font-semibold text-2xl" target="_blank" rel="noopener noreferrer">Aiarako bira Etapa 1 </a>
                    </div>
                    <div className="mb-10 text-center">
                    <a href="https://faciclismo.com/wp-content/uploads/2025/02/ClasificacionesAiarakoBira2025Etapa2.pdf" className="font-fredoka text-blue-500 underline font-semibold text-2xl" target="_blank" rel="noopener noreferrer">Aiarako bira Etapa 2</a>
                    </div>
                    <div className="mb-10 text-center">
                    <a href="https://drive.google.com/file/d/1LVxie6GK94R4FBiKbQqRbOQkEdu0r1MT/view" className="font-fredoka text-blue-500 underline font-semibold text-2xl" target="_blank" rel="noopener noreferrer">Green series Erandio</a>
                    
                    </div>
                    <div className="mb-10 text-center">
                    <a href="https://www.febici.eus/wp-content/uploads/2025/03/20250315-Clasificaciones-Akarlanda.pdf" className="font-fredoka text-blue-500 underline font-semibold text-2xl" target="_blank" rel="noopener noreferrer">Mini Green Series Erandio</a>
                    
                    </div>
                  </section>
        </>

    )
}