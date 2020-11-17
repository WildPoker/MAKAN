import foods from "../components/Foods.js";
import FoodsInfo from "../pages/FoodsInfo.js";
import { useState } from "react";
import Grow from "@material-ui/core/Grow";

function Menus(props) {
  //Changing the menu selection when clicking a different parents button
  const [foodName, setFoodName] = useState("none");

  function handleOnClick(event) {
    const name = event.target.name;
    setFoodName(name);
  }

  return (
    <Grow in={props.inExpand}>
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
    </Grow>
  );
}

export default Menus;
