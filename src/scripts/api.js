function fetchApi() {
  return fetch("https://openmusic-fake-api.onrender.com/api/musics");
}

export async function getAlbumList() {
  try {
    let apiResponse = await fetchApi();
    let data = apiResponse.json();
    return data;
  } catch (err) {
    throw new Error("Erro na requisição");
  }
}