import styled from "styled-components";

export const Container = styled.main`
  font-family: "-apple-system, Roboto, sans-serif, serif";
  width: 90vw;
  height: 90vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 4fr;
  gap: 0% 0%;
  grid-auto-flow: row;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    "header"
    "ul";

  header {
    grid-area: header;
    width: 500px;
    height: 80px;
    text-align: center;
    h1,
    p {
      padding: 0;
      margin: 0;
    }
  }

  ul {
    grid-area: ul;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    list-style-type: none;
    width: 400px;
    height: 400px;
    grid-template-areas:
      ". . ."
      ". . ."
      ". . .";
    background-color: green;
    padding: 0;
    li {
      height: auto;
      border: solid 1px black;
      padding: 0;
      margin: 10% 20%;
      background-color: black;
      transform: rotate(60deg);
      border-radius: 80% 20%;
      img {
        width: 80px;
        height: auto;
        padding: 0 0 40px 0;
        transform: rotate(-60deg);
      }
    }
  }
`;
