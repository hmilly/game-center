import styled from "styled-components";

export const Main = styled.main`
height: 90vh;
display: grid;
grid-template-columns: 200px 1fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
grid-auto-flow: row;
border: solid 1px red;

h1{
    color: blue;
    text-align: center;
}
`