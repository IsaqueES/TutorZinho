import { ArrowLeft, Mail, Lock, LogIn as LogInIcon } from "lucide-react";

export default function Login() {
  console.log(window.location.href);
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const response = await fetch(
      `http://localhost:3000/checklogin?email=${email}&password=${password}`
    );
    const userdata = await response.json();

    if (userdata) {
      localStorage.setItem("name", userdata.User_Name);
      localStorage.setItem("email", userdata.User_Email);
      localStorage.setItem("password", userdata.User_Password);
      localStorage.setItem("type", userdata.User_Type);
      localStorage.setItem("id", userdata.id);
      window.location = "/";
    } else {
      // Handle login error
      console.log("Usuário ou senha incorretos");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Entrar</h1>
          <p className="text-gray-400">Acesse sua conta para continuar.</p>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-gray-800 rounded-lg shadow-lg p-8 space-y-6"
        >
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-300 flex items-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-300 flex items-center"
            >
              <Lock className="w-4 h-4 mr-2" />
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors flex items-center justify-center"
          >
            <LogInIcon className="w-4 h-4 mr-2" />
            Entrar
          </button>

          <p className="text-center text-sm text-gray-400">
            Não tem uma conta?{" "}
            <a href="/register" className="text-purple-400 hover:underline">
              Registre-se
            </a>
          </p>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-purple-400 hover:text-purple-300 transition-colors text-sm flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}
