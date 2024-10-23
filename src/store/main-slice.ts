import { createSlice } from "@reduxjs/toolkit";
import { State } from "../types";



const initialState: State = {
  menu: false
};

let body = document.getElementsByTagName('body')

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.menu = true;
      body[0].classList.add('unscrollable')
    },
    closeMenu: (state) => {
      state.menu = false;
      body[0].classList.remove('unscrollable')
    }
  },
});

export const { openMenu, closeMenu } =
mainSlice.actions;


export default mainSlice.reducer;
