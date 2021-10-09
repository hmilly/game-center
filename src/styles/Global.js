import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
*{
    font-family: "Gill Sans", sans-serif, serif;
    color: white;
    box-sizing: border-box;
}

p, h1, h3{
    text-shadow: 3px 2px black;
}

body{
    margin: 0;
    width: 100%;
    height: auto;
    background-color: black;
    overflow: hidden;
}
`