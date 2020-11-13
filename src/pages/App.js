import "./css/App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Menu from "./Menu.js";
import FoodsInfo from "./FoodsInfo.js";

//------------ MAIN BODY --------------
//Returning all the pages
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Menu />
      <FoodsInfo />
    </div>
  );
}

export default App;
