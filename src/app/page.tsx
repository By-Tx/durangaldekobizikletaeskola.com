"use client";


import Slideshow from "./components/slider";
import TextInfo from "./components/text";
const images = [
  { url: 'https://photos.txuli.com/duranguesa/Duranguesa_3.jpg' },
  { url: 'https://photos.txuli.com/duranguesa/foto3.jpg' },
  { url: 'https://photos.txuli.com/duranguesa/fotomtb.jpg' },
  { url: 'https://photos.txuli.com/duranguesa/foto2.jpg' },
];
export default function Home() {
  return (
    <div >
      <Slideshow
        images={images}
      />
      <TextInfo
        Text="2014an sortutako txirrindularitza eskola da, Abadiño Muntsaratz Txirrindulari Kirol Klubak, Elorrioko Txirrindulari Elkarteak eta Duranguesa Txirrindulari Elkartearen artean sortutakoa. 10 urte egin dituen eskola hau Indarrak batzeko asmoarekin sortu zuten. "
        SecondText="Proiektu sendo bati ekiteko gogoarekin egindako eskola da, non sortzen dute hiru elkarteak izen askoko elkarte sendo eta historikoak diren. Honekin batera, guztiontzako zailak diren garaietan baliabideak minimizatzea zuten ere helburutzat. "
        ThirdText="Hiru elkarteak norabide berean joatea zen beste helburuetako bat eta zuten nahia eskualdean txirrindularitza sustatzea zen, lelo argi batekin, ELKARTASUNAK EGITEN DU INDARRA."
      />
      
    </div>
  );
}
