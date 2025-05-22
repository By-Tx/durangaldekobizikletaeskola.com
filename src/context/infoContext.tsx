"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface InfoContextType {
  infoMessage: string | null;
  description: string | null;
  setInfo: (message: string, description?: string) => void;
  clearInfo: () => void;
}

const InfoContext = createContext<InfoContextType | undefined>(undefined);

export function InfoProvider({ children }: { children: ReactNode }) {
  const [infoMessage, setInfoMessage] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);

  const setInfo = (message: string, descriptionText?: string) => {
    setInfoMessage(message);
    setDescription(descriptionText ?? null);
  };

  const clearInfo = () => {
    setInfoMessage(null);
    setDescription(null);
  };

  return (
    <InfoContext.Provider value={{ infoMessage, description, setInfo, clearInfo }}>
      {children}
    </InfoContext.Provider>
  );
}

export function useInfo() {
  const context = useContext(InfoContext);
  if (!context) throw new Error("useInfo must be used within an InfoProvider");
  return context;
}
