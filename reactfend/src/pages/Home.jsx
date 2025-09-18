import { useState, useEffect } from "react";

export default function Home() {
  const name = localStorage.getItem("name");
  const type = localStorage.getItem("type");

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch("http://localhost:3000/apiclass"); //!FAZER FILTER!!!!!!!!
        const classlist = await response.json();

        console.log("Dados recebidos da API:", classlist);
        setClasses(classlist);
      } catch (error) {
        console.error("Erro ao buscar monitorias:", error);
      }
    };

    fetchClasses();
  }, []);

  console.log("Estado atual das classes:", classes);
  const Subscribe = () => {};
  const LogOut = () => {
    localStorage.setItem("name", "");
    localStorage.setItem("email", "");
    localStorage.setItem("password", "");
    localStorage.setItem("type", "");
    window.location.href = "/";
  };

  let html = "";
  let monitorias = "";

  //? DESLOGADO
  if (!type) {
    html = (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <a
          href="/login"
          className="group relative overflow-hidden bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white py-8 px-8 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/25"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-3">🔐</div>
            <h3 className="text-2xl font-bold mb-2">Entrar</h3>
            <p className="text-purple-200">Acesse sua conta</p>
          </div>
        </a>
        <a
          href="/register"
          className="group relative overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 border border-purple-500/30 text-white py-8 px-8 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/25"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-2xl font-bold mb-2">Registrar</h3>
            <p className="text-gray-300">Crie sua conta</p>
          </div>
        </a>
      </div>
    );
    //? PROFESSOR
  } else if (type === "Professor") {
    html = (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
        <button
          onClick={LogOut}
          className="group relative overflow-hidden bg-gradient-to-br from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white py-6 px-6 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/25"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 text-center">
            <div className="text-3xl mb-2">🚪</div>
            <h3 className="text-xl font-bold">Sair</h3>
          </div>
        </button>
        <a
          href="/course"
          className="group relative overflow-hidden bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white py-6 px-6 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/25"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 text-center">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="text-xl font-bold">Criar Curso</h3>
          </div>
        </a>
        <a
          href="/subject"
          className="group relative overflow-hidden bg-gradient-to-br from-indigo-600 to-indigo-800 hover:from-indigo-500 hover:to-indigo-700 text-white py-6 px-6 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-indigo-500/25"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 text-center">
            <div className="text-3xl mb-2">📖</div>
            <h3 className="text-xl font-bold">Criar Matéria</h3>
          </div>
        </a>
        <a
          href="/class"
          className="group relative overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-800 hover:from-emerald-500 hover:to-emerald-700 text-white py-6 px-6 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-emerald-500/25"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 text-center">
            <div className="text-3xl mb-2">🎓</div>
            <h3 className="text-xl font-bold">Criar Monitoria</h3>
          </div>
        </a>
        <a
          href="/testeapi"
          className="group relative overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 border border-purple-500/30 text-white py-6 px-6 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/25"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="text-xl font-bold">API Test</h3>
          </div>
        </a>
      </div>
    );
    //? ALUNO
  } else if (type === "Aluno") {
    html = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <button
          onClick={LogOut}
          className="group relative overflow-hidden bg-gradient-to-br from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white py-8 px-8 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/25"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-3">🚪</div>
            <h3 className="text-2xl font-bold mb-2">Sair</h3>
            <p className="text-red-200">Finalizar sessão</p>
          </div>
        </button>
        <a
          href="/testeapi"
          className="group relative overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 border border-purple-500/30 text-white py-8 px-8 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/25"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-2xl font-bold mb-2">API Test</h3>
            <p className="text-gray-300">Testar conexões</p>
          </div>
        </a>
      </div>
    );

    monitorias = (
      <div className="w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent mb-2">
            Monitorias Disponíveis
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-32 mx-auto"></div>
        </div>

        {classes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {classes.map((c) => (
              <div
                key={c.id}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg border border-gray-700/50 hover:border-purple-500/50 rounded-3xl p-6 shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center text-2xl">
                      📚
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    Monitoria de {c.Materia}
                  </h3>

                  <p className="text-gray-300 mb-4 flex items-center">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Curso: {c.Course?.Course_Name}
                  </p>

                  <button
                    onClick={Subscribe}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Inscrever-se
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">
              Nenhuma monitoria disponível
            </h3>
            <p className="text-gray-500">
              Novas monitorias serão exibidas aqui quando estiverem disponíveis.
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
        <div className="relative z-10 flex justify-between items-center p-6 lg:px-12">
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent tracking-tight">
            Tutorzinho
          </h1>
          {name && (
            <div className="flex items-center space-x-3 bg-gray-800/60 backdrop-blur-lg border border-purple-500/30 px-6 py-3 rounded-2xl shadow-2xl">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium text-purple-200">
                {type}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-white font-semibold">{name}</span>
            </div>
          )}
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-6 lg:mx-12"></div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center px-6 lg:px-12 py-12">
        {/* Description */}
        <div className="max-w-4xl text-center mb-16">
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
            Bem-vindo ao{" "}
            <span className="text-purple-400 font-semibold">Tutorzinho</span>
          </p>
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
            <p className="text-gray-300 leading-relaxed">
              Uma plataforma inovadora desenvolvida por{" "}
              <span className="text-purple-400 font-semibold">
                Isaque Estolano de Souza
              </span>{" "}
              para a criação e visualização do Back-End do projeto principal{" "}
              <span className="text-purple-400 font-semibold">TutorTime</span>,
              desenvolvido em colaboração com{" "}
              <span className="text-purple-400 font-semibold">
                Luis Henrique Abrantes
              </span>{" "}
              e{" "}
              <span className="text-purple-400 font-semibold">
                Cauã Almeida Moura
              </span>
              .
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-6xl mb-16">{html}</div>

        {/* Monitorias Section */}
        {monitorias && <div className="w-full max-w-6xl">{monitorias}</div>}
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
