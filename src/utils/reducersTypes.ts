import { IIngredient } from "./types";

export interface IConstructorSlice {
  items: IConstructorIngredients[];
  totalPrice: number;
  currentElement: IConstructorIngredients[];
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
}
