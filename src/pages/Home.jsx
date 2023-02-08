import React, { useEffect, useState } from 'react';

import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Categories from '../components/Categories';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://63e0dbc765b57fe6064b0ad9.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((pizza) => {
              return <PizzaBlock key={pizza.id} {...pizza} />;
            })}
      </div>
    </>
  );
};

export default Home;
