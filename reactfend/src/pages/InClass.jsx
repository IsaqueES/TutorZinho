// import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAPI } from "../../useful/FetchAPI";

export default function InClass() {
  // const { materia } = useParams();
  const [classes, setClass] = useState("Carregando...");
  useEffect(() => {
    fetchAPI("http://localhost:3000/apiclassone", setClass);
  }, []);
  return (
    <div>
      <h1>Teste:</h1>
      <p>{classes}</p>
    </div>
  );
}
