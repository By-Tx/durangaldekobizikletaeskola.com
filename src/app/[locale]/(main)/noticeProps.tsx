import { useTranslations } from "use-intl";

export interface NewsItem {
  href: string;
  imageSrc: string;
  alt: string;
  date: string;
  title: string;
  category: string;
}

export function useNewsItems(): NewsItem[] {
  const t = useTranslations("noticeComponent");

  const newsItems: NewsItem[] = [
    {
      href: "/cronica9-03-25",
      imageSrc: "https://photos.txuli.com/duranguesa/notices/cronica2.jpeg",
      alt: "Imagen de Selección",
      date: "9-03-2025",
      title: t("noticeTitle6"),
      category: t("category4"),
    },
    {
      href: "/puntagaleaTeam",
      imageSrc: "https://photos.txuli.com/duranguesa/notices/portadaneskak.JPG",
      alt: t("altImage3"),
      date: "6-03-2025",
      title: t("noticeTitle5"),
      category: t("category4"),
    },
    {
      href: "/tenporadaAsiera",
      imageSrc: "https://photos.txuli.com/duranguesa/notices/cronica1.jpeg",
      alt: t("altImage3"),
      date: "1-03-2025",
      title: t("noticeTitle4"),
      category: t("category4"),
    },
  
    // {
    //   href: "/espainakoTxapelketa",
    //   imageSrc: "https://photos.txuli.com/duranguesa/notices/noticiasSeleccion.png",
    //   alt: "Imagen de Selección",
    //   date: "12-01-2025",
    //   title: t("noticeTitle"),
    //   category: t("category"),
    // },
    // {
    //   href: "/irrisarriNotice",
    //   imageSrc: "https://photos.txuli.com/duranguesa/notices/irrisarri.JPG",
    //   alt: "Imagen Irrisarri",
    //   date: t("date2"),
    //   title: t("noticeTitle2"),
    //   category: t("category2"),
    // },
    // {
    //   href: "/bttTxapelduna",
    //   imageSrc: "https://photos.txuli.com/duranguesa/notices/ander.JPG",
    //   alt: "Imagen Ander",
    //   date: "26-05-2024",
    //   title: t("noticeTitle3"),
    //   category: t("category3"),
    // },
  ];

  return newsItems;
}
