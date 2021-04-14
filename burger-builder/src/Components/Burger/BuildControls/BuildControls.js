import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import styles from "./BuildControls.module.css";

const controls = [
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p>
        Total Price: INR <strong>{props.price}</strong>
      </p>
      {controls.map((element) => (
        <BuildControl
          key={element.label}
          label={element.label}
          added={() => props.ingredientAdded(element.type)}
          removed={() => props.ingredientRemoved(element.type)}
          disabled={props.disabled[element.type]}
        />
      ))}
    </div>
  );
};

export default BuildControls;
