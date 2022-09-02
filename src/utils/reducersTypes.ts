import { IIngredient } from "./types";

export interface IConstructorSlice {
  items: IConstructorIngredients[];
  totalPrice: number;
  orderCode: number;
  status: string;
}

export interface IConstructorIngredients extends IIngredient {
  uuid: number;
}
