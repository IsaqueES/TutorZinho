import { useState, useEffect } from "react";

export default function Home() {
  const name = localStorage.getItem("name");
  const type = localStorage.getItem("type");

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch("http://localhost:3000/apiclass");
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl mb-10 self-center">
        <a
          href="/login"
          className="bg-gray-800 hover:bg-gray-700 text-white py-6 px-4 rounded-lg shadow-lg text-center transition"
        >
          Sing In
        </a>
        <a
          href="/register"
          className="bg-gray-800 hover:bg-gray-700 text-white py-6 px-4 rounded-lg shadow-lg text-center transition"
        >
          Sing Up
        </a>
      </div>
    );
    //? PROFESSOR
  } else if (type === "Professor") {
    html = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mb-10 self-center">
        <button
          onClick={LogOut}
          className="bg-gray-800 hover:bg-gray-700 text-white py-6 px-4 rounded-lg shadow-lg text-center transition"
        >
          LogOut
        </button>
        <a
          href="/course"
          className="bg-gray-800 hover:bg-gray-700 text-white py-6 px-4 rounded-lg shadow-lg text-center transition"
        >
          Criar Curso
        </a>
        <a
          href="/subject"
          className="bg-gray-800 hover:bg-gray-700 text-white py-6 px-4 rounded-lg shadow-lg text-center transition"
        >
          Criar Matéria
        </a>
        <a
          href="/class"
          className="bg-gray-800 hover:bg-gray-700 text-white py-6 px-4 rounded-lg shadow-lg text-center transition"
        >
          Criar Monitoria
        </a>
        <a
          href="/testeapi"
          className="bg-gray-800 hover:bg-gray-700 text-white py-6 px-4 rounded-lg shadow-lg text-center transition"
        >
          API TEST
        </a>
      </div>
    );
    //? ALUNO
  } else if (type === "Aluno") {
    html = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mb-10 self-center">
        <button
          onClick={LogOut}
          className="bg-gray-800 hover:bg-gray-700 text-white py-6 px-4 rounded-lg shadow-lg text-center transition"
        >
          LogOut
        </button>
        <a
          href="/testeapi"
          className="bg-gray-800 hover:bg-gray-700 text-white py-6 px-4 rounded-lg shadow-lg text-center transition"
        >
          API TEST
        </a>
      </div>
    );

    monitorias = (
      <div className="mt-6">
        {classes.length > 0 ? (
          classes.map((c) => (
            <div key={c.id} className="bg-gray-800 p-4 rounded mb-3">
              <h2 className="text-xl font-semibold">
                Monitoria de {c.Subject?.Subject_Name}
              </h2>
              <p>Curso: {c.Course?.Course_Name}</p>
              <button onClick={Subscribe}>Inscrever-se</button>
            </div>
          ))
        ) : (
          <p>Nenhuma monitoria disponível.</p>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-serif p-6 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-6xl">Tutorzinho</h1>
        <div className="flex items-center space-x-3 bg-gray-800 px-4 py-2 rounded-lg shadow-md">
          <span className="text-lg font-semibold">
            {type} : {name}
          </span>
        </div>
      </div>
      <hr className="border-gray-700 w-full mb-6" />
      <p className="max-w-3xl text-center mb-10 self-center">
        Olá, este é o Tutorzinho, um site feito por Isaque Estolano de Souza
        para a criação/visualização do Back-End do projeto principal TutorTime
        que é feito com colaboração de Luis Henrique Abrantes e Cauã Almeida
        Moura
      </p>
      {html}
      {monitorias}
      <hr className="border-gray-700 w-full" />
    </div>
  );
}
