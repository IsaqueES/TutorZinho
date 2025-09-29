export async function fetchAPI(url, setState) {
  try {
    const resposta = await fetch(url);
    const data = await resposta.json();
    setState(data)
  } catch (error) {
    setState("DEU ERRO => " + error);
  }
}
