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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
        <div className="relative z-10 text-center py-12">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent tracking-tight mb-4">
            Criar Monitoria
          </h1>
          <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-32 mx-auto"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center px-6 lg:px-12 pb-12">
        <div className="w-full max-w-2xl">
          {/* Form Card */}
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border-b border-gray-700/50 p-8">
              <h2 className="text-2xl font-bold text-center text-white mb-2">
                Formulário de Criação
              </h2>
              <p className="text-center text-gray-300">
                Preencha os dados para criar uma nova monitoria
              </p>
            </div>

            {/* Form Content */}
            <form
              action="http://localhost:3000/addclass"
              method="post"
              className="p-8 space-y-8"
            >
              {/* Curso Selection */}
              <div className="space-y-3">
                <label
                  htmlFor="curso"
                  className="text-lg font-semibold text-white flex items-center"
                >
                  <span className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-sm mr-3">
                    📚
                  </span>
                  Escolha um curso
                </label>
                <div className="relative">
                  <select
                    id="curso"
                    name="course"
                    value={cursoSelecionado}
                    onChange={(e) => setCursoSelecionado(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer hover:bg-gray-700/70"
                  >
                    <option value="" className="bg-gray-800">
                      Selecione um curso...
                    </option>
                    {cursos.map((curso) => (
                      <option
                        key={curso.id}
                        value={curso.id}
                        className="bg-gray-800 text-white"
                      >
                        {curso.Course_Name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Materia Selection */}
              <div className="space-y-3">
                <label
                  htmlFor="materia"
                  className="block text-lg font-semibold text-white flex items-center"
                >
                  <span className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center text-sm mr-3">
                    📖
                  </span>
                  Escolha uma matéria
                </label>
                <div className="relative">
                  <select
                    id="materia"
                    name="subject"
                    value={materiaSelecionada}
                    onChange={(e) => setMateriaSelecionada(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer hover:bg-gray-700/70"
                  >
                    <option value="" className="bg-gray-800">
                      Selecione uma matéria...
                    </option>
                    {materias.map((materia) => (
                      <option
                        key={materia.id}
                        value={materia.id}
                        className="bg-gray-800 text-white"
                      >
                        {materia.Subject_Name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Image URL Input */}
              <div className="space-y-3">
                <label
                  htmlFor="imgurl"
                  className="block text-lg font-semibold text-white flex items-center"
                >
                  <span className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center text-sm mr-3">
                    🖼️
                  </span>
                  URL da Imagem
                </label>
                <input
                  id="imgurl"
                  name="imgurl"
                  type="text"
                  placeholder="https://exemplo.com/imagem.jpg"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-700/70"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">✨</span>
                    Criar Monitoria
                    <span className="ml-2">🎓</span>
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Navigation */}
          <div className="mt-8 text-center">
            <a
              href="/"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Voltar ao início
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
