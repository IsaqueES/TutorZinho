import { ArrowLeft, User, Mail, Lock, UserCheck } from "lucide-react";

export default function AddUser() {
  // SUA LÓGICA ORIGINAL MANTIDA EXATAMENTE COMO NO CÓDIGO FONTE
  const Login = async (event) => {
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const type = form.type.value;
    const response = await fetch("http://localhost:3000/apiuser");
    const data = await response.json();
    const id = data.length + 1;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("type", type);
    localStorage.setItem("id", id);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Criar Conta</h1>
          <p className="text-gray-400">Junte-se à nossa plataforma.</p>
        </div>

        <form
          onSubmit={Login}
          action="http://localhost:3000/adduser"
          method="post"
          className="bg-gray-800 rounded-lg shadow-lg p-8 space-y-6"
        >
          {/* Name Input */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-300 flex items-center"
            >
              <User className="w-4 h-4 mr-2 text-gray-400" />
              Nome Completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome completo"
              required
              className="w-full bg-gray-700 border-2 border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-300 flex items-center"
            >
              <Mail className="w-4 h-4 mr-2 text-gray-400" />
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              required
              className="w-full bg-gray-700 border-2 border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-300 flex items-center"
            >
              <Lock className="w-4 h-4 mr-2 text-gray-400" />
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full bg-gray-700 border-2 border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* User Type Selection */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-300 flex items-center">
              <UserCheck className="w-4 h-4 mr-2 text-gray-400" />
              Tipo de Usuário
            </label>
            <div className="flex items-center gap-6 pt-1">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="Aluno"
                  required
                  className="mr-2 h-4 w-4 accent-purple-500"
                />
                <span className="text-gray-200">Aluno</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="Professor"
                  required
                  className="mr-2 h-4 w-4 accent-purple-500"
                />
                <span className="text-gray-200">Professor</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
          >
            Criar Conta
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-400">
            Já tem uma conta?{" "}
            <a
              href="/login"
              className="text-purple-400 hover:underline font-semibold"
            >
              Entrar
            </a>
          </p>
        </form>

        {/* Back Link */}
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
