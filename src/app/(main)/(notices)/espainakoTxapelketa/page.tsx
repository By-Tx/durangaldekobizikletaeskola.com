import TopImage from "@/app/(main)/components/noticeComponents/topImageImage";
import Image from "next/image";
import NoticeContent from "../../components/noticeComponents/noticeContent";

export default function Page() {  
    return (
        <>
        <TopImage image = "https://photos.txuli.com/duranguesa/notices/noticiaseleccion2.jpeg" alt="Noticias" title="Markel, 13º Espainiako Txapelketan" subTitle="Markel garaile 13. Espainiako Txapelketan"/>
        <NoticeContent 
        p1="Joan den urtarrilaren 12an, 13. Espainiako Txapelketa ospatu zen, eta Markel lehiaketa honetako protagonista nagusietako bat izan zen. Euskadiko Selekzioarekin lehiatuz, bere saio ikusgarriak eta erakutsitako trebetasun apartak zaleen eta adituen txalo zaparrada jaso zuten."
        p2="Markelek aurkari sendoak izan zituen aurrean, baina bere estrategiaren eta etengabeko lanaren bidez, emaitza nabarmena lortu zuen. Garaipenak are gehiago sendotzen du bere ibilbidea, eta hurrengo erronkei begira itxaropen handiak piztu ditu."
        p3="Euskadiko Selekzioaren parte-hartzeak txapelketari ukitu berezia eman zion, eta Markelen arrakasta, talde osoaren ahalegina eta maila altua azpimarratzen ditu. Espainiako Txapelketaren 13. edizio honek urteetan zehar hartutako mailaren beste erakusgarri bikain bat izan da."
        
        
        />
        </>
    )
}