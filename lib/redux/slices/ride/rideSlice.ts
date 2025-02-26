import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookARide, cancelRide, getSingleRide } from "./rideThunk";
import { IRide, ISingleRide } from "@/types/rides";

interface RideSliceState {
  [key: string]: unknown;
  bookingDetails: IRide | null;
  singleRide: ISingleRide | null;
  isLoading: boolean;
  error: string;
}

interface UpdatedRideStatePayload {
  name: keyof RideSliceState;
  value: unknown;
}

const initialState: RideSliceState = {
  singleRide: null,
  bookingDetails: {
    pickup_location: "",
    dropoff_location: "",
    schedule_type: "scheduled",
    ride_date: "",
    ride_time: "",
    apartment: "",
    service_id: "",
    is_self_booking: false,
    amount: 0,
    passengers: 0,
    luggage: 0,
    user_details: {
      name: "",
      email: "",
      mobile_number: "",
    },
  },
  isLoading: false,
  error: "",
};

const rideSlice = createSlice({
  name: "rides",
  initialState,
  reducers: {
    updateRideStateValues: (
      state,
      action: PayloadAction<UpdatedRideStatePayload>
    ) => {
      state[action.payload.name] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleRide.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleRide.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleRide = action.payload;
      })
      .addCase(getSingleRide.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "";
      })

      .addCase(bookARide.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(bookARide.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(bookARide.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "";
      })

      .addCase(cancelRide.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(cancelRide.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(cancelRide.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "";
      });
  },
});

export const { updateRideStateValues } = rideSlice.actions;

export default rideSlice.reducer;
