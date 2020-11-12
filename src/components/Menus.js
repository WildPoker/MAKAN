import foods from "../components/Foods.js";

function Menus() {
  return (
    <div className="menu-selection">
      {foods.map((foodItem, index) => {
        return <a name={foodItem.title}>{foodItem.name}</a>;
      })}
    </div>
  );
}

export default Menus;
