import styles from './App.module.css';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { useEffect, useState } from 'react';

function App() {
  const apiUrl = 'https://norma.nomoreparties.space/api/ingredients';
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      fetch(apiUrl)
        .then((res) => {
          if (!res.ok) {
            console.log(`error ${res.statusText}`);
          }
          return res.json();
        })
        .then((data) => {
          setData(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getData();
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <div className={styles.container}>
        <main>
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </main>
      </div>
    </div>
  );
}

export default App;
