import axios, { AxiosError } from "axios";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { ILogin, IRegister } from "@/types/users";

const baseUrl = "https://api.ebosicare.com/api";

// Add a request interceptor
const axiosInstance = axios.create({
  baseURL: "https://api.ebosicare.com/api",
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

export const login = createAppAsyncThunk(
  "auth/login",
  async (postPayload: ILogin, thunkAPI) => {
    try {
      const res = await axios.post(
        `${baseUrl}/login`,

        postPayload
      );
      const userData = res.data;

      sessionStorage.setItem("user", JSON.stringify(userData?.user));
      sessionStorage.setItem("token", userData?.token);

      return userData;
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

export const register = createAppAsyncThunk(
  "auth/register",
  async (postPayload: IRegister, thunkAPI) => {
    try {
      const res = await axios.post(
        `${baseUrl}/register`,

        postPayload
      );

      const userData = res.data;

      sessionStorage.setItem("user", JSON.stringify(userData?.user));
      sessionStorage.setItem("token", userData?.token);
      return userData;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(
          Object.values(error.response?.data)
            .map((item) => item)
            .join(" ")
        );
      }

      return thunkAPI.rejectWithValue("Could not Register User");
    }
  }
);

export const forgotPassswordHandler = createAppAsyncThunk(
  "auth/forgotPasssword",
  async (email: string, thunkAPI) => {
    try {
      const res = await axios.post(
        `${baseUrl}/forgot-password`,

        { email }
      );

      return { user: res.data.data };
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(
          Object.values(error.response?.data)
            .map((item) => item)
            .join(" ")
        );
      }
      return thunkAPI.rejectWithValue("Could Request Password Reset");
    }
  }
);

export interface IResetPassword {
  otp: string;
  password: string;
  password_confirmation: string;
}

export const resetPassword = createAppAsyncThunk(
  "auth/resetPassword",
  async (data: IResetPassword, thunkAPI) => {
    try {
      const res = await axios.post(
        `${baseUrl}/reset-password`,

        data
      );

      return { user: res.data.data };
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data?.message);
      }
      return thunkAPI.rejectWithValue("Could not Reset password");
    }
  }
);

export const updateUserProfileDetails = createAppAsyncThunk(
  "auth/updateUserProfileDetails",
  async (
    data: {
      name: string;
      email: string;
      phone: string;
      address: string;
      lga_id: string;
      state_id: string;
    },
    thunkAPI
  ) => {
    try {
      const res = await axiosInstance.post(`/user/update/profile`, data);
      const userProfileRetrieved = sessionStorage.getItem("userProfile");

      if (userProfileRetrieved) {
        sessionStorage.setItem(
          "userProfile",
          JSON.stringify({
            ...JSON.parse(userProfileRetrieved),
            ...res.data?.data,
          })
        );
      }

      return { user: res.data.data };
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data?.message);
      }
      return thunkAPI.rejectWithValue("Could not Update your profile");
    }
  }
);
