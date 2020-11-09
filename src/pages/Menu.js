import "./css/Menu.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const styles = {
  backgroundColor: "transparent",
  color: "gold",
};

function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    const name = event.target.innerHTML;
    setValue(newValue);
  };
  return (
    <div className="menu">
      <Paper className={classes.root} style={styles}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          centered
        >
          <Tab label="SILOG" name="silog" />
          <Tab label="OMELETTE" name="omelette" />
          <Tab label="SIZZLER" name="sizzler" />
          <Tab label="CHICKEN WINGS" name="wings" />
          <Tab label="OTHERS" name="others" />
        </Tabs>
      </Paper>
    </div>
  );
}

export default Menu;
