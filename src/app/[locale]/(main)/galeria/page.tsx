"use client";
import { useState } from "react";

export default function Page() {
  const [responseMessage, setResponseMessage] = useState("");
  const [data, setData] = useState(null); // Nuevo estado para guardar los datos

  const test = async () => {
    const response = await fetch("/api/gallery", {
      method: "POST",
    });

    if (response.ok) {
      const responseData = await response.json(); // Obtén los datos de la respuesta
      setData(responseData); // Guarda los datos en el estado
      
      setResponseMessage("Fetching correcto");
    } else {
      setResponseMessage("Fetching incorrecto");
    }

    console.log(data);
  };

  return (
    <div className="mt-20">
      <button onClick={test}>Fetch Data</button>
     
    </div>
  );
}
