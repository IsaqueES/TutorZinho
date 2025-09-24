import { useState, useEffect } from "react";
import {
  BookOpen,
  GraduationCap,
  Image,
  ArrowLeft,
  PlusCircle,
} from "lucide-react";
import { fetchAPIArray } from "../../useful/FetchAPIarray.js";

export default function AddClass() {
  const [cursos, setCursos] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [cursoSelecionado, setCursoSelecionado] = useState("");
  const [materiaSelecionada, setMateriaSelecionada] = useState("");

  useEffect(() => {
    fetchAPIArray("http://localhost:3000/apicourse", setCursos);
    fetchAPIArray("http://localhost:3000/apisubject", setMaterias);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Criar Monitoria</h1>
          <p className="text-gray-400">
            Adicione uma nova monitoria à plataforma.
          </p>
        </div>

        <form
          action="http://localhost:3000/addclass"
          method="post"
          className="bg-gray-800 rounded-lg shadow-lg p-8 space-y-6"
        >
          <div className="space-y-2">
            <label
              htmlFor="curso"
              className="text-sm font-semibold text-gray-300 flex items-center"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Curso
            </label>
            <select
              id="curso"
              name="course"
              value={cursoSelecionado}
              onChange={(e) => setCursoSelecionado(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Selecione um curso...</option>
              {cursos.map((curso) => (
                <option key={curso.id} value={curso.id} className="bg-gray-800">
                  {curso.Course_Name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="materia"
              className="text-sm font-semibold text-gray-300 flex items-center"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Matéria
            </label>
            <select
              id="materia"
              name="subject"
              value={materiaSelecionada}
              onChange={(e) => setMateriaSelecionada(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Selecione uma matéria...</option>
              {materias.map((materia) => (
                <option
                  key={materia.id}
                  value={materia.id}
                  className="bg-gray-800"
                >
                  {materia.Subject_Name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="imgurl"
              className="text-sm font-semibold text-gray-300 flex items-center"
            >
              <Image className="w-4 h-4 mr-2" />
              URL da Imagem
            </label>
            <input
              id="imgurl"
              name="imgurl"
              type="text"
              placeholder="https://exemplo.com/imagem.jpg"
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors flex items-center justify-center"
          >
            <PlusCircle className="w-4 h-4 mr-2" />
            Criar Monitoria
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-purple-400 hover:text-purple-300 transition-colors text-sm flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}
