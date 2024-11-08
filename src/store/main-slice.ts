import { createSlice } from "@reduxjs/toolkit";
import { State } from "../types";



const initialState: State = {
  menu: false,
  modal: false,
  userRate: 0,
  activeCountry: "Uzbekistan"
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
    },
    openModal: (state) => {
      state.modal = true;
      body[0].classList.add('unscrollable')
    },
    closeModal: (state) => {
      state.modal = false;
      body[0].classList.remove('unscrollable')
    },
    rate: ( state, action ) => {
      state.userRate = action.payload
    },
    changeCountry: ( state, action ) => {
      state.activeCountry = action.payload
    }
  },
});

export const { openMenu, closeMenu, openModal, closeModal, rate, changeCountry } =
mainSlice.actions;


export default mainSlice.reducer;
