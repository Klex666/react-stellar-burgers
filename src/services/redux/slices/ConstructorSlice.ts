import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IConstructorSlice } from "../../../utils/reducersTypes";
import { v4 as uuid } from "uuid";
import { IIngredient } from "../../../utils/types";
import { apiUrl } from "../../../utils/constants";
import { checkResponse } from "../../../utils/checkResponse";

export const getOrderCode: AsyncThunk<any, any, any> = createAsyncThunk(
  "constructor/setOrderCode",
  async function (_: void, { rejectWithValue, getState }: any) {
    try {
      const response = await fetch(apiUrl + "/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          ingredients: getState().constructorSlice.items.map(
            (item: IIngredient) => item._id
          ),
        }),
      });
      return await checkResponse(response);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: IConstructorSlice = {
  items: [],
  totalPrice: 0,

  status: "",
  orderCode: 0,
};

export const constructorSlice = createSlice({
  name: "constructor",
  initialState,
  reducers: {
    addItems(state, action) {
      state.items.push({
        ...action.payload,
        index: uuid(),
      });
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    deleteItem(state, action) {
      state.items = state.items.filter(
        (obj) => obj.index !== action.payload.index
      );
      state.totalPrice = state.totalPrice - action.payload.price;
    },
    replaceBun(state, action) {
      state.items[0] = action.payload;
      state.items[1] = action.payload;
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    updateItems(state, action) {
      state.items = action.payload;
    },
    setOrderCode(state, action) {
      state.orderCode = action.payload;
    },
  },
  extraReducers: {
    [getOrderCode.pending.type]: (state: { status: string }) => {
      state.status = "loading";
    },
    [getOrderCode.rejected.type]: (state) => {
      state.status = "rejected";
    },
    [getOrderCode.fulfilled.type]: (state, action) => {
      state.status = "success";
      state.orderCode = action.payload.order.number;
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const constructorActions = constructorSlice.actions;

export default constructorSlice.reducer;
