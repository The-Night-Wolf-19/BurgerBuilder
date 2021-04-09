import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styles from "./Burger.module.css";

const Burger = (props) => {
  const transformedIngredient = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, ele) => {
      return arr.concat(ele);
    }, []);
  // console.log(transformedIngredient);
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredient.length ? (
        transformedIngredient
      ) : (
        <p>Please add an ingredient</p>
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
