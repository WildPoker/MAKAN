import Grid from "@material-ui/core/Grid";
import "./css/FoodsInfo.css";
import React, { useState } from "react";
import Tapsilog from "./img/Tapsilog.png";
import Buffalo from "./img/Buffalo.jpg";

function FoodsInfo(props) {
  const foods = { Tapsilog, Buffalo };
  const [foodImg, setfoodImg] = useState(false);

  function handleSrc(event) {
    if (props.name === "Tapsilog") {
      setfoodImg(true);
    }
  }

  return (
    <Grid container>
      <Grid item lg={7}>
        <div
          style={{
            height: "500px",
            backgroundColor: "transparent",
          }}
        >
          <img
            src={foodImg ? Tapsilog : null}
            width="871.72px"
            height="500px"
          />
        </div>
      </Grid>
      <Grid item lg={5}>
        <div
          style={{
            height: "500px",
            backgroundColor: "white",
          }}
        >
          <h1>{props.name}</h1>
        </div>
      </Grid>
    </Grid>
  );
}

export default FoodsInfo;
