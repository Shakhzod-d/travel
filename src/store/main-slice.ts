import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Bool {
  dashboardProgress: boolean;
  sidebarActive: boolean;
  MCompanyPages: string;
}

const initialState: Bool = {
  dashboardProgress: false,
  sidebarActive: true,
  MCompanyPages: "company",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    dashboardProgressActive: (state) => {
      state.dashboardProgress = !state.dashboardProgress;
    },
    sidebarToggle: (state, action: PayloadAction<boolean>) => {
      state.sidebarActive = action.payload;
    },
    setTabPages: (state, action: PayloadAction<string>) => {
      state.MCompanyPages = action.payload;
    },
  },
});

export const { dashboardProgressActive, sidebarToggle, setTabPages } =
mainSlice.actions;


export default mainSlice.reducer;
