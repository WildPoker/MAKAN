import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../pages/img/nav-logo.png";
import Navselection from "../components/navselection";
import styles from "../components/styles.js";

// --------------- HEADER ---------------
// Logo and the list of the header
function Selection() {
  return (
    <div className="container-top">
      <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar">
        <Navbar.Brand href="#home" style={styles.customButton}>
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="dropdown"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navselection />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
//----------------------------------------
export default Selection;
