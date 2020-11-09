import styles from "../components/styles.js";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import RestaurantMenuOutlinedIcon from "@material-ui/icons/RestaurantMenuOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import { NearMeTwoTone } from "@material-ui/icons";

//List of Header Buttons
function Navselection() {
  //Changing the style of the text when hovered or not
  const [style, setStyle] = useState(false);

  function handleHover(event) {
    const type = event.type;
    const name = event.target.name;

    setStyle((prevValue) => {
      if (type === "mouseenter") {
        ...prevValue,
        [name]
      } else if (type === "mouseleave") {
      }
    });
  }

  function handleHoverOut() {
    setStyle(false);
  }
  return (
    <Nav className="mr-auto">
      <Nav.Link
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        name="Home"
        href="#features"
        style={style ? styles.customTextHover : styles.customText}
      >
        <HomeOutlinedIcon />
        <a>Home</a>
      </Nav.Link>
      <Nav.Link
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        name="Menu"
        href="#pricing"
        className="nav-text"
        style={style ? styles.customTextHover : styles.customText}
      >
        <RestaurantMenuOutlinedIcon />
        <a>Menu</a>
      </Nav.Link>
      <Nav.Link
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        name="About"
        href="#pricing"
        className="nav-text"
        style={style ? styles.customTextHover : styles.customText}
      >
        <InfoOutlinedIcon />
        <a>About</a>
      </Nav.Link>
    </Nav>
  );
}

export default Navselection;
