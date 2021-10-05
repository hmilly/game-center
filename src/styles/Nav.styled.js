import styled from "styled-components";

export const Nav = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows:auto;
grid-column-gap: 0px;
grid-row-gap: 10px;
grid-auto-flow: row;
border: solid 1px blue;
list-style-type: none;

a{
    font-size: 18px;
}
a:hover{
    font-size: 19px;
}
`