import { configureStore } from "@reduxjs/toolkit";

import searchedHeroesSlice from "../features/searchedHeroesSlice.js";

export default configureStore({
  reducer: { searchedHeroes: searchedHeroesSlice },
});
