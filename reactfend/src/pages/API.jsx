import { useState, useEffect } from "react";
import { fetchAPI } from "../../useful/FetchAPI";

export default function API() {
  const [user, setUser] = useState("Carregando...");
  const [subject, setSubject] = useState("Carregando...");
  const [course, setCourse] = useState("Carregando...");
  const [classes, setClass] = useState("Carregando...");

  useEffect(() => {
    fetchAPI("http://localhost:3000/apiuser", setUser);
    fetchAPI("http://localhost:3000/apisubject", setSubject);
    fetchAPI("http://localhost:3000/apicourse", setCourse);
    fetchAPI("http://localhost:3000/apiclassfilter", setClass);
  }, []);

  const dataSections = [
    {
      title: "Matérias",
      content: subject,
      icon: "📖",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Cursos",
      content: course,
      icon: "🎓",
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Usuários",
      content: user,
      icon: "👥",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      title: "Monitorias",
      content: classes,
      icon: "📚",
      color: "from-blue-500 to-blue-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
        <div className="relative z-10 text-center py-12">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent tracking-tight mb-4">
            API Test
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Dados do Sistema em Tempo Real
          </p>
          <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-32 mx-auto"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 lg:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {dataSections.map((section, index) => (
              <div
                key={`stat-${index}`}
                className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 text-center"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3`}
                >
                  {section.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {section.title}
                </h3>
                <p className="text-2xl font-bold text-purple-400">
                  {typeof section.content === "object" &&
                  Array.isArray(section.content)
                    ? section.content.length
                    : typeof section.content === "object" &&
                      section.content !== null
                    ? Object.keys(section.content).length
                    : section.content === "Carregando..."
                    ? "..."
                    : "N/A"}
                </p>
              </div>
            ))}
          </div>

          {/* Data Sections */}
          <div className="grid lg:grid-cols-2 gap-8">
            {dataSections.map((section, index) => (
              <div
                key={`data-${index}`}
                className="group bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 hover:border-purple-500/50 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-purple-500/20 overflow-hidden"
              >
                {/* Section Header */}
                <div className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border-b border-gray-700/50 p-6">
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center text-2xl mr-4`}
                    >
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {section.title}
                      </h2>
                      <p className="text-gray-300 text-sm">
                        {section.content === "Carregando..."
                          ? "Carregando dados..."
                          : `${
                              typeof section.content === "object" &&
                              Array.isArray(section.content)
                                ? section.content.length
                                : typeof section.content === "object" &&
                                  section.content !== null
                                ? Object.keys(section.content).length
                                : "0"
                            } registros encontrados`}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section Content */}
                <div className="p-6">
                  <div className="bg-gray-900/60 rounded-2xl p-4 max-h-96 overflow-y-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
                      {section.content === "Carregando..." ? (
                        <div className="flex items-center justify-center py-8">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                          <span className="ml-3 text-purple-400">
                            Carregando...
                          </span>
                        </div>
                      ) : (
                        JSON.stringify(section.content, null, 2)
                      )}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-12 text-center">
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
