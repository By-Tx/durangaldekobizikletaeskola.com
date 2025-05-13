"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface ErrorContextType {
  errorMessage: string | null;
  setError: (msg: string) => void;
  clearError: () => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export function ErrorProvider({ children }: { children: ReactNode }) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const setError = (msg: string) => setErrorMessage(msg);
  const clearError = () => setErrorMessage(null);

  return (
    <ErrorContext.Provider value={{ errorMessage, setError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
}

export function useError() {
  const context = useContext(ErrorContext);
  if (!context) throw new Error("useError must be used within an ErrorProvider");
  return context;
}
