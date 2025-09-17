export default function AddUser() {
  const Login = (event) => {
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const type = form.type.value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("type", type);
    //! FAZER ISSO AE PFVR ISAQUE ASKDKASASDAKSd
    localStorage.setItem("id", id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-800/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent tracking-tight mb-4">
            Junte-se
          </h1>
          <p className="text-xl text-gray-300">
            Crie sua conta e comece a aprender
          </p>
          <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-32 mx-auto mt-6"></div>
        </div>

        {/* Register Form */}
        <div className="w-full max-w-md">
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border-b border-gray-700/50 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center text-3xl mx-auto mb-4">
                ✨
              </div>
              <h2 className="text-2xl font-bold text-white">Criar Conta</h2>
            </div>

            {/* Form Content */}
            <form
              onSubmit={Login}
              action="http://localhost:3000/adduser"
              method="post"
              className="p-8 space-y-6"
            >
              {/* Name Input */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 flex items-center"
                >
                  <span className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center text-xs mr-2">
                    👤
                  </span>
                  Nome Completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome completo"
                  required
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-700/70"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 flex items-center"
                >
                  <span className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-xs mr-2">
                    📧
                  </span>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-700/70"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-300 flex items-center"
                >
                  <span className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center text-xs mr-2">
                    🔒
                  </span>
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-700/70"
                />
              </div>

              {/* User Type Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-300 flex items-center">
                  <span className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center text-xs mr-2">
                    🎭
                  </span>
                  Tipo de Usuário
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="Aluno"
                      required
                      className="sr-only peer"
                    />
                    <div className="bg-gray-700/50 border border-gray-600/50 peer-checked:bg-purple-600/30 peer-checked:border-purple-500 rounded-2xl p-4 text-center transition-all duration-300 hover:bg-gray-700/70">
                      <div className="text-2xl mb-2">🎓</div>
                      <span className="text-white font-medium">Aluno</span>
                    </div>
                  </label>
                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="Professor"
                      required
                      className="sr-only peer"
                    />
                    <div className="bg-gray-700/50 border border-gray-600/50 peer-checked:bg-purple-600/30 peer-checked:border-purple-500 rounded-2xl p-4 text-center transition-all duration-300 hover:bg-gray-700/70">
                      <div className="text-2xl mb-2">👨‍🏫</div>
                      <span className="text-white font-medium">Professor</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Login Link */}
              <div className="text-center py-2">
                <a
                  href="/login"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm"
                >
                  Já tem uma conta?{" "}
                  <span className="font-semibold underline">Entrar</span>
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-2">🚀</span>
                  Criar Conta
                  <span className="ml-2">✨</span>
                </span>
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <a
              href="/"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Voltar ao início
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
