import { configureStore } from "@reduxjs/toolkit";

import searchedHeroesSlice from "../features/searchedHeroesSlice.js";
import searchedHeroSlice from "../features/searchedHeroSlice.js";

export default configureStore({
  reducer: { searchedHeroes: searchedHeroesSlice, searchedHero: searchedHeroSlice },
});
