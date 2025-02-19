"use client"
import { useTranslations } from "next-intl";
import "./style.css"
import SubTitle from "@/app/[locale]/(main)/components/Titles/SubTitle";

import Slideshow from "../components/eskola/slide";
import Runner from "../components/drom/Runner";
import Technicians from "../components/drom/Technicians";


export default function CafeDromedario() {
    const t = useTranslations("dromPage");
    const images = [
        {
            url: 'https://photos.txuli.com/duranguesa/Duranguesa_3.jpg',

        },
        {
            url: 'https://photos.txuli.com/duranguesa/foto3.jpg',

        },
        {
            url: 'https://photos.txuli.com/duranguesa/fotomtb.jpg',
        },
        {
            url: 'https://photos.txuli.com/duranguesa/foto2.jpg',

        },
    ];
    const runner = [
        {
            image: 'https://photos.txuli.com/duranguesa/riders/junior/road/AlainArantzamendi.jpg',
            name: 'Alain Arantzamendi',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/junior/road/IoritzAldazabal.jpg',
            name: 'Ioritz Aldazabal',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/junior/road/JonZuburruti.jpg',
            name: 'Jon Zuburruti',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/junior/road/OinatzMeilan.jpg',
            name: 'Oinatz Meilan',
            born: '10/11/2005',
            city: 'Bilbao',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/junior/road/UnaiBorrajo.jpg',
            name: 'Unai Borrajo',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        
    ];
    const runnercadete = [
        {
            image: 'https://photos.txuli.com/duranguesa/riders/cadete/road/XubanGorroño.jpg',
            name: 'Xuban Gorroño',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/cadete/road/RaúlRodríguez.jpg',
            name: 'Raúl Rodríguez',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/cadete/road/MiguelPérez.jpg',
            name: 'Miguel Pérez',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/cadete/road/MartinAlzaga.jpg',
            name: ' Martin Alzaga',
            born: '10/11/2005',
            city: 'Bilbao',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/cadete/road/MarkoRamos.jpg',
            name: 'Marko Ramos',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/cadete/road/ManexKareaga.jpg',
            name: 'Manex Kareaga',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/cadete/road/JavierPadilla.jpg',
            name: ' Javier Padilla',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/cadete/road/IzeiAndueza.jpg',
            name: 'Izei Andueza',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/cadete/road/HodeiMendibe.JPG',
            name: 'Hodei Mendibe',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/cadete/road/AnderCossio.jpg',
            name: 'Ander Cossio',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/cadete/road/AitzolMúgica.jpg',
            name: 'Aitzol Múgica',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/cadete/road/AgerSenero.jpg',
            name: 'Ager Senero',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        
    ];

    const runnerMtbJunior = [
        {
            image: 'https://photos.txuli.com/duranguesa/riders/junior/mtb/AnderMendizabal.jpg',
            name: 'Ander Mendizabal',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/junior/mtb/HegoiArrinda.jpg',
            name: 'Hegoi Arrinda',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/junior/mtb/IparArrinda.jpg',
            name: 'Ipar Arrinda',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },

    ]
    const runnerMtbKadete = [
        {
            image: 'https://photos.txuli.com/duranguesa/riders/cadete/mtb/AimarAguirrezabalaga.jpg',
            name: 'Aimar Aguirrezabala',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/riders/cadete/mtb/AndoniVillate.jpg',
            name: 'Andoni Villate',
            born: '10/11/2005',
            goals: 'Bizkaiko txapelketa irabazi'
        },
    ]
    const technician = [
        {
            image: 'https://photos.txuli.com/duranguesa/staff/AndoniGaraigorta.jpg',
            name: 'Andoni Garaigorta',
            style: ' xl:col-start-2',

        },
        {
            image: 'https://photos.txuli.com/duranguesa/staff/AngelLitoBilbao.jpg',
            name: 'Lito',
            
        },
        {
            image: 'https://photos.txuli.com/duranguesa/staff/IbonAchotegui.jpg',
            name: 'Ibon Achotegui',
            

        },
        {
            image: 'https://photos.txuli.com/duranguesa/staff/XabierArizmendiarrieta.jpg',
            name: 'Xabier Arizmendiarrieta',
            

        },
    ]
    return (
        <div className="">
            
            <Slideshow
                images={images}
                title={t("title")}
            />
            
            <section className="mt-6">
                <p className="text-justify font-fredoka text-2xl px-8 font-light mb-3">
                {t("sectionRoadP1")}
                </p>
                <p className="text-justify font-fredoka text-2xl px-8 font-light mb-3">
                {t("sectionRoadP2")}
                </p>
                <p className="text-justify font-fredoka text-2xl px-8 font-light mb-3">
                {t("sectionRoadP3")}
                </p>
            </section>
            <SubTitle subTitle={t("subtitleRunnersRoad")} />


            <Runner runner={runner} title={t("componentRunner1Title")} />
            <Runner runner={runnercadete} title={t("componentRunner2Title")} />
            <Technicians technicians={technician} />



            <section >
                <SubTitle subTitle={t("sectionMtbTitle")} />
                <p className="text-justify font-fredoka text-2xl px-8 font-light mb-3">
                {t("sectionMtbP1")}
                </p>
                <p className="text-justify font-fredoka text-2xl px-8 font-light mt-3">
                {t("sectionMtbP2")}
                </p>
                <Runner runner={runnerMtbJunior} title={t("componentRunner1Title")} />
                <Runner runner={runnerMtbKadete} title={t("componentRunner2Title")} />
                

            </section>

            <section >
                <SubTitle subTitle="PISTA" />
                <p className="text-justify font-fredoka text-2xl px-8 font-light mb-3">
                    {t("sectionPistaP1")}
                </p>

            </section>
            <section >
                <SubTitle subTitle="CX" />
                <p className="text-justify font-fredoka text-2xl px-8 font-light mb-3">
                    {t("sectionCXP1")}
                </p>
            </section>
            


        </div>
    )
}