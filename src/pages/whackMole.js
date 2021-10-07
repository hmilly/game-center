import * as React from "react";
import { useState, useEffect } from "react";
import { Container, Header } from "../styles/Game.details.styled";
import { Ul } from "../styles/Game.content.styled";
import Layout from "../components/Layout"
import Mole from "../components/Mole";

const WhackMole = () => {
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (start) setCount(0);
  }, [start]);

  return (
    <Layout>
      <Container>
        <Header btnCol={start ? "red" : "lightgreen"}>
          <h1>Whack-a-Mole</h1>
          <p>Get him!</p>
          <button onClick={() => setStart(!start)}>
            {start ? "Stop game" : "Start game"}
          </button>
          <p>Score: {count}</p>
        </Header>
        <Ul>
          <Mole count={count} setCount={setCount} start={start} />
          <Mole count={count} setCount={setCount} start={start} />
          <Mole count={count} setCount={setCount} start={start} />
          <Mole count={count} setCount={setCount} start={start} />
          <Mole count={count} setCount={setCount} start={start} />
          <Mole count={count} setCount={setCount} start={start} />
          <Mole count={count} setCount={setCount} start={start} />
          <Mole count={count} setCount={setCount} start={start} />
          <Mole count={count} setCount={setCount} start={start} />
        </Ul>
      </Container>
    </Layout>
  );
};

export default WhackMole;
