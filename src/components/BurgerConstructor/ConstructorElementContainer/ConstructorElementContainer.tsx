import type { Identifier } from "dnd-core";
import React, { useRef } from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { IConstructorElementContainer } from "../../../utils/types";
import { useDrag, useDrop, XYCoord } from "react-dnd";
import { IConstructorIngredients } from "../../../utils/reducersTypes";
import { useActions } from "../../../hooks/useActions";

import styles from "./ConstructorElementContainer.module.css";

const ConstructorElementContainer: React.FC<IConstructorElementContainer> = ({
  item,
  index,
  moveCard,
}) => {
  const { deleteItem } = useActions();

  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<
    IConstructorIngredients,
    void,
    { handlerId: Identifier | null }
  >({
    accept: "ingredient",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: IConstructorIngredients, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "ingredient",
    item: () => {
      return { id: item._id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div
      ref={ref}
      data-handler-id={handlerId}
      style={{ opacity: opacity }}
      className={styles.wrapper}
    >
      <div className="mr-2 mt-8">
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={item.name}
        thumbnail={item.image}
        price={item.price}
        handleClose={() => deleteItem(item)}
      />
    </div>
  );
};

export default ConstructorElementContainer;
