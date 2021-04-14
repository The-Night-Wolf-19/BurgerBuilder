import React, { Component } from "react";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Auxiliary from "../../hoc/Auxiliary";

const INGREDIENT_PRICES = {
  cheese: 10,
  meat: 20,
  bacon: 15,
  salad: 10,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      bacon: 0,
      salad: 0,
      meat: 0,
    },
    totalPrice: 20,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const price = this.state.totalPrice + INGREDIENT_PRICES[type];
    const upgradedIngredients = {
      ...this.state.ingredients,
    };
    upgradedIngredients[type] = updatedCount;
    this.setState({ totalPrice: price, ingredients: upgradedIngredients });
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount > 0) {
      const updatedCount = oldCount - 1;
      const price = this.state.totalPrice - INGREDIENT_PRICES[type];
      const upgradedIngredients = {
        ...this.state.ingredients,
      };
      upgradedIngredients[type] = updatedCount;
      this.setState({ totalPrice: price, ingredients: upgradedIngredients });
    }
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
