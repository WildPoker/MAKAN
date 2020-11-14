import Grid from "@material-ui/core/Grid";
import "./css/FoodsInfo.css";

function FoodsInfo(props) {
  return (
    <Grid container>
      <Grid item lg={7}>
        <div
          style={{
            height: "500px",
            backgroundColor: "black",
          }}
        ></div>
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
