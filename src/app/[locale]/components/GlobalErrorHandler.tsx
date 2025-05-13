"use client";
import ErrorAlert from "./ErrorAlert";
import { useError } from "@/context/ErrorContext";

export default function GlobalErrorHandler() {
  const { errorMessage, clearError } = useError();

  return <ErrorAlert message={errorMessage} onClose={clearError} />;
}
