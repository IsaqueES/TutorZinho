import { fetchAPIArray } from "../../useful/FetchAPIarray.js";
import { useState, useEffect } from "react";
import {
  BookOpen,
  GraduationCap,
  Image,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent">
          Criar Monitoria
        </h1>
        <div className="h-1 w-20 mx-auto mt-4 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center px-6 lg:px-12 pb-12">
        <div className="w-full max-w-lg">
          {/* Form */}
          <form
            action="http://localhost:3000/addclass"
            method="post"
            className="bg-gray-800/40 border border-gray-700/50 rounded-2xl shadow-xl backdrop-blur-lg p-8 space-y-6"
          >
            {/* Curso Selection */}
            <div className="space-y-2">
              <label
                htmlFor="curso"
                className="flex items-center text-sm font-medium text-gray-200"
              >
                <GraduationCap className="w-5 h-5 text-purple-400 mr-2" />
                Curso
              </label>
              <select
                id="curso"
                name="course"
                value={cursoSelecionado}
                onChange={(e) => setCursoSelecionado(e.target.value)}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Selecione um curso...</option>
                {cursos.map((curso) => (
                  <option
                    key={curso.id}
                    value={curso.id}
                    className="bg-gray-800"
                  >
                    {curso.Course_Name}
                  </option>
                ))}
              </select>
            </div>

            {/* Materia Selection */}
            <div className="space-y-2">
              <label
                htmlFor="materia"
                className="flex items-center text-sm font-medium text-gray-200"
              >
                <BookOpen className="w-5 h-5 text-indigo-400 mr-2" />
                Matéria
              </label>
              <select
                id="materia"
                name="subject"
                value={materiaSelecionada}
                onChange={(e) => setMateriaSelecionada(e.target.value)}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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

            {/* Image URL */}
            <div className="space-y-2">
              <label
                htmlFor="imgurl"
                className="flex items-center text-sm font-medium text-gray-200"
              >
                <Image className="w-5 h-5 text-emerald-400 mr-2" />
                URL da Imagem
              </label>
              <input
                id="imgurl"
                name="imgurl"
                type="text"
                placeholder="https://exemplo.com/imagem.jpg"
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <Sparkles className="w-5 h-5" />
              Criar Monitoria
            </button>
          </form>

          {/* Navigation */}
          <div className="mt-6 text-center">
            <a
              href="/"
              className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
