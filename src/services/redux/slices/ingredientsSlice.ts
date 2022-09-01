import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: "Булки",
};

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    setCurrent(state, action) {
      state.current = action.payload;
    },
  },
});

export const ingredientsActions = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
