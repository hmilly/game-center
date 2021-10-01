import * as React from "react";
import { useState, useEffect } from "react";
import { Container } from "../styles/Container.styled";
import { Header } from "../styles/Header.styled";
import { Ul } from "../styles/Ul.styled";
import Mole from "../components/Mole";

const IndexPage = () => {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true);
  const [arr, setArr] = useState([
    <Mole show={show} />,
    <Mole show={show} />,
    <Mole show={show} />,
    <Mole show={show} />,
    <Mole show={show} />,
    <Mole show={show} />,
    <Mole show={show} />,
    <Mole show={show} />,
    <Mole show={show} />,
  ]);

  const int = () => {
    return Math.round(Math.random() * (200 - 1000) + 1000);
  };



  return (
    <Container>
      <Header>
        <title>Main Page</title>
        <h1>Whack-a-Mole</h1>
        <p>Get him!</p>
        <button>Start</button>
      </Header>
      <Ul>{arr.map((m) => m)}</Ul>
    </Container>
  );
};

export default IndexPage;
