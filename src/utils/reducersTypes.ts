import {IConstructorIngredients } from "./types";

export interface IConstructorSlice {
  items: IConstructorIngredients[];
  totalPrice: number;
  orderCode: number;
  status: string;
}



