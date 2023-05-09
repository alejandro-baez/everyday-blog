import { configureStore } from "@reduxjs/toolkit";
import authorsSlice from "../features/authors/authorsSlice";
import authSlice from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    authors: authorsSlice,
    auth: authSlice,
  },
});

export * from "../features/auth/authSlice"