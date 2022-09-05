import React from "react";
import styles from "./EmptyConstructor.module.css";

const EmptyConstructor = () => {
  return (
    <div className={styles.emptyConstructor}>
      <p className="text text_type_main-default text_color_inactive">
        Выберите ингредиенты..
      </p>
    </div>
  );
};

export default EmptyConstructor;
