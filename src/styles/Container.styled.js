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
    grid-template: repeat(3, 1fr);
    gap: 2px 2px;
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
      width: 80%;
      height: auto;
      border: solid 1px black;
      padding: 0;
      margin: 0;
      background-color: brown;
      border-radius: 80% 20% 80% 20%;
      img {
        width: 100px;
        height: auto;
        padding: 15px;
      }
    }
  }
`;
