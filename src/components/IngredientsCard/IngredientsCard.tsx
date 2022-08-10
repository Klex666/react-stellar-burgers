import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';

import IngredientsCardStyles from './IngredientsCard.module.css';

interface ICard {
  image: string;
  name: string;
  cost: number;
}

const IngredientsCard: React.FC<ICard> = ({ image, name, cost }) => {
  return (
    <div className={IngredientsCardStyles.ingredientsCard}>
      <article className={IngredientsCardStyles.card}>
        <Counter count={1} size="default" />
        <img src={image} alt="" />
        <div className={IngredientsCardStyles.cost}>
          <p className="text text_type_main-default">{cost}</p>
          <div className={IngredientsCardStyles.costIcon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <p className="text text_type_main-default">{name}</p>
      </article>
    </div>
  );
};

export default IngredientsCard;
