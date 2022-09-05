import { configureStore } from "@reduxjs/toolkit";
import constructorSlice from "./slices/ConstructorSlice";
import ingredientsModalSlice from "./slices/IngredientsModalSlice";
import constructorModalSlice from "./slices/ConstructorModalSlice";
import ingredientsSlice from "./slices/ingredientsSlice";

export const store = configureStore({
  reducer: {
    constructorSlice,
    ingredientsModalSlice,
    constructorModalSlice,
    ingredientsSlice,
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
