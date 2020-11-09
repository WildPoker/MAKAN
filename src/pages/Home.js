import "./css/Home.css";
import Container from "@material-ui/core/Container";
import styles from "../components/styles.js";

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
          <h1>DJ's MAKAN</h1>
          <p>BLABLABLABLA I HAVE NOTHING TO APISCAC</p>
        </div>
      </Container>
    </div>
  );
}

export default Home;
