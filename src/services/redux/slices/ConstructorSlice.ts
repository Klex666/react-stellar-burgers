import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IConstructorSlice } from "../../../utils/reducersTypes";
import { v4 as uuid } from "uuid";
import { orderUrl } from "../../../utils/constants";
import { IIngredient } from "../../../utils/types";

export const getOrderCode: AsyncThunk<any, any, any> = createAsyncThunk(
  "constructor/setOrderCode",
  async function (_: void, { rejectWithValue, getState }: any) {
    try {
      const response = await fetch(orderUrl, {
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
      if (!response.ok) {
        throw new Error("Error");
      }
      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: IConstructorSlice = {
  items: [
    {
      _id: "60d3b41abdacab0026a733c7",
      name: "Флюоресцентная булка R2-D3",
      cost: 988,
      image: "https://code.s3.yandex.net/react/code/bun-01.png",
      type: "bun",
      price: 988,
      index: 1,
    },
    {
      _id: "60d3b41abdacab0026a733c7",
      name: "Флюоресцентная булка R2-D3",
      cost: 988,
      image: "https://code.s3.yandex.net/react/code/bun-01.png",
      type: "bun",
      price: 988,
      index: 2,
    },
  ],
  totalPrice: 1976,
  currentElement: [],

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
    setCurrentElement(state, action) {
      state.currentElement = action.payload;
    },
    replaceItems(state, action) {
      state.items.splice(
        state.currentElement[0].index,
        0,
        action.payload.index
      );
    },
    deleteCurrentElement(state) {
      state.currentElement = [];
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
      state.items = [
        {
          _id: "60d3b41abdacab0026a733c7",
          name: "Флюоресцентная булка R2-D3",
          cost: 988,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          type: "bun",
          price: 988,
          index: 1,
        },
        {
          _id: "60d3b41abdacab0026a733c7",
          name: "Флюоресцентная булка R2-D3",
          cost: 988,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          type: "bun",
          price: 988,
          index: 2,
        },
      ];
      state.totalPrice = 1976;
    },
  },
});

export const constructorActions = constructorSlice.actions;

export default constructorSlice.reducer;
