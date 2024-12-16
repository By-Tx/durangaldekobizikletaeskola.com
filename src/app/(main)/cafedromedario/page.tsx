"use client";
import TextInfo from "../../components/text";
import Slideshow from "../../components/slider"
import MainEvents from "../../components/mainEvents";
import RunnerImages from "@/app/components/RunnerImges";
import "./style.css"
export default function cafeDromedario() {
    const images = [
        { url: 'https://photos.txuli.com/duranguesa/Duranguesa_3.jpg' },
        { url: 'https://photos.txuli.com/duranguesa/foto3.jpg' },
        { url: 'https://photos.txuli.com/duranguesa/fotomtb.jpg' },
        { url: 'https://photos.txuli.com/duranguesa/foto2.jpg' },
    ];
    return (
        <div className="">
            
            <Slideshow images={images} />
            <h1 className="text-center text-4xl">CAFÉ DROMEDARIO TALDEA</h1>
            <TextInfo
                Text="Eskolatik Kadete mailara egiten dute salto eta gauzak serio jartzen hasten dira. Konpetizioa ikasketekin batera uztartu behar dituzte baita ere. Taldearekin konpromisu gehiago hartu beharra dago."
                SecondText="Eskolatik Kadete mailara egiten dute salto eta gauzak serio jartzen hasten dira. Konpetizioa ikasketekin batera uztartu behar dituzte baita ere. Taldearekin konpromisu gehiago hartu beharra dago."
                ThirdText=""
            />
            
            <h2>Junior</h2>
            <RunnerImages />

            <MainEvents
                label="Junior"
                label2="Kadete"
                label3="Junior"
                title="Errepidea"
                title2="Errepidea"
                title3="Junior"
                div1=" Bizkaiko zein Euskal Herriko txapelketa garrantzitsuenetan parte hartzen dute gure gazteek, horietatik at, Txuma, Bizkaiko, Gipuzkoako eta zein Kantabriako Itzulia ere lehiatzen dute. Euskal Herriko, zein estatuko txirrindulari onenen aurka lehiatzen badute ere, Europako txirrindularien aurka ere lehiatzen dute."
                div2="Kadete mailan, taldeko Unai Moran izan zen 2023. urteko Bizkaiko Kopako Txapelduna eta urte berean Kimetz junior mailan Bizkaiko txapeldun geratu zen erlojupekoan eta Unai Moran azpitxapeldun kadete mailan. Taldeka ere kadeteak Bizkaiko azpitxapeldun geratu ziren."
                div3="2024. urtean, juniorrak Bizkaiko txapeldun geratu ziren taldekako txapelketan eta kadeteak berriz ere azpitxapeldunak. Lockiek Bizkaiko Itzuliko 2. etapa irabaztea lortu zuen"
            />

           
        </div>
    )
}