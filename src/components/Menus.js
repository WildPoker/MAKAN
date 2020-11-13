import foods from "../components/Foods.js";

function Menus(props) {
  return (
    <div className="menu-selection">
      {foods.map((foodItem, index) => {
        if (foodItem.title === props.name) {
          return foodItem.foodNames.map((name) => {
            return (
              <a href="" name={name}>
                {name}
              </a>
            );
          });
        }
      })}
    </div>
  );
}

export default Menus;
