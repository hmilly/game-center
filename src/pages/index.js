import * as React from "react"
import { Container } from "../styles/Container.styled"

const headingStyles = {
  height: 60,
  margin: 0,
}
const paragraphStyles = {
  height: 30,
  margin: 0,
}

const areaStyles = {
  listStyleType: "none",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  gridGap: 0,
  height: 450,
  width: 450,
  margin: "0 auto",
  padding: 0,
  backgroundColor: "lightBlue",
}
const liStyle = {
  border: "solid 1px black",
  padding: 0,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}

const IndexPage = () => {
  return (
    <Container>
      <header>
        <title>Main Page</title>
        <h1>Whack-a-Mole</h1>
        <p>Get him!</p>
      </header>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Container>
  )
}

export default IndexPage
