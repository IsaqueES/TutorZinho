export default function AddCourse() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white font-serif p-6">
      <h1 className="text-5xl mb-6">Criar Curso</h1>
      <form
        action="http://localhost:3000/addcourse"
        method="post"
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center"
      >
        <h3 className="text-xl mt-4 mb-3">Formulario de criação de Curso</h3>
        <input
          className="w-full mb-3 p-3 rounded border border-gray-700 bg-gray-900 placeholder-gray-400"
          type="text"
          placeholder="Nome do Curso"
          name="name"
        />

        <button
          type="submit"
          className="bg-white text-gray-900 py-3 rounded hover:bg-gray-200 transition"
        >
          Criar
        </button>
      </form>
    </div>
  );
}
