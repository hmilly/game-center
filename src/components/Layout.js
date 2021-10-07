import * as React from "react";
import SideNav from "./SideNav";
import { Main } from "../styles/Main.styled";
import { GlobalStyles } from "../styles/Global"

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyles />
      <SideNav />
      {children}
    </Main>
  );
};

export default Layout;
