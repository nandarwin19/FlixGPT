import { createSlice } from "@reduxjs/toolkit";
const signoutSlice = createSlice({
  name: "popover",
  initialState: {
    popoverBox: false,
  },
  reducers: {
    togglePopover: (state) => {
      state.popoverBox = !state.popoverBox;
    },
  },
});

export const { togglePopover } = signoutSlice.actions;
export default signoutSlice.reducer;
