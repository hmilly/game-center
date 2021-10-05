import styled from "styled-components";

export const Main = styled.main`
  * {
    font-family: "Gill Sans", sans-serif, serif;
  }

  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-rows: 95vh;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-auto-flow: row;
  border: solid 1px red;
  justify-items: center;

  h1 {
    color: blue;
    text-align: center;
  }
`;
