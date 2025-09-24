import { useState, useEffect } from "react";
import { fetchAPI } from "../../useful/FetchAPI";
import {
  Book,
  GraduationCap,
  Users,
  Library,
  ArrowLeft,
  Loader,
} from "lucide-react";

export default function API() {
  const [user, setUser] = useState(null);
  const [subject, setSubject] = useState(null);
  const [course, setCourse] = useState(null);
  const [classes, setClass] = useState(null);

  useEffect(() => {
    fetchAPI("http://localhost:3000/apiuser", setUser);
    fetchAPI("http://localhost:3000/apisubject", setSubject);
    fetchAPI("http://localhost:3000/apicourse", setCourse);
    fetchAPI("http://localhost:3000/apiclassfilter", setClass);
  }, []);

  const dataSections = [
    { title: "Matérias", content: subject, icon: <Book className="w-6 h-6" /> },
    {
      title: "Cursos",
      content: course,
      icon: <GraduationCap className="w-6 h-6" />,
    },
    { title: "Usuários", content: user, icon: <Users className="w-6 h-6" /> },
    {
      title: "Monitorias",
      content: classes,
      icon: <Library className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">API Test</h1>
        <p className="text-gray-400">Dados do sistema em tempo real.</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {dataSections.map((section, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-xl font-bold ml-3">{section.title}</h2>
              </div>
              <div className="bg-gray-900 rounded-md p-4 max-h-80 overflow-y-auto">
                {section.content ? (
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                    {JSON.stringify(section.content, null, 2)}
                  </pre>
                ) : (
                  <div className="flex items-center justify-center py-8">
                    <Loader className="animate-spin w-6 h-6 text-purple-500" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-purple-400 hover:text-purple-300 transition-colors text-sm flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Voltar ao início
          </a>
        </div>
      </main>
    </div>
  );
}
