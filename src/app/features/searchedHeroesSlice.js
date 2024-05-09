import { createSlice } from "@reduxjs/toolkit";

export const searchedHeroesSlice = createSlice({
  name: "searchedHeroes",
  initialState: {
    value: [],
  },
  reducers: {
    setSearchedHeroes: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchedHeroes } = searchedHeroesSlice.actions;

export default searchedHeroesSlice.reducer;
