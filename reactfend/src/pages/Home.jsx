export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-serif p-6 flex flex-col items-center">
      <h1 className="text-6xl mb-6">Tutorzinho</h1>
      <hr className="border-gray-700 w-full mb-6" />
      <p className="max-w-3xl text-center mb-10">
        Olá, este é o Tutorzinho, um site feito por Isaque Estolano de Souza
        para a criação/visualização do Back-End do projeto principal TutorTime
        que é feito com colaboração de Luis Henrique Abrantes e Cauã Almeida
        Moura
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mb-10">
        <a
          href="/course"
          className="bg-gray-800 hover:bg-gray-700 text-white py-6 px-4 rounded-lg shadow-lg text-center transition"
        >
          Criar Curso
        </a>
        <a
          href="/user"
          className="bg-gray-800 hover:bg-gray-700 text-white py-6 px-4 rounded-lg shadow-lg text-center transition"
        >
          Criar Usuário
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

      <hr className="border-gray-700 w-full" />
    </div>
  );
}
