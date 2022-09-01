import { configureStore } from "@reduxjs/toolkit";
import { ingredientsApi } from "./api/ingredientsApi";
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
    [ingredientsApi.reducerPath]: ingredientsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ingredientsApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
