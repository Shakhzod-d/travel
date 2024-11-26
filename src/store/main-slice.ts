import { createSlice } from "@reduxjs/toolkit";
import { State } from "../types";



const initialState: State = {
  menu: false,
  modal: false,
  bookingModal: false,
  userRate: 0,
  activeCountry: '',
  district: '',
  category: '',
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
    openBookingModal: (state) => {
      state.bookingModal = true;
      body[0].classList.add('unscrollable')
    },
    closeBookingModal: (state) => {
      state.bookingModal = false;
      body[0].classList.remove('unscrollable')
    },
    rate: ( state, action ) => {
      state.userRate = action.payload
    },
    changeCountry: ( state, action ) => {
      state.activeCountry = action.payload
    },
    handleDistrict: ( state, action ) => {
      state.district = action.payload
    },
    handleCategory: ( state, action ) => {
      state.category = action.payload
    },
  },
});

export const { 
  openMenu, 
  closeMenu, 
  openModal, 
  closeModal, 
  rate, 
  changeCountry,
  handleDistrict,
  handleCategory,
  openBookingModal,
  closeBookingModal
} =
mainSlice.actions;


export default mainSlice.reducer;
