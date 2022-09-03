import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect, useRef } from "react";
import { IIngredient } from "../../utils/types";
import IngredientsCard from "../IngredientsCard/IngredientsCard";
import Modal from "../Modal/Modal";

import styles from "./BurgerIngredients.module.css";
import IngredientDetails from "./IngredientDetails/IngredientDetails";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { getIngredients } from "../../services/redux/slices/ingredientsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../services/redux/store";
import { useInView } from "react-intersection-observer";

const BurgerIngredients = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { current, data } = useTypedSelector((store) => store.ingredientsSlice);
  const { isOpened, selectedItem } = useTypedSelector(
    (store) => store.ingredientsModalSlice
  );
  const [refBun, inViewBuns, entryBuns] = useInView({ threshold: 0 });
  const [refSauce, inViewSauce, entrySauce] = useInView({ threshold: 0 });
  const [refIngredient, inViewIngredient, entryIngredient] = useInView({
    threshold: 0,
  });

  const { openModal, closeModal, setCurrent } = useActions();

  const handleClick = (value: string, ref: any) => {
    setCurrent(value);
    ref.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(getIngredients(null));
  }, [dispatch]);

  useEffect(() => {
    if (inViewBuns) {
      setCurrent("Булки");
    } else if (inViewSauce) {
      setCurrent("Соусы");
    } else if (inViewIngredient) {
      setCurrent("Начинки");
    }
  }, [inViewIngredient, inViewSauce, inViewBuns]);

  return (
    <section className="mt-10">
      <p className="text text_type_main-large">Соберите бургер</p>
      <div className={styles.tabs}>
        <Tab
          value="Булки"
          active={current === "Булки"}
          onClick={() => handleClick("Булки", entryBuns?.target)}
        >
          Булки
        </Tab>
        <Tab
          value="Соусы"
          active={current === "Соусы"}
          onClick={() => handleClick("Соусы", entrySauce?.target)}
        >
          Соусы
        </Tab>
        <Tab
          value="Начинки"
          active={current === "Начинки"}
          onClick={() => handleClick("Начинки", entryIngredient?.target)}
        >
          Начинки
        </Tab>
      </div>
      <div className="mt-10">
        <div className={styles.ingredientsSection}>
          <p className="text text_type_main-medium" ref={refBun}>
            Булки
          </p>
          <div className={styles.cardSection}>
            {data?.map((obj: IIngredient) => {
              if (obj.type === "bun") {
                return (
                  <IngredientsCard
                    cost={obj.price}
                    key={obj._id}
                    {...obj}
                    onOpen={() => openModal(obj)}
                  />
                );
              }
              return null;
            })}
          </div>
          <p className="text text_type_main-medium mt-10" ref={refSauce}>
            Соусы
          </p>
          <div className={styles.cardSection}>
            {data?.map((obj: IIngredient) => {
              if (obj.type === "sauce") {
                return (
                  <IngredientsCard
                    key={obj._id}
                    {...obj}
                    cost={obj.price}
                    onOpen={() => openModal(obj)}
                  />
                );
              }
              return null;
            })}
          </div>
          <p className="text text_type_main-medium mt-10" ref={refIngredient}>
            Начинки
          </p>
          <div className={styles.cardSection}>
            {data?.map((obj: IIngredient) => {
              if (obj.type === "main") {
                return (
                  <IngredientsCard
                    key={obj._id}
                    {...obj}
                    cost={obj.price}
                    onOpen={() => openModal(obj)}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
      {isOpened ? (
        <Modal
          title={"Детали ингредиента"}
          isOpened={isOpened}
          closeModal={closeModal}
        >
          {selectedItem ? <IngredientDetails item={selectedItem} /> : null}
        </Modal>
      ) : null}
    </section>
  );
};

export default BurgerIngredients;
