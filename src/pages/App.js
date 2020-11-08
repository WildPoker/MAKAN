import "./css/App.css";
import Header from "./Header.js";
import Home from "./Home.js";

//------------ MAIN BODY --------------
//Returning all the pages
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
