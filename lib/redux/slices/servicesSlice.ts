import { IServices } from "@/types/services";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ServicesSliceState {
  [key: string]: unknown;
  allServices: IServices[] | null;
  selectedServices: IServices | null;
}

interface UpdatedServiceStatePayload {
  name: keyof ServicesSliceState;
  value: unknown;
}

const initialState: ServicesSliceState = {
  allServices: null,
  selectedServices: null,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    updateServicesStateValues: (
      state,
      action: PayloadAction<UpdatedServiceStatePayload>
    ) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { updateServicesStateValues } = servicesSlice.actions;

export default servicesSlice.reducer;
