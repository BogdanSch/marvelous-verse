import MD5 from "crypto-js/md5";

const VITE_REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
const VITE_REACT_APP_API_PUBLIC_KEY = import.meta.env
  .VITE_REACT_APP_API_PUBLIC_KEY;
const VITE_REACT_APP_API_PRIVATE_KEY = import.meta.env
  .VITE_REACT_APP_API_PRIVATE_KEY;

const getHash = (ts, privateKey, publicKey) => {
  return MD5(ts + privateKey + publicKey).toString();
};

const fetchHeroes = async (value) => {
  console.log(
    VITE_REACT_APP_BASE_URL,
    VITE_REACT_APP_API_PUBLIC_KEY,
    VITE_REACT_APP_API_PRIVATE_KEY
  );
  let heroUrl = `${VITE_REACT_APP_BASE_URL}/v1/public/characters`;

  let ts = Date.now().toString();
  let hash = getHash(
    ts,
    VITE_REACT_APP_API_PRIVATE_KEY,
    VITE_REACT_APP_API_PUBLIC_KEY
  );
  let url = `${heroUrl}?ts=${ts}&apikey=${VITE_REACT_APP_API_PUBLIC_KEY}&hash=${hash}&nameStartsWith=${value}`;

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
