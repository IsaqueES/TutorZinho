import { Book, ArrowLeft } from "lucide-react";

export default function AddCourse() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Criar Curso</h1>
          <p className="text-gray-400">Adicione um novo curso à plataforma.</p>
        </div>

        <form
          action="http://localhost:3000/addcourse"
          method="post"
          className="bg-gray-800 rounded-lg shadow-lg p-8 space-y-6"
        >
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-300 flex items-center"
            >
              <Book className="w-4 h-4 mr-2" />
              Nome do Curso
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ex: Engenharia de Software"
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            Criar Curso
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
