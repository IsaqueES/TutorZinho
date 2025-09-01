export async function fetchAPIArray(url, setState) {
  try {
    const resposta = await fetch(url);
    const data = await resposta.json();
    console.log("Dados recebidos da API:", data); // ✅ veja aqui o que vem
    setState(data); // mantém como array
  } catch (error) {
    console.error("Erro:", error);
    setState([]);
  }
}

