import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../pages/img/nav-logo.png";
import Navselection from "../components/navselection";
import styles from "../components/styles.js";
import { useState } from "react";

// --------------- HEADER ---------------
// Logo and the list of the header
function Selection() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 800) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className="container-top">
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed={navbar ? "top" : null}
        className={navbar ? "navbar active" : "navbar"}
      >
        <Navbar.Brand href="#" style={styles.customButton}>
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
