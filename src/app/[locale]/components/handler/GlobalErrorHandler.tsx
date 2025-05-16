"use client";
import ErrorAlert from "../session/ui/ErrorAlert";
import { useError } from "@/context/ErrorContext";

export default function GlobalErrorHandler() {
  const { errorMessage, clearError } = useError();

  return <ErrorAlert message={errorMessage} onClose={clearError} />;
}
