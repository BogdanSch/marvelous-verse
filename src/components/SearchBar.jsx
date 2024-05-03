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
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="input-group w-50 mx-auto">
      <input
        type="text"
        className="form-control"
        placeholder="Search hero..."
        aria-label="Search hero..."
        aria-describedby="button-addon2"
        ref={queryInput}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        onClick={handleClick}
      >
        Search Hero
      </button>
    </div>
  );
}
