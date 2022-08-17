import React from 'react';
import { IIngredientDetails } from '../../../utils/types';

import styles from './IngredientDetails.module.css';

const IngredientDetails: React.FC<IIngredientDetails> = ({ item }) => {
  return (
    <div className={styles.ingredientDetails}>
      <img src={item.image_large} alt={item.name} />
      <p className="text text_type_main-medium mt-4">{item.name}</p>
      <div className={styles.columns}>
        <div className={styles.column}>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_main-default text_color_inactive">{item.calories}</p>
        </div>
        <div className={styles.column}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_main-default text_color_inactive">{item.proteins}</p>
        </div>
        <div className={styles.column}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_main-default text_color_inactive">{item.fat}</p>
        </div>
        <div className={styles.column}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_main-default text_color_inactive">{item.carbohydrates}</p>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;
