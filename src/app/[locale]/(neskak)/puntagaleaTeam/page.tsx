
import TopImage from "@/app/[locale]/components/mainPage/noticeComponents/topImageImage";
import NoticeContent from "../../components/mainPage/noticeComponents/noticeContent";
import { useTranslations } from "next-intl";
export default function Page() {  
const t = useTranslations("bttTxapeldunaPage");
    return (
        <>
         <TopImage image = "https://photos.txuli.com/duranguesa/notices/ander2.JPG" alt={t("altImage")} title="Nesken Talde Berria" subTitle="Durangaldeko Bizikleta Eskolak Punta Galeako emakumezkoen taldearekin bat egin du emakumeen kadete eta junior kategoriak bultzatzeko" colors="bg-customPuntagaleaDarkOrange"/>
        <NoticeContent 
        p1="2025. urtetik aurrera, Durangaldeko Bizikleta Eskolak beste urrats bat emango du emakumezkoen txirrindularitzarekiko konpromisoan, Punta Galea taldearekin bat egin du eta emakumeen kadete eta junior kategorietan sartu da. "
        p2="Aliantza honen bidez, emakumeen txirrindularitza sustatzeko apustua indartzen dute, emakume korrikalariek txikitatik aurrera egitea erraztuz eta kirol-hazkundean jarraipena bermatuz. Gainera, bi eskolen arteko elkarlanari esker, txirrindulari gazteek ikasten, hobetzen eta lehiaketa gehiagotan parte hartzen jarraituko dute."
        p3="Durangaldeko Bizikleta Eskolak eta Punta Galea taldeek akordio honen garrantzia azpimarratu dute, txirrindularitzaren barruan berdintasunean aurrera egiten jarraitzeko eta neskeei aukera berriak eskaintzeko. Batasun hori funtsezko bultzada da gazteen talentua garatzeko eta emakumezkoen txirrindularitzan proiektu sendo bat garatzeko."
        
        />
        </>
    )
}