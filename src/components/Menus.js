import foods from "../components/Foods.js";
import FoodsInfo from "../pages/FoodsInfo.js";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
function Menus(props) {
  //Changing the menu selection when clicking a different parents button
  const [foodName, setFoodName] = useState("");

  function handleOnClick(event) {
    const name = event.target.name;
    setFoodName(name);
  }

  return (
    <div>
      <div className="menu-selection">
        <div className="menu-buttons">
          {foods.map((foodItem, index) => {
            if (foodItem.title === props.name) {
              return foodItem.foodNames.map((name) => {
                return (
                  <a onClick={handleOnClick} key={props.id} name={name}>
                    {name}
                  </a>
                );
              });
            }
          })}
        </div>
      </div>
      <FoodsInfo name={foodName} />
    </div>
  );
}

export default Menus;
