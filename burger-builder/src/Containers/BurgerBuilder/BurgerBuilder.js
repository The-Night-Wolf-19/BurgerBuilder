import React, { Component } from "react";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Auxiliary from "../../hoc/Auxiliary";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      bacon: 0,
      salad: 0,
      meat: 0,
    },
  };
  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
