export default function AddUser() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white font-serif p-6">
      <h1 className="text-5xl mb-6">Criar Usuário</h1>
      <form
        action="http://localhost:3000/adduser"
        method="post"
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h3 className="text-xl mb-4">Formulario de Criação de Usuario</h3>
        <input
          className="w-full mb-3 p-3 rounded border border-gray-700 bg-gray-900 placeholder-gray-400"
          type="text"
          placeholder="Nome"
          name="name"
        />
        <input
          className="w-full mb-3 p-3 rounded border border-gray-700 bg-gray-900 placeholder-gray-400"
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          className="w-full mb-3 p-3 rounded border border-gray-700 bg-gray-900 placeholder-gray-400"
          type="password"
          placeholder="Senha"
          name="password"
        />
        <div className="mb-3">
          <label className="mr-4">
            <input className="mr-1" type="radio" name="type" value="Aluno" />
            Aluno
          </label>
          <label>
            <input
              className="mr-1"
              type="radio"
              name="type"
              value="Professor"
            />
            Professor
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-white text-gray-900 py-3 rounded hover:bg-gray-200 transition"
        >
          Criar Usuário
        </button>
      </form>
    </div>
  );
}
