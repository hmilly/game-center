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
      cursor: pointer;
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

div{
  padding: 15px;
  width: 300px;
  height: 330px;
  background-color: rgba(1, 50, 67, 0.6);
  border: solid 1px rgba(1, 50, 67);
  border-radius: 4px;
}
h3{
  text-align: center;
  color: peachpuff;
}
img{
  width: 100%;
  height: auto;
}
`
