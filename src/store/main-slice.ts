import { createSlice } from "@reduxjs/toolkit";
import { State } from "../types";



const initialState: State = {
  menu: false
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.menu = true;
    },
    closeMenu: (state) => {
      state.menu = false;
    }
  },
});

export const { openMenu, closeMenu } =
mainSlice.actions;


export default mainSlice.reducer;
