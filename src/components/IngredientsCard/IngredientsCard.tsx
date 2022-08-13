import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';

import styles from './IngredientsCard.module.css';
import { ICard } from '../../utils/types';

const IngredientsCard: React.FC<ICard> = ({ image, name, cost }) => {
  return (
    <div className={styles.ingredientsCard}>
      <article className={styles.card}>
        <Counter count={1} size="default" />
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
