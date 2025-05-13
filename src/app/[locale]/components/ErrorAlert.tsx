"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import alertIcon from "@/app/media/error.svg";

interface ErrorAlertProps {
  message: string | null;
  onClose: () => void;
}

export default function ErrorAlert({ message, onClose }: ErrorAlertProps) {
  const [visible, setVisible] = useState(!!message);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (message) setVisible(true);
  }, [message]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setVisible(false);
      onClose();
    }, 300);
  };

  if (!visible || !message) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-[110] bg-black bg-opacity-60 ${closing ? "animate-fade-out" : "animate-fade-in"}`}>
      <div className={`bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center border-4 border-red-500 relative ${closing ? "animate-slide-down" : "animate-slide-up"}`}>
        <div className="flex items-center justify-center mb-4 gap-3">
          <Image
            src={alertIcon}
            alt="Error"
            className="w-10 h-10"
            style={{
              filter: "invert(36%) sepia(99%) saturate(2000%) hue-rotate(340deg) brightness(90%) contrast(110%)",
            }}
          />
          <h3 className="text-xl font-bold text-red-400 drop-shadow m-0">¡Error!</h3>
        </div>
        <p className="mb-4 text-gray-200">{message}</p>
        <button
          className="mt-2 px-5 py-2 bg-gradient-to-r from-red-700 to-red-500 text-gray-100 rounded-lg font-bold shadow transition duration-200 hover:filter hover:brightness-125"
          onClick={handleClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
