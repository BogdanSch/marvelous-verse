import MD5 from "crypto-js/md5";

const VITE_REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
const VITE_REACT_APP_API_PUBLIC_KEY = import.meta.env
  .VITE_REACT_APP_API_PUBLIC_KEY;
const VITE_REACT_APP_API_PRIVATE_KEY = import.meta.env
  .VITE_REACT_APP_API_PRIVATE_KEY;

const timeStep = Date.now().toString();

const getHash = (ts, privateKey, publicKey) => {
  return MD5(ts + privateKey + publicKey).toString();
};

const fetchHeroes = async (value) => {
  let heroUrl = `${VITE_REACT_APP_BASE_URL}/v1/public/characters`;
  const hash = getHash(
    timeStep,
    VITE_REACT_APP_API_PRIVATE_KEY,
    VITE_REACT_APP_API_PUBLIC_KEY
  );
  let url = `${heroUrl}?ts=${timeStep}&apikey=${VITE_REACT_APP_API_PUBLIC_KEY}&hash=${hash}&nameStartsWith=${value}`;
  console.log("Request url heroes: ", url);
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.data.results);
    return data.data.results;
  } catch (err) {
    console.error(err);
    return;
  }
};
const fetchHero = async (characterId) => {
  let heroUrl = `${VITE_REACT_APP_BASE_URL}/v1/public/characters/${characterId}`;
  const hash = getHash(
    timeStep,
    VITE_REACT_APP_API_PRIVATE_KEY,
    VITE_REACT_APP_API_PUBLIC_KEY
  );
  let url = `${heroUrl}?ts=${timeStep}&apikey=${VITE_REACT_APP_API_PUBLIC_KEY}&hash=${hash}`;
  console.log(`Request url hero: ${url}`);
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.data.results);
    return data.data.results;
  } catch (err) {
    console.error(err);
    return;
  }
};
export { fetchHeroes, fetchHero };
