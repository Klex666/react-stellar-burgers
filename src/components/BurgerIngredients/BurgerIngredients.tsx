import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import IngredientsCard from '../IngredientsCard/IngredientsCard';
import data from '../../utils/data';

import burgerIngredientsStyle from './BurgerIngredients.module.css';

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('Булки');

  return (
    <section className="mt-10">
      <p className="text text_type_main-large">Соберите бургер</p>
      <div style={{ display: 'flex' }} className="mt-5">
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
        <div className={burgerIngredientsStyle.ingredientsSection}>
          <p className="text text_type_main-medium">Булки</p>
          <div className={burgerIngredientsStyle.cardSection}>
            {data.map((obj, id) => {
              if (obj.type === 'bun') {
                return <IngredientsCard key={id} image={obj.image} name={obj.name} cost={20} />;
              }
              return null;
            })}
          </div>
          <p className="text text_type_main-medium mt-10">Соусы</p>
          <div className={burgerIngredientsStyle.cardSection}>
            {data.map((obj, id) => {
              if (obj.type === 'sauce') {
                return <IngredientsCard key={id} image={obj.image} name={obj.name} cost={30} />;
              }
              return null;
            })}
          </div>
          <p className="text text_type_main-medium mt-10">Начинки</p>
          <div className={burgerIngredientsStyle.cardSection}>
            {data.map((obj, id) => {
              if (obj.type === 'main') {
                return <IngredientsCard key={id} image={obj.image} name={obj.name} cost={40} />;
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BurgerIngredients;
