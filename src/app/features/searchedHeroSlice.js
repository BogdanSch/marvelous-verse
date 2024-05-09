import { createSlice } from "@reduxjs/toolkit";

export const searchedHeroSlice = createSlice({
  name: "searchedHero",
  initialState: {
    value: [],
  },
  reducers: {
    setSearchedHero: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchedHero } = searchedHeroSlice.actions;

export default searchedHeroSlice.reducer;
