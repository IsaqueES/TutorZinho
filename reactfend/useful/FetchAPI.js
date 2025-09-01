export async function fetchAPI(url, setState) {
  try {
    const resposta = await fetch(url);
    const data = await resposta.json();
    setState(JSON.stringify(data, null, 2)); // JSON bonitinho
  } catch (error) {
    setState("DEU ERRO > " + error);
  }
}
