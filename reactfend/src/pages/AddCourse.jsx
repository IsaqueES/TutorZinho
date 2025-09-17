export default function AddCourse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
        <div className="relative z-10 text-center py-12">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent tracking-tight mb-4">
            Criar Curso
          </h1>
          <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-32 mx-auto"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center px-6 lg:px-12 pb-12">
        <div className="w-full max-w-xl">
          {/* Form Card */}
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border-b border-gray-700/50 p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center text-3xl mx-auto mb-4">
                  🎓
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Formulário de Criação
                </h2>
                <p className="text-gray-300">
                  Preencha os dados para criar um novo curso
                </p>
              </div>
            </div>

            {/* Form Content */}
            <form
              action="http://localhost:3000/addcourse"
              method="post"
              className="p-8 space-y-8"
            >
              {/* Course Name Input */}
              <div className="space-y-3">
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-white flex items-center"
                >
                  <span className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center text-sm mr-3">
                    📚
                  </span>
                  Nome do Curso
                </label>
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ex: Engenharia de Software, Medicina, Direito..."
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-700/70"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                    <div className="w-2 h-2 bg-purple-500 rounded-full opacity-60"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Digite o nome completo e oficial do curso
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">✨</span>
                    Criar Curso
                    <span className="ml-2">🎯</span>
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-gray-800/20 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-6">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-sm mr-3">
                💡
              </div>
              <h3 className="text-lg font-semibold text-white">Informação</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              O curso criado ficará disponível para ser selecionado ao criar
              novas matérias e monitorias. Certifique-se de usar o nome oficial
              da instituição.
            </p>
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
