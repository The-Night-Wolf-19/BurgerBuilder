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
      {controls.map((element) => (
        <BuildControl key={element.label} label={element.label} />
      ))}
    </div>
  );
};

export default BuildControls;
