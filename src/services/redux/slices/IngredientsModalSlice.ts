import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItem: {},
  isOpened: false,
};

export const ingredientsModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpened = true;
      state.selectedItem = action.payload;
    },
    closeModal(state) {
      state.isOpened = false;
      state.selectedItem = {};
    },
  },
});

export const modalActions = ingredientsModalSlice.actions;

export default ingredientsModalSlice.reducer;
