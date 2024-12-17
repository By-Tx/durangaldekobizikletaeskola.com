"use client";
import Slideshow from "../../components/main/slider"
import TextInfo from "../../components/text";

export default function Page() {
    const images = [
        { url: 'https://photos.txuli.com/duranguesa/Duranguesa_3.jpg' },
        { url: 'https://photos.txuli.com/duranguesa/foto3.jpg' },
        { url: 'https://photos.txuli.com/duranguesa/fotomtb.jpg' },
        { url: 'https://photos.txuli.com/duranguesa/foto2.jpg' },
    ]
    return (
        <div >
            <Slideshow
                images={images}
            />
            <h1>Durangaldeko Bizikleta Eskola</h1>
            <TextInfo
                Text="Gure programaren helbururik garrantzitsuena kirola eta dibertsioaren bidez pertsonak trebatzea da, jarrera egokiak, baloreak eta gaitasunak bizikletaren bidez irakatsiz.
                        Infantil mailara salto egiten dutenean, beste helburu batzuk ere badaude, kadete mailarako prestatzea eta teknifikatzea da horietako bat."
                SecondText={undefined}
                ThirdText={undefined}
            />

        </div>
    )
}