import { useState, useEffect } from "react";

export default function API() {
  const [dados, setDados] = useState("Carregando...");

  useEffect(() => {
    const dadosAPI = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/apiuser");
        const data = await resposta.json();
        setDados(JSON.stringify(data, null, 2)); // deixa formatado bonitinho
      } catch (error) {
        setDados("DEU ERRO > " + error);
      }
    };

    dadosAPI();
  }, []);

  return (
    <pre className="bg-gray-900 text-white p-4 min-h-screen">
      {dados}
    </pre>
  );
}
