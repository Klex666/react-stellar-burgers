import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { IBurgerIngredients } from '../../utils/types';

import styles from './BurgerConstructor.module.css';
import OrderDetails from './OrderDetails/OrderDetails';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const BurgerConstructor: React.FC<IBurgerIngredients> = ({ data }) => {
  const [isOpened, setIsOpened] = useState(false);

  const closePopup = () => {
    setIsOpened(false);
  };

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
          if (obj.name !== 'Краторная булка N-200i' && obj.name !== 'Флюоресцентная булка R2-D3') {
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
          <Button type="primary" size="medium" onClick={() => setIsOpened(true)}>
            Оформить заказ
          </Button>
        </div>
      </div>
      {isOpened ? (
        <Modal closePopup={closePopup} isOpened={isOpened} title={''}>
          <OrderDetails />
        </Modal>
      ) : null}
    </section>
  );
};

export default BurgerConstructor;
