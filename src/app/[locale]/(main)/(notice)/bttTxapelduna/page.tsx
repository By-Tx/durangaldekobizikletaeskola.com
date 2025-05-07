"use client";
import { useTranslations } from "next-intl";
import TopImage from "@/app/[locale]/components/mainPage/noticeComponents/topImageImage";
import NoticeContent from "../../../components/mainPage/noticeComponents/noticeContent";

export default function Page() {
  const t = useTranslations("bttTxapeldunaPage");

  return (
    <>
      <TopImage
        image="https://photos.txuli.com/duranguesa/notices/ander2.JPG"
        alt={t("altImage")}
        title={t("title")}
        subTitle={t("subTitle")}
      />
      <NoticeContent p1={t("p1")} p2={t("p2")} p3={t("p3")} p4="" p5="" />
    </>
  );
}
