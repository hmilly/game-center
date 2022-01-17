import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr 3fr;
`;

export const Header = styled.header`
  display: grid;

  grid-template-rows: repeat(auto-fit, minmax(25px, 75px));
  grid-template-columns: 1fr;
  gap: 5px;
  align-content: space-around;
  align-items: center;
  justify-items: center;
  span{
    position:absolute;
    height: 59px;
    width: 59px;
    left: 0;
    top: 0;
    a{
      padding: 0;
      font-size: 45px;
      text-decoration: none;
    }
  }
  h1 {
    color: peachpuff;
  }
  p {
    font-size: 20px;
  }
  button {
    padding: 2px 20px;
    border: solid 3px lightblue;
    background-color: black;
    color: ${({ btnCol }) => btnCol};
    font-size: 18px;
    &:hover {
      transition: padding 0.1s;
      padding: 4px 24px;
      cursor: pointer;
      font-size: 20px;
    }
    &:active {
      border: solid 3px black;
      color: black;
      padding: 0 18px;
      background-color: lightblue;
    }
  }

  div {
    display: grid;
    width: .75fr;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: end;
    justify-items: center;
    p :nth-child(3),
    p :nth-child(4) {
      font-size: 24px;
      font-weight: 700;
      color: lightcoral;
      text-shadow: 3px 2px blue;
    }
  }
`;
