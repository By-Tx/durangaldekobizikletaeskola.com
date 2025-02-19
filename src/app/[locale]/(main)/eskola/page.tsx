"use client";
import Slides from "../components/eskola/slide";
import { useTranslations } from "next-intl";
import SubTitle from "../components/Titles/SubTitle";
import Planning from "../components/eskola/planning";


export default function Page() {
    const t = useTranslations("eskolaPage");
    const images = [
        { url: 'https://photos.txuli.com/duranguesa/esk04.jpeg' },
        {
            url: 'https://photos.txuli.com/duranguesa/eskola2.jpeg'

        },
        { url: 'https://photos.txuli.com/duranguesa/escuela.jpg' },
        { url: 'https://photos.txuli.com/duranguesa/esk3.jpeg' },
        
    ]
    const planning = [
        {
            url: 'https://photos.txuli.com/duranguesa/planning/Escuelas.JPG',
            title: t("elementTitle"),
            text: t("element1Text")
        },
        {
            url: 'https://photos.txuli.com/duranguesa/planning/escuela1.jpg',
            title: t("elementTitle2"),
            text: t("element2Text")
        }
        ,
        {
            url: 'https://photos.txuli.com/duranguesa/planning/escuela2.jpg',
            title: t("elementTitle3"),
            text: t("element3Text")
        }
    ]
    return (
        <main >
            <Slides
                images={images}
                title={t("title")}

            />
            <section className="my-20">
                <p className="text-justify font-fredoka text-3xl px-5 font-light">
                    {t("section1P1")}
                </p>
                <p className="text-justify font-fredoka text-3xl px-5 font-light">{t("section1P2")}</p>

            </section>

            <section className="items-center justify-center">
                <SubTitle subTitle={t("section2SubTitle")} />
                <Planning planning={planning} />
            </section>
            <section >
                <SubTitle subTitle="ORDUTEGIA" />

                <div className=" font-fredoka text-2xl lg:flex mb-20 px-4">
                    <div className="mx-auto
                    ">
                        Astean zehar:
                        <ul className="list-disc list-inside">
                            <li>Ostegunetan 17:30-tan</li>
                            <li>Ordu aldaketa ostean, martitzenak ere</li>
                        </ul>

                    </div>
                    <div className="mx-auto">
                    Asteburuetan:
                        <ul className="list-disc list-inside">
                            <li>Irteerak, exkursioak,
                            federazioko egutegiko probak</li>
                            
                        </ul>
                    </div>
                </div>

            </section>
        </main>
    )
}