export interface ICard extends IIngredient {
  cost: number;
  onOpen: () => void;
}

export interface IIngredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

export interface IBurgerIngredients {
  data: IIngredient[];
}

export interface IModal {
  setIsOpened: Function;
  isOpened: boolean;
  title: string;
}

export interface IModalOverlay {
  handleClose: Function;
}

export interface IIngredientDetails {
  item: IIngredient;
}
