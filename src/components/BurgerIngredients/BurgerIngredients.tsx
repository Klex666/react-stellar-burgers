import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { IBurgerIngredients, IIngredient } from '../../utils/types';
import IngredientsCard from '../IngredientsCard/IngredientsCard';
import Modal from '../Modal/Modal';

import styles from './BurgerIngredients.module.css';
import IngredientDetails from './IngredientDetails/IngredientDetails';

const BurgerIngredients: React.FC<IBurgerIngredients> = ({ data }) => {
  const [current, setCurrent] = useState('Булки');
  const [isOpened, setIsOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IIngredient>();

  const onOpen = (obj: IIngredient) => {
    setIsOpened(true);
    setSelectedItem(obj);
  };

  const closePopup = () => {
    setIsOpened(false);
  };

  return (
    <section className="mt-10">
      <p className="text text_type_main-large">Соберите бургер</p>
      <div className={styles.tabs}>
        <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className="mt-10">
        <div className={styles.ingredientsSection}>
          <p className="text text_type_main-medium">Булки</p>
          <div className={styles.cardSection}>
            {data.map((obj) => {
              if (obj.type === 'bun') {
                return (
                  <IngredientsCard cost={20} key={obj._id} {...obj} onOpen={() => onOpen(obj)} />
                );
              }
              return null;
            })}
          </div>
          <p className="text text_type_main-medium mt-10">Соусы</p>
          <div className={styles.cardSection}>
            {data.map((obj) => {
              if (obj.type === 'sauce') {
                return (
                  <IngredientsCard key={obj._id} {...obj} cost={30} onOpen={() => onOpen(obj)} />
                );
              }
              return null;
            })}
          </div>
          <p className="text text_type_main-medium mt-10">Начинки</p>
          <div className={styles.cardSection}>
            {data.map((obj) => {
              if (obj.type === 'main') {
                return (
                  <IngredientsCard key={obj._id} {...obj} cost={40} onOpen={() => onOpen(obj)} />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
      {isOpened ? (
        <Modal isOpened={isOpened} closePopup={closePopup} title={'Детали ингредиента'}>
          {selectedItem ? <IngredientDetails item={selectedItem} /> : null}
        </Modal>
      ) : null}
    </section>
  );
};

export default BurgerIngredients;
