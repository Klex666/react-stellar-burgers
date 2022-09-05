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

export interface IModal {
  title: string;
  isOpened: boolean;
  closeModal: () => void;
}

export interface IModalOverlay {
  closePopup: Function;
}

export interface IIngredientDetails {
  item: any;
}

export interface IConstructorElementContainer {
  item: IIngredient;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

export interface IConstructorIngredients extends IIngredient {
  index: number;
}
