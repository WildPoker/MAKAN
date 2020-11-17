import "./css/Home.css";
import Container from "@material-ui/core/Container";
import styles from "../components/styles.js";
import LightSpeed from "react-reveal/LightSpeed";

//--------------- HOME INFO ----------------
//Returning Home Elements
function Home() {
  return (
    <div className="home">
      <Container
        className="container-home"
        maxWidth="sm"
        style={styles.customWidth}
      >
        <div class="bg-image"></div>
        <div class="bg-text">
          <LightSpeed left>
            <h1>DJ's MAKAN</h1>
          </LightSpeed>
          <p>BLABLABLABLA I HAVE NOTHING TO SAY</p>
        </div>
        <hr />
      </Container>
    </div>
  );
}

export default Home;
