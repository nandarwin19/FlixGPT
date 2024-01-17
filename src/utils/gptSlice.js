import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTMovies: (state, action) => {
      const { movieNames, gptMovies } = action.payload;
      state.gptMovies = gptMovies;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGptSearchView, addGPTMovies } = gptSlice.actions;
export default gptSlice.reducer;
