import React, { useRef } from "react";

import { fetchHeroes } from "../lib/utils.js";

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
      // const hero = await fetchHero(value);
      // props.setter(hero);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search hero..."
        name="searchHeroInput"
        ref={queryInput}
      />
      <button onClick={handleClick}>Search Hero</button>
    </form>
  );
}
