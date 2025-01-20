"use client";
import Slides from "../components/eskola/slide";

import SubTitle from "../components/Titles/SubTitle";
import Planning from "../components/eskola/planning";


export default function Page() {
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
            title: 'NORENTZAT?',
            text: 'Eskoletan 6 urtetik 14 urterako umeak parte hartzen dabe. Bizikletarekin ondo pasatzea, bidean dauzen putxu guztietan sartzea gustoko dutenen umeentzat.'
        },
        {
            url: 'https://photos.txuli.com/duranguesa/planning/escuela1.jpg',
            title: 'HELBURUAK',
            text: 'Helburuak Eskolan umeak hezitzen ditugu, grue baloreak oinarritzat hartuz, eta bizikletaren erabileraren eta teknikaren formakuntza eskeiniz.'
        }
        ,
        {
            url: 'https://photos.txuli.com/duranguesa/planning/escuela2.jpg',
            title: 'PLANGINTZA',
            text: 'Astero 2 entrenamendu egiten ditugu( uda partean 3). Bestalde exkursioak, irteera bereziak, gymkanak, bizkaiko federakuntzako egutegian parte hartu eta bestelakoak egiten ditugu.'
        }
    ]
    return (
        <main >
            <Slides
                images={images}
                title="ESKOLA"

            />
            <section className="my-20">
                <p className="text-justify font-fredoka text-3xl px-5 font-light">
                    Gure programaren helbururik garrantzitsuena kirola eta dibertsioaren bidez pertsonak trebatzea da, jarrera egokiak, baloreak eta gaitasunak bizikletaren bidez irakatsiz.
                </p>
                <p className="text-justify font-fredoka text-3xl px-5 font-light">Infantil mailara salto egiten dutenean, beste helburu batzuk ere badaude, kadete mailarako prestatzea eta teknifikatzea da horietako bat.</p>

            </section>

            <section className="items-center justify-center">
                <SubTitle subTitle="PLANINNGA" />
                <Planning planning={planning} />
            </section>
            <section >
                <SubTitle subTitle="ORDUTEGIA" />

                <div className=" font-fredoka text-2xl lg:flex mb-20">
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