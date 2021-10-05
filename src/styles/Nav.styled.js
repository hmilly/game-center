import styled from "styled-components";

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
