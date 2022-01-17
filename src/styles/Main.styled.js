import styled from "styled-components";
import img from "../images/games.jpg"

export const Main = styled.main`
height: 100vh;
width: 100vw;
  background-image: url(${img}) ;
  background-size: cover;
  overflow: hidden;
  h1 {
    text-align: center;
  }
`;

export const Nav = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 10px;

  li {
    width: 100%;
    height: 40px;
    margin: 8px 0;
  }
  li:hover {
    cursor: pointer;
    a {
      background-color: rgba(174, 174, 174, 0.3);
    }
  }
  a {
    display: block;
    height: 100%;
    width: 100%;
    font-size: 18px;
    margin: 0 auto;
    padding: 10px;
    color: yellow;
  }
`;
