"use client"
import { useTranslations } from "next-intl";
import "./style.css"
import Line from "@/app/[locale]/components/main/line0m";
import Slideshow from "../../components/mainPage/eskola/slide";
import P from "@/app/[locale]/components/main/P";
import Section from "@/app/[locale]/components/main/Section";




export default function CafeDromedario() {
    const t = useTranslations("dromPage");

    const slideshowImages = [
        {
            url: 'https://photos.txuli.com/duranguesa/media/foto11.webp',
    
        },
        {
            url: 'https://photos.txuli.com/duranguesa/media/foto2.webp',

        },
        {
            url: 'https://photos.txuli.com/duranguesa/media/foto8.webp',
    
        },
        {
            url: 'https://photos.txuli.com/duranguesa/media/foto1.webp',

        },
        {
            url: 'https://photos.txuli.com/duranguesa/media/foto13.webp',
    
        },

    ];

    const modalidadesImages = [
        {
          url: 'https://photos.txuli.com/duranguesa/media/foto1_alt.webp',
          title: t("sectionMtbTitle"),
          subtitle: t("sectionMtbP1"),
          subtitle2: t("sectionMtbP2"),
          height: 350, 
        },
        {
          url: 'https://photos.txuli.com/duranguesa/media/foto9_alt.webp',
          title: "CX",
          subtitle: t("sectionCXP1"),
          height: 350,
        },
        { 
          url: 'https://photos.txuli.com/duranguesa/media/foto10_alt.webp',
          title: "PISTA",
          subtitle: t("sectionPistaP1"),
          height: 350,
        },
      ];

    return (
        
        <div className="">


            {/*El carrusel de imagenes de arriba*/}
            <Slideshow
                images={slideshowImages}
                title={t("title")}
            />
            <Line />

            {/*El About us de Cafedromedario*/}
            <Section >
                <P>
                    {t("sectionRoadP1")}
                </P>
                <P>
                    {t("sectionRoadP2")}
                </P>
                <P>
                    {t("sectionRoadP3")}
                </P>
            </Section>

            {modalidadesImages.map((section, idx) => {
                const isEven = idx % 2 === 0;

                return (
                <div key={idx} className="relative w-full mb-7" style={{ height: `${section.height}px` }}> 
                    <div >

                    </div>
                    {/* imagen de fondo oscurecida */}
                    <div 
                        style={{ 
                            backgroundImage: `url(${section.url})`, 
                            borderRadius: isEven ? "100px 0px 0px 100px" : "0 100px 100px 0" 
                        }} 
                        className={`absolute inset-0 bg-cover bg-center filter brightness-50 flex
                            ${isEven 
                                ? " ml-7 rounded-l-lg" 
                                : " mr-7 rounded-r-lg"
                            }
                        `}>
                    </div>

                    {/* esta con styles porque no lo puedo poner en el classname */}
                    <div 
                        className="absolute inset-0 z-5" 
                        style={{
                            background: isEven 
                                ? "linear-gradient(to left, black 10%, transparent 70%)" 
                                : "linear-gradient(to right, black 10%, transparent 70%)",
                        }}
                    ></div>

                    <div className="absolute z-10 inset-0 flex items-center font-fredoka">
                    <div className={`flex w-full p-10 ${isEven ? "justify-end ml-4 text-right" : "justify-start mr-4 text-left"}`}>
                        <div className="w-full lg:w-2/4">
                        <h2 className="text-4xl font-bold text-white">{section.title}</h2>
                        <p className="mt-2 text-xl text-white">{section.subtitle}</p>
                        {section.subtitle2 && (<p className="mt-2 text-xl text-white">{section.subtitle2}</p>)}  {/*solo aparece si hay subtitle2*/}
                        </div>
                    </div>
                    </div>

                </div>

                        
            );
            
            })}


        
        </div>
        
    )
}