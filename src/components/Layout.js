import * as React from "react";
import { Main } from "../styles/Main.styled";
import { GlobalStyles } from "../styles/Global";

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyles />
      {children}
    </Main>
  );
};

export default Layout;
