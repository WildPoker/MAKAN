import foods from "../components/Foods.js";

function Menus(props) {
  return (
    <div className="menu-selection">
      {foods.map((foodItem, index) => {
        if (foodItem.title === props.name) {
          return (
            <a name={foodItem.title} href="">
              {foodItem.name}
            </a>
          );
        }
      })}
    </div>
  );
}

export default Menus;
