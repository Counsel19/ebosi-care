import { configureStore } from "@reduxjs/toolkit";

import ServicesSlice from "./slices/servicesSlice";
import AuthSlice from "./slices/auth/authSlice";
import RideSlice from "./slices/ride/rideSlice";

export const store = configureStore({
  reducer: {
    services: ServicesSlice,
    auth: AuthSlice,
    rides: RideSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
