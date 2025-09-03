export default function AddUser() {
  const Login = async (event) => {
    event.preventDefault();
    const inputEmail = document.getElementById("email").value;
    const inputPassWord = document.getElementById("password").value;
    const response = await fetch(
      `http://localhost:3000/checklogin?email=${inputEmail}&password=${inputPassWord}`
    );
    const userdata = await response.json();
    if (userdata == null) {
      console.log("Usuario Incorreto");
    } else {
      localStorage.setItem("name", userdata.User_Name);
      localStorage.setItem("email", userdata.User_Email);
      localStorage.setItem("password", userdata.User_Password);
      localStorage.setItem("type", userdata.User_Type);
      window.location = "/";
    }
  };
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white font-serif p-6">
      <h1 className="text-5xl mb-6">Login</h1>
      <form
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={Login}
      >
        <input
          className="w-full mb-3 p-3 rounded border border-gray-700 bg-gray-900 placeholder-gray-400"
          type="text"
          placeholder="Email"
          name="email"
          id="email"
          required
        />
        <input
          className="w-full mb-3 p-3 rounded border border-gray-700 bg-gray-900 placeholder-gray-400"
          type="password"
          placeholder="Senha"
          name="password"
          id="password"
          required
        />
        <a href="/register">Não tem uma conta?Registre-se</a>
        <button
          type="submit"
          className="w-full bg-white text-gray-900 py-3 rounded hover:bg-gray-200 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
