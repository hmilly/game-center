import * as React from "react";
import { useState } from "react";
import { Container } from "../styles/Container.styled";
import mole from "../images/mole.png";

const IndexPage = () => {
  const [hole, setHole] = useState(<img src={mole} alt="mole" />);

  return (
    <Container>
      <header>
        <title>Main Page</title>
        <h1>Whack-a-Mole</h1>
        <p>Get him!</p>
      </header>
      <ul>
        <li>{hole}</li>
        <li>
          <img src={mole} alt="mole" />
        </li>
        <li>{hole}</li>
        <li>{hole}</li>
        <li>{hole}</li>
        <li>{hole}</li>
        <li>{hole}</li>
        <li>{hole}</li>
        <li>{hole}</li>
      </ul>
    </Container>
  );
};

export default IndexPage;
