import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice named "config" using createSlice
const configSlice = createSlice({
  name: "config",
  initialState: {
    // Initial state with a default language code "en"
    lang: "en",
  },
  reducers: {
    // Reducer function to handle language changes
    changeLanguage: (state, action) => {
      // Update the lang property in the state with the payload of the action
      state.lang = action.payload;
    },
  },
});

// Export the changeLanguage action creator
export const { changeLanguage } = configSlice.actions;

// Export the reducer function created by createSlice
export default configSlice.reducer;
