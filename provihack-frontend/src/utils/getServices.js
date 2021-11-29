const baseURL = (categoria) =>
  `https://api-provihack-equipe05.herokuapp.com/servicos/${categoria}`;

async function getServices(categoria, token) {
  if (!categoria) return;

  try {
    const response = await fetch(baseURL(categoria), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const results = await response.json();

    return results;
  } catch (error) {
    console.log(error.message);
  }
}

export default getServices;
