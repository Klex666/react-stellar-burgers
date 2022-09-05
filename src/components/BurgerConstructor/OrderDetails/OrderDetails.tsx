import styles from "./OrderDetails.module.css";

import doneIcon from "../../../images/OrderDetails/done.png";
import { useEffect } from "react";

import { getOrderCode } from "../../../services/redux/slices/ConstructorSlice";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../services/redux/store";
const OrderDetails = () => {
  const { orderCode } = useTypedSelector((state) => state.constructorSlice);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getOrderCode(null));
  }, [dispatch]);

  return (
    <div className={styles.orderDetails}>
      <div className={styles.orderNumber}>
        <p className="text text_type_digits-large">{orderCode}</p>
      </div>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img src={doneIcon} alt="Иконка готово" className="mt-15" />
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mb-30 mt-2">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
