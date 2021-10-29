import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
`;

export const Header = styled.header`
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.5fr 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-auto-flow: row;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  h1{
    color: peachpuff;
  }
  p {
    font-size: 20px;
    margin: 0;
    text-align: center;
  }
  button {
    height: auto;
    border: solid 1px red;
    padding: 2px 20px;
    border: solid 3px lightblue;
    background-color: black;
    color: ${({ btnCol }) => btnCol};
    font-size: 18px;
  }
  button:hover {
    transition: padding 0.1s;
    padding: 4px 24px;
    cursor: pointer;
    font-size: 20px;
  }
  button:active {
    border: solid 3px black;
    color: black;
    padding: 0 18px;
    background-color: lightblue;
  }
  div{
    width: 60%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 0.2fr 1fr 0.2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-auto-flow: row;
    align-items: center;
    p :nth-child(even){
      font-size: 24px;
      font-weight: 700;
      color: lightcoral;
      text-shadow: 3px 2px blue;
    }
  }
`;

