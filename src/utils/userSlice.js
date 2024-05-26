<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUsers: (state, action) => {
      return action.payload;
    },
    removeUsers: () => {
      return null;
    },
  },
});

export const { addUsers, removeUsers } = userSlice.actions;
export default userSlice.reducer;
=======
import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUsers: (state, action) => {
            return action.payload;
        },
        removeUsers: (state, action) => {
            return null;
        }
    }
});

export const {addUsers, removeUsers} = userSlice.actions;
export default userSlice.reducer;
>>>>>>> a97b99f9e9b53f85a0dfe540ec605f2598d9256e
