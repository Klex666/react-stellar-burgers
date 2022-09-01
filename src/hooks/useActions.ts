import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { modalConstructorActions } from "../services/redux/slices/ConstructorModalSlice";
import { modalActions } from "../services/redux/slices/IngredientsModalSlice";
import { constructorActions } from "../services/redux/slices/ConstructorSlice";
import { ingredientsActions } from "../services/redux/slices/ingredientsSlice";

const allActions = {
  ...modalConstructorActions,
  ...modalActions,
  ...constructorActions,
  ...ingredientsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
