"use client";


import Slideshow from "../components/main/slider";
import News from "../components/notices";
import SubTitle from "../components/Titles/SubTitle";
const images = [
  { url: 'https://photos.txuli.com/duranguesa/Duranguesa_3.jpg' ,
    title: '2014AN SORTUTAKO TXIRRINDULARITZA ESKOLA',
    subtitle: '2014an sortu zuten eskola, abadiño, Elorrio eta Dukrangoko elkarteen elkarlanaren emaitza',
    higlightSubtitle: undefined
  },
  { url: 'https://photos.txuli.com/duranguesa/foto3.jpg',
    title: 'PROIEKTU SENDO BAT SORTZEKO GOGOA',
    subtitle: 'Eskola hiru elkarte sendoen basoan sortu zen, baliabideak optimizatuz eta etorkizun sendoa eraikitzeko',
    higlightSubtitle: undefined
  },
  { url: 'https://photos.txuli.com/duranguesa/fotomtb.jpg' 
    ,
    title: 'HELBURUA',
    subtitle: 'Txirrindularen kirolean gazteei trebatu, hezitze prozesuaz disfrutatuz eta txirrindularitzaren modalitate ezberdinetan lehiatzeko prestatuz',
    higlightSubtitle: undefined
  },
  { url: 'https://photos.txuli.com/duranguesa/fotomtb.jpg' 
    ,
    title: 'BALOREAK',
    subtitle: 'Talde lana, esfortzua, konpromesua eta adiskiderasuna oinarri hartuta, elkarrekin helburuak lortzen ditugu eta bidean indarra hartzen dugu.',
    higlightSubtitle: undefined
  },
  
];
export default function Home() {
  return (
    <div >
      <Slideshow
        images={images}
      />
      <SubTitle
        subTitle="ALBISTEAK"/>
      <News />
      
      
      
    </div>
  );
}
