import axios, { AxiosError } from "axios";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";

const baseUrl = "http://34.234.91.143/api";

// Add a request interceptor
const axiosInstance = axios.create({
  baseURL: "http://34.234.91.143/api",
});
axiosInstance.interceptors.request.use(
  function (config) {
    const authToken = sessionStorage.getItem("authToken");

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

export const getServices = createAppAsyncThunk(
  "service/getAllServices",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${baseUrl}/services`);
      const serviceData = res.data;

      return serviceData;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(
          Object.values(error.response?.data)
            .map((item) => item)
            .join(" ")
        );
      }

      return thunkAPI.rejectWithValue("Could not fetch Service");
    }
  }
);
