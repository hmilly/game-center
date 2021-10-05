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
  align-items: start;
  border: solid 1px blue;
`;
