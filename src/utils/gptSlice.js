import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptMovies: null,
    movieNames: null,
  },
  reducers: {
    addGPTMovies: (state, action) => {
      const { movieNames, gptMovies } = action.payload;
      state.gptMovies = gptMovies;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGptSearchView, addGPTMovies } = gptSlice.actions;
export default gptSlice.reducer;
