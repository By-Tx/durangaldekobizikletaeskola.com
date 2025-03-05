"use client"
import Slideshow from "../../components/mainPage/eskola/slide";
import Section from "../../components/main/Section";
import P from "../../components/main/P";
import Runner from "../../components/mainPage/drom/Runner";
import { runner } from "./images";
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
export default function Page() {
    return (
        <>
            <Slideshow
                images={images}
                title="PUNTAGALEA OCCIDENT-DURANGALDEKO"
            />
            <Section >
                <P>
                    2014an sortutako txirrindularitza eskola da, Abadiño Muntsaratz Txirrindulari Kirol Klubak, Elorrioko Txirrindulari Elkarteak eta Duranguesa Txirrindulari Elkartearen artekoa. 11 urte egin dituen eskola hau Indarrak batzeko asmoarekin sortu zuten.
                    Proiektu sendo bati ekiteko gogoarekin egindako eskola da, non sortzen dute hiru elkarteak izen askoko elkarte sendo eta historikoak diren. Honekin batera, guztiontzako zailak diren garaietan baliabideak minimizatzea zuten ere helburutzat.
                    Hiru elkarteak norabide berean joatea zen beste helburuetako bat eta zuten nahia eskualdean txirrindularitza sustatzea zen, lelo argi batekin, ELKARTASUNAK EGITEN DU INDARRA
                </P>
                <P>
                    Aurten 6 urtetik 18 urte bitarteko 110 gazteek baino gehiagok sortzen dute gure eskola, azken urteetako lan ona bermatuz. Honen guztiaren atzean eskertzeko da udaletxeen laguntza, Durangoko Udala, Abadiño Elizateko Udala, Elorrioko Udala, Iurreta Eleizateko Udala eta proiektura batu den azkena Berrizko Udala.
                </P>
                <P>
                    Urte honetatik aurrera, Durangaldeko Bizikleta Eskolak beste urrats bat emango du emakumezkoen txirrindularitzarekiko konpromisoan, Punta Galea taldearekin bat egin du eta emakumeen kadete eta junior kategorietan sartu da.
                </P>
                <P>
                    Aliantza honen bidez, emakumeen txirrindularitza sustatzeko apustua indartzen dute, emakume korrikalariek txikitatik aurrera egitea erraztuz eta kirol-hazkundean jarraipena bermatuz. Gainera, bi eskolen arteko elkarlanari esker, txirrindulari gazteek ikasten, hobetzen eta lehiaketa gehiagotan parte hartzen jarraituko dute.
                </P>
                <P>
                    Durangaldeko Bizikleta Eskolak eta Punta Galea taldeek akordio honen garrantzia azpimarratu dute, txirrindularitzaren barruan berdintasunean aurrera egiten jarraitzeko eta neskeei aukera berriak eskaintzeko. Batasun hori funtsezko bultzada da gazteen talentua garatzeko eta emakumezkoen txirrindularitzan proiektu sendo bat garatzeko.

                </P>
            </Section>
            <Runner runner={runner} title="JUNIOR" color="bg-customPuntagaleaOrange" color2="bg-customPuntagaleaBlue" />

        </>
    )
}