import { configureStore } from "@reduxjs/toolkit";
import booleanReducer from "./main-slice";

export const store = configureStore({
  reducer: {
    booleans: booleanReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
