"use client";
import InfoAlert from "../session/ui/infoAlert"; 
import { useInfo } from "@/context/infoContext";

export default function GlobalInfoHandler() {
  const { infoMessage, description, clearInfo } = useInfo();

  return <InfoAlert message={infoMessage} description={description} onClose={clearInfo} />;
}
