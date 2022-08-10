import React from 'react';

import appStyle from './App.module.css';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className={appStyle.container}>
        <main>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </div>
    </div>
  );
}

export default App;
