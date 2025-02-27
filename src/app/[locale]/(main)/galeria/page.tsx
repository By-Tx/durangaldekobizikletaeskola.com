"use client"; 
import { useState, useEffect } from "react";
import Card from "../components/gallery/Card";

export default function Page() {
  const [responseMessage, setResponseMessage] = useState("");
  const [data, setData] = useState(null); // Nuevo estado para guardar los datos
  const [fetchData, setFetchData] = useState<{ image: string; title: string; }[]>([]);

  // Definir la función 'test'
  const test = async () => {
    const fetchData = [];
    const response = await fetch("/api/gallery", {
      method: "POST",
    });

    let responseData = null;
    if (response.ok) {
      responseData = await response.json(); // Obtén los datos de la respuesta
      setData(responseData); // Guarda los datos en el estado

      setResponseMessage("Fetching correcto");
    } else {
      setResponseMessage("Fetching incorrecto");
    }

    console.log(data);
    if (responseData !== null) {
      for (let i = 0; i < responseData.length; i++) {
        if (!responseData[i].includes("../")) {
          fetchData.push({
            title: responseData[i].slice(0, -1),
            image: "https://photos.txuli.com/duranguesa/covers/" +
              responseData[i].slice(0, -1) + ".jpg"
          });
        }
      }
      setFetchData(fetchData);
      console.log("Fetch Data:");
      console.log(fetchData);
    }
  };

  
  useEffect(() => {
    test();
  }, []); 

  return (
    <div className="mt-20">
      <Card album={fetchData} />
    </div>
  );
}
