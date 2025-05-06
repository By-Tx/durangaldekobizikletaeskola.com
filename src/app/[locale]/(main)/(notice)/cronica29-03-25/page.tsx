"use client";
import TopImage from "@/app/[locale]/components/mainPage/noticeComponents/topImageImage";
import { useTranslations } from "next-intl";

import P from "@/app/[locale]/components/main/P";
import Section from "@/app/[locale]/components/main/Section";
export default function Page() {
    const t = useTranslations("cronica29-03-25Page");
    return (

        <>
            <TopImage image="https://photos.txuli.com/duranguesa/notices/cronica5.jpeg" alt={t("altImage")} title={t("title")} subTitle={t("subTitle")} />

            <Section>
            <P>{t("p1")}</P>
            <P>{t("p2")}</P>
            <P>{t("p3")}</P>
            <P>{t("p4")}</P>
            
            </Section>
            {/* <SubTitle subTitle={t("subTitle2")} />
                  <section>
                  <div className="mb-10 text-center">
                   <a href="https://www.gtxe.eus/datos/carreras/202503221158130.XXXIII%20AMAIKAK%20BAT%20TXIRRINDULARIEN%20PROBA,%20clasificacion.pdf?s_CAT=CAD&s_ANIO=2025" className="font-fredoka text-blue-500 underline font-semibold text-2xl" target="_blank" rel="noopener noreferrer">XLIX AMAIKAK BAT JUNIOR TXIRRINDULARIEN PROBA</a>
                   </div>
                    <div className="mb-10 text-center">
                    <a href="https://www.gtxe.eus/datos/carreras/202503241742040.LI%20UZARRAGAKO%20IGOERA%20clasificacion.pdf?s_CAT=JUN&s_ANIO=2025" className="font-fredoka text-blue-500 underline font-semibold text-2xl" target="_blank" rel="noopener noreferrer">LI. UZARRAGAKO IGOERA</a>
                    </div>
                    <div className="mb-10 text-center">
                    <a href="https://faciclismo.com/wp-content/uploads/2025/02/ClasificacionesAiarakoBira2025Etapa3.pdf" className="font-fredoka text-blue-500 underline font-semibold text-2xl" target="_blank" rel="noopener noreferrer">Aiarako bira Etapa 3</a>
                    </div>
                    <div className="mb-10 text-center">
                    <a href="https://faciclismo.com/wp-content/uploads/2025/02/ClasificacionesAiarakoBira2025Etapa4.pdf" className="font-fredoka text-blue-500 underline font-semibold text-2xl" target="_blank" rel="noopener noreferrer">Aiarako bira Etapa 4</a>
                    
                    </div>
                    <div className="mb-10 text-center">
                    <a href="https://supercupmtb.com/wp-content/uploads/2025/03/Classificacion-SC-Sabinanigo-25-Carrera-1.pdf" className="font-fredoka text-blue-500 underline font-semibold text-2xl" target="_blank" rel="noopener noreferrer">SABIÑÁNIGO
                    SHIMANO SUPER CUP MASSI 1 </a>
                    
                    </div>
                    <div className="mb-10 text-center">
                    <a href="https://supercupmtb.com/wp-content/uploads/2025/03/Classificacion-SC-Sabinanigo-25-Carrera-2.pdf" className="font-fredoka text-blue-500 underline font-semibold text-2xl" target="_blank" rel="noopener noreferrer">SABIÑÁNIGO
                    SHIMANO SUPER CUP MASSI 1 </a>
                    
                    </div>
                  </section> */}
        </>

    )
}