import { useState, useEffect } from "react";
import {
  LogIn,
  UserPlus,
  LogOut,
  Book,
  BookOpen,
  GraduationCap,
  Library,
  TestTube2,
  ArrowRight,
  User,
} from "lucide-react";

export default function Home() {
  const [name, setName] = useState(null);
  const [type, setType] = useState(null);
  const [classes, setClasses] = useState([]);
  const idu = localStorage.getItem("id");

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setType(localStorage.getItem("type"));

    // Busca as monitorias da API
    const fetchClasses = async () => {
      try {
        const response = await fetch("http://localhost:3000/apiclassfilter");
        const classlist = await response.json();
        setClasses(classlist);
      } catch (error) {
        console.error("Erro ao buscar monitorias:", error);
      }
    };
    fetchClasses();
  }, []);

  const inClass = (curso, id) => {
    window.location = `/class/${curso}/${id}`;
  };

  const LogOff = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  // Renderiza os botões para usuários não logados
  const renderAuthButtons = () => (
    <div className="flex justify-center gap-4">
      <a
        href="/login"
        className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-md transition-colors"
      >
        <LogIn className="w-4 h-4" />
        Entrar
      </a>
      <a
        href="/register"
        className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-md transition-colors"
      >
        <UserPlus className="w-4 h-4" />
        Registrar
      </a>
    </div>
  );

  // Renderiza os botões para o perfil "Professor"
  const renderProfessorButtons = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <a
        href="/course"
        className="flex flex-col items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors text-center"
      >
        <GraduationCap className="w-8 h-8 text-purple-400" />
        <span>Criar Curso</span>
      </a>
      <a
        href="/subject"
        className="flex flex-col items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors text-center"
      >
        <Book className="w-8 h-8 text-purple-400" />
        <span>Criar Matéria</span>
      </a>
      <a
        href="/class"
        className="flex flex-col items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors text-center"
      >
        <Library className="w-8 h-8 text-purple-400" />
        <span>Criar Monitoria</span>
      </a>
      <a
        href="/testeapi"
        className="flex flex-col items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors text-center"
      >
        <TestTube2 className="w-8 h-8 text-purple-400" />
        <span>API Test</span>
      </a>
      <button
        onClick={LogOff}
        className="col-span-2 md:col-span-1 flex flex-col items-center justify-center gap-2 bg-red-800/50 hover:bg-red-700/50 p-4 rounded-lg transition-colors"
      >
        <LogOut className="w-8 h-8 text-red-400" />
        <span>Sair</span>
      </button>
    </div>
  );

  // Renderiza os botões para o perfil "Aluno"
  const renderAlunoButtons = () => (
    <div className="grid grid-cols-2 gap-4">
      <a
        href="/testeapi"
        className="flex flex-col items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors text-center"
      >
        <TestTube2 className="w-8 h-8 text-purple-400" />
        <span>API Test</span>
      </a>
      <button
        onClick={LogOut}
        className="flex flex-col items-center justify-center gap-2 bg-red-800/50 hover:bg-red-700/50 p-4 rounded-lg transition-colors"
      >
        <LogOut className="w-8 h-8 text-red-400" />
        <span>Sair</span>
      </button>
    </div>
  );

  const ActionBlock = () => {
    if (!type) {
      return renderAuthButtons();
    }
    if (type === "Professor") {
      return renderProfessorButtons();
    }
    if (type === "Aluno") {
      return renderAlunoButtons();
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="p-4 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-3xl font-bold text-purple-400">Tutorzinho</h1>
        {name && (
          <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
            <User className="w-5 h-5 text-purple-400" />
            <span>
              <a href={`/user/${idu}`}>
                {name} <span className="text-gray-400">({type})</span>
              </a>
            </span>
          </div>
        )}
      </header>

      <main className="p-6 flex flex-col items-center">
        <div className="w-full max-w-5xl mb-10 text-center bg-gray-800/50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">
            Plataforma de Monitorias
          </h2>
        </div>

        <div className="w-full max-w-5xl mb-12">
          <ActionBlock />
        </div>

        <div className="w-full max-w-5xl">
          <h2 className="text-2xl font-bold text-center mb-6">
            Monitorias Disponíveis
          </h2>
          {classes.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classes.map((c) => (
                <div
                  key={`${c.Course_ID}-${c.Subject_ID}`}
                  className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between hover:bg-gray-700/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center mb-2">
                      <BookOpen className="w-5 h-5 mr-3 text-purple-400" />
                      <h3 className="text-xl font-bold">{c.Subject}</h3>
                    </div>
                    <p className="text-gray-400 flex items-center pl-1">
                      <GraduationCap className="w-4 h-4 mr-3" />
                      {c.Course}
                    </p>
                  </div>
                  <button
                    onClick={() => inClass(c.Course_ID, c.Subject_ID)}
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                  >
                    Ver Monitorias
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-gray-500">
              <p>Nenhuma monitoria disponível no momento.</p>
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
