import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../../../utils/constants";

export const ingredientsApi = createApi({
  reducerPath: "ingredientsApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getIngredients: builder.query({
      query: () => "/ingredients",
    }),
  }),
});

export const { useGetIngredientsQuery } = ingredientsApi;
