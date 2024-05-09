import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setSearchedHeroes } from "../app/features/searchedHeroesSlice.js";
import { fetchHeroes } from "../lib/utils.js";

import Image from "./Image.jsx";
import searchIcon from "../assets/images/icons/search-heart-fill.svg";

export default function SearchBar() {
  let queryInput = useRef("");
  const dispatch = useDispatch();

  function isNullOrWhitespace(input) {
    return !input || !input.trim();
  }

  const handleHeroSearch = async (event) => {
    event.preventDefault();
    let value = queryInput.current.value.trim().toLowerCase();

    if (isNullOrWhitespace(value)) return;
    try {
      let heroes = await fetchHeroes(value);
      dispatch(setSearchedHeroes(heroes));
    } catch (err) {
      console.error(err);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleHeroSearch(event);
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
        onKeyDown={handleKeyDown}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        onClick={handleHeroSearch}
      >
        <Image src={searchIcon} alt="Search Icon" className="search-icon" />
      </button>
    </div>
  );
}
