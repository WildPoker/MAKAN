import "./css/App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Menu from "./Menu.js";
import FoodsInfo from "./FoodsInfo.js";
import Footer from "./Footer.js";

//------------ MAIN BODY --------------
//Returning all the pages
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Menu />
    </div>
  );
}

export default App;
