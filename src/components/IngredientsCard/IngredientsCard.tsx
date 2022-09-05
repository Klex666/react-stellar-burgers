import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useMemo } from "react";

import styles from "./IngredientsCard.module.css";
import { ICard } from "../../utils/types";
import { useDrag } from "react-dnd";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const IngredientsCard: React.FC<ICard> = ({
  image,
  name,
  cost,
  onOpen,
  _id,
  type,
  price,
}) => {
  const { items } = useTypedSelector((store) => store.constructorSlice);

  const [{ opacity }, ref] = useDrag({
    type: "items",
    item: { _id, name, cost, image, type, price },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const counter = useMemo(
    () => items?.filter((item) => item._id === _id).length,
    [items]
  );

  return (
    <div
      className={styles.ingredientsCard}
      draggable={true}
      ref={ref}
      style={{ opacity: opacity }}
    >
      <article className={styles.card} onClick={onOpen}>
        <Counter count={counter} size="default" />
        <img src={image} alt={name} />
        <div className={styles.cost}>
          <p className="text text_type_main-default">{cost}</p>
          <div className={styles.costIcon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <p className="text text_type_main-default">{name}</p>
      </article>
    </div>
  );
};

export default IngredientsCard;
