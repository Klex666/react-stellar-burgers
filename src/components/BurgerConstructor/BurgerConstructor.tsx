import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import data from '../../utils/data';

import styles from './BurgerConstructor.module.css';

const BurgerConstructor = () => {
  return (
    <section className={styles.burgerConstructor}>
      <div className="ml-8">
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
      </div>
      <div className={styles.cardSection}>
        {data.map((obj, id) => {
          if (obj.type !== 'top' && 'bottom') {
            return (
              <div className={styles.card} key={id}>
                <div className="mr-2 mt-8">
                  <DragIcon type="primary" />
                </div>
                <ConstructorElement
                  type={undefined}
                  isLocked={false}
                  text={obj.name}
                  thumbnail={obj.image_mobile}
                  price={obj.price}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="ml-8 mt-4">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
      </div>
      <div className={styles.orderSubmit}>
        <p className="text text_type_digits-medium">610</p>
        <div className="ml-2">
          <CurrencyIcon type="primary" />
        </div>
        <div className="ml-10">
          <Button type="primary" size="medium">
            Оформить заказ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BurgerConstructor;
