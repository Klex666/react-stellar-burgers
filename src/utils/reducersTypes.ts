import { IIngredient } from "./types";

export interface IConstructorSlice {
  items: IConstructorIngredients[];
  totalPrice: number;
  orderCode: number;
  status: string;
}

export interface IConstructorIngredients {
  _id: string;
  name: string;
  cost: number;
  image: string;
  type: string;
  price: number;
  index: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  image_mobile: string;
  image_large: string;
  __v: number;
}
