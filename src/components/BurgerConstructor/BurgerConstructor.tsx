import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./BurgerConstructor.module.css";
import OrderDetails from "./OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { useDrop } from "react-dnd";
import { IConstructorIngredients } from "../../utils/reducersTypes";
import { getOrderCode } from "../../services/redux/slices/ConstructorSlice";

const BurgerConstructor = () => {
  const { isOpened } = useTypedSelector((store) => store.constructorModalSlice);
  const {
    openConstructorModal,
    closeConstructorModal,
    addItems,
    deleteItem,
    replaceBun,
    setCurrentElement,
    deleteCurrentElement,
    replaceItems,
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

  return (
    <section className={styles.burgerConstructor}>
      <div className="ml-9">
        {items.map((obj: IConstructorIngredients, index: number) => {
          if (obj.type === "bun" && index === 0) {
            return (
              <ConstructorElement
                key={obj._id}
                type={"top"}
                isLocked={true}
                text={obj.name}
                thumbnail={obj.image}
                price={obj.price}
              />
            );
          }
          return null;
        })}
      </div>
      <div className={styles.cardSection} ref={dropTarget}>
        {items.map((obj: IConstructorIngredients, id: number) => {
          if (obj.type !== "bun") {
            return (
              <div
                draggable={true}
                key={id}
                onDragStart={() => setCurrentElement(obj)}
                onDragEnd={() => deleteCurrentElement()}
                onDrag={() => replaceItems(obj)}
              >
                <div className={styles.card} key={id}>
                  <div className="mr-2 mt-8">
                    <DragIcon type="primary" />
                  </div>
                  <ConstructorElement
                    type={undefined}
                    isLocked={false}
                    text={obj.name}
                    thumbnail={obj.image}
                    price={obj.price}
                    handleClose={() => deleteItem(obj)}
                  />
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="ml-8 mt-4">
        {items.map((obj: IConstructorIngredients, index: number) => {
          if (obj.type === "bun" && index === 1) {
            return (
              <ConstructorElement
                key={obj._id}
                type={"bottom"}
                isLocked={true}
                text={obj.name}
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
          {items.length === 2 ? (
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
