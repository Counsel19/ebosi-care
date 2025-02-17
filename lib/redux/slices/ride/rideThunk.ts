import axios, { AxiosError } from "axios";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { IRide } from "@/types/rides";

// Add a request interceptor
const axiosInstance = axios.create({
  baseURL: "https://api.ebosicare.com/api",
});
axiosInstance.interceptors.request.use(
  function (config) {
    const authToken = sessionStorage.getItem("token");

    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const bookARide = createAppAsyncThunk(
  "ride/bookARide",
  async (postPayload: IRide, thunkAPI) => {
    try {
      const res = await axiosInstance.post(
        `/rides`,

        postPayload
      );
      const rideData = res.data.data;

      return rideData;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(
          Object.values(error.response?.data)
            .map((item) => item)
            .join(" ")
        );
      }

      return thunkAPI.rejectWithValue("Could not Login User");
    }
  }
);

export const cancelRide = createAppAsyncThunk(
  "ride/cancelRide",
  async (
    postPayload: {
      reservation_number: string;
    },
    thunkAPI
  ) => {
    try {
      const res = await axios.post(
        `/rides/cancel-ride`,

        postPayload
      );

      const data = res.data;

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(
          Object.values(error.response?.data)
            .map((item) => item)
            .join(" ")
        );
      }

      return thunkAPI.rejectWithValue("Could not Cancel Ride");
    }
  }
);
