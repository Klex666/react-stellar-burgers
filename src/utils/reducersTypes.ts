import { IConstructorIngredients } from "./types";

export interface IConstructorSlice {
  items: IConstructorIngredients[];
  totalPrice: number;
  orderCode: number;
  status: string;
}
<<<<<<< HEAD
=======

export interface IConstructorIngredients extends IIngredient {
  index: number;
}
>>>>>>> 4d3cc2369d741dcc35c9f7d683ecc44d05a7c2e2
