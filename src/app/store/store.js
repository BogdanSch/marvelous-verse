import { configureStore } from "@reduxjs/toolkit";

import searchedHeroesSlice from "../features/searchedHeroesSlice.js";
import searchedHeroSlice from "../features/searchedHeroSlice.js";
import showModalSlice from "../features/showModalSlice.js";

export default configureStore({
  reducer: {
    searchedHeroes: searchedHeroesSlice,
    searchedHero: searchedHeroSlice,
    showModal: showModalSlice,
  },
});
