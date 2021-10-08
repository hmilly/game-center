import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout"
import Mole from "../components/Mole";
import GameHeader from "../components/GameHeader";
import { Ul } from "../styles/Game.content.styled";
import { Container } from "../styles/Game.details.styled";

const WhackMole = () => {
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (start) setCount(0);
  }, [start]);

  return (
    <Layout>
      <Container>
        <GameHeader
          name="Whack-a-Mole"
          text="Get him!"
          start={start}
          setStart={setStart}
          count={count}
        />
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
