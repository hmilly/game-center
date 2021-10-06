import * as React from "react";
import Layout from "../components/Layout";
import { Container, Header } from "../styles/Game.details.styled"
import { Grid } from "../styles/Game.content.styled"
import mole from "../images/mole.jpg";
import snake from "../images/snake.jpg";

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <Header>
          <h1>Retro games</h1>
          <p>Welcome! View available games below</p>
        </Header>
        <Grid>
          <div>
            <h3>Whack-a-Mole</h3>
            <img src={mole} alt="Mole"></img>
            <p>Classic arcade game, whack-a-mole. Can you catch him?</p>
          </div>
          <div>
            <h3>Snake</h3>
            <img src={snake} alt="snake"></img>
            <p>Back from the 90's, how long can you survive!</p>
          </div>
          {/* <div>
            <h3></h3>
            <img></img>
            <p></p>
          </div>
          <div>
            <h3></h3>
            <img></img>
            <p></p>
          </div> */}
        </Grid>
      </Container>
    </Layout>
  );
};

export default IndexPage;
