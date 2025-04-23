import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  updateUserProfileDetails,
  forgotPassswordHandler,
  resetPassword,
  register,
} from "./authThunk";
import { IUser } from "@/types/users";

interface profileSliceState {
  userProfile: IUser | null;
  isLoading: boolean;
  token: string | null;
  otp: string;
  showLoginModal: boolean;
  error: string;
}

// type UserProfileKeys = keyof UserProfile;

const userRetrieved =
  typeof window !== "undefined" ? sessionStorage.getItem("user") : null;

const initialState: profileSliceState = {
  userProfile: userRetrieved ? JSON.parse(userRetrieved) : null,
  isLoading: false,
  token:
    typeof window !== "undefined" ? sessionStorage.getItem("token") || "" : "",
  otp: "",
  showLoginModal: true,
  error: "",
};

const profileSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveOtp: (state, action) => {
      state.otp = action.payload;
    },

    setShowLoginModal: (state, action) => {
      state.showLoginModal = action.payload;
    },

    logout: (state) => {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
      state.userProfile = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfile = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "";
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfile = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "";
      })
      .addCase(forgotPassswordHandler.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassswordHandler.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(forgotPassswordHandler.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(resetPassword.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(updateUserProfileDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfileDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfile = { ...state.userProfile, ...action.payload.user };
      })
      .addCase(updateUserProfileDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "";
      });
  },
});

export const { saveOtp, logout, setShowLoginModal } = profileSlice.actions;

export default profileSlice.reducer;
