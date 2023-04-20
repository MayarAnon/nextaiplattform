import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/cardSlice";

export const store = configureStore({
  reducer: {
    card: cardSlice,
  },
});
