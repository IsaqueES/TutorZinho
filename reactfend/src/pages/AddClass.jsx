import { fetchAPIArray } from "../../useful/FetchAPIarray.js";
import { useState, useEffect } from "react";

export default function AddClass() {
  //? CURSOS
  const [cursos, setCursos] = useState([]);    
  const [cursoSelecionado, setCursoSelecionado] = useState(""); 
  useEffect(() => {
    fetchAPIArray("http://localhost:3000/apicourse", setCursos);
  }, []);
  
  //? MATERIAS
  const [materias, setMaterias] = useState([]);    
  const [materiaSelecionada, setMateriaSelecionada] = useState(""); 
  useEffect(() => {
    fetchAPIArray("http://localhost:3000/apisubject", setMaterias);
  }, []);

  


  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white font-serif p-6">
      <h1 className="text-5xl mb-6">Criar Monitoria</h1>
      <form
        action="http://localhost:3000/addclass"
        method="post"
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col"
      >
        <h3 className="text-xl mb-3">Formulario de criação de Monitoria</h3>

        <label htmlFor="curso" className="block mb-2 font-bold">
          Escolha um curso:
        </label>
        <select
          id="curso"
          name="course"
          value={cursoSelecionado}
          onChange={(e) => setCursoSelecionado(e.target.value)}
          className="border rounded p-2 mb-4"
        >
          <option value="" className="bg-gray-800 text-white">
           Selecione...
          </option>
           {cursos.map((curso) => (
          <option
            key={curso.id}
            value={curso.id}
            className="bg-gray-800 text-white hover:bg-gray-700"
          >
            {curso.Course_Name}
          </option>
          ))}
        </select>
        

        <label htmlFor="curso" className="block mb-2 font-bold">
          Escolha uma Materia
        </label>
        <select
          id="curso"
          name="subject"
          value={materiaSelecionada}
          onChange={(e) => setMateriaSelecionada(e.target.value)}
          className="border rounded p-2 mb-4"
        >
          <option value="" className="bg-gray-800 text-white">
           Selecione...
          </option>
           {materias.map((materia) => (
          <option
            key={materia.id}
            value={materia.id}
            className="bg-gray-800 text-white hover:bg-gray-700"
          >
            {materia.Subject_Name}
          </option>
          ))}
        </select>

        <input
          className="w-full mb-3 p-3 rounded border border-gray-700 bg-gray-900 placeholder-gray-400"
          type="text"
          placeholder="Imagem URL"
          name="imgurl"
        />

        <button
          type="submit"
          className="bg-white text-gray-900 py-3 rounded hover:bg-gray-200 transition"
        >
          Criar Monitoria
        </button>
      </form>
    </div>
  );
}
