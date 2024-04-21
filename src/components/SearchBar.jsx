import React from "react";
import { useRef } from "react";

export default function SearchBar(props) {
  let queryInput = useRef("");

  function isNullOrWhitespace(input) {
    return !input || !input.trim();
  }

  const handleClick = async (event) => {
    event.preventDefault();
    let value = queryInput.current.value;

    if (isNullOrWhitespace(value)) return;
    try {
      let heroes = await fetchHeroes(value);
      props.setter(heroes);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form>
      <input type="text" placeholder="Search hero..." ref={queryInput} />
      <button onClick={handleClick}>Search Hero</button>
    </form>
  );
}
