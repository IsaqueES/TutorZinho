import { useState, useEffect } from "react";
import {
  User,
  BookOpen,
  Calendar,
  GraduationCap,
  ArrowLeft,
  Hash,
  Home,
} from "lucide-react";
import { fetchAPI } from "../../useful/FetchAPI";

export default function InUser() {
  const [user, setUser] = useState([]);
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  const idu = localStorage.getItem("id");

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
    setUserType(localStorage.getItem("type"));
    fetchAPI(`http://localhost:3000/apiinuser/${idu}`, setUser);
  }, [idu]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  const goBack = () => {
    window.history.back();
  };

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="p-4 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-purple-400">Tutorzinho</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={goHome}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Início</span>
            </button>
            <button
              onClick={goBack}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Voltar</span>
            </button>
          </div>
        </div>
        {userName && (
          <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
            <User className="w-5 h-5 text-purple-400" />
            <span>
              {userName} <span className="text-gray-400">({userType})</span>
            </span>
          </div>
        )}
      </header>

      <main className="p-6 flex flex-col items-center">
        <div className="w-full max-w-5xl mb-10 text-center bg-gray-800/50 p-6 rounded-lg">
          <div className="flex items-center justify-center gap-3 mb-2">
            <GraduationCap className="w-8 h-8 text-purple-400" />
            <h2 className="text-2xl font-semibold">Minhas Monitorias</h2>
          </div>
          <p className="text-gray-400">
            Lista de todas as monitorias em que você está inscrito
          </p>
        </div>

        <div className="w-full max-w-5xl">
          {user.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.map((ui) => (
                <div
                  key={ui.id}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700/50 transition-colors border border-gray-700"
                >
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-purple-400" />
                        <h3 className="text-xl font-bold text-white">
                          {ui.Class.Subject.Subject_Name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Hash className="w-3 h-3" />
                        {ui.id}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gray-300">
                        <GraduationCap className="w-4 h-4 text-purple-400" />
                        <span className="text-sm">
                          <span className="text-gray-400">Curso:</span>{" "}
                          {ui.Class.Course.Course_Name || "N/A"}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-sm">
                          <span className="text-gray-400">Inscrito em:</span>{" "}
                          {formatDate(ui.createdAt)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-300">
                        <BookOpen className="w-4 h-4 text-purple-400" />
                        <span className="text-sm">
                          <span className="text-gray-400">Monitoria ID:</span>{" "}
                          {ui.Class_Id}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-700">
                      <div className="bg-purple-600/20 px-3 py-2 rounded-md">
                        <span className="text-purple-300 text-sm font-medium">
                          Ativo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-gray-800/50 rounded-lg p-8 max-w-md mx-auto">
                <GraduationCap className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  Nenhuma monitoria encontrada
                </h3>
                <p className="text-gray-500 text-sm">
                  Você ainda não está inscrito em nenhuma monitoria.
                </p>
                <button
                  onClick={goHome}
                  className="mt-4 flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors mx-auto"
                >
                  <Home className="w-4 h-4" />
                  Explorar Monitorias
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="p-4 mt-10 text-center text-gray-600 text-sm border-t border-gray-800">
        <p>© 2024 Tutorzinho</p>
      </footer>
    </div>
  );
}
