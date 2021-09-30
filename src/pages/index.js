import * as React from "react";
import { useState } from "react";
import { Container } from "../styles/Container.styled";
import mole from "../images/mole.png";

const IndexPage = () => {
  const [hole, setHole] = useState(true);

  const int = () => {};

  return (
    <Container>
      <header>
        <title>Main Page</title>
        <h1>Whack-a-Mole</h1>
        <p>Get him!</p>
      </header>
      <ul>
        <li>
          {hole && <img src={mole} alt="mole" />}
          <span>🕳️</span>
        </li>
        <li>
          {hole && <img src={mole} alt="mole" />}
          <span>🕳️</span>
        </li>
        <li>
          {hole && <img src={mole} alt="mole" />}
          <span>🕳️</span>
        </li>
        <li>
          {hole && <img src={mole} alt="mole" />}
          <span>🕳️</span>
        </li>
        <li>
          {hole && <img src={mole} alt="mole" />}
          <span>🕳️</span>
        </li>
        <li>
          {hole && <img src={mole} alt="mole" />}
          <span>🕳️</span>
        </li>
        <li>
          {hole && <img src={mole} alt="mole" />}
          <span>🕳️</span>
        </li>
        <li>
          {hole && <img src={mole} alt="mole" />}
          <span>🕳️</span>
        </li>
        <li>
          {hole && <img src={mole} alt="mole" />}
          <span>🕳️</span>
        </li>
      </ul>
    </Container>
  );
};

export default IndexPage;
