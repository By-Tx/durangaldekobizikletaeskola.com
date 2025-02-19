"use client";
import { useTranslations } from "next-intl";
import Slideshow from "./components/main/slider";
import News from "./components/noticeComponents/notices";
import SubTitle from "./components/Titles/SubTitle";

export default function Home() {
  const t = useTranslations("homePage");
const images = [
  { url: 'https://photos.txuli.com/duranguesa/Duranguesa_3.jpg' ,
    title: t("title"),
    subtitle: t("subtitle"),
    higlightSubtitle: undefined
  },
  { url: 'https://photos.txuli.com/duranguesa/foto3.jpg',
    title: t("title2"),
    subtitle: t("subtitle2"),
    higlightSubtitle: undefined
  },
  { url: 'https://photos.txuli.com/duranguesa/fotomtb.jpg' 
    ,
    title: t("title3"),
    subtitle: t("subtitle3"),
    higlightSubtitle: undefined
  },
  { url: 'https://photos.txuli.com/duranguesa/fotomtb.jpg' 
    ,
    title: t("title4"),
    subtitle: t("subtitle4"),
    higlightSubtitle: undefined
  },
  
];
  return (
    <div >
      
      <Slideshow
        images={images}
      />
      <SubTitle subTitle={t("componentSubtitle")}/>
      <News />
      
      
      
    </div>
  );
}
