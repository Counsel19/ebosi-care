import { IServices } from "@/types/services";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getServices } from "./serviceThunk";

interface ServicesSliceState {
  [key: string]: unknown;
  allServices: IServices[] | null;
  selectedServices: IServices | null;
  isLoading: boolean;
  error: string;
}

interface UpdatedServiceStatePayload {
  name: keyof ServicesSliceState;
  value: unknown;
}

const initialState: ServicesSliceState = {
  allServices: null,
  selectedServices: null,
  error: "",
  isLoading: false,
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
  extraReducers: (builder) => {
    builder
      .addCase(getServices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allServices = action.payload;
      })
      .addCase(getServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "";
      });
  },
});

export const { updateServicesStateValues } = servicesSlice.actions;

export default servicesSlice.reducer;
