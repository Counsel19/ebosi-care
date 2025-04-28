import { createSlice } from "@reduxjs/toolkit";

interface ModalSliceState {
  locale: string;
}

const initialState: ModalSliceState = {
  locale: "en",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    updateLocale: (state, action) => {
      if (action.payload) {
        state.locale = action.payload;
      }
    },
  },
});

export const { updateLocale } = modalSlice.actions;

export default modalSlice.reducer;
