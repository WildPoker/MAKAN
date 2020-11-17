import "./css/Menu.css";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Menus from "../components/Menus.js";

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
  const [value, setValue] = useState(0);
  const [foodname, setFoodName] = useState("");
  const [isExpanded, setExpanded] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleSubChange(event) {
    const name = event.target.textContent;
    setFoodName(name);
    console.log(name);
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="menu">
      <Paper
        className={classes.root}
        style={styles}
        width="75%"
        onClick={expand}
      >
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
      {isExpanded && <Menus name={foodname} inExpand={isExpanded} />}
    </div>
  );
}

export default Menu;
