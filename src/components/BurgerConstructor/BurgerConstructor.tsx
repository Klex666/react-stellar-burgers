import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./BurgerConstructor.module.css";
import OrderDetails from "./OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { useDrop } from "react-dnd";
import { useCallback } from "react";
import ConstructorElementContainer from "./ConstructorElementContainer/ConstructorElementContainer";
import EmptyConstructor from "./EmptyConstructor/EmptyConstructor";
import { IConstructorIngredients, IIngredient } from "../../utils/types";

const BurgerConstructor = () => {
  const { isOpened } = useTypedSelector((store) => store.constructorModalSlice);
  const {
    openConstructorModal,
    closeConstructorModal,
    addItems,
    replaceBun,
    updateItems,
  } = useActions();
  const { items, totalPrice } = useTypedSelector(
    (store) => store.constructorSlice
  );

  const [, dropTarget] = useDrop({
    accept: "items",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item: any) {
      if (item.type === "bun") {
        replaceBun(item);
      } else {
        addItems(item);
      }
    },
  });

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragIngredient = items[dragIndex];
      const newIngredients = [...items];

      newIngredients.splice(dragIndex, 1);
      newIngredients.splice(hoverIndex, 0, dragIngredient);

      updateItems(newIngredients);
    },
    [items]
  );

  return (
    <section className={styles.burgerConstructor}>
      <div className="ml-9">
        {items.map((obj: IIngredient, index: number) => {
          if (obj.type === "bun" && index === 0) {
            return (
              <ConstructorElement
                key={obj._id}
                type={"top"}
                isLocked={true}
                text={obj.name + "(верх)"}
                thumbnail={obj.image}
                price={obj.price}
              />
            );
          }
          return null;
        })}
      </div>
      <div className={styles.cardSection} ref={dropTarget}>
        {items.length === 0 ? (
          <EmptyConstructor />
        ) : (
          items.map((obj: IConstructorIngredients, id: number) => {
            if (obj.type !== "bun") {
              return (
                <div className={styles.card} key={obj.uuid}>
                  <ConstructorElementContainer
                    item={obj}
                    index={id}
                    moveCard={moveCard}
                  />
                </div>
              );
            }
            return null;
          })
        )}
      </div>
      <div className="ml-8 mt-4">
        {items.map((obj: IIngredient, index: number) => {
          if (obj.type === "bun" && index === 1) {
            return (
              <ConstructorElement
                key={obj._id}
                type={"bottom"}
                isLocked={true}
                text={obj.name + "(низ)"}
                thumbnail={obj.image}
                price={obj.price}
              />
            );
          }
          return null;
        })}
      </div>
      <div className={styles.orderSubmit}>
        <p className="text text_type_digits-medium">{totalPrice}</p>
        <div className="ml-2">
          <CurrencyIcon type="primary" />
        </div>
        <div className="ml-10">
          {items.length <= 2 ? (
            <Button type="primary" size="medium">
              Оформить заказ
            </Button>
          ) : (
            <Button
              type="primary"
              size="medium"
              onClick={() => openConstructorModal()}
            >
              Оформить заказ
            </Button>
          )}
        </div>
      </div>
      {isOpened ? (
        <Modal
          title={""}
          isOpened={isOpened}
          closeModal={closeConstructorModal}
        >
          <OrderDetails />
        </Modal>
      ) : null}
    </section>
  );
};

export default BurgerConstructor;
