import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Loader,
  AlertTriangle,
  BookOpen,
  GraduationCap,
  Image,
  UserPlus,
} from "lucide-react";

export default function InClass() {
  const { course, id } = useParams();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const type = localStorage.getItem("type");

  const Subscribe = async (idc) => {
    console.log("!");
    if (!type) {
      window.location = `/register`;
    } else if (type == "Professor" || type == "Aluno") {
      const idu = localStorage.getItem("id");
      const wl = window.location.href;
      const subscriptionData = {
        idu: idu,
        idc: idc,
        wl: wl,
      };
      const NewSub = await axios.post(
        `http://localhost:3000/subscribe`,
        subscriptionData
      );
      console.log("passsed");
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

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-4">
      <header className="flex items-center justify-between mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </Link>
        <h1 className="text-3xl font-bold">Monitorias</h1>
        <div className="w-16"></div>
      </header>

      <main className="max-w-4xl mx-auto">
        {loading && (
          <div className="flex justify-center py-10">
            <Loader className="animate-spin w-8 h-8 text-purple-500" />
          </div>
        )}
        {error && (
          <div className="text-center py-10 text-red-400 flex flex-col items-center">
            <AlertTriangle className="w-8 h-8 mb-2" />
            <p>{error}</p>
          </div>
        )}
        {!loading &&
          !error &&
          (classes.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classes.map((classItem) => (
                <div
                  key={classItem.id}
                  className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between"
                >
                  <div>
                    {classItem.Class_Image && (
                      <img
                        src={classItem.Class_Image}
                        alt="Monitoria"
                        className="w-full h-32 object-cover rounded-md mb-4"
                      />
                    )}
                    <h3 className="text-xl font-bold mb-2">
                      Monitoria #{classItem.id}
                    </h3>
                  </div>
                  <button
                    onClick={() => Subscribe(classItem.id)}
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                  >
                    <UserPlus className="w-4 h-4" />
                    Inscrever-se
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-400">
                Nenhuma monitoria encontrada para esta matéria.
              </p>
            </div>
          ))}
      </main>
    </div>
  );
}
