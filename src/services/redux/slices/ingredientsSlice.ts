import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../../utils/constants";
import { checkResponse } from "../../../utils/checkResponse";

export const getIngredients: AsyncThunk<any, any, any> = createAsyncThunk(
  "ingredients/getIngredients",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(apiUrl + "/ingredients");

      return await checkResponse(response);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  current: "Булки",
  data: [],
  status: "",
};

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    setCurrent(state, action) {
      state.current = action.payload;
    },
  },
  extraReducers: {
    [getIngredients.pending.type]: (state) => {
      state.status = "loading";
    },
    [getIngredients.rejected.type]: (state) => {
      state.status = "rejected";
    },
    [getIngredients.fulfilled.type]: (state, action) => {
      state.status = "success";
      state.data = action.payload.data;
    },
  },
});

export const ingredientsActions = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
