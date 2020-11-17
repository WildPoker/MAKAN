import styles from "../components/styles.js";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import RestaurantMenuOutlinedIcon from "@material-ui/icons/RestaurantMenuOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import { NearMeTwoTone } from "@material-ui/icons";
import { Link } from "react-scroll";

//List of Header Buttons
function Navselection() {
  return (
    <Nav className="mr-auto">
      <Nav.Link name="Home" style={styles.customText}>
        <Link>
          <HomeOutlinedIcon />
          <a>Home</a>
        </Link>
      </Nav.Link>
      <Nav.Link name="Menu" className="nav-text" style={styles.customText}>
        <RestaurantMenuOutlinedIcon />
        <a>Menu</a>
      </Nav.Link>
      <Nav.Link
        name="About"
        href="#pricing"
        className="nav-text"
        style={styles.customText}
      >
        <InfoOutlinedIcon />
        <a>About</a>
      </Nav.Link>
    </Nav>
  );
}

export default Navselection;
