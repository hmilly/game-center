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

export const Nav = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  padding: 0;
  margin: 10px;

  li {
    width: 170px;
    height: 40px;
  }
  li:hover {
    cursor: pointer;
    a {
      font-weight: 600;
    }
  }
  a {
    display: block;
    height: 100%;
    width: 100%;
    font-size: 18px;
    margin: 0;
  }
`;
