import React from "react";

import styles from './FoodOrders.module.css';
import FoodOrder from "./FoodOrder";

const Foods = [
  {
    id: "1",
    title: "sushi",
    description: "japanese sea food",
    cost: 20.5,
  },
  {
    id: "2",
    title: "Hamburger",
    description: "meat sandwich",
    cost: 15.7,
  },
  {
    id: "3",
    title: "Pizza",
    description: "itian food",
    cost: 10,
  },
];

const FoodOrders = () => {
  return (
    <div className={styles.box} >
      {Foods.map((food) => {
        return <FoodOrder key={food.id} food={food} />;
      })}
    </div>
  );
};

export default FoodOrders;
