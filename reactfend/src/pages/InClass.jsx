import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function InClass() {
  const { course, id } = useParams();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const type = localStorage.getItem("type");
  //?CLICK IN CLASS WITHOUT LOGIN
  const Subscribe = () => {
    if (!type) {
      window.location = `/register`;
    }
  };

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3000/apiinclass/${course}/${id}`
        );
        const data = await response.json();

        if (response.ok) {
          setClasses(data);
        } else {
          setError("Erro ao carregar monitorias");
        }
      } catch {
        setError("Erro de conexão com o servidor");
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, [course, id]);

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
        <div className="relative z-10 flex justify-between items-center p-6 lg:px-12">
          <button
            onClick={goBack}
            className="group flex items-center space-x-3 bg-gray-800/60 backdrop-blur-lg border border-purple-500/30 px-6 py-3 rounded-2xl shadow-2xl hover:bg-gray-700/60 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-2xl">←</div>
            <span className="text-lg font-medium">Voltar</span>
          </button>
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent tracking-tight">
            Monitorias
          </h1>
          <div className="w-32"></div> {/* Spacer for alignment */}
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-6 lg:mx-12"></div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center px-6 lg:px-12 py-12">
        <div className="w-full max-w-6xl">
          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mb-4"></div>
              <h3 className="text-2xl font-bold text-gray-400">
                Carregando monitorias...
              </h3>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">Erro</h3>
              <p className="text-gray-400">{error}</p>
            </div>
          ) : classes.length > 0 ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent mb-2">
                  Monitorias Disponíveis
                </h2>
                <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-32 mx-auto mb-4"></div>
                <p className="text-gray-300">
                  Encontramos {classes.length} monitoria
                  {classes.length > 1 ? "s" : ""} disponível
                  {classes.length > 1 ? "eis" : ""}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {classes.map((classItem, index) => (
                  <div
                    key={classItem.id}
                    className="group relative overflow-hidden bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg border border-gray-700/50 hover:border-purple-500/50 rounded-3xl p-6 shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      {/* Header do Card */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                          🎓
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-gray-400 font-medium">
                            Disponível
                          </span>
                        </div>
                      </div>

                      {/* Informações da Monitoria */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-3">
                          Monitoria #{classItem.id}
                        </h3>

                        <div className="space-y-2">
                          <div className="flex items-center text-gray-300">
                            <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                            <span className="text-sm">
                              ID da Matéria: {classItem.Class_Subject}
                            </span>
                          </div>
                          <div className="flex items-center text-gray-300">
                            <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                            <span className="text-sm">
                              ID do Curso: {classItem.Class_Course}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Imagem da Monitoria */}
                      {classItem.Class_Image && (
                        <div className="mb-6">
                          <div className="w-full h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl overflow-hidden shadow-inner">
                            <img
                              src={classItem.Class_Image}
                              alt="Imagem da monitoria"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                        </div>
                      )}

                      {/* Botão de Ação */}
                      <button
                        onClick={() => Subscribe()}
                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                      >
                        Inscrever-se
                      </button>
                    </div>

                    {/* Badge com número da monitoria */}
                    <div className="absolute top-4 right-4 bg-purple-600/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                      #{index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">
                Nenhuma monitoria encontrada
              </h3>
              <p className="text-gray-500 mb-6">
                Não há monitorias disponíveis para esta matéria no momento.
              </p>
              <button
                onClick={goBack}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Voltar à página inicial
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-6 lg:mx-12"></div>
        <div className="p-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Tutorzinho - Desenvolvido com 💜
          </p>
        </div>
      </footer>
    </div>
  );
}
