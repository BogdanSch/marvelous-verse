import React, { useRef } from "react";
import { fetchHeroes } from "../lib/utils.js";

import Image from "./Image.jsx";
import searchIcon from "../assets/images/icons/search-heart-fill.svg";

export default function SearchBar(props) {
  let queryInput = useRef("");

  function isNullOrWhitespace(input) {
    return !input || !input.trim();
  }

  const handleClick = async (event) => {
    event.preventDefault();
    let value = queryInput.current.value.trim().toLowerCase();

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
        <Image src={searchIcon} alt="Search Icon" className="search-icon" />
      </button>
    </div>
  );
}
