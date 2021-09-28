import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  height: 800,
  width: "auto",
  margin: "0 auto",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
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
  height: 650,
  width: 650,
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

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Main Page</title>
      <h1 style={headingStyles}>
        Whack-a-Mole
      </h1>
      <p style={paragraphStyles}>
        Get him!
      </p>
      <ul style={areaStyles}>
        <li style={liStyle}></li>
        <li style={liStyle}></li>
        <li style={liStyle}></li>
        <li style={liStyle}></li>
        <li style={liStyle}></li>
        <li style={liStyle}></li>
        <li style={liStyle}></li>
        <li style={liStyle}></li>
        <li style={liStyle}></li>
      </ul>

    </main>
  )
}

export default IndexPage
