let API_URL = process.env.REACT_APP_BASE_URL;

const fetchHeroes = async (value) => {
  let heroUrl = `${API_URL}/v1/public/characters`;

  let ts = Date.now().toString();
  const REACT_APP_API_PUBLIC_KEY = process.env.REACT_APP_API_PUBLIC_KEY;
  const REACT_APP_API_PRIVATE_KEY = process.env.REACT_APP_API_PRIVATE_KEY;
  let hash = getHash(ts, REACT_APP_API_PRIVATE_KEY, REACT_APP_API_PUBLIC_KEY);
  let url = `${heroUrl}?ts=${ts}&apikey=${REACT_APP_API_PUBLIC_KEY}&hash=${hash}&nameStartsWith=${value}`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};

export default fetchHeroes;
