import "./css/Menu.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Menus from "../components/Menus.js";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const styles = {
  backgroundColor: "transparent",
  color: "#FBFCD4",
};

function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [foodname, setFoodName] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleSubChange(event) {
    const name = event.target.textContent;
    setFoodName(name);
    console.log(name);
  }

  return (
    <div className="menu">
      <Paper className={classes.root} style={styles} width="75%">
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { background: "#b8a60b" } }}
          textColor="inherit"
          centered
        >
          <Tab
            label="SILOG"
            name="silog"
            onClick={handleSubChange}
            className="menu-select"
          />
          <Tab
            label="OMELETTE"
            name="omelette"
            onClick={handleSubChange}
            className="menu-select"
          />
          <Tab
            label="SIZZLER"
            name="sizzler"
            onClick={handleSubChange}
            className="menu-select"
          />
          <Tab
            label="CHICKEN WINGS"
            name="wings"
            onClick={handleSubChange}
            className="menu-select"
          />
          <Tab
            label="OTHERS"
            name="others"
            onClick={handleSubChange}
            className="menu-select"
          />
        </Tabs>
      </Paper>
      <Menus name={foodname} />
    </div>
  );
}

export default Menu;
