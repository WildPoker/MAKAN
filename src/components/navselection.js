import styles from "../components/styles.js";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import RestaurantMenuOutlinedIcon from "@material-ui/icons/RestaurantMenuOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Nav from "react-bootstrap/Nav";

//List of Header Buttons
function Navselection() {
  return (
    <Nav className="mr-auto">
      <Nav.Link href="#features" style={styles.customText}>
        <HomeOutlinedIcon />
        <a>Home</a>
      </Nav.Link>
      <Nav.Link href="#pricing" className="nav-text" style={styles.customText}>
        <RestaurantMenuOutlinedIcon />
        <a>Menu</a>
      </Nav.Link>
      <Nav.Link href="#pricing" className="nav-text" style={styles.customText}>
        <InfoOutlinedIcon />
        <a>About</a>
      </Nav.Link>
    </Nav>
  );
}

export default Navselection;
