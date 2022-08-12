import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import headerStyle from './AppHeader.module.css';

const AppHeader = () => {
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.container}>
        <nav className={headerStyle.navigation}>
          <ul className={headerStyle.list}>
            <li className={headerStyle.list__item}>
              <div className="mr-2">
                <BurgerIcon type="primary" />
              </div>
              <p className="text text_type_main-default">Конструктор</p>
            </li>
            <li className={headerStyle.list__item}>
              <div className="mr-2">
                <ListIcon type="secondary" />
              </div>
              <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
            </li>
          </ul>
          <div className={headerStyle.logo}>
            <Logo />
          </div>
          <div className={headerStyle.login}>
            <div className="mr-2">
              <ProfileIcon type="secondary" />
            </div>
            <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
