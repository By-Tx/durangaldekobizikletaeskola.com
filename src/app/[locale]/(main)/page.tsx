"use client";
import { useTranslations } from "next-intl";
import Slideshow from "../components/main/slider";
import News from "../components/mainPage/noticeComponents/notices";
import SubTitle from "../components/mainPage/Titles/SubTitle";
import Line from "@/app/[locale]/components/main/line0m";

import { useNewsItems } from "./noticeProps";
export default function Home() {
  const newsItems = useNewsItems();
  const t = useTranslations("homePage");
  const images = [
    {
      url: 'https://photos.txuli.com/duranguesa/Duranguesa_3escale.webp',
      title: t("title"),
      subtitle: t("subtitle"),
      higlightSubtitle: undefined,
    },
    {
      url: 'https://photos.txuli.com/duranguesa/foto3.jpg',
      title: t("title2"),
      subtitle: t("subtitle2"),
      higlightSubtitle: undefined
    },
    {
      url: 'https://photos.txuli.com/duranguesa/fotomtb.jpg'
      ,
      title: t("title3"),
      subtitle: t("subtitle3"),
      higlightSubtitle: undefined
    },
    {
      url: 'https://photos.txuli.com/duranguesa/portada1escaled.webp'
      ,
      title: t("title4"),
      subtitle: t("subtitle4"),
      higlightSubtitle: undefined
    },

  ];
  // const images2 = [
  //   {
  //     url: 'https://photos.txuli.com/duranguesa/Duranguesa_3escale.webp',
  //     title: t("title"),
  //     subtitle: t("subtitle"),
  //     height: 600, // altura en píxeles
  //   },
  //   {
  //     url: 'https://photos.txuli.com/duranguesa/foto3.jpg',
  //     title: t("title2"),
  //     subtitle: t("subtitle2"),
  //     height: 600,
  //   },
  //   {
  //     url: 'https://photos.txuli.com/duranguesa/fotomtb.jpg',
  //     title: t("title3"),
  //     subtitle: t("subtitle3"),
  //     height: 650,
  //   },
  //   {
  //     url: 'https://photos.txuli.com/duranguesa/portada1escaled.webp',
  //     title: t("title4"),
  //     subtitle: t("subtitle4"),
  //     height: 650,
  //   },
  // ];

  return (
    <div >

      <Slideshow
        images={images}
      />
      <Line />
      <SubTitle subTitle={t("componentSubtitle")} />
      
        <News items={newsItems} />
{/*       
      <Line />
      {images2.map((section, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div key={idx} className="w-full relative" style={{ height: `${section.height}px` }}>
           
            <div
              style={{ backgroundImage: `url(${section.url})` }}
              className="absolute inset-0 bg-cover bg-center filter brightness-50"
            ></div>

            
            <div
              className={`absolute inset-0 ${isEven
                ? "bg-gradient-to-r from-black to-transparent"
                : "bg-gradient-to-l from-black to-transparent"
                } bg-black opacity-50`}
            ></div>

            
            <div className="absolute z-10 inset-0 flex items-center">
              <div className={`flex w-full p-4 ${isEven ? "justify-start ml-4" : "justify-end mr-4"}`}>
                <div className="w-1/4">
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                  <p className="mt-2 text-xl text-white">{section.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Line /> */}





    </div>
  );
}
