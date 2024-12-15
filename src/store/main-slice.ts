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
  serviceId: '',
  start: '',
  tourModal: false,
  id1: 0,
  picturesModal: false,
  picturesGallery: false,
  activeThumb: 0,
  tourSlug: '',
  modalType: '',
  galleryType: '',
  includedActive: '',
  days1: 0
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
    openTourModal: (state) => {
      state.tourModal = true;
      body[0].classList.add('unscrollable')
    },
    closeTourModal: (state) => {
      state.tourModal = false;
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
    handleServiceId: ( state, action ) => {
      state.serviceId = action.payload
    },
    handleStart: ( state, action ) => {
      state.start = action.payload
    },
    handleId: ( state, action ) => {
      state.id1 = action.payload
    },
    changePicturesModal: ( state ) => {
      state.picturesModal = !state.picturesModal
    },
    handleGallery: ( state ) => {
      state.picturesGallery = !state.picturesGallery
    },
    changeActiveThumb: ( state, action ) => {
      state.activeThumb = action.payload
    },
    handleTourSlug: ( state, action ) => {
      state.tourSlug = action.payload
    },
    handleModalType: ( state, action ) => {
      state.modalType = action.payload
    },
    handleGalleryType: ( state, action ) => {
      state.galleryType = action.payload
    },
    handleIncludedActive: ( state, action ) => {
      state.includedActive = action.payload
    },
    handleDays: ( state, action ) => {
      state.days1 = action.payload
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
  closeBookingModal,
  handleServiceId,
  handleStart,
  openTourModal,
  closeTourModal,
  handleId,
  changePicturesModal,
  handleGallery,
  changeActiveThumb,
  handleTourSlug,
  handleModalType,
  handleGalleryType,
  handleIncludedActive,
  handleDays
} =
mainSlice.actions;


export default mainSlice.reducer;
