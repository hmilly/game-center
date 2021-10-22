import styled from "styled-components";

export const Ul = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  list-style-type: none;
  width: 390px;
  height: 390px;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . .";
  background-color: green;
  padding: 0;
  li {
    position: relative;
    border: solid black 1px;
    img {
      position: absolute;
      width: 80px;
      height: auto;
      top: 10px;
      left: 22px;
    }
    img:hover {
      cursor: not-allowed;
    }
    span {
      font-size: 90px;
      margin: 0 auto;
    }
  }
`;

export const Grid = styled.div`
  width: 100%;
  height: 660px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  align-items: center;
  justify-items: center;

  div {
    padding: 15px;
    width: 300px;
    height: 330px;
    background-color: rgba(1, 50, 67, 0.6);
    border: solid 1px rgba(1, 50, 67);
    border-radius: 4px;
  }
  h3 {
    text-align: center;
    color: peachpuff;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

export const PlayArea = styled.div`
  display: grid;
  grid-template-rows: 0.2fr 1fr 0.2fr;
  grid-template-columns: 0.2fr 1fr 0.2fr;
  grid-auto-flow: row;
  list-style-type: none;
  width: 600px;
  height: 400px;
  font-family: "Press Start 2P", "Arial", sans-serif;

  canvas {
    margin: 0;
    width: 600px;
    height: 400px;
    background-color: rgba(0, 0, 205, 0.8);
    border-radius: 5px;
    border: solid white 2px;
  }

  p {
    position: absolute;
    width: 400px;
    height: 30px;
    color: white;
    text-align: center;
    margin: 100px;
    font-weight: 700;
    font-size: 25px;
  }
`;
