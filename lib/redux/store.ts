import { configureStore } from "@reduxjs/toolkit";

import ServicesSlice from "./slices/servicesSlice";

export const store = configureStore({
  reducer: {
    services: ServicesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
