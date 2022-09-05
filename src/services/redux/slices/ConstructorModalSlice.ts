import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
};

export const constructorModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openConstructorModal(state) {
      state.isOpened = true;
    },
    closeConstructorModal(state) {
      state.isOpened = false;
    },
  },
});

export const modalConstructorActions = constructorModalSlice.actions;

export default constructorModalSlice.reducer;
