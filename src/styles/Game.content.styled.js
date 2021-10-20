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
  font-family: "Press Start 2P", "Arial", sans-serif;
  width: 600px;
  height: 500px;
  position: fixed;
  background-color: white;

  canvas {
    width: 600px;
    height: 500px;
    border: solid purple 1px;
  }

  p {

    color: black;
    font-size: 35px;
  }

  button {
    position: fixed;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background: #9f59f5;
    border: 2px solid white;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    box-shadow: 4px 4px 0px 0px white;
    font-weight: 800;
    letter-spacing: 5px;
    cursor: pointer;
  }
  div {
    float: right;
    margin: 30px;
    margin-top: 50px;
    -webkit-box-shadow: 0px 4px 13px 0px rgba(48, 26, 74, 0.63);
    box-shadow: 0px 4px 13px 0px rgba(48, 26, 74, 0.63);

    h2 {
      font-size: 18px;
      padding: 10px;
    }
  }
`;
